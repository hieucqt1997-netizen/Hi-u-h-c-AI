/* Service worker: lưu sẵn các file của app để mở được khi KHÔNG có mạng.
   Khi cập nhật app (sửa index.html), hãy tăng số phiên bản bên dưới (v1 → v2)
   để máy tải bản mới. */
const CACHE = 'so-tay-hoc-ai-v2';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
/* Có mạng: lấy bản mới nhất và cập nhật bộ nhớ đệm. Mất mạng: dùng bản đã lưu. */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('./index.html')))
  );
});
