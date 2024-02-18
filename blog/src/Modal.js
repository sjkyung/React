import { useState } from "react";



function Modal(props) {
    let [title,setTitle] = useState(0);

        return(
        <div className='modal' style={{background : props.color}}>
            <h4>{props.글제목[props.title]}</h4> 
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={()=> props.글제목변경(['여자코트 추천','강남우동 맛집'])}>글 수정</button>
        </div>
        )
}

export default Modal;