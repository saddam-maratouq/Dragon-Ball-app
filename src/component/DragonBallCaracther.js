import React from "react";
import Card from "react-bootstrap/Card"; 
import './DragonCaracter.styles.css'

export default function DragonBallCaracther({ dragonData,deletHandler }) {
  return ( 

    <div>
        

      {dragonData.map(({ Name, Imag }, idx) => ( 
     
  

        <div key={idx}  className='dragon' > 

        

          <Card style={{ width: "20px", hight: "20px" }}> 


            <h1 onClick={(e)=> deletHandler(e,idx)}> <span className='delet'> Delete  </span>   {Name} </h1>
            <img className='dragon-Imge' style={{ width: "250px", hight: "250px" }} src={Imag} />  
            <Card.Body></Card.Body>
          </Card>

        </div> 
      ))} 
     
    </div> 
  );
}
