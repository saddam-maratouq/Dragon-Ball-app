import React from 'react'
import Card from "react-bootstrap/Card"; 


export default function DragonBallCard({Name,Imag,id,deletHandler}) {
    return (
                        <div>
                            <div   > 

                <Card.Body style={{ width: "20px", hight: "20px" }}> 


                <h1 onClick={(e)=> deletHandler(e,id)}> <span className='delet'> Delete  </span>   {Name} </h1>
                <img className='dragon-Imge' style={{ width: "250px", hight: "250px" }} src={Imag} />  
                </Card.Body>

            </div> 
        </div>
    )
}
