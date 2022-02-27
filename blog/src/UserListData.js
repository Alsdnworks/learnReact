import React,{useRef} from "react";
import UserListRef from "./UserListRef";

//참고:
//useRef는 일반적인 자바스크립트 객체입니다 즉 heap 영역에 저장됩니다
//그래서 어플리케이션이 종료되거나 가비지 컬렉팅 될 때 까지 참조할 때 마다 같은 메모리 주소를 가지게 되고
//같은 메모리 주소를 가지기 때문에 === 연산이 항상 true를 반환하고, 값이 바뀌어도 리렌더링 되지 않습니다.
//하지만 함수 컴포넌트 내부에 변수를 선언한다면, 렌더링 될 때마다 값이 초기화 됩니다.
//그래서 해당 방법을 지양하는 것 같습니다 :)


function Orign(){
const nextId =useRef(4);
//useref을 사용할때 값을 넣어주면 current의 기본값이 된다.
const onCreate =()=>{

    nextId.current +=1;
};

const users = [
    {
        id: 1,
        username: 'first',
        email: 'id1'
      },
      {
        id: 2,
        username: 'second',
        email: 'id2'
      },
      {
        id: 3,
        username: 'third',
        email: 'id3'
      }
];

return <UserListRef users={users}/>;
}
export default Orign;