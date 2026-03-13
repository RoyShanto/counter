const CACHE_NAME = "demo-counter-v2";

const urlsToCache = [
  "/counter/",
  "/counter/index.html",
  "/counter/output.css",
  "/counter/demoData.js",
  "/counter/manifest.json",
  "/counter/favicon.png",
  "/counter/service-worker.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});