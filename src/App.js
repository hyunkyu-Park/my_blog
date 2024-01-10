import './App.css';
import { useState } from 'react';
import background from './background.jpg'

import { Button } from 'react-bootstrap';

function App() {

  return (
    <div className="App">
      

      <div className="image-container">
        <img src={background} alt="blog img" width={200} className='custom-image'/>
        <h1 className="overlay-text1">Kyu Blog</h1>
        <h1 className="overlay-text2">Compass</h1>
        <h1 className="overlay-text3">My thoughts will point me in the direction</h1>
        <span className='language'>English</span>
      </div>

      <div className='postWrapper'>
        <h1 className='postTitle'>첫 번째 포스트는 이런 방식으로 작성될 예정입니다</h1>
        <p className='postDates'>Jan 9, 2024</p>
        <p className='content-preview'>포스트 제목 아래 이런식으로 각 포스트의 처음 문단 일부를 잘라서 미리보기로 둘 예정입니다. 각 포스트는
        화면 기준 중앙이 아니라 좌측에 둘 예정이고, 미리보기의 글자는 회색 계열로 할 예정입니다. 페이지의 우측 부분은 개인 깃허브 프로필과 
        목차를 둘 예정입니다.</p>
        <div>
          <a href='태그'></a>
        </div>
      </div>

      

    </div>
  );
}

//컴포넌트의 첫 글짜는 항상 대문자
function Modal(props){
  return(
    <div className="modal">
        <h4>{props.titles[props.post]}</h4>
        <p>날짜</p>
        <p>상세 내용</p>
        <button>글수정</button>
      </div>
  )
}


export default App;
