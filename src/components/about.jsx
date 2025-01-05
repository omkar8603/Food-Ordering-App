import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClassComponent from "./ProfileClass";
import React from "react";
import js from "@eslint/js";
// const About2 = () => {

//     return (
//         <div>
//          <h1>About Us Page</h1>
//          <p>
//             {" "}
//             This is Food Villa App Here You Can Order Your Delesious Food and Enjoy

//         </p>
//         <ProfileClassComponent name={"OmkarClass"} />
//         <Profile name={"Omkar"}/>
        
//         </div>
     
//     )
// }

class About extends React.Component {

    constructor(props){
        super(props)
        console.log("Parent -  Constuctor");
     
    }

   async componentDidMount() {
        // Best Place to make an Api Call
   
        console.log("Parent - ComponentDidMount");

    }

    render() {

       console.log("Parent - render");
       return (
            <div>
             <h1>About Us Page</h1>
            

             <p>
                {" "}
                This is Food Villa App Here You Can Order Your Delesious Food and Enjoy
    
            </p>
            <ProfileClassComponent name={"First"} />
             <Profile/>
            </div>
         
        )

    }
}

export default About;

 