import React from 'react';
//Hello_IF처럼 쓰면 안된다
function HelloIf({color, name, condition}) { 
  return (<div style={{color}}>{name}
    {/*삼항연산자 내에서 null을 사용하면 렌더링하지않음*/}
    {condition ? <b> is true!</b> : <b>is false!</b>}
    </div>    
    );
}

HelloIf.defaultProps = {
name: '--',
color: 'black'

}

export default HelloIf;