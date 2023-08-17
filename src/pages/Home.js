import { useContext, useEffect, useState } from "react";
import MyHeader from './../compoenets/MyHeader';
import MyButton from './../compoenets/MyButton';
import { DiaryStateContext } from "../App";
import DiaryList from "./../compoenets/DiaryList";


const Home = () => {
    const diaryList = useContext(DiaryStateContext);

    const[data,setData] = useState([]);
    const [curDate,setCurDate] = useState(new Date());
    console.log(curDate);

    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

    useEffect(() => {
        if(diaryList.length >= 1){

        const firstDay = new Date(
            curDate.getFullYear(),
            curDate.getMonth(),
            1
        ).getTime();

        const lastDay =new Date(
            curDate.getFullYear(),
            curDate.getMonth() + 1,
            0
        ).getTime();

        console.log(firstDay,lastDay);
        setData(diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay));
     }   
    },[diaryList,curDate]);

    console.log(new Date().getTime());
    useEffect(()=>{
        console.log(data);
    },[data])

    const increaseMonth = () => {
        setCurDate(
            new Date(curDate.getFullYear(),curDate.getMonth() + 1,curDate.getDate())
        );
    }

    const decreaseMonth = () => {
        setCurDate(
            new Date(curDate.getFullYear(),curDate.getMonth() - 1,curDate.getDate())
        );
    }


    return (
    <div>
        <MyHeader headText={headText}
        leftChild={<MyButton text={"<"} onClick = {decreaseMonth}></MyButton>}
        rightChild={<MyButton text={">"} onClick = {increaseMonth}></MyButton>}
        ></MyHeader>
        <DiaryList diaryList={data}></DiaryList>
    </div>
    );
};


export default Home;