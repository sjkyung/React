import React,{useContext, useEffect, useRef,useState } from "react"
import { DiaryDispatchContext } from "./App";

const DiaryEditor = React.memo(() => {

    const {onCreate} =useContext(DiaryDispatchContext);

    // useEffect(()=>{
    //     console.log("DiaryEditor 렌더")
    // })

    const authorInput =useRef();
    const contentInput = useRef();

    const [state,setState] =useState({
        author : "",
        content : "",
        emotion : 1,
    })    

const handleChangeState =(e)=>{
    //console.log(e.target.name);
    //console.log(e.target.value);

    setState({
        ...state,
        [e.target.name]:e.target.value,
    })
}

const handleSubmit = () =>{
    console.log(state.author.length);
    if(state.author.length < 1){
        alert("최소 한글자 이상");
        authorInput.current.focus();
        return;
    }

     if(state.content.length < 5){
         alert("최소 다섯 글자 이상");
         contentInput.current.focus();
         return;
     }

    onCreate(state.author,state.content,state.emotion);
    alert("저장 성공");
    setState({
        author:"",
        content:"",
        emotion:1,
    });

    //sessionStorage.setItem(e.target.name, JSON.stringify(state));
} 


return (
    <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
        <input ref={authorInput} 
                name="author" 
                value={state.author} 
                onChange={handleChangeState}></input>
        </div>
        <div>
            <textarea ref={contentInput} 
            name="content" 
            value={state.content} 
            onChange={handleChangeState}>
            </textarea>
        </div>
        <div>
            <select name="emotion" value={state.emotion}
                onChange={handleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button name="btn" 
            onClick={handleSubmit}>일기 저장하기</button>
        </div>
    </div>

    );
});

export default DiaryEditor;