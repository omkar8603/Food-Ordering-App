
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
 
    <div className="bg-blue-50 shadow-md sm:bg-pink-50 sticky top-0 z-10 ">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-center h-auto sm:h-32">
      <div className="w-full sm:w-auto text-center sm:text-left py-4 sm:py-0">
          <Title />
        </div>
      
      <div className='"nav-items w-full sm:w-auto flex justify-center sm:justify-start py-4 sm:py-0'>
        <ul className="flex flex-col sm:flex-row sm:items-center ">
           <li className="px-2"> <Link to="/">Home</Link></li>
           <li className="px-2"> <Link to="/about">About</Link></li>
           <li className="px-2"> <Link to="/contact">Contact</Link></li>
           <li className="px-2">Cart</li>
           <li className="px-2"> <Link to="/instamart">Instamart </Link></li>
            </ul>
      </div>
     

      <div className="w-full sm:w-auto flex justify-center sm:justify-end py-4 sm:py-0">
          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(false)}
              className="p-3 bg-red-500 text-white rounded"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setIsLoggedIn(true)}
              className="p-3 bg-green-500 text-white rounded"
            >
              Login
            </button>
          )}
        </div>
      
   </div>
   </div>

  )
}

export default Header;



  // <div className='flex justify-between h-32 bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50'