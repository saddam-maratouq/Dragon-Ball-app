import React from "react";
import Card from "react-bootstrap/Card"; 
import './DragonCaracter.styles.css'

export default function DragonBallCaracther({ dragonData }) {
  return ( 

    <div className='dragon'>

      {dragonData.map(({ Name, Imag }, idx) => (
        <div key={idx}>
          <Card style={{ width: "20px", hight: "20px" }}>
            <h1> {Name}</h1>
            <img className='dragon-Imge' style={{ width: "250px", hight: "250px" }} src={Imag} />  
            <Card.Body></Card.Body>
          </Card>

        </div>
      ))}
    </div> 
  );
}
