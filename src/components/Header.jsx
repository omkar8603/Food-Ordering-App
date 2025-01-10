
import { useState } from "react";
import Logo from "../assets/img/logo.jpg"
import { Link } from "react-router-dom";  



//Image Url --> https://tse1.mm.bing.net/th?id=OIP.owHK7KHShgdzPZW8ucuoIgHaHc&pid=Api&P=0&h=180


const Title = () => {
    return (
       <div>


        <a href="/">
         <img className="h-28 p-2 ml-2 mt-1 " alt="Logo"  src={Logo} />
         {/* <h1 id='title'>Food Villa</h1> */}
         </a>
       </div>
    )
}


const Header = () =>{

  const [isLoggedIn, setIsLoggedIn] = useState(false)
 
  return (
  <div className='flex justify-between h-32 bg-pink-50 shadow-lg '>
      <Title/>
      
      <div className='nav-items'>
        <ul className="flex  py-11 ">
           <li className="px-2"> <Link to="/">Home</Link></li>
           <li className="px-2"> <Link to="/about">About</Link></li>
           <li className="px-2"> <Link to="/contact">Contact</Link></li>
           <li className="px-2">Cart</li>
           <li className="px-2"> <Link to="/instamart">Instamart </Link></li>
            </ul>
      </div>
     

     {
      isLoggedIn ? 
      <button onClick={() => setIsLoggedIn(false)} className="p-5" >Logout</button> : 
      <button onClick={() => setIsLoggedIn(true)} className='p-5'>Login</button>
     }
      
   </div>
  )
}

export default Header;



  // <div className='flex justify-between h-32 bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50'