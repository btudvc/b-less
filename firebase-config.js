(function(root) {
  root.BLESS_FIREBASE_CONFIG = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
  };

  // Firebase Console -> Project settings -> Cloud Messaging -> Web Push certificates.
  root.BLESS_FIREBASE_VAPID_KEY = '';
})(typeof self !== 'undefined' ? self : window);
