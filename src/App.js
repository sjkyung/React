import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import RouteTest from "./compoenets/RouteTest";
import React,{useReducer, useRef} from "react";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type){
    case  'INIT' : {
      return action.type;
    }
    case 'CREATE' : {
      const newItem = {
        ...action.data
      };
      newState = [newItem, ...state];
      break;
    }
    case 'REMOVE' : {
      newState = state.filter((it) => it.id !== action.targetId );
      break;
    }
    case 'EDIT' : {
      newState = state.map((it) =>
      it.id === action.data.id ? {...action.data} : it )
      break;
    }
  default :
      return state;
  }
  return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id : 1,
    emotion :1 ,
    content :"오늘이 일기 3번",
    date : 1691975106567,
  },
  {
    id : 2,
    emotion : 2,
    content :"오늘이 일기 2번",
    date : 1691975106568,
  },
  {
    id : 3,
    emotion : 3,
    content :"오늘이 일기 1번",
    date : 1691975106569,
  }
]

function App() {

  const [data,dispatch] = useReducer(reducer,dummyData);
  const dataId = useRef(0);

   const onCreate = (date,content,emotion) => {
     dispatch({
       type: 'CREATE',
       data : {
         id : dataId.current,
         date : new Date(date).getTime(),
         content,
         emotion,
       }
     });
     dataId.current += 1;
   };
   const onRemove = (targetId) => {
     dispatch({type : "REMOVE",targetId});
   };
   const onEdit = (targetId, date, content, emotion) => {
     dispatch({
       type : "EDIT",
       data : {
         id : targetId,
         date : new Date(date).getTime(),
         content,
         emotion,
       },
     });
   };



  return (
   <DiaryStateContext.Provider value={data}>
    <DiaryDispatchContext.Provider value={{onCreate,onEdit,onRemove}}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/new' element={<New></New>}></Route>
            <Route path='/edit' element={<Edit></Edit>}></Route>
            <Route path='/diary/:id' element={ <Diary></Diary>}></Route>
          </Routes>
          <RouteTest></RouteTest>
        </div>
      </BrowserRouter>
    </DiaryDispatchContext.Provider>
  </DiaryStateContext.Provider>
  );
}

export default App;
