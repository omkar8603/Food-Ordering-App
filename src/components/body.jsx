import js from '@eslint/js';
import {RestrauntList} from  '../constant';
import ReastaurantCard  from './RestaurantCard'
import { useState, useEffect } from 'react';
import Shimmer from './shimmerUI';
import {Link} from 'react-router-dom';
import {filterData} from '../utils/helper.jsx'
import useRestaurantInfo from '../utils/useRestaurantInfo.jsx'
import {RESTAURANT_INFI_URL} from "../constant";
import useOnline from '../utils/useOnline.jsx';


const Body = () => {
   // searchText is a local state variable  
   const [allRestaurant, SetAllRestaurant] = useState([])
   const [filterRestaurants , setFilterRestaurants] = useState([]);
   const [searchInput, setsearchInput] = useState("")

 
   
   useEffect(() =>{
    console.log("use effect of body")

         getRestaurants();
   }, [])

   
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
    console.log(offline);

    if (!offline){
      return <h1>Offline, Please check Your internet connection !!</h1>
    }

   
    console.log("render")

    // not render component (Early Return)
    if (!allRestaurant) return null;
   
    function filterlength(){
      return <h1>Your Input Not Match here !!!</h1>
    }
   
    
    return (allRestaurant.length === 0) ? <Shimmer/> :   (  
       <>
       <div className='search-container'>

        <input type="text" 
        className='search-input' 
        placeholder='Search' 
        value={searchInput} 
        onChange={(e) => {
            setsearchInput(e.target.value); 
        }}
        />


       <button
         className='search-btn' 
         onClick={() =>{

          // need to filter the data
        const data = filterData(searchInput, allRestaurant);
          // update the state - restaurants
          setFilterRestaurants(data)    
        }}>
          Search
          </button>

       </div>

       
      <div className='restaurant-list'> 
      {
        (filterRestaurants?.length) === 0 ? filterlength() :
        filterRestaurants?.map(restaurant => {
          return (  
        <Link to={"/resturant/" + restaurant.info.id} key={restaurant.info.id}>
          <ReastaurantCard {...restaurant.info}  />
          </Link>
          )
       })
      }
      </div>
      </>
  
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