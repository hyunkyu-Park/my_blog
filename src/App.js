import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '역삼 우동 맛집'
  let [titles, t] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  let [like, l] = useState(0);
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

      <button onClick={() => {
        let copy = [...titles];
        copy[0] = '여자 코트 추천';
        t(copy);
      }}>성별 바꾸기</button>

      <button onClick={() => {
        let copy = [...titles];
        copy.sort();
        t(copy)
      }}>가나다순 정렬</button>

      <div className="list"> 
        <h4>{titles[0]} <span onClick={() => { l(like++) }}>👍</span> {like}  </h4>
        <p>1월 1일 발행</p>
      </div>
      <div className="list"> 
        <h4>{titles[1]} <span>👍</span> 0 </h4>
        <p>1월 2일 발행</p>
      </div>
      <div className="list"> 
        <h4>{titles[2]}</h4>
        <p>1월 3일 발행</p>
      </div>
    </div>
  );
}

export default App;
