import { memo, useEffect, useRef, useState } from "react";

const DiaryItem =({author,created_date,content,emotion,id,onRemove,onEdit}) =>{


useEffect(()=>{
    console.log(`${id}번 째 아이템 랜더!`);
})

const [isEdit,setIsEdit] = useState(false);
const toggleIsEdit = () => setIsEdit(!isEdit);

const [localContent,setLocalContent] = useState(content);
const localContentInput = useRef();


const handleRemove = () =>{
    if(window.confirm(`${id}번째 일기를 정말 삭제하겠습니까?`)){
        onRemove(id);
    }
}

const handleQuitEdit = () =>{
    setIsEdit(false);
    setLocalContent(content);
}

const handleEdit = () =>{
    if(localContent.length < 5){
        localContentInput.current.focus();
        return;
    }


    if(window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)){
        onEdit(id,localContent);
        toggleIsEdit();
    }
    //onEdit(id,localContent);
}


return <div className="DiaryItem">
    <div className="info">
        <span>
            작성자 : {author} | 감정정수 : {emotion} 
        </span>
        <br />
        <span className="date">
            {new Date(created_date).toLocaleString()}
        </span>
    </div>
    <div className="content">
        {isEdit ? (
        <textarea 
        ref = {localContentInput} 
        value = {localContent} 
        onChange = {(e) => setLocalContent(e.target.value)}
        >
        </textarea>
        ) : (content)}    
    </div>

    {isEdit ? (
        <>
        <button onClick = {handleQuitEdit}>수정취소</button>
        <button onClick = {handleEdit}>수정완료</button>
        </>
    ) : (
        <>
        <button onClick = {handleRemove}>삭제하기</button>
        <button onClick = {toggleIsEdit}>수정하기</button>
        </>
    )}
    </div>

    
}

export default memo(DiaryItem);