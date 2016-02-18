import {Map, List, fromJS} from 'immutable';

export function createRoom(rooms, roomId, user) {
  let newRooms = rooms.push(fromJS({
      id: roomId,
      users: [user]
    }));
  return newRooms;
}

var initialRoomState = Map(fromJS({
  users: Map()
}));

export function joinRoom(rooms, roomId, user) {
  var room = rooms.find(room => room.get('id') === roomId);
  var roomIndex = rooms.indexOf(room);
  var newUsers = room.get('users').push(Map(user));
  var newRoom = room.set('users', newUsers);
  var newRooms = rooms.set(roomIndex, newRoom);
  console.log(newUsers)
  return newRooms;
}
