//it is nothing but a javascript function,that excepts an input of properties as props and returns jsx to describe the ui. 

//react element vs react functional component
//react element is an abject where as functional component is a function.

import React from "react"
//normal function
function Greet(){
    return 
    <h1>hello trishna</h1>
}
//arrow function
 export const Greet =() =><h1>hello trishna</h1>

export default Greet;

//if you are using export default you can import this component using any name

import MyComponent from "../MyComponent"

const App =()=>{
    return(
        <>
        <MyComponent/>
        </>
    )
}

export default App;

//but if you are exporting the function directly (like the above arrow function) you have to import the Component by using Same name as the function

import {Greet} from "../Greet"

const App =()=>{
    return(
        <>
        <Greet/>
        </>
    )
}
export default App;

//-----------------------------------------------------
//class comonents are basically ES6classes,it optionally receives props and returns jsx as ui.

//in class component we need to include two imports
//react and the component class
//it has its own private data state
//

import  React,{Component};
import MyComponent from "../MyComponent";

class App extends Component{
    render(){
        return(
            <div>
            <MyComponent/>
            </div>
        )
    }
};

export default App;

//--------------------------------------------------------------------------
//functional component            vs              class component
//--------------------------------------------------------------------------
// Feature: Syntax
// Functional: Function-based
// Class: Class-based

// Feature: State Handling
// Functional: React Hooks (useState)
// Class: this.state

// Feature: Lifecycle Methods
// Functional: Hooks (useEffect)
// Class: Class lifecycle methods

// Feature: Simplicity
// Functional: More concise
// Class: More verbose



