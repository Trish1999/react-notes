//State in React.js refers to the variables that determine a component's behavior and render its content.
//State can be changed within a component, which will trigger a re-render.

//class component state
import React, { Component } from 'react';

class MyComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            message: "wellcome visitor"
        }
    }

    changeMessage(){
        this.setState({
            message:"thank you for subscribing"
        })
    }

    render(){
    return(
        <div>
        <h1> {this.state.message}</h1>
         <button onClick={()=>this.changeMessage()}>subscribe</button>
       </div>
    )
}
}

export default MyComponent;

//-------------------------------------

incrementfive(){
    this.setState(prevState=>({
    count:prevState.counr+1
}))
console.log(this.state.count);
}

//always make use of setState and never modify the state directly.
//code has to be executed after the state has been updated.place that function in callback function which is the second argument to the setState method.
//when you have to update state based on the previous state value pass in a function as an argument instate of the regular object.