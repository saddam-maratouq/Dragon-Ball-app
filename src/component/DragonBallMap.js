import React from "react";
import DragonBallCard from "./DragonBallCard";
import './DragonCaracter.styles.css'

export default function DragonBallMap({ dragonData,InputState,deletHandler}) {
  return ( 

    <div  > 
        

      {dragonData.filter(({Name},id) =>  Name.includes(InputState))  
      
      
      .map(({ Name , ...otherprops }, id) => (  

       
       <DragonBallCard key={id}  id={id} className='dragon' deletHandler={deletHandler}  Name={Name} {...otherprops}/> 
       
      ))} 
     
    </div> 
  );
}
