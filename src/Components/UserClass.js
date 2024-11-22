import React from 'react'

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userInfo:{
                name:"Dummy",
                Location:"Default",
            }
        }
    }
    async  componentDidMount(){
        const data = await fetch("https://api.github.com/users/GautamAggarwal-05");
        const json = await data.json();
        this.setState({
            userInfo:json
        });
        // console.log(json);
    }

    render() {
        const {name,location,
            avatar_url
            }= this.state.userInfo;
        return (
            <div className="user-Card">
            <div className='user'>
            <h2>Name: {name}</h2>
            <img src={avatar_url} />
            </div>
            <h3>Loaction: {location}</h3>
            <h4>Contact: gautamaggarwal@gmail.com</h4>
        </div>
          );
    }
}

export default UserClass
