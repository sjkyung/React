import { useContext,useEffect, useState } from "react";
import {useNavigate,useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../compoenets/DiaryEditor";

const Edit = () => {

    const [originData,setOriginData] = useState();
    const navigate = useNavigate();
    const {id} = useParams();

    const diaryList = useContext(DiaryStateContext);

    useEffect(() => {
        if(diaryList.length >= 1){
            const targetDiary = diaryList.find((it) => parseInt(it.id) === parseInt(id)
            ); 
            console.log(targetDiary);

            if(targetDiary){
                setOriginData(targetDiary);
            }else{
                navigate('/',{replace : true});
            }
        };
    },[id,diaryList]);



    return (<div>

        {originData && <DiaryEditor isEdit={true} originData={originData}></DiaryEditor>}
        </div>
    );
};


export default Edit;