/// <reference lib="webworker" />

const worker = self as unknown as ServiceWorkerGlobalScope;

worker.addEventListener('fetch', (e) => {
	e.respondWith(
		(async function () {
			const response = await caches.match(e.request);
			return response || fetch(e.request);
		})()
	);
});

export {};
