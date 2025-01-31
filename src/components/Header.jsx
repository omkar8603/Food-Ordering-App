
import { useContext, useState } from "react";
import Logo from "../assets/img/logo.jpg"
import { Link } from "react-router-dom";  
import UserContext from "../utils/UserContext";
import shopping_cart from '../assets/img/2.png'
import { useSelector } from "react-redux";



//Image Url --> https://tse1.mm.bing.net/th?id=OIP.owHK7KHShgdzPZW8ucuoIgHaHc&pid=Api&P=0&h=180


const Title = () => { 
    return (
       <div>
        <a href="/">
         <img className="h-28 w-full items-center p-2 ml-2 mt-1 " alt="Logo"  src={Logo} />
         {/* <h1 className="font-bold text-center">Food Villa</h1> */}
         </a>
       </div>
    )
}


const Header = () =>{

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const {logedInUser} = useContext(UserContext);

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store?.cart?.items)

  return (
 
    <div className="bg-blue-50 shadow-md sm:bg-pink-50 sticky top-0 z-10 ">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-center h-auto sm:h-32">
      <div className="items-center">
          <Title />
        </div>
      
      <div className='"nav-items w-full sm:w-auto flex justify-center sm:justify-start py-4 sm:py-0'>
        <ul className="flex flex-col sm:flex-row sm:items-center ">
           <li className="px-2"> <Link to="/">Home</Link></li>
           <li className="px-2"> <Link to="/about">About</Link></li>
           <li className="px-3"> <Link to="/contact">Contact</Link></li>
           <li className="flex">
          <Link to="/cart" className="flex items-center">
          <img src={shopping_cart} className="w-5 h-6 mr-1" alt="shopping cart" />
           <span className="font-bold">Cart - ({cartItems.length} items)</span>
            </Link>
          </li>
           <li className="px-3"> <Link to="/instamart">Instamart </Link></li>
            </ul>
      </div>
     

      <div className="w-full m-2 sm:w-auto flex justify-center sm:justify-end py-4 sm:py-0">
          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(false)}
              className="p-3 bg-green-500 text-white rounded"
            >
              Login : {logedInUser}
            </button>
          ) : (
            <button
              onClick={() => setIsLoggedIn(true)}
              className="p-3 bg-red-500 text-white rounded"
            > 
              Logout
            </button>
          )}
        </div>
      
   </div>
   </div>

  )
}

export default Header;



  // <div className='flex justify-between h-32 bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50'