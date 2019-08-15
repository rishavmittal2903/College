import {render} from "react-dom";
import React from 'react';
import {connect} from 'react-redux';
import{changeName} from '../Actions/SampleAction'
class App extends React.Component
{
    constructor()
    {
        super();
        
    }
    render()
    {
        return(
            <div>
            <div className="mainDiv">Hello {this.props.user.username}</div>
            <button onClick={()=>this.props.setName("rishav")}>Click me!!</button>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        user:state.sampleReducer    
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        setName:(name)=>{
            dispatch(changeName(name))
        }   
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
