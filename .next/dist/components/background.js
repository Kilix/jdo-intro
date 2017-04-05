'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFela = require('react-fela');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/willoo/Documents/Projects/jdo/components/background.js';


// Calcul de la taille des scores
var getW = function getW(afr, jdo) {
  return afr + jdo !== 0 ? 100 * afr / (afr + jdo) : 50;
};

// Container global de la page
var container = function container(props) {
  return {
    display: 'flex',
    alignItems: 'stretch',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1
  };
};

// Définition des partitions representant les scores
// Number -> String -> Object
var part = function part(_ref) {
  var size = _ref.size,
      backgroundColor = _ref.backgroundColor;
  return {
    backgroundColor: backgroundColor,
    transition: 'all .3s ease'
  };
};

var Container = (0, _reactFela.createComponent)(container, 'div');
var Part = (0, _reactFela.createComponent)(part, 'div');

exports.default = function (_ref2) {
  var afr = _ref2.afr,
      jdo = _ref2.jdo;

  var afrW = getW(afr, jdo);
  var jdoW = 100 - afrW;
  return _react2.default.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement(Part, { style: { flex: '1 0 ' + Math.floor(afrW) + '%' }, backgroundColor: '#24BEC8', __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), _react2.default.createElement(Part, { style: { flex: '1 0 ' + Math.floor(jdoW) + '%' }, backgroundColor: '#EA3338', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }));
};