
import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList =[
//   {
//     keys: 1,
//     author : "이정환",
//     content : "mary",
//     emotion : 5,
//     created_date : new Date().getTime()
//   },
//   {
//     keys: 2,
//     author : "홍길동",
//     content : "holly",
//     emotion : 2,
//     created_date : new Date().getTime()
//   },
//   {
//     keys: 3,
//     author : "심재경",
//     content : "fuck",
//     emotion : 3,
//     created_date : new Date().getTime()
//   },
//   {
//     keys: 4,
//     author : "김동욱",
//     content : "Shit",
//     emotion : 4,
//     created_date : new Date().getTime()
//   },
// ]

function App() {

  const [data,setData] =useState([]);
  const dataId =useRef(0);

  const onCreate =(author,content,emotion) =>{
      const created_date =new Date().getTime();
      const newItem={
          author,
          content,
          emotion,
          created_date,
          id :dataId.current,
      };
      dataId.current += 1;
      setData([newItem, ...data]);
  };

  const onRemove=(targetId)=>{
      console.log(`${targetId}가 삭제 되었습니다.`);
      const newDiaryList =data.filter((it)=>it.id !== targetId);
      setData(newDiaryList);
  }

  const onEdit=(targetId,newContent)=> {
      setData(
        data.map((it)=> 
        it.id === targetId ? {...it,content : newContent} :
        it)
      )
  }

  return (
    <div className='App'>
      <DiaryEditor onCreate={onCreate}></DiaryEditor>
      <DiaryList onEdit={onEdit} diaryList={data} onRemove={onRemove}></DiaryList>
    </div>
  );
}

export default App;
