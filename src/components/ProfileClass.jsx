import React from "react";

import myProfile from "../assets/img/MySelf.jpg"

class Profile extends React.Component {

    constructor(props){
        super(props);
        // Create State
        this.state = {
           
         userInfo :  {
           login : "Omkar Mane",
           id : "123456",
        }
    }
        console.log(this.props.name + "Child - Constructor");
    }

    async componentDidMount(){
         // Best Place to make an Api Call

    //    this.timer = setInterval (() =>{
    //       console.log("NAMSTE REACT OP ");
    //    },1000)

       console.log(this.props.name + "Child - componentDidMount")
    }

    componentDidUpdate(){
        console.log("Child - componentDidUpdate")
    }
    
    componentWillUnmount(){
        // clearInterval(this.timer);
        console.log("Child - ComponentWillUnmount")
    }

    render() {
        const {login , id, location } = this?.state?.userInfo;
        console.log( this.props.name + "Child - render")

        return  (<div>
            <h1>Profile Class Component</h1>
            <img src={myProfile} className="myProfile" alt="My Profile" />
            <h2>UserName : {login} </h2>
            <h2>Id : {id}</h2>
            <h2>My Profile : </h2>


        </div>
        )
    }
}

export default Profile;