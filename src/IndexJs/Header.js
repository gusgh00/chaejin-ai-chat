import React from 'react';
import '../IndexCss/Header.css';
import ChatBotImg from '../IndexImg/ChaeJinBot.png';

const Header = () => {
    return (
        <header className='Header'>
            <div className='HeadDiv'>
                <span className='ChatGPT'>OpenAI</span>
                <img src={ChatBotImg} className='ChaeJinImg' alt='chatbotimage'></img>
                <span className='ChaeJin'>채진이 봇</span>
            </div>
        </header>
    );
}

export default Header;