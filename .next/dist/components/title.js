'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = function title() {
  return {
    position: 'relative',
    top: 50,
    margin: '0 auto',
    padding: 0,
    marginBottom: 100,
    fontFamily: 'Minecrafter',
    fontSize: '90px',
    transform: 'skew(-12deg, -20deg)',
    color: '#FFE047',
    textShadow: '12px 15px 1px #1F1F1F',
    '>span': {
      marginLeft: 80
    }
  };
};

exports.default = (0, _reactFela.createComponent)(title, 'h1');