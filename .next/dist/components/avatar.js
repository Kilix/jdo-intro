'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var avatar = function avatar(_ref) {
  var src = _ref.src;
  return {
    backgroundImage: 'url(' + src + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: 200,
    height: 200,
    border: '2px solid #FFF',
    borderRadius: '50%',
    boxShadow: '2px 2px 2px 2px rgba(31, 31, 31, 1)'
  };
};

exports.default = (0, _reactFela.createComponent)(avatar, 'div');