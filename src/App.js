
import './App.css';
// import {useEffect, useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0)
//   // const [user, setUser] = useState([])
//   // useEffect(()=>{
//   //  fetch('https://jsonplaceholder.typicode.com/users')
//   //  .then((resp) => resp.json())
//   //  .then((json) => setUser(json))
//   // },[])
//   const addNum = () => {
//    let increased = count+1
//    console.log("increase",increased)
//    setInterval(()=> {setCount(increased)}, 1000)
//   }
  
//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick={addNum}>start</button>
//      {/* <h1> Users</h1> */}
//      {/* <div className='container'>
//        {
//          user.map((i) => (
//           <div className='card-inner'>
//             <p>{i.name}</p>
//             <p>{i.username}</p>
//             </div>
//          ))
//        }
//      </div> */}
//     </div>
//   );
// }

// export default App;
import './App.css';
// import { useEffect, useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);
//   const [id, setId] = useState("")
//   const [visible, setVisible] = useState(false)

//   const addNum = () => {
//     setVisible(true)
//      setId(setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 100))
//   };

//   useEffect(()=> {
//     if(count>25){
//       // clearInterval(id)
//        setCount(0)
//       }
//     }
//   ,[count, id])

//   return (
//     <div className="App">
//       <h1>Timer</h1>
//       <h1>{count}</h1>
//       <button onClick={addNum}>Run</button>
//       { visible ? ( 
//       [<button key={0} onClick={()=>{clearInterval(id)}} style={{margin: "5px"}}>stop</button>,
//       <button  key={1} onClick={()=>{clearInterval(id); setCount(0)}}>Reset</button>]
//       ): (<p>please click button to start</p>)}
    
//     </div>
//   );
// }

// export default App;

import React from 'react'
import Child from './child'
import {useEffect, useState } from 'react';

export default function App() {
  let [count, setCount] = useState(10);

  const add = () => {
    setCount((i)=> i+1)
  }

  return (
    <div>
    <Child num={count} add={add}/>
    </div>
  )
}
