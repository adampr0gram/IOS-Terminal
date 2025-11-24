const CACHE = "terminal-cache-v1";

const ASSETS = [
  "/",
  "/manifest.json",
  "/terminal/",
  "/terminal/index.html"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate
self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

// Fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return (
        response ||
        fetch(event.request).catch(() =>
          caches.match("/terminal/index.html")
        )
      );
    })
  );
});
