let cachePwa = "cachePwa-v1"

let assets = [
  "/",
  "/192x192.png",
  "/512x512.png",
  "/manifest.json",
  "/service-worker.js",
  "/src/components/index.jsx",
  "/src/App.jsx",
  "/src/index.css",
  "/src/main.jsx",
  "/.eslintrc.cjs",
  "/index.html",
  "/package-lock.json",
  "/package.json",
  "/vite.config.js",
  "/postcss.config.js",
  "/tailwind.config.js",
]

self.addEventListener('install', event => {
  console.log('Service Worker installing.');
  event.waitUntil(

    caches.open(cachePwa).then(function (cache) {

      return cache.addAll(assets);

    })

  )
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(cachePwa) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});


self.addEventListener('fetch', function (event) {

  event.respondWith(

    caches.match(event.request).then(function (cachedResponse) {

      return cachedResponse || fetch(event.request);

    })

  );

});