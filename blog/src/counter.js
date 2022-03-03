//{useState}를 로드 하지않고 5번줄에서 react.useState를 사용해도된다.
import React,{useReducer, useState} from 'react';

function Reducer(state, action) {
  switch (action.type){
    case 'INCREMENT': return state+1;
    case 'DECREMENT': return state-1;
    default: return state;
  }

}

function Counter() {
    //useState를 사용하는 경우
    //JS내에서는 중괄호를 쓰지 않는다. ++, --는 사용되지 않는다.
    //const [counts, setCounts] = useState(0);

    //일반함수에 파라미터 값을 업데이트하는 방식(https://velog.io/@suyeonme/react-useState%EC%9D%98-%EB%B9%84%EB%8F%99%EA%B8%B0%EC%A0%81-%EC%86%8D%EC%84%B1-%ED%95%A8%EC%88%98%ED%98%95-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8)
    //function Inc(){
    //    //콜백함수..이거 잘 이해 안되는데
    //    setCounts(prevNum=>prevNum+1);
    //}
    ////화살표함수에 새파라미터 값을 적용하는 방식
    //const Dec=() => {
    //    setCounts(counts-1);
    //}
    
    //useReducer를 사용하는 경우
    const [number,dispatch] = useReducer(Reducer,0);
    const onIncrease = () => dispatch({type:'INCREMENT'});
    const onDecrease = () => dispatch({type:'DECREMENT'});

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}> +1 </button>
      <button onClick={onDecrease}> -1 </button>
    </div>
  );
}


export default Counter;