import { useEffect, useState } from "react";

const uselistofResturant = ()=>{
    const [listofResturant, setlistofResturant] = useState([]);
    useEffect(()=>{
        fetchData();
        // console.log("UseEffect called")
    },[])

    //fetching live data and puttind it in listofResturant
    const fetchData = async ()=>{
        const data = await fetch(
            "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json(); //await data.json();
        setlistofResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

    return listofResturant;
}

export default uselistofResturant;
