import React from "react";

import myProfile from "../assets/img/MySelf.jpg"
import UserContext from "../utils/UserContext";

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
            <img src={myProfile} className="w-64 r m-6 p-2 " alt="My Profile" />
            <div className="text-lg font-bold ml-8">
                <UserContext.Consumer>
                   {({logedInUser}) => <h1>Name : {logedInUser}</h1>}
                </UserContext.Consumer>
                 </div>
            <h2 className="text-lg font-bold ml-8">Id : {id}</h2>
            <h2>My Profile : </h2>


        </div>
        )
    }
}

export default Profile;