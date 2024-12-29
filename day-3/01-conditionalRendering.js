//Conditional rendering in React allows you to render components or elements based on certain conditions

//1.if/examples

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}

<Greeting isLoggedIn={true} />;

//2.Using Logical && Operator
function Notification({ hasUnreadMessages }) {
  return (
    <div>
      {hasUnreadMessages && <p>You have unread messages!</p>}
    </div>
  );
}

<Notification hasUnreadMessages={true} />;

//3.ternary conditional operator
function Greeting({ isLoggedIn }) {
  return (
    <h1>
      {isLoggedIn ? 'Welcome back!' : 'Please log in.'}
    </h1>
  );
}

<Greeting isLoggedIn={false} />;

//4. Using switch Statements
function Status({ status }) {
  switch (status) {
    case 'loading':
      return <p>Loading...</p>;
    case 'success':
      return <p>Data loaded successfully!</p>;
    case 'error':
      return <p>Error loading data!</p>;
    default:
      return <p>Unknown status.</p>;
  }
}

<Status status="success" />;

//5.Inline IIFE (Immediately Invoked Function Expression)
function Profile({ user }) {
  return (
    <div>
      {(() => {
        if (!user) return <p>Please log in.</p>;
        if (!user.isAdmin) return <p>Welcome, user!</p>;
        return <p>Welcome, Admin!</p>;
      })()}
    </div>
  );
}

<Profile user={{ isAdmin: true }} />;

//6.Conditional Rendering with Components
function AdminPanel() {
  return <p>Welcome, Admin!</p>;
}

function UserPanel() {
  return <p>Welcome, User!</p>;
}

function Dashboard({ isAdmin }) {
  return isAdmin ? <AdminPanel /> : <UserPanel />;
}

<Dashboard isAdmin={false} />;
