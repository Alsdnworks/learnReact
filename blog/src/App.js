import React from "react";
import Hello from "./hello";
import './App.css';
import Wrapper from "./Wrapper";
import HelloIf from "./helloIf";
import Counter from "./counter";
import InputSample from "./input";


function App() {
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

    <h1>1. 컴포넌트의 사용</h1>
    <h3>임포트한 hello.js의 Hello함수를 호출한다 단일 태그를 사용할때는 &lt; foobar /&gt;의 형태로 표기한다.</h3>

      <Hello />
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
      <InputPH/>
    </Wrapper>
    </>
  );
}

export default App;
