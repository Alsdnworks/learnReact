import React,{useState} from "react"
function InputSample(){
    const [text, setText] = useState('');
    //16번째 줄의 onChange를 받아서 setText의 값으로 사용한다. event(그냥이름).target은 input DOM을 가르킨다.-> 표준으로는 event대신 e를 사용한다
    //그 타겟의 value를 input으로 사용한다. setText는 입력중인 내용 Text는 value자리에 표시되는 텍스트
    const Changes = (event) => {
        setText(event.target.value);
    };

    const onReset=()=>{
        setText('');
    };

return(
    <div>
        <div>
          <input onChange={Changes} value={text}/>
          <button onClick={onReset}>reset</button>
        </div>
        value:{text}
    </div>
    );
}
export default InputSample;