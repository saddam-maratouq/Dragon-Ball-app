import React from "react";
import DragonBallCard from "./DragonBallCard";
import './DragonCaracter.styles.css'

export default function DragonBallMap({ dragonData,InputState,deletHandler}) {
  return ( 

    <div  > 
        

      { dragonData.filter(({Name}) =>  Name.includes(InputState))  
      
      
      .map(({ Name , ...otherprops }, idx) => (  

       
                <DragonBallCard key={idx}  idx={idx} className='dragon' deletHandler={deletHandler}  Name={Name} {...otherprops}/> 
       
     
            
      ))} 
     
    </div> 
  );
}
