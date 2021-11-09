import React, { useState } from 'react'
import DragonBalls from './component/DragonBalls'
import DragonBallData from "./component/DragonBallData"; 


export default function App() { 

  const [datas, SetDatas] = useState(DragonBallData);  


  const AddHandler = (data) => {
console.log(data);
     SetDatas([...datas,data]) 
     SetDatas(data) 
  }


  return (
    <div>
       <DragonBalls AddHandler={AddHandler}  datas={datas}   />  
    </div>
  )
}
