
function roomIdGen(){
  let roomId = '';
  roomId += Math.floor(Math.random() * 10);
  roomId += Math.floor(Math.random() * 10);
  roomId += Math.floor(Math.random() * 10);
  roomId += Math.floor(Math.random() * 10);
  return roomId;
}

export default roomIdGen;
