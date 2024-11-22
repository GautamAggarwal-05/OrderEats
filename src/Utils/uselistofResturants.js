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
            `${process.env.BACKEND_BASEURL}/api/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
    const json = await data.json(); //await data.json();
        setlistofResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

    return listofResturant;
}

export default uselistofResturant;
