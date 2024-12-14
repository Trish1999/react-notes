//jsx
//JSX is a JavaScript syntactic extension.
// In jsx You can write HTML codes in the js file as by utilizing JSX.
//React will process the JSX and it will transform it into JavaScript that the browser will be able to interpret
//it has a tag  attribute and chilren like xml.

//in jsx you can unite any piece of javascript code between paranthesis{} it will work.

//jsx expression must have one parent element
<React.fragment></React.fragment> 
//or(empty tag)   <> </>
//but you can add styles to empty brackets

return(
    <react.fragment> 
    <App />
    </react.fragment>
)

//with jsx
return(
    <div className='dummy'>
    <h1>Hello trishna</h1>
    </div>
)
//without jsx
return React.createElement(
    'div',
    {id:"hello",className:"dummy"},
    React.createElement('h1',null,"hello trishna")
)

//html vs jsx
//In HTML we use the class attribute but in jsx we use className
//in html we use for but in jsx we use htmlFor
//in jsx we use camelCase naming convention (onclick--> onClick)
//html try to ingore errors and interpreat without breaking but in jsx you will get a clear error.
//in JSX we can embed JavaScript.

//---------------------------------------
//components:
//component is a part of user Interface

//there are two types of components
//these are re-useable and can be nested inside other component
//1.stateless functional component
function Welcome(props){
    return <h1>Hello,{props.name} </h1>
}

//2.statefull class component
class Welcome extends React.Component {
    render(){
         return <h1>Hello,{this.props.name} </h1>
    }
}

//using component inside another component its called component composition/composing component.
//3ways of component composition:
//1.{Title()}
//2.<Title/>          //generally used
//3.<Title></Title>

import React from 'react'
import './App.css'

function WelcomeMessage() {
 return <p>Welcome!</p>
}
 
function App() {    //parent component
 return (
 <div className="App">
  <WelcomeMessage /> {/*child component of APP() */}
 <h1>Learn React</h1>
</div>
 )
}
export default App;

