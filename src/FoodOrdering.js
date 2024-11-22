import React, { lazy, Suspense} from "react";      
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
// import About from "./Components/About";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/ResturantMenu";
import { Provider } from "react-redux";
import {AppStore,persistor} from "./Utils/AppStore";
import Cart from "./Components/Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Components/Footer";
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
//chunking
//code spliting
// Dynamic Bundling
//Lazy Loading
//dynamic import
//Ondemand Loading

const About  = lazy(()=>import("./Components/About")); // dynamic import of about us page

const AppLayout = ()=>{
    return (
        // Redux 
    <Provider store={AppStore}>  
        {/* <UserContext.Provider></UserContext.Provider> context API */}
        <PersistGate loading={null} persistor={persistor}>
        <div className="App">
            
            <Header/>
            {/* <Body/> */}
            <Outlet/>
            <ToastContainer /> {/* Toaste notifications */}
            <Footer/>
        </div>
        </PersistGate>
    </Provider>
    );
}
 

const appRouter = createBrowserRouter([{
    path:"/",
    element: <AppLayout/>,
    children:[
        {
            path:"/",
            element:<Body />
        },
        {
            path:"/about",
            element:(<Suspense fallback={<h1>Loading...</h1>}>
                <About/>
            </Suspense>),
        },{
            path:"/contact",
            element:<Contact />
        },{
            path:"/restaurant/:resId",
            element:<RestaurantMenu />
        },{
            path:"/cart",
            element:<Cart/>
        }
    ],
    errorElement:<Error/>,
},])
const root = ReactDOM.createRoot(document.getElementById("main"))
root.render(< RouterProvider router ={appRouter}/>);