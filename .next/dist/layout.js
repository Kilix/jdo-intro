'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

var _fela = require('./fela');

var _container = require('./components/container');

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/willoo/Documents/Projects/jdo/layout.js';

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(_reactFela.Provider, { renderer: (0, _fela.getRenderer)(), mountNode: (0, _fela.getMountNode)(), __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_container2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, children));
};