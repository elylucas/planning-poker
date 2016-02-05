'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setInitialState = setInitialState;

var _immutable = require('immutable');

function setInitialState() {
  var state = (0, _immutable.Map)({
    rooms: (0, _immutable.List)()
  });
  return state;
}
//# sourceMappingURL=state.js.map