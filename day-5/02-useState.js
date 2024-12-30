//useState
//Manages state in a functional component.
//usestatehook may be an string ,object,array
//it reaturns an array with two elements  first is the current value of thr state and the setter function of the state.
//new state value depends on the previous state value
//when dealing with objects or arrays always make sure to spread your state variable and then call the setter function. 

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // [state, updater function]

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
//-------------------------------------------

import React, { useState } from 'react';

function HookCounterTwo() {
const initialCount = 0;
const [count, setCount] = useState(initialCount);
const incrementByFive = () => {
for (let i = 0; i < 5; i++) {
setCount((prevCount) => prevCount + 1);
}
};
return (
<div>
<h1>{count}</h1>
<button onClick={() => setCount(initialCount)}>Reset Count</button>
<button onClick={() => setCount(count + 1)}> increment count</button>
<button onClick={() => setCount(count - 1)}> Decrement count</button>
<button onClick={incrementByFive}>Increment by Five</button>
</div>
);
}
export default HookCounterTwo;


