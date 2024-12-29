// events are triggered by user for interaction like clicking, typing, hovering, or submitting forms.
//Even handeling:
//Event handling in React.js is done using the onEventName syntax,such as onClick or onSubmit.
//React uses camelCase for event names 

//examples
// onClick -----Mouse clicks
// onChange------Input, select
// onSubmit------Form submission
// onKeyDown------	Key press (keydown)
// onKeyUp-------	Key release
// onMouseEnter------Mouse enters an element
// onMouseLeave-------Mouse leaves an element
// onFocus-------Focus on an input/element
// onBlur-------Loss of focus on an element

//functional component
//--------------------------------
function FunctionClicked(){

    function clickHandler(){
        console.log("button clicked !");
    }

    return(
        <div>
        <button onClick={clickHandler}>click</button>
        </div>//if you write  onClick={clickHandler()}it a functioncall
    )
}
export default FunctionClicked;

//class component
//------------------------
import React, { Component } from 'react';

class MyComponent extends Component{
    clickHandler(){
        console.log("button clicked !");
    }

    render(){
    return(
        <div>
        <button onClick={this.clickHandler}>click</button>
       </div>
    )
    }
}

export default MyComponent;

//-----------------------------
// Passing Arguments to Event Handlers
// Use arrow functions or bind the function to pass arguments.

function handleClick(message) {
  alert(message);
}
// Option 1: Arrow function
<button onClick={() => handleClick('Hello!')}>Click Me</button>

// Option 2: Bind
<button onClick={handleClick.bind(this, 'Hello!')}>Click Me</button>

//------------------------------
//  Inline vs External Handlers
// Inline: Quick and concise but less reusable.
// External: Encourages reusability and cleaner code.

// Inline
<button onClick={() => alert('Clicked!')}>Click Me</button>

// External
function handleClick() {
  alert('Clicked!');
}
<button onClick={handleClick}>Click Me</button>

//----------------------------

//Prevent Default Behavior
//Use event.preventDefault() to stop default actions like form submission or link navigation.

function handleSubmit(event) {
  event.preventDefault();
  alert('Form submitted!');
}

<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>

//-------------------------
//Event Pooling
//React reuses event objects for performance, so events may become nullified after asynchronous operations. Use event.persist() if you need to access the event later.

function handleInput(event) {
  event.persist(); // Prevent nullification
  setTimeout(() => {
    console.log(event.target.value);
  }, 1000);
}
<input onChange={handleInput} />;
