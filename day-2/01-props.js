//you can set the state,in the parent component and pass it to the child component using props.

//props
//its the sort of property that your components accepts from its parent component.
//props can be used dynamically.
<MyComponent message="hello"/>
<MyComponent message="minu"/>

//props are immuatable their values can not be changed.

//default props:we can set default value for props using "defaultProps"
//if a prop is not provided default value will be used
MyComponent.defaultProps={
    message:"default value"
}

 App.js
 //-------
import MyComponent from "../MyComponent"

const App =()=>{
    return(
        <>
        <MyComponent name="trishna" age="25"/>
        <MyComponent >
        <button>action</button>
        </MyComponent>
        </>
    )
}

export default App;

MyComponent.js
//-----------------
import React from 'react';

const MyComponent=(props)=>{
 return ( 
    <>
    <h1>hello {props.name}</h1>
    <h2>age {props.age}</h2>
    {props.children}
    </>
    )//hello trishna
     //age 25
     //<action button>
}

export default MyComponent;


//in classcomponent ne fetch the props by using this keyword
import React, { Component } from 'react';
class MyComponent extends Component{
    render(){
    return(
        <>
        <h1> hello {this.props.name}</h1>
        <h2>age {this.props.age}</h2>
       </>
    )//hello trishna
    }//age 25
}
export default MyComponent;


