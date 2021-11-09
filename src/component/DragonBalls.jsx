import React, { useState } from 'react' 
import DragonBallMap from './DragonBallMap';

export default function DragonBalls({AddHandler,datas}) { 



    const [InputData,SetInputData] = useState({
        id : '' , 
        Name : '' ,
        Imag : ''  ,
    }) 


    const handlerChange = (e) => {  
        console.log(e.target);
        const value = e.target.value 
        const key = e.target.id 

        if (key ==='Name') {
            SetInputData({...InputData, Name : value  }) 
            
        } 
        else if ( key === 'Imag') { 

            SetInputData({...InputData, Imag : value  })  

        } 
    }    
    ////////////////////////////////////


    const handlerSubmit = (e) => {
       e.preventDefault()  

     
           AddHandler({ 

               id : Math.round(Math.random  *1000) , 
               ...InputData
           })  


      


    } 







    return (
        <div>
            <form onSubmit={handlerSubmit} >
            <input type="text" placeholder='charcter Name' id='Name' value={InputData.Name} onChange={handlerChange} /> 

            <input type="text" placeholder='charcter Image ' id='Imag' value={InputData.Imag} onChange={handlerChange} /> 
          
            <button type='submit'  > Add dragon ball charcter </button>  

            </form> 

            <DragonBallMap datas={datas}   InputNameState={InputData.Name}   /> 
        </div>
    )
}

