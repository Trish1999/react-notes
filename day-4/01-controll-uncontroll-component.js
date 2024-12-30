//Controlled and uncontrolled components are just different approaches to handling input from elements in react.

//controlled component
// A controlled component is a form element whose value is controlled by React's state.
//You update the state using an onChange handler.
//we check whether the value entered is valid or invalid. If the value is valid, we change the state and re-render the input element with the new value.


import React, { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;

//Validation in Controlled Components
const [name, setName] = useState('');
const [error, setError] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  if (name.trim() === '') {
    setError('Name is required!');
  } else {
    setError('');
    alert(`Submitted Name: ${name}`);
  }
};

//------------------------------------
// Uncontrolled Components
// An uncontrolled component is a form element whose value is managed by the DOM, not React's state.
//Use ref to access the DOM elements and retrieve their values.

import React, { useRef } from 'react';

function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" ref={nameRef} />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" ref={emailRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;

//Validation in Uncontrolled Components

const handleSubmit = (e) => {
  e.preventDefault();
  if (nameRef.current.value.trim() === '') {
    alert('Name is required!');
  } else {
    alert(`Submitted Name: ${nameRef.current.value}`);
  }
};