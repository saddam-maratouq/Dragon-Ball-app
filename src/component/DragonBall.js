import React, { useState } from "react";
import DragonBallCaracther from "./DragonBallCaracther";
import DragonBallData from "./DragonBallData";

export default function DragonBall() { 

  const [dragonData, SetDragonData] = useState(DragonBallData);



  return (
    <div>
     <DragonBallCaracther dragonData={dragonData}  /> 
    </div>
  );
}
