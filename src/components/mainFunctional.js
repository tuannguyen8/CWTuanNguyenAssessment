

import React, { useState, useEffect } from "react";
import starwars from "../APIs/starwars";

const MainFunctional = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    starwars.getPeople().then((response) => {
      console.log("response", response);
      setData(response);
    });
  }, []);

  return (
    <div className="App">
      {data.map((item, index) => {
        return ( 
          <div key={index} style = {{margin: 10 }}>
             <div >Name: {item.name}</div>
             <div >Height: {item.height}</div>
             <div >Mass: {item.mass}</div>
             <div >Hair: {item.hair_color}</div>
          </div>
        )
      })}
    </div>
  );
}

export default MainFunctional;