import uuid from 'uuid';

export default function configureSession(){
  let userId = getUserId();
  return {
    userId: userId
  };
}

function getUserId(){
  let userId = sessionStorage.getItem('ap-userId');
  if(!userId){
    userId = uuid.v4();
    sessionStorage.setItem('ap-userId', userId);
  }
  return userId;
}
