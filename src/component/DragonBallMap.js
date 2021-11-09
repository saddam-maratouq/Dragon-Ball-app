import React from "react";
import DragonBallCard from "./DragonBallCard";
import './DragonCaracter.styles.css'

export default function DragonBallMap({ datas,InputNameState,deletHandler}) {
  return ( 

    <div  > 
        

      {datas.filter(({Name},id) =>  Name.includes(InputNameState))  
      
      
      .map(({ Name , ...otherprops }, id) => (  

       
                <DragonBallCard key={id}  id={id} className='dragon' deletHandler={deletHandler}  Name={Name} {...otherprops}/> 
       
     
            
      ))} 
     
    </div> 
  );
}
