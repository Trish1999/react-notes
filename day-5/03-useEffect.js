// useEffect
//Handles side effects like fetching data, subscriptions, or manually updating the DOM.
// replacement  of lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array = run only once

  return <p>Seconds: {seconds}</p>;
}
