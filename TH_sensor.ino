#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>


// --- CONFIGURATIONS: ---
// sensors:
#define TH1_PIN 4 // sensor port check online diagram on actual module, not the writings on the sensor
#define TH1_TYPE DHT11
// wifi setup:
#define wifi_ssid "Wifi_Oficial"
#define wifi_password "ElisaAraujo"
// mqtt setup:
#define mqtt_server "192.168.1.136"
#define mqtt_user "jgoncalocouto"
#define mqtt_password "az21europa"
#define temperature_topic "sensor/temperature"  //Topic temperature
#define humidity_topic "sensor/humidity"        //Topic humidity

// --- VARIABLES: ---
float t;
float h;
char message_buff[100]; //Buffer to decode MQTT messages
long lastMsg = 0;   
long lastRecu = 0;
bool debug = false;  //Display log message if True

// --- CLASSES:---
DHT th1(TH1_PIN, TH1_TYPE);
WiFiClient espClient;
PubSubClient client(espClient);

// --- FUNCTIONS: ---
void setup_wifi() {
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(wifi_ssid);
  WiFi.begin(wifi_ssid, wifi_password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi OK ");
  Serial.print("=> ESP8266 IP address: ");
  Serial.print(WiFi.localIP());
}
void reconnect() {
  while (!client.connected()) {
    Serial.print("Connecting to MQTT broker ...");
    if (client.connect("ESP8266Client", mqtt_user, mqtt_password)) {
      Serial.println("OK");
    } else {
      Serial.print("KO, error : ");
      Serial.print(client.state());
      Serial.println(" Wait 5 secondes before to retry");
      delay(5000);
    }
  }
}

// --- SETUP:---
void setup() {
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);     // Initialize the LED_BUILTIN pin as an output
  setup_wifi();
  client.setServer(mqtt_server, 1883);    // Configure MQTT connexion
  client.setCallback(callback);    // callback function to execute when a MQTT message
  delay(1000);
  th1.begin();
}

// --- LOOP:---
void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  long now = millis();
  // Send a message every minute
  if (now - lastMsg > 1000 * 60) {
    lastMsg = now;
    // Read humidity
    h = th1.readHumidity();
    // Read temperature in Celcius
    t = th1.readTemperature();

    // Oh, nothing to send
    if ( isnan(t) || isnan(h)) {
      Serial.println("KO, Please check DHT sensor !");
      return;
    }
    if ( debug ) {
      Serial.print("Temperature : ");
      Serial.print(t);
      Serial.print(" | Humidity : ");
      Serial.println(h);
    }  
    client.publish(temperature_topic, String(t).c_str(), true);   // Publish temperature on temperature_topic
    client.publish(humidity_topic, String(h).c_str(), true);      // and humidity
  }
  if (now - lastRecu > 100 ) {
    lastRecu = now;
    client.subscribe("homeassistant/switch1");
  }
}

void callback(char* topic, byte* payload, unsigned int length) {

  int i = 0;
  if ( debug ) {
    Serial.println("Message recu =>  topic: " + String(topic));
    Serial.print(" | longueur: " + String(length,DEC));
  }
  // create character buffer with ending null terminator (string)
  for(i=0; i<length; i++) {
    message_buff[i] = payload[i];
  }
  message_buff[i] = '\0';
  
  String msgString = String(message_buff);
  if ( debug ) {
    Serial.println("Payload: " + msgString);
  }
  
  if ( msgString == "ON" ) {
    digitalWrite(D2,HIGH);  
  } else {
    digitalWrite(D2,LOW);  
  }
}
  
