var mod_pagespeed_R1DHPX5ERs = "window.wpCookies={each:function(e,t,n){var i,s;if(!e)return 0;if(n=n||e,void 0!==e.length){for(i=0,s=e.length;i<s;i++)if(!1===t.call(n,e[i],i,e))return 0}else for(i in e)if(e.hasOwnProperty(i)&&!1===t.call(n,e[i],i,e))return 0;return 1},getHash:function(e){var t,n=this.get(e);return n&&this.each(n.split(\"&\"),function(e){e=e.split(\"=\"),(t=t||{})[e[0]]=e[1]}),t},setHash:function(e,t,n,i,s,r){var o=\"\";this.each(t,function(e,t){o+=(o?\"&\":\"\")+t+\"=\"+e}),this.set(e,o,n,i,s,r)},get:function(e){var t,n,i=document.cookie,s=e+\"=\";if(i){if(-1===(n=i.indexOf(\"; \"+s))){if(0!==(n=i.indexOf(s)))return null}else n+=2;return-1===(t=i.indexOf(\";\",n))&&(t=i.length),decodeURIComponent(i.substring(n+s.length,t))}},set:function(e,t,n,i,s,r){var o=new Date;n=\"object\"==typeof n&&n.toGMTString?n.toGMTString():parseInt(n,10)?(o.setTime(o.getTime()+1e3*parseInt(n,10)),o.toGMTString()):\"\",document.cookie=e+\"=\"+encodeURIComponent(t)+(n?\"; expires=\"+n:\"\")+(i?\"; path=\"+i:\"\")+(s?\"; domain=\"+s:\"\")+(r?\"; secure\":\"\")},remove:function(e,t,n,i){this.set(e,\"\",-1e3,t,n,i)}},window.getUserSetting=function(e,t){var n=getAllUserSettings();return n.hasOwnProperty(e)?n[e]:void 0!==t?t:\"\"},window.setUserSetting=function(e,t,n){if(\"object\"!=typeof userSettings)return!1;var i=userSettings.uid,s=wpCookies.getHash(\"wp-settings-\"+i),r=userSettings.url,o=!!userSettings.secure;return e=e.toString().replace(/[^A-Za-z0-9_-]/g,\"\"),t=\"number\"==typeof t?parseInt(t,10):t.toString().replace(/[^A-Za-z0-9_-]/g,\"\"),s=s||{},n?delete s[e]:s[e]=t,wpCookies.setHash(\"wp-settings-\"+i,s,31536e3,r,\"\",o),wpCookies.set(\"wp-settings-time-\"+i,userSettings.time,31536e3,r,\"\",o),e},window.deleteUserSetting=function(e){return setUserSetting(e,\"\",1)},window.getAllUserSettings=function(){return\"object\"!=typeof userSettings?{}:wpCookies.getHash(\"wp-settings-\"+userSettings.uid)||{}};";
var mod_pagespeed_sw0hd9rv0k = "window.wp=window.wp||{},function(f,m){m.editor=m.editor||{},window.switchEditors=new function(){var s,d,n={};function e(){!s&&window.tinymce&&(s=window.tinymce,(d=s.$)(document).on(\"click\",function(e){var t=d(e.target);t.hasClass(\"wp-switch-editor\")&&r(t.attr(\"data-wp-editor-id\"),t.hasClass(\"switch-tmce\")?\"tmce\":\"html\")}))}function u(e){var t=d(\".mce-toolbar-grp\",e.getContainer())[0],n=t&&t.clientHeight;return n&&10<n&&n<200?parseInt(n,10):30}function r(e,t){e=e||\"content\",t=t||\"toggle\";var n,r,i=s.get(e),a=d(\"#wp-\"+e+\"-wrap\"),o=d(\"#\"+e),c=o[0];if(\"toggle\"===t&&(t=i&&!i.isHidden()?\"html\":\"tmce\"),\"tmce\"===t||\"tinymce\"===t){if(i&&!i.isHidden())return!1;void 0!==window.QTags&&window.QTags.closeAllTags(e),n=parseInt(c.style.height,10)||0;(i?i.getParam(\"wp_keep_scroll_position\"):window.tinyMCEPreInit.mceInit[e]&&window.tinyMCEPreInit.mceInit[e].wp_keep_scroll_position)&&function(e){if(!e||!e.length)return;var t=e[0],n=function(e,t){var n=t.cursorStart,r=t.cursorEnd,i=l(e,n);i&&(n=-1!==[\"area\",\"base\",\"br\",\"col\",\"embed\",\"hr\",\"img\",\"input\",\"keygen\",\"link\",\"meta\",\"param\",\"source\",\"track\",\"wbr\"].indexOf(i.tagType)?i.ltPos:i.gtPos);var a=l(e,r);a&&(r=a.gtPos);var o=g(e,n);o&&!o.showAsPlainText&&(n=o.urlAtStartOfContent?o.endIndex:o.startIndex);var c=g(e,r);c&&!c.showAsPlainText&&(r=c.urlAtEndOfContent?c.startIndex:c.endIndex);return{cursorStart:n,cursorEnd:r}}(t.value,{cursorStart:t.selectionStart,cursorEnd:t.selectionEnd}),r=n.cursorStart,i=n.cursorEnd,a=r!==i?\"range\":\"single\",o=null,c=b(d,\"&#65279;\").attr(\"data-mce-type\",\"bookmark\");if(\"range\"==a){var p=t.value.slice(r,i),s=c.clone().addClass(\"mce_SELRES_end\");o=[p,s[0].outerHTML].join(\"\")}t.value=[t.value.slice(0,r),c.clone().addClass(\"mce_SELRES_start\")[0].outerHTML,o,t.value.slice(i)].join(\"\")}(o),i?(i.show(),!s.Env.iOS&&n&&50<(n=n-u(i)+14)&&n<5e3&&i.theme.resizeTo(null,n),i.getParam(\"wp_keep_scroll_position\")&&w(i)):s.init(window.tinyMCEPreInit.mceInit[e]),a.removeClass(\"html-active\").addClass(\"tmce-active\"),o.attr(\"aria-hidden\",!0),window.setUserSetting(\"editor\",\"tinymce\")}else if(\"html\"===t){if(i&&i.isHidden())return!1;if(i){s.Env.iOS||(n=(r=i.iframeElement)?parseInt(r.style.height,10):0)&&50<(n=n+u(i)-14)&&n<5e3&&(c.style.height=n+\"px\");var p=null;i.getParam(\"wp_keep_scroll_position\")&&(p=function(e){var t=e.getWin().getSelection();if(!t||t.rangeCount<1)return;var n=\"SELRES_\"+Math.random(),r=b(e.$,n),i=r.clone().addClass(\"mce_SELRES_start\"),a=r.clone().addClass(\"mce_SELRES_end\"),o=t.getRangeAt(0),c=o.startContainer,p=o.startOffset,s=o.cloneRange();0<e.$(c).parents(\".mce-offscreen-selection\").length?(c=e.$(\"[data-mce-selected]\")[0],i.attr(\"data-mce-object-selection\",\"true\"),a.attr(\"data-mce-object-selection\",\"true\"),e.$(c).before(i[0]),e.$(c).after(a[0])):(s.collapse(!1),s.insertNode(a[0]),s.setStart(c,p),s.collapse(!0),s.insertNode(i[0]),o.setStartAfter(i[0]),o.setEndBefore(a[0]),t.removeAllRanges(),t.addRange(o));e.on(\"GetContent\",x);var d=E(e.getContent());e.off(\"GetContent\",x),i.remove(),a.remove();var l=new RegExp('<span[^>]*\\\\s*class=\"mce_SELRES_start\"[^>]+>\\\\s*'+n+\"[^<]*<\\\\/span>(\\\\s*)\"),g=new RegExp('(\\\\s*)<span[^>]*\\\\s*class=\"mce_SELRES_end\"[^>]+>\\\\s*'+n+\"[^<]*<\\\\/span>\"),u=d.match(l),w=d.match(g);if(!u)return null;var f=u.index,m=u[0].length,h=null;if(w){-1!==u[0].indexOf(\"data-mce-object-selection\")&&(m-=u[1].length);var v=w.index;-1!==w[0].indexOf(\"data-mce-object-selection\")&&(v-=w[1].length),h=v-m}return{start:f,end:h}}(i)),i.hide(),p&&function(e,t){if(!t)return;var n=e.getElement(),r=t.start,i=t.end||t.start;n.focus&&setTimeout(function(){n.setSelectionRange(r,i),n.blur&&n.blur(),n.focus()},100)}(i,p)}else o.css({display:\"\",visibility:\"\"});a.removeClass(\"tmce-active\").addClass(\"html-active\"),o.attr(\"aria-hidden\",!1),window.setUserSetting(\"editor\",\"html\")}}function l(e,t){var n=e.lastIndexOf(\"<\",t-1);if(e.lastIndexOf(\">\",t)<n||\">\"===e.substr(t,1)){var r=e.substr(n),i=r.match(/<\\s*(\\/)?(\\w+|\\!-{2}.*-{2})/);if(!i)return null;var a=i[2];return{ltPos:n,gtPos:n+r.indexOf(\">\")+1,tagType:a,isClosingTag:!!i[1]}}return null}function g(e,t){for(var n=function(e){var t,n=function(e){var t=e.match(/\\[+([\\w_-])+/g),n=[];if(t)for(var r=0;r<t.length;r++){var i=t[r].replace(/^\\[+/g,\"\");-1===n.indexOf(i)&&n.push(i)}return n}(e);if(0===n.length)return[];var r,i=m.shortcode.regexp(n.join(\"|\")),a=[];for(;r=i.exec(e);){var o=\"[\"===r[1];t={shortcodeName:r[2],showAsPlainText:o,startIndex:r.index,endIndex:r.index+r[0].length,length:r[0].length},a.push(t)}var c=new RegExp('(^|[\\\\n\\\\r][\\\\n\\\\r]|<p>)(https?:\\\\/\\\\/[^s\"]+?)(<\\\\/p>s*|[\\\\n\\\\r][\\\\n\\\\r]|$)',\"gi\");for(;r=c.exec(e);)t={shortcodeName:\"url\",showAsPlainText:!1,startIndex:r.index,endIndex:r.index+r[0].length,length:r[0].length,urlAtStartOfContent:\"\"===r[1],urlAtEndOfContent:\"\"===r[3]},a.push(t);return a}(e),r=0;r<n.length;r++){var i=n[r];if(t>=i.startIndex&&t<=i.endIndex)return i}}function b(e,t){return e(\"<span>\").css({display:\"inline-block\",width:0,overflow:\"hidden\",\"line-height\":0}).html(t||\"\")}function w(e){var t=e.$(\".mce_SELRES_start\").attr(\"data-mce-bogus\",1),n=e.$(\".mce_SELRES_end\").attr(\"data-mce-bogus\",1);if(t.length)if(e.focus(),n.length){var r=e.getDoc().createRange();r.setStartAfter(t[0]),r.setEndBefore(n[0]),e.selection.setRng(r)}else e.selection.select(t[0]);e.getParam(\"wp_keep_scroll_position\")&&function(e,t){var n,r=e.$(t).offset().top,i=e.$(e.getContentAreaContainer()).offset().top,a=u(e),o=f(\"#wp-content-editor-tools\"),c=0,p=0;o.length&&(c=o.height(),p=o.offset().top);var s,d=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,l=i+r,g=d-(c+a);if(l<g)return;s=e.settings.wp_autoresize_on?(n=f(\"html,body\"),Math.max(l-g/2,p-c)):(n=f(e.contentDocument).find(\"html,body\"),r);n.animate({scrollTop:parseInt(s,10)},100)}(e,t),i(t),i(n),e.save()}function i(e){var t=e.parent();e.remove(),!t.is(\"p\")||t.children().length||t.text()||t.remove()}function x(e){e.content=e.content.replace(/<p>(?:<br ?\\/?>|\\u00a0|\\uFEFF| )*<\\/p>/g,\"<p>&nbsp;</p>\")}function E(e){var t=\"blockquote|ul|ol|li|dl|dt|dd|table|thead|tbody|tfoot|tr|th|td|h[1-6]|fieldset|figure\",n=t+\"|div|p\",r=t+\"|pre\",i=!1,a=!1,o=[];return e?(-1===e.indexOf(\"\u003cscript\")&&-1===e.indexOf(\"<style\")||(e=e.replace(/<(script|style)[^>]*>[\\s\\S]*?<\\/\\1>/g,function(e){return o.push(e),\"<wp-preserve>\"})),-1!==e.indexOf(\"<pre\")&&(i=!0,e=e.replace(/<pre[^>]*>[\\s\\S]+?<\\/pre>/g,function(e){return(e=(e=e.replace(/<br ?\\/?>(\\r\\n|\\n)?/g,\"<wp-line-break>\")).replace(/<\\/?p( [^>]*)?>(\\r\\n|\\n)?/g,\"<wp-line-break>\")).replace(/\\r?\\n/g,\"<wp-line-break>\")})),-1!==e.indexOf(\"[caption\")&&(a=!0,e=e.replace(/\\[caption[\\s\\S]+?\\[\\/caption\\]/g,function(e){return e.replace(/<br([^>]*)>/g,\"<wp-temp-br$1>\").replace(/[\\r\\n\\t]+/,\"\")})),-1!==(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(new RegExp(\"\\\\s*</(\"+n+\")>\\\\s*\",\"g\"),\"</$1>\\n\")).replace(new RegExp(\"\\\\s*<((?:\"+n+\")(?: [^>]*)?)>\",\"g\"),\"\\n<$1>\")).replace(/(<p [^>]+>.*?)<\\/p>/g,\"$1</p#>\")).replace(/<div( [^>]*)?>\\s*<p>/gi,\"<div$1>\\n\\n\")).replace(/\\s*<p>/gi,\"\")).replace(/\\s*<\\/p>\\s*/gi,\"\\n\\n\")).replace(/\\n[\\s\\u00a0]+\\n/g,\"\\n\\n\")).replace(/(\\s*)<br ?\\/?>\\s*/gi,function(e,t){return t&&-1!==t.indexOf(\"\\n\")?\"\\n\\n\":\"\\n\"})).replace(/\\s*<div/g,\"\\n<div\")).replace(/<\\/div>\\s*/g,\"</div>\\n\")).replace(/\\s*\\[caption([^\\[]+)\\[\\/caption\\]\\s*/gi,\"\\n\\n[caption$1[/caption]\\n\\n\")).replace(/caption\\]\\n\\n+\\[caption/g,\"caption]\\n\\n[caption\")).replace(new RegExp(\"\\\\s*<((?:\"+r+\")(?: [^>]*)?)\\\\s*>\",\"g\"),\"\\n<$1>\")).replace(new RegExp(\"\\\\s*</(\"+r+\")>\\\\s*\",\"g\"),\"</$1>\\n\")).replace(/<((li|dt|dd)[^>]*)>/g,\" \\t<$1>\")).indexOf(\"<option\")&&(e=(e=e.replace(/\\s*<option/g,\"\\n<option\")).replace(/\\s*<\\/select>/g,\"\\n</select>\")),-1!==e.indexOf(\"<hr\")&&(e=e.replace(/\\s*<hr( [^>]*)?>\\s*/g,\"\\n\\n<hr$1>\\n\\n\")),-1!==e.indexOf(\"<object\")&&(e=e.replace(/<object[\\s\\S]+?<\\/object>/g,function(e){return e.replace(/[\\r\\n]+/g,\"\")})),e=(e=(e=(e=e.replace(/<\\/p#>/g,\"</p>\\n\")).replace(/\\s*(<p [^>]+>[\\s\\S]*?<\\/p>)/g,\"\\n$1\")).replace(/^\\s+/,\"\")).replace(/[\\s\\u00a0]+$/,\"\"),i&&(e=e.replace(/<wp-line-break>/g,\"\\n\")),a&&(e=e.replace(/<wp-temp-br([^>]*)>/g,\"<br$1>\")),o.length&&(e=e.replace(/<wp-preserve>/g,function(){return o.shift()})),e):\"\"}function a(e){var t=!1,n=!1,r=\"table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary\";return-1!==(e=e.replace(/\\r\\n|\\r/g,\"\\n\")).indexOf(\"<object\")&&(e=e.replace(/<object[\\s\\S]+?<\\/object>/g,function(e){return e.replace(/\\n+/g,\"\")})),-1===(e=e.replace(/<[^<>]+>/g,function(e){return e.replace(/[\\n\\t ]+/g,\" \")})).indexOf(\"<pre\")&&-1===e.indexOf(\"\u003cscript\")||(t=!0,e=e.replace(/<(pre|script)[^>]*>[\\s\\S]*?<\\/\\1>/g,function(e){return e.replace(/\\n/g,\"<wp-line-break>\")})),-1!==e.indexOf(\"<figcaption\")&&(e=(e=e.replace(/\\s*(<figcaption[^>]*>)/g,\"$1\")).replace(/<\\/figcaption>\\s*/g,\"</figcaption>\")),-1!==e.indexOf(\"[caption\")&&(n=!0,e=e.replace(/\\[caption[\\s\\S]+?\\[\\/caption\\]/g,function(e){return(e=(e=e.replace(/<br([^>]*)>/g,\"<wp-temp-br$1>\")).replace(/<[^<>]+>/g,function(e){return e.replace(/[\\n\\t ]+/,\" \")})).replace(/\\s*\\n\\s*/g,\"<wp-temp-br />\")})),e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e+=\"\\n\\n\").replace(/<br \\/>\\s*<br \\/>/gi,\"\\n\\n\")).replace(new RegExp(\"(<(?:\"+r+\")(?: [^>]*)?>)\",\"gi\"),\"\\n\\n$1\")).replace(new RegExp(\"(</(?:\"+r+\")>)\",\"gi\"),\"$1\\n\\n\")).replace(/<hr( [^>]*)?>/gi,\"<hr$1>\\n\\n\")).replace(/\\s*<option/gi,\"<option\")).replace(/<\\/option>\\s*/gi,\"</option>\")).replace(/\\n\\s*\\n+/g,\"\\n\\n\")).replace(/([\\s\\S]+?)\\n\\n/g,\"<p>$1</p>\\n\")).replace(/<p>\\s*?<\\/p>/gi,\"\")).replace(new RegExp(\"<p>\\\\s*(</?(?:\"+r+\")(?: [^>]*)?>)\\\\s*</p>\",\"gi\"),\"$1\")).replace(/<p>(<li.+?)<\\/p>/gi,\"$1\")).replace(/<p>\\s*<blockquote([^>]*)>/gi,\"<blockquote$1><p>\")).replace(/<\\/blockquote>\\s*<\\/p>/gi,\"</p></blockquote>\")).replace(new RegExp(\"<p>\\\\s*(</?(?:\"+r+\")(?: [^>]*)?>)\",\"gi\"),\"$1\")).replace(new RegExp(\"(</?(?:\"+r+\")(?: [^>]*)?>)\\\\s*</p>\",\"gi\"),\"$1\")).replace(/(<br[^>]*>)\\s*\\n/gi,\"$1\")).replace(/\\s*\\n/g,\"<br />\\n\")).replace(new RegExp(\"(</?(?:\"+r+\")[^>]*>)\\\\s*<br />\",\"gi\"),\"$1\")).replace(/<br \\/>(\\s*<\\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)>)/gi,\"$1\")).replace(/(?:<p>|<br ?\\/?>)*\\s*\\[caption([^\\[]+)\\[\\/caption\\]\\s*(?:<\\/p>|<br ?\\/?>)*/gi,\"[caption$1[/caption]\")).replace(/(<(?:div|th|td|form|fieldset|dd)[^>]*>)(.*?)<\\/p>/g,function(e,t,n){return n.match(/<p( [^>]*)?>/)?e:t+\"<p>\"+n+\"</p>\"}),t&&(e=e.replace(/<wp-line-break>/g,\"\\n\")),n&&(e=e.replace(/<wp-temp-br([^>]*)>/g,\"<br$1>\")),e}function t(e){var t={o:n,data:e,unfiltered:e};return f&&f(\"body\").trigger(\"beforePreWpautop\",[t]),t.data=E(t.data),f&&f(\"body\").trigger(\"afterPreWpautop\",[t]),t.data}function o(e){var t={o:n,data:e,unfiltered:e};return f&&f(\"body\").trigger(\"beforeWpautop\",[t]),t.data=a(t.data),f&&f(\"body\").trigger(\"afterWpautop\",[t]),t.data}return f(document).on(\"tinymce-editor-init.keep-scroll-position\",function(e,t){t.$(\".mce_SELRES_start\").length&&w(t)}),f?f(document).ready(e):document.addEventListener?(document.addEventListener(\"DOMContentLoaded\",e,!1),window.addEventListener(\"load\",e,!1)):window.attachEvent&&(window.attachEvent(\"onload\",e),document.attachEvent(\"onreadystatechange\",function(){\"complete\"===document.readyState&&e()})),m.editor.autop=o,m.editor.removep=t,n={go:r,wpautop:o,pre_wpautop:t,_wp_Autop:a,_wp_Nop:E}},m.editor.initialize=function(e,t){var n,r;if(f&&e&&m.editor.getDefaultSettings){if(r=m.editor.getDefaultSettings(),(t=t||{tinymce:!0}).tinymce&&t.quicktags){var i=f(\"#\"+e),a=f(\"<div>\").attr({class:\"wp-core-ui wp-editor-wrap tmce-active\",id:\"wp-\"+e+\"-wrap\"}),o=f('<div class=\"wp-editor-container\">'),c=f(\"<button>\").attr({type:\"button\",\"data-wp-editor-id\":e}),p=f('<div class=\"wp-editor-tools\">');if(t.mediaButtons){var s=\"Add Media\";window._wpMediaViewsL10n&&window._wpMediaViewsL10n.addMedia&&(s=window._wpMediaViewsL10n.addMedia);var d=f('<button type=\"button\" class=\"button insert-media add_media\">');d.append('<span class=\"wp-media-buttons-icon\"></span>'),d.append(document.createTextNode(\" \"+s)),d.data(\"editor\",e),p.append(f('<div class=\"wp-media-buttons\">').append(d))}a.append(p.append(f('<div class=\"wp-editor-tabs\">').append(c.clone().attr({id:e+\"-tmce\",class:\"wp-switch-editor switch-tmce\"}).text(window.tinymce.translate(\"Visual\"))).append(c.attr({id:e+\"-html\",class:\"wp-switch-editor switch-html\"}).text(window.tinymce.translate(\"Text\")))).append(o)),i.after(a),o.append(i)}window.tinymce&&t.tinymce&&(\"object\"!=typeof t.tinymce&&(t.tinymce={}),(n=f.extend({},r.tinymce,t.tinymce)).selector=\"#\"+e,f(document).trigger(\"wp-before-tinymce-init\",n),window.tinymce.init(n),window.wpActiveEditor||(window.wpActiveEditor=e)),window.quicktags&&t.quicktags&&(\"object\"!=typeof t.quicktags&&(t.quicktags={}),(n=f.extend({},r.quicktags,t.quicktags)).id=e,f(document).trigger(\"wp-before-quicktags-init\",n),window.quicktags(n),window.wpActiveEditor||(window.wpActiveEditor=n.id))}},m.editor.remove=function(e){var t,n,r=f(\"#wp-\"+e+\"-wrap\");window.tinymce&&(t=window.tinymce.get(e))&&(t.isHidden()||t.save(),t.remove()),window.quicktags&&(n=window.QTags.getInstance(e))&&n.remove(),r.length&&(r.after(f(\"#\"+e)),r.remove())},m.editor.getContent=function(e){var t;if(f&&e)return window.tinymce&&(t=window.tinymce.get(e))&&!t.isHidden()&&t.save(),f(\"#\"+e).val()}}(window.jQuery,window.wp);";
