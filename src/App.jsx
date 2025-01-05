// App.js
import React, { useEffect, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/body';
import Footer from './components/footer';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './components/Error';
import Contact from './components/contact';
import RestaurantMenu from './components/RestauirantMenu';
import Profile from './components/ProfileClass.jsx';
import ShimmerLoader from './components/shimmerUI.jsx';
// import Instamart from './components/Instamart.jsx';

//Dynamic Import

const Instamart = lazy(() => import("./components/Instamart.jsx"));
const About = lazy(() => import("./components/about.jsx"));


const AppLayout = () => {
   
  return ( 
     <> 
        <Header/> 
        <Outlet/>
         <Footer/>
      </>
  )
      
}


const appRouter = createBrowserRouter(
   [
     {
       path: '/',
       element: <AppLayout />,
       errorElement: <Error />,
       children : [
        {
          path: '/about',
          element: <Suspense fallback={<h1>Loading...</h1>}> <About /> </Suspense>,
          errorElement: <Error />,
          children : [
            {
              path : "profile",
              element: <Profile/>,
              errorElement : <Error/> 
            }
          ]
        },
        {
          path : '/',
          element : <Body/>,
          errorElement : <Error/>
        },
        {
          path : '/contact',
          element : <Contact/>,
          errorElement : <Error/>
        },
        {
          path : '/resturant/:id',
          element : < RestaurantMenu/>,
          errorElement : <Error/>
        },
        {
          path : "/instamart",
          element : <Suspense fallback={<ShimmerLoader/>}> 
                    <Instamart/> 
                    </Suspense>,
          errorElement : <Error/>
        }
       ]
     },
    

   ], {
      future: {
        v7_startTransition: true, // Wraps state updates in React.startTransition
        v7_relativeSplatPath: true, // Updates route resolution within splat routes
        v7_fetcherPersist: true, // Chan
        v7_partialHydration: true, // Updates hydration behavior for RouterProvider
        v7_skipActionErrorRevalidation: true, // Changes action error revalidation behavior
      },
    }
 );
 

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter}/>);



 