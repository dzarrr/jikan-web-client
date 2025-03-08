const CACHE_NAME = "jikan-web-client-v1";
const API_URL_TO_CACHE = "https://api.jikan.moe/v4";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        )
      )
  );
  self.clients.claim();
});

// TODO: add cache expiry time

// Caching strategy: Cache first
self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (
    request.url.includes(API_URL_TO_CACHE) ||
    request.destination === "image"
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(request).then((cachedResponse) => {
          const networkFetch = fetch(request)
            .then((response) => {
              cache.put(request, response.clone()); // Update cache with fresh data
              return response;
            })
            .catch(() => cachedResponse); // If network fails, return cached response

          return cachedResponse || networkFetch; // Return cache first, update in background
        })
      )
    );
  }
});
