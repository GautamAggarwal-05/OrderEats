import ResturantCard,{withPromotedlabel} from "./ResturantCard";
import resList from "../Utils/mockData";  //WE DONT NEED IT ANYMORE SINCE WE ARE FETCHING DIRECTLY FROM API
import { useEffect, useState } from "react";
import Shimmer from "./shimmer.js";
import{Link} from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus.js";
import uselistofResturant from "../Utils/uselistofResturants.js";

//not using keys(not acceptable)<<<index as key <<< unique id
let API_DATA = [] 
const Body = ()=>{
    //State Variable
    // This is just array destructuring
    // const arr= useState(resList)
    // const [listofResturant,setlistofResturant] = arr;
    // const [listofResturant,setlistofResturant] = useState(resList)
    const [listofResturant,setlistofResturant] = useState([])
    const [searchtext,setsearchtext] = useState("")
    const ResturantPromotedCard = withPromotedlabel(ResturantCard);
    API_DATA = uselistofResturant()  // custom hook to get API data of resturants
    useEffect(()=>{
      setlistofResturant(API_DATA)
    },[API_DATA])
    // setlistofResturant(API_DATA); dont call directly otherwise it will go in inifinite render loop

    const onlineStatus = useOnlineStatus(); // custom hook to check wether the user is online or not
    if(onlineStatus === false)
        return <h1>Please Check Your Internet Connection!!</h1>

    if(listofResturant.length === 0){
      return <Shimmer />;
    }
    console.log("Body renderd called")

    const handleSearchChange = (e) => {
      const value = e.target.value; // Get the current value
    setsearchtext(value); // Update the state

    // Check if the input is empty
    if (value === "") {
        setlistofResturant(API_DATA); // Reset to show all restaurants
    } else {
        // Filter using the updated value
        const filteredList = API_DATA.filter((res) =>
            res.info.name.toLowerCase().includes(value.toLowerCase())
        );

        // Check if the filtered list is empty and handle accordingly
        if (filteredList.length === 0) {
          setsearchtext(value); // Optionally set to empty or show a message
        } else {
            setlistofResturant(filteredList); // Update the restaurant list
        }
    }
  };

    return (
        <div className="body">

        <div id="panel-container">  
            <div id="panelword">
            <h1 className="title">Having a Tough Day?</h1>
            <h2 className="subtitle">Treat Yourself to Some Delicious Food!</h2>
            </div>
            <div id="pimg">
                    <img className="panel-img" src = "https://tse2.mm.bing.net/th?id=OIP.x9E1N5-6UJve5OB8KgLxbwHaFj&pid=Api&P=0&h=180"/>
            </div>
        </div>  
        <div className="filter">
        <button className="filter-btn" 
        onClick={()=>{
            //Rating filter Logic here  on click of a button
            //to update changes in state variable we will use  setlistofResturant argument 
            const filteredList = API_DATA.filter(
                (res)=> res.info.avgRating > 4.5 
            );
            setlistofResturant(filteredList); //updating my listofResturant with fliteredList
        }}>Top Rated Restaurant</button>

        <button className="filter-btn" 
        onClick={()=>{
            // Reset button
            setlistofResturant(API_DATA); //updating my listofResturant with fliteredList
            setsearchtext("")
        }}>All Restaurant</button>

        <div className="search">
          <input type ="text" className="search-box" placeholder="Search..."  value={searchtext} onChange={handleSearchChange} />

          <button className="search-btn" onClick={()=> {
            //if the word input in search present in name or not 
            const filterlist = API_DATA.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase())) 
            setlistofResturant(filterlist)
          }}>🔍</button>
        </div>
        </div>
        <div className="res-container">

            {/* Passing props to component */}
        {/* <ResturantCard resName="Meghana Foods" cuisine="Biriyani,North-Indian,Asian" />
        <ResturantCard resName="KFC" cuisine="Burger,Fast Food"/> */}

          {listofResturant.map((resturant)=>(
            <Link
              key ={resturant.info.id}
               to={"/restaurant/" + resturant.info.id}>
          {resturant.info.promoted ?(<ResturantPromotedCard resData={resturant}/>):
          <ResturantCard resData={resturant}/>
          }
          </Link>
        )) }
         
        
        </div>
    </div>
    );
}
export default Body;