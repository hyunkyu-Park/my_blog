import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '역삼 우동 맛집'
  let [titles, setTitles] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setlike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

      <button onClick={() => {
        let copy = [...titles];
        copy[0] = '여자 코트 추천';
        setTitles(copy);
      }}>성별 바꾸기</button>

      <button onClick={() => {
        let copy = [...titles];
        copy.sort();
        setTitles(copy)
      }}>가나다순 정렬</button>

      {/* <div className="list"> 
        <h4>{titles[0]} <span onClick={() => { setlike(like++) }}>👍</span> {like}  </h4>
        <p>1월 1일 발행</p>
      </div>
      <div className="list"> 
        <h4>{titles[1]} <span>👍</span> 0 </h4>
        <p>1월 2일 발행</p>
      </div>
      <div className="list" onClick={ () => {
        setModal(!modal)
        // modal == false ? setModal(true) : setModal(false)
      }}> 
        <h4>{titles[2]}</h4>
        <p>1월 3일 발행</p>
      </div> */}

      {
        titles.map(function(t, i){
          return (
          <div className="list" key={i}> 
            <h4 onClick={ () => {setModal(!modal)}}> {t} 
              <span onClick={() => {
                let copy = [...like]
                copy[i]++
                setlike(copy) }}> 👍 
              </span> { like[i] } 
            </h4>
            <p>1월 2일 발행</p>
          </div>
          )
        })
      }

      {
        modal == true ? <Modal></Modal> : null
      }

    </div>
  );
}

//컴포넌트의 첫 글짜는 항상 대문자
function Modal(){
  return(
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
  )
}

export default App;
