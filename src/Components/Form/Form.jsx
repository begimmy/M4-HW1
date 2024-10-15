import React from 'react'; 
import { useState } from "react"; 
 
const Form = () => { 
    const [num, setNum] = useState(0); 
    const [num2, setNum2] = useState(0); 
    const [res, setRes] = useState(0); 
    return ( 
        <div className="App"> 
            <input type='number' value={num} onChange={(e) => setNum(e.target.value)} /> 
             
            <button onClick={() => { 
               setRes(Number(num) + Number(num2)); 
            }}>+</button> 
 
            <button onClick={() => { 
               setRes(Number(num) - Number(num2)); 
            }}>-</button> 
 
            <button onClick={() => { 
               setRes(Number(num) * Number(num2)); 
            }}>*</button> 
 
            <button onClick={() => { 
               setRes(Number(num) / Number(num2)); 
            }}>/</button> 
 
            <button onClick={() => { 
               setRes(Math.pow(Number(num), Number(num2))); 
            }}>^</button> 
 
            <button onClick={() => { 
               setRes(Math.pow(Number(num2), 1/Number(num))); 
            }}>√</button> 
            <input type='number' value={num2} onChange={(e) => setNum2(e.target.value)} /> 
            <h1>{res}</h1> 
        </div> 
    ); 
} 
 
export default Form;