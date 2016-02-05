'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _room = require('./room');

var _state = require('./state');

var _immutable = require('immutable');

function reducer(state, action) {
  switch (action.type) {
    case 'SET_INITIAL_STATE':
      return (0, _state.setInitialState)();
    case 'CREATE_ROOM':
      return (0, _room.createRoom)(state, action.roomId, action.user);
  }
}
//# sourceMappingURL=reducer.js.map