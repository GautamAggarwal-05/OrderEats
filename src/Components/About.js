import User from "./user";
import UserClass from "./UserClass"; // classBased Component
const about = ()=>{
    return (
        <div>
            <h1 style={{textAlign:"center" }}>About Us</h1>
            {/* <User name={"Gautam Aggarwal(function)"} /> */}
            <UserClass name= {"Gautam Aggarwal(Class)"}/>
        </div>
    );
}

export default about;