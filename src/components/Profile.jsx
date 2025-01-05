import { useEffect, useState }  from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        // API Call
        console.log("Use Effect")

       const timer = setInterval(() => {
            console.log("NAMSTE REACT OP ");
        }, 1000);
        
        return () => {
            clearInterval(timer);
            console.log("I am from useEffect Return ");
        }
    })

    console.log("render");
    return (
        <div>
            <h2>Profile Component</h2>
            <h1>Names : {props.name}</h1>
            <h2>Count : {count}</h2>
            <button onClick={() => {
                setCount(1);
            }}>count</button>
           
        </div>
    )
}

export default Profile;