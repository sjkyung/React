
import {
  BrowserRouter,
  Routes,
  Route,
  Link
}from "react-router-dom";

import Home from './routes/Home';
import Detail from './routes/Detail';


// function MinutesToHours(){
//         const [amount, setAmount] = useState(0);
//         const [inverted, setInverted] = useState(false);
//         const onChange = (event)=>{
//           setAmount(event.target.value);
//         };
//         const reset = ()=> setAmount(0);  
//         const onInvert =() => {
//           reset();
//           setInverted((current) => !current );
//         }
//   return(
//     <div >
//      <div>
//             <div>
//             <label htmlFor='minutes'>Minutes</label>
//             <input
//                 value={inverted ? amount * 60 : amount} 
//                 id="minutes"
//                 placeholder="Minutes"
//                 type="number"
//                 onChange={onChange}
//                 disabled={inverted} 
//             />
//             </div>
//             <div>
//             <label htmlFor='hours'>Hours</label>
//             <input 
//                 value={inverted ? amount : Math.round(amount / 60)} 
//                 id="hours" 
//                 placeholder='Hours' 
//                 type="number" 
//                 disabled={!inverted}
//                 onChange={onChange}
//                 />
//             </div>  
//         </div>
//         <button onClick={reset}>Reset</button>
//         <button onClick={onInvert}>{inverted ? "Turn Back" : "Invert"}</button>
//     </div>
//   );
// }

// function KmtoMiles(){
//   const [index,setIndex] = useState(0);
//   const [inverted,setInverted] =useState(false);
//   const onChange = (event) => {
//     setIndex(event.target.value);
//   }
//   const reset =() =>{
//     setIndex(0);
//   }
//   const onInvert=()=>{
//     setInverted((current) => !current);
//   }
//   return(
//     <div>
//         <div>
//           <label htmlFor='km'>Km</label>
//           <input
//             value={inverted ? index / 0.62137 : index }
//             id="km"
//             placeholder='Km'
//             type="number"
//             onChange={onChange}
//             disabled={inverted}          
//           >
//           </input>

//         </div>
//         <div>
//           <label htmlFor='Miles'>Miles</label>
//           <input
//             value={inverted ? index : index * 0.62137}
//             id='miles'
//             placeholder='Miles'
//             type='number'
//             onChange={onChange}
//             disabled={!inverted}
//           > 
//           </input>
//         </div>
//         <button onClick={reset}>Reset</button>
//         <button onClick={onInvert}>{inverted ? "Turn Back" : "Invert"}</button>
//     </div>
//   );
// }


// function Btn({text,fontSize =16}){
//   console.log(text,"was renderd"); 
//   return(
    
//       <button
//        style={{
//         backgroundColor : "DodgerBlue",
//         color : "white",
//         padding: "10px 20px ",
//         border : 0,
//         borderRadius: 10,
//         fontSize,
        
//       }}
//       >{text}
//       </button>
    
//   );
// }
// Btn.propsTypes = {
//   text : PropTypes.string.isRequired,
//   fontSize : PropTypes.number,
// }

// function effect(){
//   const [counter,setValue] = useState(0);

//     useEffect(()=>{
//     console.log("I run when 'counter' changes.");
//   },[counter]);

//   const [keyword, setKeyword] = useState("");

//   useEffect(()=>{
//     console.log("I run when 'keyword' changes.");
//   },[keyword]);

//   useEffect(()=>{
//     console.log("i run only once");
//   },[]);


//   const onClick= () =>{
//     setValue((prev) =>prev+1);
//   };
 
//   const onChange =(event) => {
//     setKeyword(event.target.value);
//   };
 
  




//   useEffect(()=> {
//     console.log("I run when 'keyword & counter' changes.");
//   },[keyword,counter]);
  
//   return(
//     <div >
//     <input onChange = {onChange} type="text" placeholder='Search here'></input>  
//     <h1>{counter}</h1>
//     <button onClick = {onClick}>Click me</button>    
//     </div>
//   );
// }


function App() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/movie/:id" element={<Detail></Detail>}></Route>
          
        </Routes>
      </BrowserRouter> 
    );
  }



export default App;
