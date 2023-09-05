import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import MyHeader from "./MyHeader";
import { useContext, useEffect, useRef, useState } from "react";
import EmotionItem from "./EmotionItem";
import {DiaryDispatchContext} from "./../App";
import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion"; 


const DiaryEditor = ({isEdit,originData}) => {
    
    const contentRef = useRef();
    const [content,setContent] = useState("");
    const [emotion,setEmotion] = useState(3);
    const [date, setDate] = useState(getStringDate(new Date()));

    const navigator =useNavigate();

    const handleClikEmote = (emotion) => {
        setEmotion(emotion);
    }

    const {onCreate,onEdit,onRemove} = useContext(DiaryDispatchContext);

    const handleSumit = () => {
        if(content.length < 1 ){
            contentRef.current.focus();
            return;
        }

        if(window.confirm(isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까")){
            if(!isEdit){
                onCreate(date,content,emotion);
            }else{
                onEdit(originData.id,date,content,emotion);
            }
        }

        
        navigator('/',{replace : true});
    };

    const handleRemove = () => {
        if(window.confirm("정말 삭제 하시겠습니까?")){
            onRemove(originData.id);
            navigator('/',{replace : true});
        }
    }

    useEffect(() => {
        if(isEdit){
            setDate(getStringDate(new Date(parseInt(originData.date))));
            setEmotion(originData.emotion);
            setContent(originData.content);
        }
    },[isEdit,originData])

    return (
    <div className="DiaryEditor">
        <MyHeader headText={isEdit ? "일기 수정하기" : "새 일기쓰기"} 
        leftChild={<MyButton text={"< 뒤로가기"} onClick={() => navigator(-1)}></MyButton>}
        rightChild={isEdit && <MyButton text={"삭제하기"} type={"negative"} onClick={handleRemove}></MyButton>}
        >
        </MyHeader>
        <div>
            <section>
                <h4>오늘은 언제인가요?</h4>
                <div className="input_box">
                    <input className="input_date" type="date" onChange={(e) => setDate(e.target.value)} value={date}></input>
                </div>
            </section>
            <section>
                <h4>오늘의 감정</h4>
                <div className="input_box emotion_list_wrapper">
                    {emotionList.map((it) => (
                    <EmotionItem key={it.emotion_id} {...it} onClick={handleClikEmote}
                    isSelected={it.emotion_id === emotion}
                    ></EmotionItem>
                    ))}
                </div>
            </section>
            <section>
                <h4>오늘의 일기</h4>
                <div className="input_box text_wrapper">
                    <textarea placeholder="오늘은 어땠나요" 
                    ref={contentRef} 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)}
                    >
                    </textarea>
                </div>
            </section>
            <section>
                <div className="control_box">
                    <MyButton text={"취소하기"} onClick={() => navigator(-1)}></MyButton>
                    <MyButton type={"positive"} text={"작성완료"} onClick={handleSumit}></MyButton>
                </div>
            </section>

        </div>
    </div>
    )
} 

export default DiaryEditor;