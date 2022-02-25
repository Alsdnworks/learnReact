import React,{useState, useRef} from "react";

function InputSampleRF(){
    const [inputs, setInputs] = useState({
        name:'',
        nickname:''
    });
    const nameInput = useRef();

    const {name,nickname} = inputs;

    const onChange = e =>{
        const {value,name}=e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
    };

    const onReset = () => {
        setInputs({
            name:'',
            nickname:''
        });
    }

    return(
        <div>
            <input
            name="name"
            placeholder="이름"
            onChange={onChange}
            value={name}
            ref={nameInput}
            />
            <input
            name="nickname"
            placeholder="닉네임"
            onChange={onChange}
            value={nickname}
            />
            <button onClick={onReset}> reset </button>
            <div>
                <b>value</b>
                {name}({nickname})
            </div>
        </div>
    );
}
export default InputSampleRF;