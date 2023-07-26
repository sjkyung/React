
import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import LifeCycle from './LifeCycle';

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


  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res)=>res.json());
  

  const initData = res.slice(0,20).map((it)=> {
    return{
      author : it.email,
      content : it.body,
      emotion : Math.floor(Math.random() * 5) + 1,
      created_date : new Date().getTime() + 1,
      id : dataId.current++   
      }
    })
    setData(initData);
  };

  useEffect(() =>{
    setTimeout(()=>{
      getData();
    },1500);
  },[]);

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


  const getDiaryAnalysis = useMemo(()=>{
    //if(data.length === 0){
      //return {goodCount : 0, badCount : 0, goodRadio : 0};
    //}
    console.log("일기 분석 시작");

    const goodCount = data.filter( (it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRadio = (goodCount / data.length ) * 100.0;
    return{goodCount,badCount,goodRadio};
  },[data.length]);


  const {goodCount,badCount,goodRadio} = getDiaryAnalysis;

  return (
    <div className='App'>
      <LifeCycle></LifeCycle>
      <DiaryEditor onCreate={onCreate}></DiaryEditor>
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount} </div>
      <div>기분 나쁜 일기 개수 : {badCount} </div>
      <div>기분 좋은 일기 비율 : {goodRadio} </div>
      <DiaryList onEdit={onEdit} diaryList={data} onRemove={onRemove}></DiaryList>
    </div>
  );
}

export default App;
