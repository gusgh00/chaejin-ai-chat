import React from "react";
import '../IndexCss/Chat.css';

const MyChat = (props) => {
    const { inputData } = props;

    return (
        <div>
            <span className='ChatBox MyChat'>
                {inputData.content}
            </span>
        </div>
    );
}

export default MyChat;