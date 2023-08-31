import { useContext, useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { DiaryStateContext } from "../App";
import { getStringDate } from "../util/date"
import { emotionList } from "../util/emotion"; 
import MyHeader from "../compoenets/MyHeader";
import MyButton from "../compoenets/MyButton";


const Diary = () => {

    const navigate = useNavigate();

    const {id} = useParams();
    const diaryList = useContext(DiaryStateContext);
    console.log(id);
    const [data,setData] = useState();

    useEffect(() => {
        if(diaryList.length >=1){
            const targetDiary = diaryList.find(
                (it) => parseInt(it.id) === parseInt(id)
            );
            console.log(targetDiary);

            if(targetDiary){
                setData(targetDiary);
            }else{
                alert("없는 일기입니다.");
                navigate('/',{ replace : true });
            }
        }
    },[id,diaryList]);


    
    
    if(!data){
        return <div className="DiaryPage">로딩중입니다 ....</div>;
    } else{
        const curEmotionData = emotionList.find(
            (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
        );
        console.log(curEmotionData);

        return (
        <div className="DiaryPage">
            <MyHeader headText={`${getStringDate(new Date(data.date))} 기록`}
            leftChild={<MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)}></MyButton>}
            rightChild={<MyButton text={"수정하기"} onClick={() => navigate(`/edit/${data.id}`)}></MyButton>}></MyHeader>
            <article>
                <section>
                    <h4>오늘의 감정</h4>
                    <div className="diary_img_wrapper">
                        <img src={curEmotionData.emotion_img}></img>
                        <div className="emotion_descript">
                            {curEmotionData.emotion_descript}
                        </div>
                    </div>
                </section>
            </article>


        </div>
        )
    };
};


export default Diary;