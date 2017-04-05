import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBv-05M92EO5lS6gGrNaz8xrvTv2tdBSYg',
  authDomain: 'jdo-app-a5abf.firebaseapp.com',
  databaseURL: 'https://jdo-app-a5abf.firebaseio.com',
  projectId: 'jdo-app-a5abf',
  storageBucket: 'jdo-app-a5abf.appspot.com',
  messagingSenderId: '969140782152',
};
const F = firebase.apps.length === 0 ? firebase.initializeApp(config) : firebase;

export default F;
