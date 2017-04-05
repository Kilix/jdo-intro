'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRenderer = getRenderer;
exports.getMountNode = getMountNode;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _fela = require('fela');

var _felaPresetWeb = require('fela-preset-web');

var _felaPresetWeb2 = _interopRequireDefault(_felaPresetWeb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// add your renderer configuration here
var renderer = (0, _fela.createRenderer)({
  plugins: [].concat((0, _toConsumableArray3.default)(_felaPresetWeb2.default))
});

renderer.renderFont('Streamster', ['static/Streamster.ttf']);
renderer.renderFont('Minecrafter', ['static/Minecrafter.ttf']);

renderer.renderStatic({ boxSizing: 'border-box' }, '*');
renderer.renderStatic({
  position: 'relative',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%'
}, 'html');
renderer.renderStatic({
  position: 'relative',
  top: 0,
  left: 0,
  width: '100%',
  minHeight: '100%',
  padding: 0,
  margin: 0,
  '-webkit-font-smoothing': 'subpixel-antialiased',
  fontFamily: 'Minecrafter, cursive',
  fontSize: '14px',
  fontWeight: 200,
  lineHeight: 1.5,
  color: '#1F1F1F',
  overflow: 'hidden'
}, 'body');
renderer.renderStatic({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  width: '100%',
  minHeight: '100vh'
}, ['#__next', '#__next>div']);

function getRenderer() {
  return renderer;
}

function getMountNode() {
  if (typeof window !== 'undefined') {
    return document.getElementById('fela-stylesheet');
  }

  return undefined;
}