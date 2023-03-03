import React, { useImperativeHandle, forwardRef, useState, useReducer } from 'react';
import { Configuration, OpenAIApi } from 'https://cdn.skypack.dev/openai';
import '../IndexCss/Chat.css';
import ChatBotImg from '../IndexImg/ChaeJinBot.png';

const Chat = (Dataprops, ref) => {
    const { inputData } = Dataprops;
    let DataChat = inputData.content;
    useImperativeHandle(ref, () => (
        { getBtnHandle }
    ));
    const [countList, setCountList] = useState([0])
    const [BcountList, setBCountList] = useState([0])
    const [any, forceUpdate] = useReducer(num => num + 1, 0);
    function handleChange() {
        forceUpdate();
    }

    // let BotChatList = null;

    function getBtnHandle() {
        if (inputData.content === "") {
            console.log("받은 텍스트가 없어요!")
            handleChange()
        }
        else {
            let countArr = [...countList]
            let counter = countArr.slice(-1)[0]
            counter += 1
            countArr[counter] = counter
            setCountList(countArr)
            // handleChange()


            let BcountArr = [...BcountList]
            let Bcounter = BcountArr.slice(-1)[0]
            Bcounter += 1
            BcountArr[Bcounter] = Bcounter
            setBCountList(BcountArr)
        }
    }
    const configuration = new Configuration({
        apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);

    const ChatData = async () => {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: DataChat,
            temperature: 0.9,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        localStorage.setItem(countList.length - 1, response.data.choices[0].text);
    }
    sessionStorage.setItem(countList.length - 1, DataChat);
    ChatData()
    // const ChatData = async () => {
    //     const response = await openai.createCompletion({
    //         model: "text-davinci-003",
    //         prompt: DataChat,
    //         temperature: 0.9,
    //         max_tokens: 256,
    //         top_p: 1,
    //         frequency_penalty: 0,
    //         presence_penalty: 0,
    //     });
    //     localStorage.setItem(countList.length - 1, response.data.choices[0].text);
    //     sessionStorage.setItem(countList.length - 1, DataChat);
    // }
    // ChatData()
    return (
        <div className='ChatMain' id='MainChat'>
            <div>
                <span className='ChatBox MyChat'>
                    채팅을 시작하세요!
                </span>
            </div>
            {countList.map((i) =>
            (
                <div key={i}>
                    <div>
                        <img src={ChatBotImg} className='ChatBotImg' alt='chatbotimage'></img>
                        <div className='ChatDiv ChatBox BotChat'>
                            <span>
                                사랑해요!
                                {localStorage.getItem(i - 1)}
                            </span>
                        </div>
                    </div>
                    <div className='ChatDiv'>
                        <span className='ChatBox MyChat'>
                            {sessionStorage.getItem(i)}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default forwardRef(Chat);