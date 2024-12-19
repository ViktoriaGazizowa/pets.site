import React, { useEffect, useState } from "react";


import Kabinet from "../components/kabinet";
import MyAds from "../components/MyAds";


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
            <MyAds/>
        </div>
     );
}

export default LiKabinet ;