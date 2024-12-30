//React.js lifecycle methods are used to manage the various stages of a component's lifecycle, such as mounting, updating, and unmounting.

//Lifecycle methods can be used to perform actions such as fetching data, setting up subscriptions, or updating the component's state.

//Lifecycle Methods for Class Components

//1. Mounting
//Called before the component is mounted.
//Used for initializing state and binding methods
constructor()
static getDerivedStateFromProps(props, state)
render()
componentDidMount()

//2. Updating
//In this phase, a component will be updated when there is a change inthe state or props of a component. This phase will have lifecycle methods like
static getDerivedStateFromProps(props, state)
shouldComponentUpdate(nextProps, nextState)
render()
getSnapshotBeforeUpdate(prevProps, prevState)
componentDidUpdate(prevProps, prevState, snapshot)

//3. Unmounting
//Called just before the component is removed from the DOM.
//Ideal for cleanup tasks like canceling subscriptions or timers.
componentWillUnmount()

//4.errorHandeling
//Updates the state to display afallback UI or Logs error information.
static getDerivedStateFromError(error)componentDidCatch(error, info)


//---------------------------------------
//Lifecycle in Functional Components with Hooks

//React Hooks like useEffect mimic lifecycle methods in functional components.

//1.Mounting
useEffect(() => {
  console.log('Component mounted');
  fetchData();

  return () => {
    console.log('Cleanup on unmount');
  };
}, []); // Empty dependency array means this runs only once (on mount).

//2.Updating
useEffect(() => {
  console.log('State or props updated');
}, [dependency]); // Runs when `dependency` changes.

//3.Unmounting
useEffect(() => {
  return () => {
    console.log('Cleanup before unmount');
  };
}, []);

//4.Error Handling
// Use Error Boundaries for error handling, which are implemented as class components.