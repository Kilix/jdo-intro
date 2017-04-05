'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var span = function span() {
  return {
    display: 'flex',
    jsutifyContent: 'center',
    alignItems: 'center',
    color: '#ffe047',
    fontSize: '100px',
    transform: 'scale(1, 1.6)',
    textShadow: '3px 3px 3px #1F1F1F',
    fontFamily: 'Streamster',
    fontWeight: 'bold',
    userSelect: 'none',
    cursor: 'default'
  };
};

exports.default = (0, _reactFela.createComponent)(span, 'span');