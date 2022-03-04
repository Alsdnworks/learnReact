import React from "react";
import Hello from "./hello";
import HelloClass from "./helloClass";
import './App.css';
import Wrapper from "./Wrapper";
import HelloIf from "./helloIf";
import Counter from "./counter";
import InputSample from "./input";
import InputSamplePH from "./inputPH";
import InputSampleRF from "./inputSample";
import UserList from "./UserList";
import UserListMap from "./UserListMap";
import Orign from "./UserListData";


function App() {
  //참고:
  //jsx 외부에서 정의되어진 event hander나 callback로 parameter를 pass할 때 arrow function을 씁니다.

  //참고:
  //useRef는 일반적인 자바스크립트 객체입니다 즉 heap 영역에 저장됩니다
  //그래서 어플리케이션이 종료되거나 가비지 컬렉팅 될 때 까지 참조할 때 마다 같은 메모리 주소를 가지게 되고
  //같은 메모리 주소를 가지기 때문에 === 연산이 항상 true를 반환하고, 값이 바뀌어도 리렌더링 되지 않습니다.
  //하지만 함수 컴포넌트 내부에 변수를 선언한다면, 렌더링 될 때마다 값이 초기화 됩니다.
  //그래서 해당 방법을 지양하는 것 같습니다 :)

  //바벨을 통해 JSX를 JS로 변환된다. 그 과정은 자동!
  //자바스크립트 변수선언, 참고로 JSX내에서는 주석의 형태가 다르다. 복잡하니까 일단 둘다 외우고 안되면 바꿔!!
  
  const foo="이건 foo변수의 내용입니다";
  
  const style={
    backgroundColor:"black",
    color:"aqua",
    fontSize:"1.5rem",
    padding:"3rem"
  }

  return (
    //<></>는 프레그먼트라고 하며 두개 이상의 태그를 사용할때 꼭 묶어줘야한다
    <>
    <h1>IT'S REACT</h1><br/>
    <h1>1. 컴포넌트의 사용</h1>
    <h3>임포트한 hello.js의 Hello함수를 호출한다 단일 태그를 사용할때는 &lt; foobar /&gt;의 형태로 표기한다.</h3>

      <HelloClass />
      <div>새로운 시작이야! HELLO REACT</div>

    <h1>2. 변수의 사용</h1>
    <h3>변수는 이렇게 {}중괄호를 사용하면된다</h3>  
      <div>{foo}</div>
    <h2>2.1. 변수로서 스타일 클래스를 사용</h2>
    <h3>style역시 변수로 등록하여 사용.</h3>  
      <div style={style}> {foo} 근데 이제 스타일을 더한!</div>

    <h1>3. CSS의 적용</h1>
    <h3>cssClass역시 변수로 등록하여 사용한다. <br/>App.css참고</h3>   
      <div className="gray-box">css적용 예</div>

    <h1>4. porps의 사용</h1>
    <h3>첫번째에서는 단순 함수를 호출하였고 이번에는 함수에 props(인자)를 넣어서 name과 color를 전달하였다.<br/> hello.js참고</h3>  
      <Hello name='Truffle' color='green'/>
      <Hello color='green'/>
    
    <h2>4.1. porp.child</h2>
    <h3>하위 컨텍스트를 렌더링하기위해서는 porp.child객체를 넣어줘야한다. <br/>Wrapper.js참고</h3>
      <Wrapper>
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
      </Wrapper>

    <h1>5. 조건렌더링</h1>
    <h3>Hello_if 컴포넌트를 조건에 따라 렌더링해본다 true는 자바스크립트 삼항연산자 처리해야 하니 중괄호처리 
    <br/> prop명만 있어도 true 처리된다. 
    <br/>helloIf.js참고</h3>
      <Wrapper>
      <HelloIf name="this " color="red" condition={true}/>
      <HelloIf name="this " color="red" condition/>       
      <HelloIf name="this " color="red" condition={false}/>    
      </Wrapper>
    
    <h1>6. HOOK: useState사용해보기</h1>
    <h3>함수형 컴포넌트를 만들때 상태관리도구중 HOOK의 useState를 사용하는 예제. 
    <br/>counter.js참고</h3>
    <Wrapper>
      <Counter/>
    </Wrapper>

    <h1>7. input태그 상태관리</h1>
    <h3>useState를 사용하여 input태그에 전달된 값을 조회한다. 
    <br/>input.js참고</h3>
    <Wrapper>
      <InputSample/>
    </Wrapper>

    <h2>7.1 여러 input태그 상태관리</h2>
    <h3>input placeholder를 설정하여 여러개의 input태그를 관리한다.
    <br/>inputPH.js참고</h3>
    <Wrapper>
      <InputSamplePH/>
    </Wrapper>

    <h1>8.useRef로 특정 DOM선택하기 </h1>
    <h3>useRef을 사용하여 특정 기능 작동시 다른 DOM을 제어 가능하다. 
    <br/>본 예제는 리셋시 nameInput을 포커싱한다 (inputSample.js-&gt; Line 25:) 
    <br/>inputSample.js참고</h3>    
    <Wrapper>
      <InputSampleRF/>
    </Wrapper>

    <h1>9.배열 렌더링하기 </h1>
    <h3>정적인 배열과 동적인 배열을 렌더링하는 방법을 알아본다. 
    <br/>본 예제는 정적인 배열을 렌더링하고 동적인 배열을 map을 통해 줄력한다.  </h3>
 
    <h2>9.1. 정적인 배열 렌더링</h2>
    <h3>
    UserList.js참고</h3>
    <Wrapper>
      <UserList/>
    </Wrapper>

    <h2>9.2. 동적인 배열 렌더링</h2>
    <h3>UserListMap.js참고</h3>
    <Wrapper>
    <h1>List_Map</h1>
    <h3>It renders dynamic JS array by map, func.</h3>
      <UserListMap/>
    </Wrapper>

    <h2>10. 컴포넌트 내의 변수를 useRef HOOK를 사용해 관리하기</h2>
    <h3>기존에 DOM을 선택하기위해 useRef를 사용하는 예제를 만들었다.<br/>
       본 예제에서는 컴포넌트 내에서 사용하는 변수를 useRef를 사용하여<br/> 
       간단한 C.U.R.D.를 구현해본다. 
      <br/>UserListData.js(UserListRef.js, CreateUser.js)참고
    </h3>
    <Wrapper>
    <h1>EditList</h1>
    <h3>lets do it</h3>
      <Orign/>
    </Wrapper>
    </>
  );
}

export default App;
