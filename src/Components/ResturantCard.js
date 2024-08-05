import { CDN_URL } from "../Utils/links";

// Instead of  writing props as object we can also destructre it =>({resName,cuisine})
// const ResturantCard = (props)=>{
//     console.log(props)  /*Props is object*/
//     return (
//         <div className="card">
//         <img className="card-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mrge2ngsi3frqem4yiak"/>
//         <h3>{props.resName}</h3>
//         <h5>{props.cuisine}</h5>
//         <h6>4.4 stars</h6>
//         <h6>38 minutes</h6>
//         </div>
//     );
// }


const ResturantCard = (props)=>{
    // destructuring props
    const{resData} = props;
    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
    } = resData?.info  //optional chaining
    
    const{
        deliveryTime
    }=resData?.info?.sla
    return (
        <div className="card">
        <img className="card-img" src={CDN_URL+cloudinaryImageId}/>
        <h3>{name}</h3>
        {/* <h5>{cuisines.join(", ")}</h5>  */}
        <h6>{avgRating}⭐</h6>
        <h6>⏱️{deliveryTime}minutes</h6>
        <h6>{costForTwo}</h6>
        </div>
    );
}

//Higher Order Components
//input - ResturantCard => ResturantCardPromoted
export const withPromotedlabel = (ResturantCard)=>{
    return (props)=>{
        return (
            <div>
            <label>Promoted</label>
            <ResturantCard {...props}/>
            </div>
        )
    }   
}

export default ResturantCard;