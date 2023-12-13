'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3983a50886bc58038187edb417da747c",
"index.html": "1d8a7fe82e321e90cdeb5d8d3c9010e9",
"/": "1d8a7fe82e321e90cdeb5d8d3c9010e9",
"main.dart.js": "09f1ebaedfdbec6b0ebcc8ff58818fc4",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cd5e96bfbea4ca842ca71692be2b7421",
"assets/AssetManifest.json": "4a4c98c503652004fb63fb4e37a01e65",
"assets/NOTICES": "5f7616f1af1a0016e4a9ad2d76250286",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "e264164c71edcd004fc89383a2e22b3b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4bc7849a5c7774cfa18e4bc2ef82404a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dbf0a93d2b23d99b7af4b1a6ab94e122",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bbc3a2d2265f7ff6bef4ba339a0ba4c9",
"assets/packages/kakao_map_plugin/assets/images/marker.png": "12bf67c50646e79b2efb6246b3631612",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "53a0262f016e51b57c57a700f5dae429",
"assets/fonts/MaterialIcons-Regular.otf": "02ec86c4aa7b9dd4c2e768264c9d6958",
"assets/assets/images/icon_fa_case10.png": "ce198aae7da710970bae40e29132c05e",
"assets/assets/images/wt4c9_.png": "6771481a19041c72a5e3d9cd0a227943",
"assets/assets/images/y2vgy_.png": "0dcc776e796ec093f7ff1874881a261f",
"assets/assets/images/fznky_.png": "cfeefc28ca295e4fe6ff027c26fb2bfb",
"assets/assets/images/summer.jpg": "8d93c978043442bf277991bae777b599",
"assets/assets/images/001.jpeg": "70fcb15bd7e1df5419bb7280b1e00baa",
"assets/assets/images/icon_snake.png": "54a6978e1b1f73956707cd2a8c917180",
"assets/assets/images/8nucg_.png": "2f8ba0590d643b7a265ee685c7242f10",
"assets/assets/images/icon_fa_case8.png": "b029a868dd4bdc7365d21fe73f59cdca",
"assets/assets/images/v6uqm_.png": "2de129ced5e7bd69a3237eb1631b690a",
"assets/assets/images/icon_fa_case9.png": "9c24ca366ce839d0c87910c49037b7ca",
"assets/assets/images/3c_2_test_img.jpg": "7e3c184da55f4fc417fc0b31aca5f1de",
"assets/assets/images/mazet_.png": "30285c4799915836930ca57cd35f57fe",
"assets/assets/images/fall.jpg": "5b0a40d021dc2aecfc62bf0640a63c3c",
"assets/assets/images/icon_first_aid__box.png": "f5a4a9530f11a8cb49cd677e91416dec",
"assets/assets/images/winter.jpg": "6794abd650673b86e344d6a2b22e092a",
"assets/assets/images/3c_3_test_img.jpg": "bb972ada7f07bd19d8bcd487227b8908",
"assets/assets/images/icon_119.png": "4eb889d6e0eda9be26588f479f8df4c3",
"assets/assets/images/spring.jpg": "d8755fcab78d5a3bc15597212ec0977c",
"assets/assets/images/3c_1_test_img.jpg": "70fcb15bd7e1df5419bb7280b1e00baa",
"assets/assets/images/rirxe_.png": "0d25951527ba8297f265f7536dbe0340",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/g9sys_.png": "449c646c602323a78fd425bfcfc5a3da",
"assets/assets/images/icon_112.png": "0c3d1c1cb4c39002d36ab2ad97812546",
"assets/assets/images/rll9j_.png": "b378061d6cb64226689ec7b07dfcfed7",
"assets/assets/images/icon_hiking.png": "100b0df0fcb9dc366dddf6004aa2731b",
"assets/assets/images/icon_110.png": "2ee89a8dd5bc781f972bb24f029823cd",
"assets/assets/images/icon_fa_case4.png": "9b4bedc87c28266cf26b8d6fae6bc489",
"assets/assets/images/q1wwa_.png": "e6827c289c5b44594b2224ceca9996c1",
"assets/assets/images/icon_fa_case5.png": "5c46d6265275b5236c07e8ff5556b879",
"assets/assets/images/14kob_.png": "94796607474223aef0ba7e68286372ea",
"assets/assets/images/pdgh3_.png": "7d237f1a1a1c15d96cf415141136d51e",
"assets/assets/images/icon_fa_case7.png": "6db5d4d6c0ba297f615f84f384170e69",
"assets/assets/images/tl7sf_.png": "975e799343b8de0cd4e3fb2d55dab047",
"assets/assets/images/icon_fa_case6.png": "5cc859218ca97692706e198cb37551c0",
"assets/assets/images/003.jpeg": "bb972ada7f07bd19d8bcd487227b8908",
"assets/assets/images/vkd7b_.png": "03622ffdaa2ce7061a9fce38151d6dea",
"assets/assets/images/002.jpeg": "7e3c184da55f4fc417fc0b31aca5f1de",
"assets/assets/images/icon_fa_case2.png": "980d09947de2f554d83cdfcdc960a85d",
"assets/assets/images/___.png": "1bdd58a1db3a4c727c67e6cc3834a0f3",
"assets/assets/images/icon_cpr.png": "67e41d43b51398f7b6f8b1a4c4774690",
"assets/assets/images/icon_fa_case3.png": "126b70d6fa96bac19ab2be12031c5fc4",
"assets/assets/images/logo_app_bar.png": "c40bf5a50fb50cf104ca14cb9877c052",
"assets/assets/images/icon_fa_case1.png": "7ffb951d826af93fb5e1e82a418e01fd",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/lottie/app_splash_lottie.json": "dbabfee6327441ece2f82d3be138ca41",
"assets/assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
