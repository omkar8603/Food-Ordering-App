
import { useState } from "react";
import Logo from "../assets/img/logo.jpg"
import { Link } from "react-router-dom";  



//Image Url --> https://tse1.mm.bing.net/th?id=OIP.owHK7KHShgdzPZW8ucuoIgHaHc&pid=Api&P=0&h=180


const Title = () => {
    return (
       <div>

        <a href="/">
         <img className='logo' alt="Logo"  src={Logo} />
         {/* <h1 id='title'>Food Villa</h1> */}
         </a>
       </div>
    )
}


const Header = () =>{

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
  <div className='header'>
      <Title/>
      
      <div className='nav-items'>
        <ul>
           <li> <Link to="/">Home</Link></li>
           <li> <Link to="/about">About</Link></li>
           <li> <Link to="/contact">Contact</Link></li>
           <li>Cart</li>
           <li> <Link to="/instamart">Instamart </Link></li>
            </ul>
      </div>
     

     {
      isLoggedIn ? 
      <button onClick={() => setIsLoggedIn(false)}>Logout</button> : 
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
     }
      
   </div>
  )
}

export default Header;