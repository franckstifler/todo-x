self.addEventListener('install', function(event) {
    console.log('Installing service worker ...', event);
});

self.addEventListener('activate', function(event) {
    console.log('activating service workder ...', event);
    return self.clients.claim();
});