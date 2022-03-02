import React,{useEffect,memo} from "react";

//여기서 사용되는 memo란 컴포넌트의 props가 변경되었을때만 렌더링을 하도록 하는 것이다.
const User =memo (function User({user,onRemove,onToggle}) {
    //1. useEffect를 사용할때 첫번째 파라미터는 함수,두번째는 의존값이 들어있는 배열이 있다.->deps라고 부른다
    //2. deps가 없다면 컴포넌트의 처음(마운트)에만 실행된다.
    useEffect(()=>{
        //3. 컴포넌트마운트(작업예약, 외부API요청등에사용)
        console.log('now you see me '+user.username);
        return ()=>{
            //4.함수를 반환가능하며 이를 cleanup함수라고 부른다.deps가 없다면 컴포넌트의 종료(언마운트)때만 실행됨
            //컴포넌트언마운트(라이브러리인스턴스제거, 자원해제)
            console.log('now you cant see me '+user.username);
        };//5. deps로 useEffect안에서 사용되는 상태나 props를 등록해야 최신화될때 작동한다.
        },
        [user]);

    return(
    <div>
        <b style={{cursor:'pointer',color:user.active?'green':'black'}} 
        onClick={()=>onToggle(user.id)}>
            {user.username}
        </b>
        <span>({user.email})</span>
        <button onClick={()=>onRemove(user.id)}>삭제</button>
    </div>
    ); 
});

function UserList({users,onRemove,onToggle}){
    return(
        <div>
            {users.map(user => (
                <User 
                user={user} 
                key={user.id} 
                onRemove={onRemove}
                onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default memo(UserList);