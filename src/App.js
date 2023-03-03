/* eslint-disable */
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import Chat from './IndexJs/Chat';
import Input from './IndexJs/Input';
import Header from './IndexJs/Header';

const App = () => {
  const [inputData, setInputData] = useState({
    content: ''
  })
  const onCopy = (data) => {
    setInputData(data.content)
  }
  const btnRef = useRef(null);
  const MyChatBtnRef = () => {
    btnRef.current.getBtnHandle();
  }
  return (
    <div className="App">
      <Header />
      <div className='AppChat'>
      <Chat inputData={inputData} ref={btnRef}/>
      <Input onCopy={onCopy} MyChatBtnRef={MyChatBtnRef}/>
      </div>
    </div>
  );
}

export default App;
