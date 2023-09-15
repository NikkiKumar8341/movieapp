import React, { Component } from 'react';
import UserContext from '../utils/UserContext';

class UserClass extends Component {

    constructor(props){
        super(props)

        this.state={
            count:0,
            count2:2,
        };

        console.log(this.props.name,"child construtor");
    }

    componentDidMount(){
        console.log(this.props.name,"component diamount");
    }

    render() {

        console.log(this.props.name,"Child render");

        const{name,location}=this.props

        const{count}=this.state

        return (
            <div className='user-card'>
                <h2>name : {name}</h2>
                <h3>Location: {location} </h3>
                <h4>{count}</h4>
                <button  onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>count</button>

                <div>
                    <UserContext.Consumer>
                        {({loggedInUser})=> <h1 className='font-extrabold'>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                
                </div>
                
    
                <h4>Contact: nikhilKumar@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;