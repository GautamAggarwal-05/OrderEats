import { useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/links";
import{Link} from "react-router-dom"
import { useSelector } from "react-redux";
// let btnNamejs ="login"  //js variable
// click->login button whole header render again
const Header = ()=>{
    const [Reactbtn,setReactbtn] = useState("Log in"); //state variable
    console.log("Header Render");
    //if no dependency array => useEffect is called on every render
    // if dependency array is empty [] => useEffect is called on inital render (just once)
    // if dependency array is [Reactbtn] => called everytime btnName React is updated
    useEffect(()=>{
        console.log("useEffect render");
    },[Reactbtn])

    const cartItems = useSelector((store)=>store.cart.items)
    console.log(cartItems);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home </Link>
                    </li>
                    {/* IT reload the whole page  */}
                    <li>
                        <a href="/about">About Us </a>
                    </li>
                    {/* IT WILL NOT RELOAD AGAIN IT is just changing the components  -FAST */}
                    <li>
                        <Link to="/contact">Contact us </Link> 
                    </li>
                    <li><Link to="/cart">Cart 🛒({cartItems.length})</Link></li>
                    <button className="log-btn" onClick= {()=>{
                        // btnNamejs="logout"
                        // console.log(btnNamejs)
                        Reactbtn === "Log in"?setReactbtn("Log out"):setReactbtn("Log in");
                    }}>
                        {Reactbtn}
                        </button>
                </ul>
            </div>
            
        </div>

        
    );
}

export default Header