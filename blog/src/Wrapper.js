import React from 'react';

//이렇게만 쓰면 하위항목이 가려진다.

//function Wrapper() {
//  const style = {
//    border: '2px solid black',
//    padding: '16px',
//  };
//  return (
//    <div style={style} />
//  )
//}

function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style} >
      {children}
    </div>
  )
}
export default Wrapper;