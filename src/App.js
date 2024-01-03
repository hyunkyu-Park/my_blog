import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '역삼 우동 맛집'
  let [s1, b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <div className="list"> 
        <h4>{s1[0]}</h4>
        <p>1월 1일 발행</p>
      </div>
      <div className="list"> 
        <h4>{s1[1]}</h4>
        <p>1월 2일 발행</p>
      </div>
      <div className="list"> 
        <h4>{s1[2]}</h4>
        <p>1월 3일 발행</p>
      </div>
    </div>
  );
}

export default App;
