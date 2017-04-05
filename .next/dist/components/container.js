'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var container = function container(_ref) {
  var _ref$column = _ref.column,
      column = _ref$column === undefined ? false : _ref$column;
  return {
    flex: 1,
    display: 'flex',
    flexDirection: column ? 'column' : 'row',
    justifyContent: 'center',
    alignItems: 'center'
  };
};

exports.default = (0, _reactFela.createComponent)(container, 'div');