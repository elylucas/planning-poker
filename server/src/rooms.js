import {Map, List, fromJS} from 'immutable';

export function createRoom(rooms, roomId, user) {
  let newRooms = rooms.push(fromJS({
      id: roomId,
      users: [user]
    }));
  return newRooms;
}

export function joinRoom(rooms, roomId, user) {
  var room = rooms.find(room => room.get('id') === roomId);
  var roomIndex = rooms.indexOf(room);
  var newUsers = room.get('users').push(Map(user));
  var newRoom = room.set('users', newUsers);
  var newRooms = rooms.set(roomIndex, newRoom);
  return newRooms;
}

export function leaveRoom(rooms, roomId, userId) {
  var room = rooms.find(room => room.get('id') === roomId);
  var roomIndex = rooms.indexOf(room);
  var user = room.get('users').find(u => u.get('id') === userId);
  var userIndex = room.get('users').indexOf(user);
  var newUsers = room.get('users').delete(userIndex);
  var newRoom = room.set('users', newUsers);
  var newRooms = rooms.set(roomIndex, newRoom);
  return newRooms;
}

export function castVote(rooms, userId, roomId, vote) {
  var room = rooms.find(room => room.get('id') === roomId);
  var roomIndex = rooms.indexOf(room);
  var users = room.get('users');
  var user = users.find(u => u.get('id') === userId);
  var userIndex = users.indexOf(user);
  var newUser = user.set('vote', vote);
  var newUsers = users.set(userIndex, newUser);
  var newRoom = room.set('users', newUsers);
  var newRooms = rooms.set(roomIndex, newRoom);
  return newRooms;
}

export function resetVote(rooms, roomId) {
  var room = rooms.find(room => room.get('id') === roomId).toJS();
  var roomIndex = rooms.indexOf(room);
  room.users.forEach(user => {
    user.vote = '';
  });
  var newRoom = fromJS(room);
  var newRooms = rooms.set(roomIndex, newRoom);
  return newRooms;
}
