'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "bc9b30e437390b5601dcfb22b335f545",
"index.html": "32411fc665082dac4fc9c215b410b17c",
"/": "32411fc665082dac4fc9c215b410b17c",
"main.dart.js": "33aa8d307cbb236a6a8ff42426aac066",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "b3dc7186dc1ea9a5de8b9d64041ec0e3",
"icons/Icon-192.png": "226c2c292939ad5285828a1444d246c4",
"icons/Icon-maskable-192.png": "226c2c292939ad5285828a1444d246c4",
"icons/Icon-maskable-512.png": "d0ba458c065ec1e0b6962a53b0aeb8c7",
"icons/Icon-512.png": "d0ba458c065ec1e0b6962a53b0aeb8c7",
"manifest.json": "080820db64a7aeaf60aecd396f7425f3",
".git/ORIG_HEAD": "b5b0a6a19e030bf03cbb5ee5ddbd8047",
".git/config": "a24992a053f41c1d0746dd26897a1f76",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/f38bb9db7c10ea214cc45331ca6537d0ef9fa8": "16fa8636ab49084653e8cefd03582679",
".git/objects/9b/a6ede8ddade45e86f7e9623452d7cc15fd7562": "c01497275ee48a82660c2a3dc7872e18",
".git/objects/32/379840bd8c17a0f3d296a64d629933b54128cf": "b9567bfbf837353ee3a0e692e8a78336",
".git/objects/32/dfbae1b38bb31e6cddee191ec3d88d9e5c7306": "9fe3347be6217f3cb7804b22d7b074e0",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/60b3434723ed9669758df5b164043b1188f4c4": "4293ce60a077e69576550aa07dd0f5cc",
".git/objects/69/464522ea7facf6b1ad1c84241a99efbb3983d8": "ca6bdf4d31ebca5dd73a9200a5e46048",
".git/objects/3c/068031cbbbead4ce327ecc016cc464544a0782": "c8da4d3ec92da6b4a8a579d224fc5738",
".git/objects/3c/4f0c4426b1c4afadd1a5fae5bbf226474b2edb": "8cbe497e84fdf56dacedf05740bc02a9",
".git/objects/3d/fecf328a0604e34f15e2b35e66534a74ebae80": "a391ddf0d3852bab2a80c7a866095418",
".git/objects/58/d0390ac24a0d05b9c35a993e6641dcf9e59bc3": "fef8e4ad803d8ae8fc3bdd988bc2fdd9",
".git/objects/60/58fcbafb7e75cb5a6e2fb420c32843ae181f9c": "02df695c7be174e154b6ccde8cbed9d6",
".git/objects/33/da5c519aac45cb8c7aa384863179b7e84c0b12": "8594677252592a3585be004dc16441dd",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9c/e0d065606086b86489c6d5a86323528e4f89fa": "8d4d6260953c3316a077375c3da75795",
".git/objects/b5/ed8212b124d4c76b932056a808fc9249850f27": "1ba32dd9bb8a93429a2c1424b8c5ccba",
".git/objects/b2/681eaae0c55e5e7c087ee5714144a46f0861ba": "478e99e2ab75573e3af757efd9e3e222",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/ddc9624e01ba159dee46b4ed90277a1923b3e8": "48e6a3536f8212475e922c9ba19ad543",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/f3/a2b9dca272648201ac905720840a5ce94454d6": "d7e88c7226e87250c928b3e39c4878d1",
".git/objects/c0/7419d7b4900a5365f58925a74a4ca1542abdaa": "813546955c10efbe09ea3010e9678e38",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/e3/12d32be515730333600bea4252fbef8c32d4c5": "5bc5295657e478aa566ee3395882a3a9",
".git/objects/fe/ae326eb8b83f4a498a2605c20095f66140ade9": "3acd0aa2355528acceb9da413dce9783",
".git/objects/fb/f263a6cef222182cdc3d362678480b4413801b": "a10d78e96280f0d8943858285c5c99e1",
".git/objects/ed/ac55391c2e16fbb2b67206af62c3d290df143a": "269a73d7f987c311b35be8bc926aec4d",
".git/objects/ec/0eedeb86c392927dfbaf59e09db1fa0a910e69": "4f823f5466392825a8f07587b617d953",
".git/objects/73/876d70245a52059e90497b6fdbf760613dd12a": "36d980cbaf39ba91cbd7cf207ffd7677",
".git/objects/80/917c1c94414869ab460725083f93c2432fda19": "885cf6a2d6a5ed4a931a995e68498f18",
".git/objects/74/f65181c13779c4576588790d862cda15ce7651": "69eac5fc3b42bd28d8213779a91d1db2",
".git/objects/28/6c482196648563a33209d0da267b1009c8155e": "82a61c18e324d1638cc9e787cbee4a4e",
".git/objects/8f/5bf9f3b77df0eda4bbe08e34c07e9dd9e81eee": "17717310539fa67bcb5d29e60ead6c40",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/9f/16642d1caa3bb8d37a20b6fe2f341b823d0d67": "a912589c7b45384c971c86170c33d7cd",
".git/objects/00/052086d2f0458c9bf7e1bf9b85233cebfd3920": "7f2b4453d8963e08d3f933075f865e92",
".git/objects/5c/d854636004dc9a771b0e25f3bcbd1a1a70c0f3": "3debf583b93941b18350b483122b40ea",
".git/objects/5d/155fa2c2b917e00d4cb1b6b61e23fd98d22405": "2d49573de146e7d149858c2545711b6e",
".git/objects/91/e4a9942324115cf84aefa3ca4dd2607bec6001": "517dafb521be45257498e051c0aa14cc",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/6e2a834be64d5124a208fd0428b87d48b865e3": "25d5cf42c782b661ef50d9f9be63d2ef",
".git/objects/30/ceac0ffb2554b161187130b75560fb1fc9cc0b": "2886d0c73be8c54798c3fcaddb60db08",
".git/objects/37/1b30d2c47fc7ad3f92621d0d02580accd7e016": "72a3d778fa00b34132518c4f8ac23710",
".git/objects/01/23dc609408c24910888530748431b410179473": "6a72a00c92a478b8eba0d6a8a6020c11",
".git/objects/06/9c506610f33074705758da4ab5628428ff8496": "7c10a6123d3666f0ccd28cb6df699c64",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/f4748a56810a4996141e44c55eb060398dce7d": "be321d41f55a7c59bbb73b919fdbec85",
".git/objects/a7/7e1be89a48cff740172c692fad64c7df3bdf32": "ac5915b122149881d23a590fa0d34dc9",
".git/objects/b8/f203374cbdaf2755a82c19c3420b8d5b23f744": "c1c61ab65e45b263f269d156859c4af4",
".git/objects/b1/045cf53db068bb82f3629637914685162b933c": "d6ca1489f0cc243788b86b9a5746905a",
".git/objects/b1/8797b67e3f638fe2c5eb8c187f0cdf586ef7a0": "4765569162ed571499b86723776fa9dd",
".git/objects/dd/770e50104b22c7fb523e822b6099d90a2ffd71": "c365be4a4037df80b47ecaf6d6880e23",
".git/objects/b6/df2bfd45e15e00b7ecfea42d1e7d1c7e69c0a3": "01db183e38367267bfe7f79a669c2918",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/af/15a302b7351bfb690f1be56d4b6f6a65e553fc": "ba900c98aae96d0c3384230058337ed1",
".git/objects/e1/1c142a0bd75f3feb2725cb098b01d3454c8a5c": "bd59a6d2f500bebd9efcd3bd3fdaf973",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/3cc93cc1c77317a6cf9d05d380c2cd7820be66": "19d15a4105e2d9061f84d0dc072225e7",
".git/objects/e8/301db7369291d44f55779af964625c444f3fe1": "9e575634a9922756a17ebd10005ec294",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/ff/79693f1af2e7b8aca8e57bcaa7677465141e6f": "a35561c4f170870f1e1296f31624c803",
".git/objects/c2/8490c23749a49166c86bfbf6e8d62143af5d62": "dc4fc759cece5f8260e7e88c6c573b00",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/f6/5085517b6f17d5f67b5924e4bc3492d3ef296c": "6c25763e9849c915ea633d48405f78a5",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/82c3fce315c23c4aa479123e5b74b77b8d5e44": "0b3f972e5365817805bd05386d71cc8b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/76f24c5a00e030fe54aac3ac02bbeac98229b2": "ee5ff0ead7e60884950a79b32197f1e7",
".git/objects/1b/ec010054844fc552d3b529f9ed7dfabc776fec": "516892b906ea542bce6e6c701b20b0cb",
".git/objects/70/8ca6470238acd4fa28144b3218fca2ba2981dd": "c7c596b2f1d7811b8e8f7076b6be3996",
".git/objects/70/995a658663f7e5aaf36f19b8b0cd35c6a1e780": "65d7000d2d58c3b5b2340a1b1429a773",
".git/objects/84/ec1f5b61bb391d56a0d43dbd7e4ad32b9dd1f1": "b858519f4391c7bea77b2f905ba27144",
".git/objects/1d/db45435738fe1bc2aad4eed3530af85c640720": "aff41a4a26d4127533711aa21eb42f75",
".git/objects/82/338b4b3ad103d666dbb40356c38d8ade5af132": "eb679a5b745c5fd620b6169a05044ed3",
".git/objects/13/61565cb9d4db919baf6b772d1f3dfb2286f253": "8817b4a2aaf7a1c8dcd4e00bea8c890c",
".git/objects/14/3ffe1cbfb191e71ef343c2a556a54cbf02e2f2": "f6eb7dbda7c5e4b0c25912996463a01a",
".git/objects/8e/8e14f6d35e10bea21d3f084847a3702af7159a": "a601826505ccc3bfe1c80ea73a0b8c8f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "521f2f51a8d9128d63742980e3be88ee",
".git/logs/refs/heads/main": "b418c8a48e15b9b7e05d213ed71aab39",
".git/logs/refs/remotes/origin/main": "77ebffc28381b3345b9409a7edd118c2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "28a87921db315e3dc9e9e9cf356763b9",
".git/refs/remotes/origin/main": "28a87921db315e3dc9e9e9cf356763b9",
".git/index": "2ebee513879c60f1e37933b8eabee298",
".git/COMMIT_EDITMSG": "5b134c79408eb9d8152a6c846052bc5d",
".git/FETCH_HEAD": "bc0ea50567e7e249e3b4aa582a557054",
"assets/AssetManifest.json": "48b2e53d6373ef4beed2e4e95403997f",
"assets/NOTICES": "119e5468132b9a7703e70e1766a36557",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "1df1b3ee59de6a25bdd55d5996f647d9",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/svg/status.svg": "b60677107c24ae56d016f9242dd3bd52",
"assets/assets/images/cat.png": "98ceb3ff233f5e74d1f31b5ae7468986",
"assets/assets/images/status.png": "b64ab887bd465f5437748e0fab19a86f",
"assets/assets/images/img1.png": "312e162ada228cac1d8179b8b641dbf9",
"assets/assets/lottie/cat.json": "28f3978b0abb36609b8c687a44564206",
"assets/assets/lottie/eye.json": "89a8cc51b495297382887e63cd9f5234",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
