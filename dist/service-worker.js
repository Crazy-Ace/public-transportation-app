var appPrefix="tplanr-",currentCacheName=appPrefix+"static-v0";self.addEventListener("install",function(s){var e=["./","./index.html","./assets/js/lib/jquery.min.js","./assets/js/lib/moment.min.js","./assets/js/lib/handlebars.min.js","./assets/js/lib/selectize.min.js","./assets/js/lib/idb.min.js","./assets/js/main.js","./assets/js/handlebars-helpers.js","./assets/js/templates.js","./assets/data/stations.json","./assets/css/main.css"];s.waitUntil(caches.open(currentCacheName).then(function(s){return s.addAll(e)}))}),self.addEventListener("activate",function(s){s.waitUntil(caches.keys().then(function(s){return Promise.all(s.filter(function(s){return s.startsWith(appPrefix)&&s!=currentCacheName}).map(function(s){return caches["delete"](s)}))}))}),self.addEventListener("fetch",function(s){s.respondWith(caches.match(s.request).then(function(e){return e||fetch(s.request)}))}),self.addEventListener("message",function(s){if(s.data.action)switch(s.data.action){case"skipWaiting":self.skipWaiting();default:return}});