// sw.js
const CACHE_NAME = 'redirect-pwa-v1';

// 安装时跳过等待
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// 激活时接管页面
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// 拦截请求（什么都不做，直接透传，保证每次都请求最新网络）
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});