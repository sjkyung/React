import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import RouteTest from "./compoenets/RouteTest";
import MyButton from "./compoenets/MyButton";
import MyHeader from "./compoenets/MyHeader";






function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader headText={"App"}
        leftChild={<MyButton text={'왼쪽버튼'} onClick={() => alert("왼쪽 클릭")} />}
        rightChild={<MyButton text={'오른쪽 버튼'} onClick={() => alert("오른쪽클릭")}/>}
        ></MyHeader>
        <h2>App.js</h2>
        <MyButton text={'버튼'} onClick={() => alert('버튼클릭')}
                  type={"positive"}></MyButton>
        <MyButton text={'버튼'} onClick={() => alert('버튼클릭')}
                  type={"negative"}></MyButton>
        <MyButton text={'버튼'} onClick={() => alert('버튼클릭')}
                  ></MyButton>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/new' element={<New></New>}></Route>
          <Route path='/edit' element={<Edit></Edit>}></Route>
          <Route path='/diary/:id' element={ <Diary></Diary>}></Route>
        </Routes>
        <RouteTest></RouteTest>
      </div>
    </BrowserRouter>
  );
}

export default App;
