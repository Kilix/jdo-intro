'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _layout = require('../layout');

var _layout2 = _interopRequireDefault(_layout);

var _reactFela = require('react-fela');

var _firebase = require('../firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _avatar = require('../components/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _background = require('../components/background');

var _background2 = _interopRequireDefault(_background);

var _button = require('../components/button');

var _button2 = _interopRequireDefault(_button);

var _container = require('../components/container');

var _container2 = _interopRequireDefault(_container);

var _score = require('../components/score');

var _score2 = _interopRequireDefault(_score);

var _span = require('../components/span');

var _span2 = _interopRequireDefault(_span);

var _title = require('../components/title');

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/willoo/Documents/Projects/jdo/pages/index.js?entry';


var afrRef = _firebase2.default.database().ref('afr');
var jdoRef = _firebase2.default.database().ref('jdo');

var neFaisRien = function neFaisRien() {};

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  (0, _createClass3.default)(Home, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var afr, jdo;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return afrRef.once('value').then(function (s) {
                  return s.val();
                });

              case 2:
                afr = _context.sent;
                _context.next = 5;
                return jdoRef.once('value').then(function (s) {
                  return s.val();
                });

              case 5:
                jdo = _context.sent;
                return _context.abrupt('return', { afr: afr, jdo: jdo });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Home(props) {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

    var afr = props.afr,
        jdo = props.jdo;

    _this.state = { afr: afr, jdo: jdo };
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      afrRef.on('value', function (s) {
        return _this2.setState({ afr: s.val() });
      });
      jdoRef.on('value', function (s) {
        return _this2.setState({ jdo: s.val() });
      });
    }
  }, {
    key: 'voteAFR',
    value: function voteAFR() {
      var pts = this.state.afr + 1;
      afrRef.set(pts);
    }
  }, {
    key: 'voteJDO',
    value: function voteJDO() {
      var pts = this.state.jdo + 1;
      jdoRef.set(pts);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          afr = _state.afr,
          jdo = _state.jdo;

      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_background2.default, { afr: afr, jdo: jdo, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement(_container2.default, {
        style: {
          flex: '1 1 100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'center'
        },
        column: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_title2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'Choisis', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'ton champion')), _react2.default.createElement(_container2.default, { style: { flex: 1 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_container2.default, { column: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_avatar2.default, { src: 'static/afr.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), _react2.default.createElement(_button2.default, { onClick: function onClick() {
          return _this3.voteAFR();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'VOTER', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), 'AFR'), _react2.default.createElement(_score2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, afr, ' pts')), _react2.default.createElement(_span2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'VS.'), _react2.default.createElement(_container2.default, { column: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_avatar2.default, { src: 'static/jdo.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), _react2.default.createElement(_button2.default, { onClick: function onClick() {
          return _this3.voteJDO();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'VOTER', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), 'JDO'), _react2.default.createElement(_score2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, jdo, ' pts')))));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;