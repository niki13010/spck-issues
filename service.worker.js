"use strict";var window=self;importScripts("workers/fs.bundle.js");var RUNTIME="runtime-2vi1tu5wp75";function fetchWithCache(i){return caches.match(i,{ignoreSearch:!0}).then((function(t){return t||caches.open(RUNTIME).then((function(t){return fetch(i).then((function(e){return 200==e.status?t.put(i,e.clone()).then((function(){return e})).catch((function(i){return("string"==typeof i?i:String(i)).includes("Quota")?caches.keys().then((function(i){return Promise.all(i.map((function(i){return caches.delete(i)}))).then((function(){return e}))})):e})):e}))}))}))}self.addEventListener("install",(function(i){i.waitUntil(self.skipWaiting())})),self.addEventListener("activate",(function(i){var t=[RUNTIME];i.waitUntil(caches.keys().then((function(i){return Promise.all(i.filter((function(i){return!t.includes(i)})).map((function(i){return caches.delete(i)})))})).then((function(){self.clients.claim()})))})),self.addEventListener("fetch",(function(i){var t=self.location.origin,e=i.request.url,a=GFS.relativeTo(e,t).split("?")[0],o=e.includes("?")?e.slice(e.indexOf("?")):"";if(["","index","index.html","dark","dark.html"].includes(a))i.respondWith(ENV.settingsConfigPathAsync().then(i=>GFS.read(i,{encoding:"utf8"}).then(i=>tryParseJSON(i))).then(({dark:e})=>{var n=null;return e&&!a.includes("dark")?n=GFS.join(t,"dark")+o:!e&&a.includes("dark")&&(n=t+o),n?Response.redirect(n,302):fetchWithCache(i.request)}));else if(a.startsWith("run")){var n=normalizeUrlPath(a.slice("run".length+1));i.respondWith(GFS.read(n).then(i=>{if(null!=i){var t=MIME_TYPES[GFS.ext(n).slice(1)]||"text/plain";return new Response(new Blob([i],{type:t}),{status:200,statusText:"OK",headers:{"Content-Type":t}})}return new Response("",{status:404,statusText:"NOT FOUND"})}))}else!e.startsWith(t)||a.startsWith("api")||a.startsWith("proxy")||i.respondWith(fetchWithCache(i.request))}));var MIME_TYPES={"3g2":"video/3gpp2","3gp":"video/3gpp",avi:"video/x-msvideo",flv:"video/x-flv",h261:"video/h261",h263:"video/h263",h264:"video/h264",jpgm:"video/jpm",jpgv:"video/jpeg",jpm:"video/jpm",m1v:"video/mpeg",m2v:"video/mpeg",m4u:"video/vnd.mpegurl",m4v:"video/mp4",mj2:"video/mj2",mjp2:"video/mj2",mk3d:"video/x-matroska",mks:"video/x-matroska",mkv:"video/x-matroska",mov:"video/quicktime",mp4:"video/mp4",mp4v:"video/mp4",mpe:"video/mpeg",mpeg:"video/mpeg",mpg:"video/mpeg",mpg4:"video/mp4",ogv:"video/ogg",qt:"video/quicktime",smv:"video/x-smv",webm:"video/webm",wm:"video/x-ms-wm",wmv:"video/x-ms-wmv",wmx:"video/x-ms-wmx",aac:"audio/x-aac",adp:"audio/adpcm",au:"audio/basic",flac:"audio/x-flac",kar:"audio/midi",m2a:"audio/mpeg",m3a:"audio/mpeg",m3u:"audio/x-mpegurl",m3u8:"application/vnd.apple.mpegurl",m4a:"audio/mp4",mid:"audio/midi",midi:"audio/midi",mka:"audio/x-matroska",mp2:"audio/mpeg",mp2a:"audio/mpeg",mp3:"audio/mpeg",mp4a:"audio/mp4",mpga:"audio/mpeg",oga:"audio/ogg",ogg:"audio/ogg",rmi:"audio/midi",s3m:"audio/s3m",snd:"audio/basic",spx:"audio/ogg",wav:"audio/x-wav",weba:"audio/webm",wma:"audio/x-ms-wma",xm:"audio/xm",bmp:"image/bmp",gif:"image/gif",ico:"image/x-icon",jpeg:"image/jpeg",jpg:"image/jpeg",jpe:"image/jpeg",png:"image/png",psd:"image/vnd.adobe.photoshop",svg:"image/svg+xml",svgz:"image/svg+xml",tga:"image/x-tga",tif:"image/tiff",tiff:"image/tiff",webp:"image/webp",css:"text/css",csv:"text/csv",htm:"text/html",html:"text/html",js:"text/javascript",sass:"text/x-sass",scss:"text/x-scss",styl:"text/x-styl",txt:"text/plain",yaml:"text/yaml",yml:"text/yaml",md:"text/markdown",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gz:"application/x-gzip",hdf:"application/x-hdf",json:"application/json",jsonml:"application/jsonml+json",latex:"application/x-latex",mp4s:"application/mp4",ogx:"application/ogg",otf:"application/x-font-otf",pdf:"application/pdf",ps:"application/postscript",psf:"application/x-font-linux-psf",rar:"application/x-rar-compressed",snf:"application/x-font-snf",swa:"application/x-director",swf:"application/x-shockwave-flash",tar:"application/x-tar",tex:"application/x-tex",tgz:"application/x-gzip",ttc:"application/x-font-ttf",ttf:"application/x-font-ttf",unityweb:"application/vnd.unity",woff:"application/x-font-woff",woff2:"application/x-font-woff",xml:"application/xml",xsl:"application/xml",zip:"application/zip"};function normalizeUrlPath(i){var t=i.split("#"),e=t[0];t=e.split("?");var a=(t=(e=t[0]).split("/")).pop(),o=t.join("/");return a.includes(".")||(a=GFS.join(a,"index.html")),decodeURIComponent(GFS.join(o,a))}