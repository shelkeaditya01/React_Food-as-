import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return (
        <div className="about">
            <h1>About</h1>
            <h1>I am Aditya Shelke.</h1>
            {/* <User name={"Aditya Shelke"} location={"Shirdi"}/> */}
            <UserClass name={"Aditya Shelke"} location={"Shirdi"}/>
        </div>
    )
}

export default About;