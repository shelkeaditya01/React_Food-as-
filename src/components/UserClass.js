import React from "react";



class UserClass extends React.Component{
    constructor(){
        super();

        this.state={
            userInfo:{
                name: "Dummy",
                location: "Default"
            }
        }
    }

    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/shelkeaditya01");
        const json=await data.json();

        this.setState({
            userInfo: json
        })
        console.log(json);
    }
    render(){
        const{login,type,avtar_url}=this.state.userInfo;
        return(
            <div className="user-card">
                <img src="{avtar_url}"></img>
                <h2>Name: {login}</h2>
                <h3>Location: {type}</h3>
            </div>
        )
    }
}

export default UserClass;