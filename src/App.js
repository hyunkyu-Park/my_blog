import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import background from './background.jpg'

function App() {


  let [titles, setTitles] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setlike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [post, setPost] = useState(0)
  let [input, setInput] = useState('')
  
  return (
    <div className="App">
      <div className="image-container">
        <img src={background} alt="blog img" width={200} className='custom-image'/>
        <h1 className="overlay-text1">Kyu Blog</h1>
        <h1 className="overlay-text2">Compass</h1>
        <h1 className="overlay-text3">My thoughts will point me in the direction</h1>
        
      </div>

      {/* <button onClick={() => {
        let copy = [...titles];
        copy[0] = '여자 코트 추천';
        setTitles(copy);
      }}>성별 바꾸기</button>

      <button onClick={() => {
        let copy = [...titles];
        copy.sort();
        setTitles(copy)
      }}>가나다순 정렬</button> */}

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
            <h4 onClick={ () => {setModal(!modal); setPost(i)}}> {t} 
              <span onClick={(e) => {
                e.stopPropagation();
                let copy = [...like]
                copy[i]++
                setlike(copy) }}> 👍 
              </span> { like[i] } 
            </h4>
            <p>1월 2일 발행 </p>
            <button onClick={()=>{
              let titlesCopy = [...titles]
              titlesCopy.splice(i, 1);
              setTitles(titlesCopy);

              let likesCopy = [...like];
              likesCopy.splice(i, 1);
              setlike(likesCopy);

            }}>삭제</button>
            
          </div>
          )
        })
      }

      {
        modal == true 
        ? <Modal titles = {titles} post = {post} setTitles = {setTitles}></Modal> 
        : null
      }

      <input onChange={(e) => {
        setInput(e.target.value);
      }}></input>
      <button onClick={() => {
        //만약 input이 비어 있으면 버튼 작동 x
        if (input.trim() !== '') {
          let copy = [...titles];
          copy.unshift(input);
          setTitles(copy);

          let likesCopy = [...like];
          likesCopy.unshift(0);
          setlike(likesCopy);

          setInput('');
        }
      }}>포스트</button>

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
