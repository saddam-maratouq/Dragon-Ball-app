// import React, { useState,useRef } from "react";
// import DragonBallMap from "./DragonBallMap";
// import DragonBallData from "./DragonBallData"; 


// export default function DragonBall() { 

//   const [dragonData, SetDragonData] = useState(DragonBallData);  

//   const [show,SetShow] = useState(!false)  

//   // const foucesInput = useRef(null) 

//   const [Input,setInput] = useState('') 

// //////////////////////////////////////////


//   const ShowHandler = () => {
    
//       SetShow(!show)   
      
//   }

// /////////////////////////////////////

 
//    const deletHandler = (e,clikedIdx) => { /// I change the pram name to clicked index to make differnt as programing logic // 

//     console.log(clikedIdx); 

//     const DeletImag = dragonData.filter((dragon,idx) => idx !== clikedIdx )   

//     SetDragonData(DeletImag)   

//     // console.log(dragonData);  
//     console.log(DeletImag);  

//     ///////////////// Another way  

//     // SetDragonData ((prevState) => { /// setstate as  a Arrow functions  

//     //  return  prevState.filter((el,idx) => idx !== clikedIdx )
      
//     // })  
//    }  

//   //  const foucsHandler = () => {

//   //       console.log(foucesInput.current.focus());
        
//   //  } 

// //    const toggleHandler = () => {

// //     console.log(foucesInput.current.value); 
    
    
// // } 


// const changeInput = (e) => {
//     const InputData = e.target.value
//   setInput(InputData) 
//   console.log(InputData);
  
  
// }

  

//   return (    

   
//     <div> 

//        <button name='butoon' onClick={ShowHandler}> Show / Hide  Dragon ball Charcter  </button>   
//        <br />
//        <br /> 
//      <input type="text" placeholder='charcters Names' value={Input}  onChange={changeInput} />  
//      <br /> <br /> 
//      {/* <input type="text" placeholder='charcter Name'  ref ={foucesInput} onChange={toggleHandler} />   */}

//      {/* <button onClick={foucsHandler}> click to fouces on form  </button>   */}
//       { show &&  
//      <DragonBallMap dragonData={dragonData} deletHandler={deletHandler}  InputState={Input}  /> 
//       } 
     
//     </div> 
//   );
// }
 

