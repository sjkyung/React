import React,{ useEffect, useState } from "react";

const CounterA = React.memo(({count}) => {
    useEffect(()=>{
            console.log(`CountA Update : count : ${count}`);
    });
    return <div>{count}</div>;
});

const CounterB = ({obj}) =>{
    useEffect(()=>{
            console.log(`CountB Update : count : ${obj.count}`);
    });
    return <div>{obj.count}</div>
};

const areEqual =(preProps,nextProps)=>{
    if(preProps.obj.count === nextProps.obj.count){
        return true; 
    }

    return false;
}


const MemoizedCountB =React.memo(CounterB,areEqual);



const OptimizeTest = () => {
    const [count,setCount] =useState(1);
    const [obj,setObj]=useState({
        count : 1 
    })

    return <div style={{padding : 50}}>
        <div>
            <h2>Count A</h2>
            <CounterA count={count}></CounterA>
            <button onClick={()=> setCount(count + 1 )}>A button</button>
        </div>
        <div>
            <h2>Count B</h2>
            <MemoizedCountB obj={obj}></MemoizedCountB>
            <button onClick={() => {
                setObj({
                    count : obj.count,
                })
            }}>B button</button>
        </div>   
    </div>
}


export default OptimizeTest; 