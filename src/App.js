import './App.css';
import { useState } from 'react';
import Modal from './Modal';

function App() {

  let post = '테스트 글제목';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬 독학','자바 독학']);
  let [따봉,따봉변경] =useState(0);
  let [modal,setModal] = useState(false);

  [1,2,3].map(function(a){
    console.log(a);
  })

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let copy =[...글제목];
        copy.sort();
        글제목변경(copy);
      }}>정렬하기</button>

      <button onClick={() => {
        let copy = [...글제목];
        copy[0] ='여자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      <div className='list'>
        <h4>{글제목[0]}<span onClick={()=>{따봉변경(따봉+1)}}>👍</span>
        {따봉}</h4>
        <p>9월 11일 발행</p>
      </div>

      <div className='list'>
        <h4>{글제목[1]}<span>👍</span>0</h4>
        <p>9월 10일 발행</p>
      </div>
      
      <div className='list'>
        <h4 onClick={() => setModal(!modal)}>{post}<span>👍</span>0</h4>
        <p>9월 9일 발행</p>
      </div>


      {
        글제목.map(function(a,i){
          return(
            <div className='list' key={i}>
              <h4 onClick={() => setModal(!modal)}>{글제목[i]}
              </h4>
              <p>9월 11일 발행</p>
          </div>
          )
        })
      }



      {
        modal == true ? <Modal/> : null
      }
    

    </div>
  );
}

export default App;
