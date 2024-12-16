import React, { useEffect, useState } from "react";


import Kabinet from "../components/kabinet";
import "../page/css.css";

const LiKabinet =  () => {
    let [user, setUser]=useState([]);
    useEffect(()=>load(),[])
    function load(){
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${localStorage.token}`);
  
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  
  fetch("https://pets.сделай.site/api/users", requestOptions)
    .then((response) => response.json())
    .then((result) => {console.log(result);
     setUser(result);
    });
    }

    return ( 
        <div>
            <Kabinet data={user}/>
        </div>
     );
}

export default LiKabinet ;