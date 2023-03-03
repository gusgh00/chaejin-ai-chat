import React, { useState, useReducer } from 'react';
import '../IndexCss/Input.css';

const Input = ({ MyChatBtnRef, onCopy }) => {
    const [content, setContent] = useState("");
    const [any, forceUpdate] = useReducer(num => num + 1, 0);
    function handleChange() {
        forceUpdate();
    }

    const handler = (e) => {
        setContent(e.target.value)
    }
    const onSubmit = () => {
        const inputDatas = {
            content: { content }
        }

        if (content === "") {
            console.log("보낼 텍스트가 없어요!")
        }
        else {
            MyChatBtnRef();
            console.log(inputDatas.content.content)
            onCopy(inputDatas);
            setContent("");
            // handleChange()
        }
    }
    const onReset = () => {
        alert("기록을 리셋합니다!");
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload();
    }
    const handleClick = (e) => {
        if (e.key === 'Enter') {
            onSubmit();
        }
    }

    return (
        <div className='InputBox'>
            <div className='InputDiv'>
                <input className='ChatInput' id="input" value={content}
                    onChange={handler} onKeyUp={handleClick} placeholder="채팅 메세지를 입력하세요!" />
            </div>
            <div className='ResetDiv'>
                <button id="reset" className='ChatReset Name' onClick={onReset}>
                    ↻
                </button>
            </div>
            <div className='SendDiv'>
                <button id="send" className='ChatSend Name' onClick={onSubmit}>
                    ↩
                </button>
            </div>
        </div>
    );
}

export default Input;