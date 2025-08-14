import React from "react";
import { useState } from "react";

const User = (props) =>{
    const{name,location}=props;
    const[count,setCount]=useState(0);
    const[loginButt,setLoginButt]=useState("Login");
    return(
        <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={()=>{
                setCount(count+1);
            }}>Increase Count</button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <button onClick={()=>{
                if(loginButt=="Login"){
                    setLoginButt("LogOut");
                }
                else{
                    setLoginButt("Login");
                }
            }}>{loginButt}</button>
        </div>
    )
}

export default User;