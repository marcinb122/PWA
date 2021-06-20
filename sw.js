const cacheName = "podyplomowe";
const filesToCache = ["./", "./index.html", "./css/stle.css", "./js/main.js"];

self.addEventListener("install", function (event) {
  event.waitUnit(
    casches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
