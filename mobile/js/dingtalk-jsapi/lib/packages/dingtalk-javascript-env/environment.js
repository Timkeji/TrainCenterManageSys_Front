"use strict";function environment(n,i,a){var t="Web"===a.platform,e="iOS"===a.platform,r="android"===a.platform,o=r||e,s=function(){return t?window.navigator.userAgent.toLowerCase():""}(),c=function(){var n={};if(t){var i=window.name;try{var a=JSON.parse(i);n.containerId=a.containerId,n.version=a.hostVersion,n.language=a.language||"*"}catch(n){}}return n}(),d=function(){return o?"DingTalk"===a.appName||"com.alibaba.android.rimet"===a.appName:s.indexOf("dingtalk")>-1||!!c.containerId}(),O=function(){if(t){if(c.version)return c.version;var n=s.match(/aliapp\(\w+\/([a-zA-Z0-9.-]+)\)/);null===n&&(n=s.match(/dingtalk\/([a-zA-Z0-9.-]+)/));return n&&n[1]||"Unknown"}return a.appVersion}(),u=!!c.containerId,l=/iphone|ipod|ios/.test(s),f=/ipad/.test(s),p=s.indexOf("android")>-1,m=s.indexOf("mac")>-1&&u,A=s.indexOf("win")>-1&&u,g=!m&&!A&&u,v=u,P="";return P=d?l||e?constants_1.PLATFORM.IOS:p||r?constants_1.PLATFORM.ANDROID:f?constants_1.PLATFORM.IPAD:m?constants_1.PLATFORM.MAC:A?constants_1.PLATFORM.WINDOWS:g?constants_1.PLATFORM.BROWSER:constants_1.PLATFORM.UNKNOWN:constants_1.PLATFORM.UNKNOWN,{isDingTalk:d,isWebiOS:l,isWebAndroid:p,isWeexiOS:e,isWeexAndroid:r,isDingTalkPCMac:m,isDingTalkPCWeb:g,isDingTalkPCWindows:A,isDingTalkPC:v,runtime:n,framework:i,platform:P,version:O,isWeex:o}}Object.defineProperty(exports,"__esModule",{value:!0});var constants_1=require("./constants");exports.default=environment;