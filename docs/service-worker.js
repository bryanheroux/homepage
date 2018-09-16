/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["google5f5fcb52344908d8.html","4f22e0a3a884b00886c4a52247fe52a3"],["images/after-label@2x.png","ec6169d6b62679e6fe1d9ef2eff495e7"],["images/before-label@2x.png","1ba45245d06bceaae5262b007481674f"],["images/bryan-heroux.png","6f9c47569970d7b7d081c8e2d2c355d4"],["images/email-icon.png","408ffba0f3adfcde6dfcfd419e7b14a2"],["images/email-icon.svg","8d593f5a3430cc082978e75079ee3170"],["images/facebook-icon.png","b845a7275650192464263f538acd80b5"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/hammer.png","d330e59c96226346b6ef1e34b6265faf"],["images/helmet.png","d5d64a1404e8eb6bd256861a902ac4b3"],["images/hero-image-wood.png","4673de4115e6d0c37e1e50a6056e2db4"],["images/hero-image.png","23ba611596f7b4c260a00a5ea56fba8a"],["images/logo@2x.png","e4080f7721dacf47884dbb08145c1ef0"],["images/nails.svg","03cbc023889243c2e60b4795e6b63ed2"],["images/phone-icon.png","1dbea6d4c979aae617c86acd085a2195"],["images/phone-icon.svg","b0e28f50ba748d1fb91abe218391b94c"],["images/portfolio/crawford-estate-1-after.jpg","bc1c7e5a9cb836e90378ffc5d75b084c"],["images/portfolio/crawford-estate-1-before.jpg","f04f424efb366d4bf8b05b9754038100"],["images/portfolio/crawford-estate-2-after.jpg","5c758c57e30dfeae9acff35720bd4c8a"],["images/portfolio/crawford-estate-3-after.jpg","0d96a5e2ccd6bd695f051a2836e4975e"],["images/portfolio/crawford-estate-3-before.jpg","07742e08f9a041c9b91bdc59cf20ed43"],["images/portfolio/crawford-estate-4-after.jpg","1b1621694b4ba1bd3a17a54146962444"],["images/portfolio/crawford-estate-4-before.jpg","76a6950231684543fe8a013f9ef5f580"],["images/portfolio/crawford-estate-5-after.jpg","fd34a516c575c25dfcd8b46ff4e5f529"],["images/portfolio/crawford-estate-5-before.jpg","d181ee9bcea96a0e922892f733f10bad"],["images/portfolio/crawford-estate-6-after.jpg","efc1f316a7a69523640798c9c92ecdb7"],["images/portfolio/crawford-estate-6-before.jpg","07f4af2424481300059303a6a7b343c1"],["images/portfolio/glenmore-1.jpg","5a8742693274e231c2429ad8c14ac300"],["images/portfolio/glenmore-2.jpg","ff8b931b403e5142edca4e95e661584b"],["images/portfolio/glenmore-3.jpg","e9426c4ea73faa33259393e419ed739b"],["images/portfolio/glenmore-4.jpg","1198852c04234c7ab142bf840ca5d0b4"],["images/portfolio/glenmore-5-after.jpg","00d9e61e815f4bf5e7111ced0c69b63c"],["images/portfolio/glenmore-5-before.jpg","47ae410381048ed160c747e00a8a3d88"],["images/portfolio/glenmore-6.jpg","7cb4db854805c208b4e240e0b2c98b9b"],["images/portfolio/glenmore-biggar/bathroom-after.jpg","10a4a60a754e81fe6263756e8e5d1017"],["images/portfolio/glenmore-biggar/bathroom-before.jpg","4187ed4e0f6866d408ffa1a250c155ce"],["images/portfolio/glenmore-biggar/kitchen-after.jpg","1b86b458fc2da1963166db3b31d9fd2a"],["images/portfolio/glenmore-biggar/kitchen-before-2.jpg","bcc9a2a2532c1ad41e9466414a445c86"],["images/portfolio/glenmore-biggar/kitchen-before.jpg","b8dc44145b53bb9c25d7851b157cb548"],["images/portfolio/kirschner-mountain-1-after.jpg","45ea7b201c379acf391d533fda46602c"],["images/portfolio/kirschner-mountain-1-before.jpg","47713336af4c8e28ad50855ba2c00542"],["images/portfolio/kirschner-mountain-2-after.jpg","0a9d01aee69b9056efc4a68256b776d9"],["images/portfolio/kirschner-mountain-2-before.jpg","48a72f615355b32532c5ad7a2714cd70"],["images/portfolio/kirschner-mountain-2.1-after.jpg","2d8c1ed1ba160cc65e16bfa8641d8af6"],["images/portfolio/kirschner-mountain-3.jpg","e9f9360bef8b6cb541bc68450c800f29"],["images/portfolio/kirschner-mountain-4.jpg","2a532d4029c830c4bc05819ec17f4a6d"],["images/portfolio/lower-mission-1-after.jpg","59b08fe5d83fe669fecf88692c03a51b"],["images/portfolio/lower-mission-1-before.jpg","26d130776f037571800c301418ab1933"],["images/portfolio/lower-mission-2-after.jpg","c11870bdfc4085595448153018bde97a"],["images/portfolio/lower-mission-2-before.jpg","f1c9db0177ec20ab012c1b943d0ca5ea"],["images/portfolio/lower-mission-3-after.jpg","2ea574f3f1f0533f78654d9f8bdd00b6"],["images/portfolio/lower-mission-3-before.jpg","aa9b986888a654c478aad433ece99a75"],["images/portfolio/mission-kitchen/mission-kitchen-reno-1-after.png","649b707c62bc07cd1ae1ea7ecf8cdf58"],["images/portfolio/mission-kitchen/mission-kitchen-reno-1-before.png","76f0a4cbc643ee2c8a38671aecc3c3d9"],["images/portfolio/mission-kitchen/mission-kitchen-reno-1-during.png","5560616dc42e5bceca8f433abb0eb77b"],["images/portfolio/mission-kitchen/mission-kitchen-reno-2-after.png","b1e962c87dfcedc8af8f6443c265215c"],["images/portfolio/mission-kitchen/mission-kitchen-reno-3-after.png","37458edf7205f253d5c34875e7609032"],["images/portfolio/mission-kitchen/mission-kitchen-reno-3-before.png","52fc944c2991bc3ca2cf37a8e45afd48"],["images/portfolio/small-projects-fir-timber-entrance.png","07ad56f1e7e7969f63f802a86ee0c015"],["images/portfolio/south-kelowna-1-after.png","3b224458e3141bd4221dd1e100f56e2b"],["images/portfolio/south-kelowna-1-before.png","2874cccf9da223b87ad3978e1038979b"],["images/portfolio/south-kelowna-2-after.png","3127f274aef3fe120972b695335d646c"],["images/portfolio/south-kelowna-2-before.png","9987a34917dfd50e6df56439f8cd213f"],["images/portfolio/south-kelowna-3-after.png","07c95d1f866306853927da42476f6b86"],["images/portfolio/south-kelowna-3-before.png","489bcd302effb038e87b178be68173a9"],["images/portfolio/south-kelowna-4-after.png","161edeb8423362db05f129a8df221c4a"],["images/portfolio/south-kelowna-5-after.png","d789c60f801fdd9435370ffb995ea984"],["images/portfolio/south-kelowna-6-after.png","c88d113ff35dac4f9da8d1e7c030a792"],["images/portfolio/starlight-cres/diningarea-1-after.jpg","9dc63645d08cd73f53b61f91bf1d0217"],["images/portfolio/starlight-cres/diningarea-1-before.jpg","39e340a2db90e467277441699cb591ec"],["images/portfolio/starlight-cres/guestbathroom-1-after.jpg","db6eca631e470038eceeddb283dcff5e"],["images/portfolio/starlight-cres/guestbathroom-1-before.jpg","0f49ad583328385fae0c54fd51bcb707"],["images/portfolio/starlight-cres/guestroom-after.jpg","4b11b5ca7d81619b749f214211d8e504"],["images/portfolio/starlight-cres/guestroom-before.jpg","304c0028dd1279c098bec7fee927f9a5"],["images/portfolio/starlight-cres/kitchen-1-after.jpg","2505e31fb5e225dc35cb6b1cafe62f85"],["images/portfolio/starlight-cres/kitchen-1-before.jpg","b6d9b5090d9c8b35b69f5186d9aeeb35"],["images/portfolio/starlight-cres/kitchen-2-after.jpg","8e415169e7f4905626541467d6325056"],["images/portfolio/starlight-cres/kitchen-2-before.jpg","fa6559d06f06a316bfc0bdc55157cdc9"],["images/portfolio/starlight-cres/livingroom-1-after.jpg","0b39c36acbbc444c7630d0227e656118"],["images/portfolio/starlight-cres/livingroom-1-before.jpg","3d00023ebd4a29b24230106fb0c34e3a"],["images/portfolio/starlight-cres/livingroom-2-after.jpg","33049f5d014e601b551eb13704125a5f"],["images/portfolio/starlight-cres/livingroom-2-before.jpg","cfd23387cf6fe7ab9999d68825694964"],["images/portfolio/starlight-cres/livingroom-3-after.jpg","6b70a9fa91346840e1aa7c4955b68114"],["images/portfolio/starlight-cres/livingroom-3-before.jpg","cfb9978420d6afb8a8a012856844ba0d"],["images/portfolio/starlight-cres/livingroom-4-after.jpg","03b2cb94b306306910ba3d2c7bc0e83b"],["images/portfolio/starlight-cres/livingroom-4-before.jpg","8db74e5fa477f326a894dc754354182c"],["images/portfolio/the-heroux-home-1.jpg","5d1e02134bfa857e0fc02078da6b805c"],["images/portfolio/the-heroux-home-10.png","d739378781e73713ec115d9893cd966d"],["images/portfolio/the-heroux-home-11.png","8040592df7831a3cb3d8aff083911781"],["images/portfolio/the-heroux-home-2.jpg","b53f89f7553bb8166f603cb3237b758b"],["images/portfolio/the-heroux-home-3.jpg","b36371c1195dd66b146881fd5b767a9b"],["images/portfolio/the-heroux-home-4.jpg","eabf46386b3956d1e2078e8119db10da"],["images/portfolio/the-heroux-home-5.png","28bea165e917b8d2039d89525c791431"],["images/portfolio/the-heroux-home-6.png","7901225f22bbd7493c0f230029a93982"],["images/portfolio/the-heroux-home-7.png","22700e1c83a235fdb36847c2a3b5919e"],["images/portfolio/the-heroux-home-8.png","fb68197eabb0c277d047b5610a48d521"],["images/portfolio/the-heroux-home-9.png","ac83d0732c7cd261c08230ee92228eae"],["images/portfolio/westpointdr-1.jpg","6b1d925c21b3850db877abad25e8f618"],["images/portfolio/westpointdr-2.jpg","ffada75861d8e1453223e8c412b0827e"],["images/portfolio/westpointdr-3.jpg","2fe2154d23c390000a4980a4ecc49dba"],["images/quote.png","20b0f22ed8408eef3b61633291f06a46"],["images/signature.png","58e419f998f5135f4d63d710848899b4"],["images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["index.html","994c1349d3357c376dc4e0180253fabe"],["manifest.json","30d402e280a04e6fe03b32da34c70890"],["old-index.html","cf7f80492da7c3132e596c74f8a29997"],["portfolio-biggar-road.html","821a56c77196e2088aa073d7a3110798"],["portfolio-crawford-estate.html","d69dbd80658f80155427099ca1fc1bb1"],["portfolio-glenmore.html","6bbdf641ec949dddd42b889f766025fc"],["portfolio-kirschner-mountain.html","20e03b145bd5ef53ce7b61ce6e58860b"],["portfolio-lower-mission.html","78342ebbc6763bcf64dd11acc0e71a88"],["portfolio-mission-kitchen.html","44294dd9135f25e164269fbc86620600"],["portfolio-small-projects.html","bf226eb4d7a2190679d58801ee085022"],["portfolio-south-kelowna.html","37c960f7fe1175544e2b82cafe5b6b32"],["portfolio-starlight-crescent.html","7079f902a8fe7fd804dbad83d17201ba"],["portfolio-the-heroux-home.html","6e333357b97b7b2eeaed85a6b5e7c11c"],["portfolio-westpoint-drive.html","725f3ef15a926bee4248d1b6e464058e"],["scripts/main.min.js","9f1938dce7d908dc3e5f5e7cfcbba8b6"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","2770efb889cc10c4de88d0b746c2a13c"],["styles/main.css","a8fbb02e5a63942fd5f70ccd1a839c27"],["styles/reset.css","c8cbd0dfc56889f89177c225820b804a"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




