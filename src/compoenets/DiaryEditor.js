import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import MyHeader from "./MyHeader";
import { useState } from "react";



const emotionList = [
    {
        emotion_id : 1,
        emotion_img : process.env.PUBLIC_URL + `/assets/emotion1.png`,
        emotion_desript :`완전 좋음`
    },
    {
        emotion_id : 2,
        emotion_img : process.env.PUBLIC_URL + `/assets/emotion2.png`,
        emotion_desript :`좋음`
    },
    {
        emotion_id : 3,
        emotion_img : process.env.PUBLIC_URL + `/assets/emotion3.png`,
        emotion_desript :`그럭 저럭`
    },
    {
        emotion_id : 4,
        emotion_img : process.env.PUBLIC_URL + `/assets/emotion4.png`,
        emotion_desript :`나쁨`
    },
    {
        emotion_id : 5,
        emotion_img : process.env.PUBLIC_URL + `/assets/emotion5.png`,
        emotion_desript :`끔찍함`
    },
]


const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
};


const DiaryEditor = () => {

    const [date, setDate] = useState(getStringDate(new Date()));

    const navigator =useNavigate();


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
                        <div key={it.emotion_id}>{it.emotion_desript}</div>
                    ))}
                </div>
            </section>
        </div>
    </div>
    )
} 

export default DiaryEditor;