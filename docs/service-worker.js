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
var PrecacheConfig = [["images/after-label@2x.png","ec6169d6b62679e6fe1d9ef2eff495e7"],["images/before-label@2x.png","1ba45245d06bceaae5262b007481674f"],["images/bryan-heroux.png","6f9c47569970d7b7d081c8e2d2c355d4"],["images/email-icon.png","408ffba0f3adfcde6dfcfd419e7b14a2"],["images/email-icon.svg","8d593f5a3430cc082978e75079ee3170"],["images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/hammer.png","d330e59c96226346b6ef1e34b6265faf"],["images/helmet.png","d5d64a1404e8eb6bd256861a902ac4b3"],["images/hero-image-wood.png","4673de4115e6d0c37e1e50a6056e2db4"],["images/hero-image.png","23ba611596f7b4c260a00a5ea56fba8a"],["images/logo@2x.png","e4080f7721dacf47884dbb08145c1ef0"],["images/nails.svg","03cbc023889243c2e60b4795e6b63ed2"],["images/phone-icon.png","1dbea6d4c979aae617c86acd085a2195"],["images/phone-icon.svg","b0e28f50ba748d1fb91abe218391b94c"],["images/portfolio/crawford-estate-1-after.jpg","bc1c7e5a9cb836e90378ffc5d75b084c"],["images/portfolio/crawford-estate-1-before.jpg","f04f424efb366d4bf8b05b9754038100"],["images/portfolio/crawford-estate-2-after.jpg","5c758c57e30dfeae9acff35720bd4c8a"],["images/portfolio/crawford-estate-3-after.jpg","0d96a5e2ccd6bd695f051a2836e4975e"],["images/portfolio/crawford-estate-3-before.jpg","07742e08f9a041c9b91bdc59cf20ed43"],["images/portfolio/crawford-estate-4-after.jpg","1b1621694b4ba1bd3a17a54146962444"],["images/portfolio/crawford-estate-4-before.jpg","76a6950231684543fe8a013f9ef5f580"],["images/portfolio/crawford-estate-5-after.jpg","fd34a516c575c25dfcd8b46ff4e5f529"],["images/portfolio/crawford-estate-5-before.jpg","d181ee9bcea96a0e922892f733f10bad"],["images/portfolio/crawford-estate-6-after.jpg","efc1f316a7a69523640798c9c92ecdb7"],["images/portfolio/crawford-estate-6-before.jpg","07f4af2424481300059303a6a7b343c1"],["images/portfolio/glenmore-1.jpg","5a8742693274e231c2429ad8c14ac300"],["images/portfolio/glenmore-2.jpg","ff8b931b403e5142edca4e95e661584b"],["images/portfolio/glenmore-3.jpg","e9426c4ea73faa33259393e419ed739b"],["images/portfolio/glenmore-4.jpg","1198852c04234c7ab142bf840ca5d0b4"],["images/portfolio/glenmore-5-after.jpg","00d9e61e815f4bf5e7111ced0c69b63c"],["images/portfolio/glenmore-5-before.jpg","47ae410381048ed160c747e00a8a3d88"],["images/portfolio/glenmore-6.jpg","7cb4db854805c208b4e240e0b2c98b9b"],["images/portfolio/kirschner-mountain-1-after.jpg","45ea7b201c379acf391d533fda46602c"],["images/portfolio/kirschner-mountain-1-before.jpg","47713336af4c8e28ad50855ba2c00542"],["images/portfolio/kirschner-mountain-2-after.jpg","0a9d01aee69b9056efc4a68256b776d9"],["images/portfolio/kirschner-mountain-2-before.jpg","48a72f615355b32532c5ad7a2714cd70"],["images/portfolio/kirschner-mountain-2.1-after.jpg","2d8c1ed1ba160cc65e16bfa8641d8af6"],["images/portfolio/kirschner-mountain-3.jpg","e9f9360bef8b6cb541bc68450c800f29"],["images/portfolio/kirschner-mountain-4.jpg","2a532d4029c830c4bc05819ec17f4a6d"],["images/portfolio/lower-mission-1-after.jpg","59b08fe5d83fe669fecf88692c03a51b"],["images/portfolio/lower-mission-1-before.jpg","26d130776f037571800c301418ab1933"],["images/portfolio/lower-mission-2-after.jpg","c11870bdfc4085595448153018bde97a"],["images/portfolio/lower-mission-2-before.jpg","f1c9db0177ec20ab012c1b943d0ca5ea"],["images/portfolio/lower-mission-3-after.jpg","2ea574f3f1f0533f78654d9f8bdd00b6"],["images/portfolio/lower-mission-3-before.jpg","aa9b986888a654c478aad433ece99a75"],["images/portfolio/peak-point-drive-1.jpg","e956bfbbee98a063660f23702274ba4b"],["images/portfolio/peak-point-drive-2.jpg","fe41397852a33a5b57b0102b8e45ea0b"],["images/portfolio/peak-point-drive-3.jpg","d9469b327fb76031ae37ec27f6745aab"],["images/portfolio/the-heroux-home-1.jpg","5d1e02134bfa857e0fc02078da6b805c"],["images/portfolio/the-heroux-home-2.jpg","b53f89f7553bb8166f603cb3237b758b"],["images/portfolio/the-heroux-home-3.jpg","b36371c1195dd66b146881fd5b767a9b"],["images/portfolio/the-heroux-home-4.jpg","eabf46386b3956d1e2078e8119db10da"],["images/portfolio/westpointdr-1.jpg","6b1d925c21b3850db877abad25e8f618"],["images/portfolio/westpointdr-2.jpg","ffada75861d8e1453223e8c412b0827e"],["images/portfolio/westpointdr-3.jpg","2fe2154d23c390000a4980a4ecc49dba"],["images/quote.png","20b0f22ed8408eef3b61633291f06a46"],["images/signature.png","58e419f998f5135f4d63d710848899b4"],["images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["index.html","791f8c941d03fed26d32a24da4f11a19"],["manifest.json","30d402e280a04e6fe03b32da34c70890"],["old-index.html","cf7f80492da7c3132e596c74f8a29997"],["portfolio-crawford-estate.html","c712254c22c1ab886e59b10978e3e9b7"],["portfolio-glenmore.html","88004c0ffb1deb5d5f9163f57095bf0c"],["portfolio-kirschner-mountain.html","391335488abe58c0ab6dc143c1838ce4"],["portfolio-lower-mission.html","b77c53614155f4b44173b6aab7ce980f"],["portfolio-peak-point-drive.html","da35e03fb3980fd757e6224411983cbe"],["portfolio-the-heroux-home.html","0c99998790d48b2cfbf58228fabeae03"],["portfolio-westpoint-drive.html","1c6bc3a004c653f6a8376c978163f5a1"],["scripts/main.min.js","9f1938dce7d908dc3e5f5e7cfcbba8b6"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["styles/main.css","1c6ae3aeed9bd6c802e52bcee9543951"],["styles/reset.css","8583534039ddffc4ace82d51734edd09"]];
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




