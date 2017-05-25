'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = exports.store = (0, _store2.default)();
store.subscribe(function () {
  //console.log(store.getState())
});
//store.dispatch({type: 'SET_INITIAL_STATE'});
console.log('server started');

(0, _server2.default)(store);
//# sourceMappingURL=app.js.map