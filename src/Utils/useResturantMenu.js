//Custom Hooks
import { useEffect, useState } from 'react'
import { MENU_API } from "../Utils/links";

function useResturantMenu(resId) {
    const [menuInfo, setMenuInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async () => {
        try {
          const apiData = await fetch(MENU_API + resId);
          const json = await apiData.json();
          setMenuInfo(json.data);
        } catch (error) {
          console.error("Error fetching menu data:", error);
          // Handle the error gracefully (e.g., display an error message to the user)
        }
      };
    
    return menuInfo
}

export default useResturantMenu
