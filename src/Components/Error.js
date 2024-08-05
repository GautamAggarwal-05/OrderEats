import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <h1>OOPS!!  something went Wrong</h1>
            <h3>{err.data}</h3>
            <h4>{err.status}:{err.statusText}</h4>
        </div>
    );
}

export default Error