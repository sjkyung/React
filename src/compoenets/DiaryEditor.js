import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import MyHeader from "./MyHeader";
import { useContext, useRef, useState } from "react";
import EmotionItem from "./EmotionItem";
import {DiaryDispatchContext} from "./../App"



const emotionList = [
    {
        emotion_id : 1,
        emotion_img : process.env.PUBLIC_URL + `/assets/emotion1.png`,
        emotion_descript :`완전 좋음`
    },
    {
        emotion_id : 2,
        emotion_img : process.env.PUBLIC_URL + `/assets/emotion2.png`,
        emotion_descript :`좋음`
    },
    {
        emotion_id : 3,
        emotion_img : process.env.PUBLIC_URL + `/assets/emotion3.png`,
        emotion_descript :`그럭 저럭`
    },
    {
        emotion_id : 4,
        emotion_img : process.env.PUBLIC_URL + `/assets/emotion4.png`,
        emotion_descript :`나쁨`
    },
    {
        emotion_id : 5,
        emotion_img : process.env.PUBLIC_URL + `/assets/emotion5.png`,
        emotion_descript :`끔찍함`
    },
]


const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
};


const DiaryEditor = () => {
    
    const contentRef = useRef();
    const [content,setContent] = useState("");
    const [emotion,setEmotion] = useState(3);
    const [date, setDate] = useState(getStringDate(new Date()));

    const navigator =useNavigate();

    const handleClikEmote = (emotion) => {
        setEmotion(emotion);
    }

    const {onCreate} = useContext(DiaryDispatchContext)
    const handleSumit = () => {
        if(content.length < 1 ){
            contentRef.current.focus();
            return;
        }


        onCreate(date,content,emotion);
        navigator('/',{replace : true});
    };

    return (
    <div className="DiaryEditor">
        <MyHeader headText={"새 일기쓰기"} 
        leftChild={<MyButton text={"< 뒤로가기"} onClick={() => navigator(-1)}></MyButton>}>
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
                    <MyButton text={"작성완료"} onClick={handleSumit}></MyButton>
                </div>
            </section>

        </div>
    </div>
    )
} 

export default DiaryEditor;