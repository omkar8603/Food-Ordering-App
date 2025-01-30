import js from '@eslint/js';
import {RestrauntList} from  '../constant';
import ReastaurantCard, {withPromotedLabel}  from './RestaurantCard'
import { useState, useEffect } from 'react';
import Shimmer from './shimmerUI';
import {Link} from 'react-router-dom';
import {filterData} from '../utils/helper.jsx'
import useRestaurantInfo from '../utils/useRestaurantInfo.jsx'
import {RESTAURANT_INFI_URL} from "../constant";
import useOnline from '../utils/useOnline.jsx';
import UserContext from '../utils/UserContext.jsx';
import { useContext } from 'react';


const Body = () => {

  
   // searchText is a local state variable  
   const [allRestaurant, SetAllRestaurant] = useState([])
   const [filterRestaurants , setFilterRestaurants] = useState([]);
   const [searchInput, setsearchInput] = useState("")

   const RestaurantCardPromoted = withPromotedLabel(ReastaurantCard);
  
   useEffect(() =>{
    console.log("use effect of body")

         getRestaurants();
   }, [])
  

   const {SetUserName, logedInUser} = useContext(UserContext);
   
     async function getRestaurants(){

       try {
          const data = await fetch(RESTAURANT_INFI_URL);
          const json = await data.json();

          console.log("Data ", json);
          console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          SetAllRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setFilterRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       }
       catch(error){
           console.log(error);
       }
      }

    const offline = useOnline();
  

    if (!offline){
      return <h1>Offline, Please check Your internet connection !!</h1>
    }

  
    

    console.log("render")

    // not render component (Early Return)
    if (!allRestaurant) return null;
   
    function filterlength(){
      return <h1 className='text-center font-bold'>Your Input Not Match here !!!</h1>
    }
   
    
    return (allRestaurant.length === 0) ? <Shimmer/> :   (  
       <div className='overflow-x-hidden'>
       <div className='search-container p-2 bg-pink-50 my-3 flex'>

        <input type="text" 
        className='p-2 m-2 rounded-md hover:bg-green-100' 
        placeholder='Search' 
        value={searchInput} 
        onChange={(e) => {
            setsearchInput(e?.target?.value); 
        }}
        />


       <button
         className='p-2 m-2 bg-purple-600 text-white rounded-md hover:bg-purple-900' 
         onClick={() =>{

          // need to filter the data
        const data = filterData(searchInput, allRestaurant);
          // update the state - restaurants
          setFilterRestaurants(data)    
        }}>
          Search
          </button>
        
        <button className='p-3 ml-6 my-2 rounded-lg  bg-green-100 hover:bg-green-200'
        onClick={() => {
          const filterdList = allRestaurant.filter(
            (res) => res?.info?.avgRating > 4.4
          );
          setFilterRestaurants(filterdList);
        }}>Top Rated Resturant</button>

        <div className='flex p-2 items-center'>
          <input type="text" value={logedInUser} 
          onChange={(e) => SetUserName(e?.target?.value)}
        
          className='border border-black p-2'/>

        </div>
       </div>

       
      <div className='flex sm:flex-wrap  overflow-x-auto ' > 
      {
        (filterRestaurants?.length) === 0 ? filterlength() :
        filterRestaurants?.map(restaurant => {
         
          
          return (  
        <Link to={"/resturant/" + restaurant?.info?.id} key={restaurant?.info?.id} >
          {
            restaurant?.info?.aggregatedDiscountInfoV3?.header === "ITEMS" ? (<RestaurantCardPromoted resData={restaurant} />)
             : (<ReastaurantCard  resData={restaurant}/>)
          }
          </Link>
          )
       })
      }
      </div>
      </div>
  
    )
  }   

export default Body;





// async function getRestaurants() {
                                
//   try {
//       const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0748&lng=72.8856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
//       const json = await data.json();
//       console.log("Data ", json);
//       console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//        SetAllRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//        setFilterRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//   }
//   catch (error) {
//     console.error("Error fetching restaurants:", error);
//  }