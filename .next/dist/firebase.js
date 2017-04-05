'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase = require('firebase');

var firebase = _interopRequireWildcard(_firebase);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var config = {
  apiKey: 'AIzaSyBv-05M92EO5lS6gGrNaz8xrvTv2tdBSYg',
  authDomain: 'jdo-app-a5abf.firebaseapp.com',
  databaseURL: 'https://jdo-app-a5abf.firebaseio.com',
  projectId: 'jdo-app-a5abf',
  storageBucket: 'jdo-app-a5abf.appspot.com',
  messagingSenderId: '969140782152'
};
var F = firebase.apps.length === 0 ? firebase.initializeApp(config) : firebase;

exports.default = F;