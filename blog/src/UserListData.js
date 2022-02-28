import React,{useRef, useState} from "react";
import UserListRef from "./UserListRef";
import CreateUser from "./CreateUser";


function Orign(){
//useState를 사용하여 입력값 관리
const [inputs, setInputs] = useState({
  username:'',
  email:''
});  
//useref을 사용할때 값을 넣어주면 current의 기본값이 된다.
const nextId =useRef(4);
const {username,email} = inputs;

const [users,setUsers] = useState([
    {
      id: 1,
      username: 'first',
      email: 'id1',
      active: true
    },
    {
      id: 2,
      username: 'second',
      email: 'id2',
      active: false
    },
    {
      id: 3,
      username: 'third',
      email: 'id3',
      active: true
    }
]);

const onCreate =()=>{
  const user = {
    id:nextId.current,
    username,
    email
  };
  setUsers(users.concat(user));
  setInputs({
    username:'',
    email:''
  });
    nextId.current +=1;
};

const onRemove=id=>{
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user=>user.id!==id));
};

const onChange = e => {
    // e.target.name은 이벤트가 발생한 객체의 name 속성값
  const { name, value } = e.target;
  setInputs({
    ...inputs,
    [name]:value
  });
};

const onToggle = id => {
    //foreach로 모든 변수를 호출함과 같이 map을 사용하여 간소화. UserListMap에서 한것과 같다
  setUsers(
    users.map(user =>
      user.id === id ? { ...user, active: !user.active } : user
    )
  );
};

return (
  <>
  <CreateUser
    username={username}
    email={email}
    onChange={onChange}
    onCreate={onCreate}
  />
  <UserListRef 
    users={users} 
    onRemove={onRemove} 
    onToggle={onToggle}/>
  </>
  );
}

export default Orign;