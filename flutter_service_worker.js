'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6b8258af3d65ac3621e99406768349d7",
"assets/AssetManifest.bin.json": "4a9f7bf432dced3d95460e0106171d8e",
"assets/assets/images/1.webp": "d80aae27ead31fe961aa36f555c06bed",
"assets/assets/images/10.webp": "242b1afc65baa77bc60c78bc6e5f381d",
"assets/assets/images/11.webp": "70b7dfb3ad1103c821cb425a271269e5",
"assets/assets/images/12.webp": "c9cd909cce36f7a024e6096b9d6905cd",
"assets/assets/images/13.webp": "191372440f45827d2e5f3ef19712b4fa",
"assets/assets/images/14.webp": "aa8f4ccb4e21d2d666d28c19f78437de",
"assets/assets/images/15.webp": "07e0291c44e62e1eec22e87d4f3dbc25",
"assets/assets/images/16.jpg": "ed2f8c058252b3fb14d65fdc1242d5e6",
"assets/assets/images/17.webp": "94393688835ecb1ab1d931b963ff04bd",
"assets/assets/images/18.webp": "1dbc2ee8a963ee695772cdcf04553fb0",
"assets/assets/images/2.webp": "6e3c0c85c013b94f0106a66cd85b1095",
"assets/assets/images/3.webp": "9a7bcc0790934862fec303b2c24d9250",
"assets/assets/images/4.webp": "1694804984aa8019c59263d299ac8e4a",
"assets/assets/images/5.webp": "0a9dff640a14a4b088f4241c4596a181",
"assets/assets/images/6.webp": "cb32b3f2301dbee60f48862f542bd627",
"assets/assets/images/7.webp": "fa2fef01809be13a38b0bf2cc615b45c",
"assets/assets/images/8.webp": "a2c9d061c0b62bd4ebf935b7a9995f4f",
"assets/assets/images/9.webp": "f7e62b6579d007373814d0ec2fbcdc99",
"assets/assets/images/africa.svg": "c98b1d59feeafb4267ba5417e05d7699",
"assets/assets/images/flyer.webp": "9b322c889ccd598b145604e989d8ad5f",
"assets/assets/images/gallery/1.webp": "d80aae27ead31fe961aa36f555c06bed",
"assets/assets/images/gallery/10.webp": "242b1afc65baa77bc60c78bc6e5f381d",
"assets/assets/images/gallery/11.webp": "70b7dfb3ad1103c821cb425a271269e5",
"assets/assets/images/gallery/12.webp": "c9cd909cce36f7a024e6096b9d6905cd",
"assets/assets/images/gallery/13.webp": "191372440f45827d2e5f3ef19712b4fa",
"assets/assets/images/gallery/14.webp": "aa8f4ccb4e21d2d666d28c19f78437de",
"assets/assets/images/gallery/15.webp": "07e0291c44e62e1eec22e87d4f3dbc25",
"assets/assets/images/gallery/16.jpg": "ed2f8c058252b3fb14d65fdc1242d5e6",
"assets/assets/images/gallery/17.webp": "94393688835ecb1ab1d931b963ff04bd",
"assets/assets/images/gallery/18.webp": "1dbc2ee8a963ee695772cdcf04553fb0",
"assets/assets/images/gallery/2.webp": "6e3c0c85c013b94f0106a66cd85b1095",
"assets/assets/images/gallery/3.webp": "9a7bcc0790934862fec303b2c24d9250",
"assets/assets/images/gallery/4.webp": "1694804984aa8019c59263d299ac8e4a",
"assets/assets/images/gallery/5.webp": "0a9dff640a14a4b088f4241c4596a181",
"assets/assets/images/gallery/6.webp": "cb32b3f2301dbee60f48862f542bd627",
"assets/assets/images/gallery/7.webp": "fa2fef01809be13a38b0bf2cc615b45c",
"assets/assets/images/gallery/8.webp": "a2c9d061c0b62bd4ebf935b7a9995f4f",
"assets/assets/images/gallery/9.webp": "f7e62b6579d007373814d0ec2fbcdc99",
"assets/assets/images/logo.webp": "97129a58a4fc063c489474d7dd970379",
"assets/assets/images/meta.png": "07c5ccd3ad0b4a785c5db43d93015851",
"assets/assets/images/new-hero.webp": "43a7a8cf67b994691961ea6b39fc0afa",
"assets/assets/images/news1.webp": "9f4196345efa7a82a1008a3e63a586d9",
"assets/assets/images/news2.webp": "4e1b78d0a0fc8c7776b9a73444a1a638",
"assets/assets/images/report%2520cover.webp": "5b55261551b4d22c5284ae9b43ff6bae",
"assets/assets/images/team/draudu.webp": "b7bbae15910b3a9df5ff060b83e61ac7",
"assets/assets/images/team/gambo.webp": "cdca2f5d79964bedefa078820373ae06",
"assets/assets/images/team/haladu.webp": "764e1b33e41793326d5cb9b8d1190ee9",
"assets/assets/images/team/hamza.webp": "0ac7cd79b780a51335a111e3994bc469",
"assets/assets/images/team/mohammed.webp": "497e8e9f78771597e65dbdda3c2afd3b",
"assets/assets/images/team/placeholder.png": "fde41a94f9c98349a1bd81bd4727fe0b",
"assets/assets/images/team/prince.webp": "ee4d8de5a1ffa8051b100be8a4798c67",
"assets/assets/images/team/salisu.webp": "0a24b7ba009d50e401b4871d1e5f9edd",
"assets/assets/images/womendev.png": "54642c4fa4c654a7cdfbe76961dd845e",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "aec197e708d194c36d1cf875d4e8293b",
"assets/NOTICES": "25f0a73ee6df54548b0251fa067000ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "25df9d28211f33f09b6a2e1f7daceb17",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "67ea428ce3084cc879a73463f9b394f6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d0134f1b729028af1ab84d9bad7f59d2",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "3e9dae2a4b2a83f1fff346808ff154fb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "20311f9b63693f99471fda1ab2fd35bb",
"/": "20311f9b63693f99471fda1ab2fd35bb",
"main.dart.js": "b00bbc4b045aaa26f2618f7d9b34f171",
"manifest.json": "f45b1fdabc6195717b0c71f2ba4e6713",
"version.json": "c7c6faa935eb9cd2ac8bfc618f5f9f59"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
