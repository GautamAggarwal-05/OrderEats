import { useState } from "react";

const User = ({name}) => {
    const[count] = useState(0);
    return (
        <div className="user-Card">
            <h1 style={{borderBottom:"0.1vw solid grey"}}>Count:{count}</h1>
            <h2>name: {name}</h2>
            <h3>Loaction: Dehradun</h3>
            <h4>Contact: gautamaggarwal@gmail.com</h4>
        </div>
    );
}

export default User;