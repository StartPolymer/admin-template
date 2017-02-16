/*
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  var appName = 'Admin',
      appDescription = 'StartPolymer Admin Template',
      appId = 'admin-v1', // using in <app-firebase>, <app-storage> as prefix

      // App version from git updated before deploy.
      appVersion = '(appVersion)',

      /* Deployment environment
         https://en.wikipedia.org/wiki/Deployment_environment */
      env = 'dev'; // or 'stage', 'prod'

  var config = {
    // Development environment
    dev: {
      appUrl: 'https://startpolymer-admin-template.firebaseapp.com',
      baseUrl: '/',
      apiBaseUrl: 'https://startpolymer-admin-template.firebaseapp.com/',
      assetBaseUrl: 'https://startpolymer-admin-template.firebaseapp.com/',

      googleAnalytics: {
        isEnabled: false,
        defaultTracker: {
          trackingId: 'UA-XXXX-Y',
          cookieDomain: 'auto',
          //cookiePath: null,
          siteSpeedSampleRate: 10 // 10% of users.
        }
      }
    },

    // Staging environment
    stage: {
      appUrl: 'https://startpolymer-admin-template.firebaseapp.com',
      baseUrl: '/',
      apiBaseUrl: 'https://startpolymer-admin-template.firebaseapp.com/',
      assetBaseUrl: 'https://startpolymer-admin-template.firebaseapp.com/',

      googleAnalytics: {
        isEnabled: false,
        defaultTracker: {
          trackingId: 'UA-XXXX-Y',
          cookieDomain: 'auto',
          //cookiePath: null,
          siteSpeedSampleRate: 10 // 10% of users.
        }
      }
    },

    // Production environment
    prod: {
      appUrl: 'https://startpolymer-admin-template.firebaseapp.com',
      baseUrl: '/',
      apiBaseUrl: 'https://startpolymer-admin-template.firebaseapp.com/',
      assetBaseUrl: 'https://startpolymer-admin-template.firebaseapp.com/',

      googleAnalytics: {
        isEnabled: false,
        defaultTracker: {
          trackingId: 'UA-XXXX-Y',
          cookieDomain: 'auto',
          //cookiePath: null,
          siteSpeedSampleRate: 10 // 10% of users.
        }
      }
    }
  };

  window.Config = config[env];
  window.Config.env = env;

  window.Config.appId = appId + '-' + env;
  window.Config.appName = env === 'prod' ? appName : appName + ' - ' + env;
  window.Config.appDescription = appDescription;
  window.Config.appVersion = appVersion;

  window.Config.defaultLocale = 'en';
  window.Config.availableLocales = ['cs', 'en'];

  window.Config.isDebugMode = env === 'prod' ? false : true;

})(document);
