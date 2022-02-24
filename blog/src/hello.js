import React from 'react';

function Hello(props) { 
//{{}}왜 이중인가하면 jsx문법->객체리터럴순의 중괄호가 적용되어야하기때문 https://kosaf04pyh.tistory.com/21
//return <div style={{color}}>Hello World!! {name}</div> 이렇게써도 딱히 문제는 없다! 이를 비구조화 할당이라고 한다.  
  return <div style={{color: props.color}}>Hello World!! {props.name}</div>
}

//props의 기본값은 다음과 같이 설정가능하다.
Hello.defaultProps = {
name: '--',
color: 'black'
}

export default Hello;