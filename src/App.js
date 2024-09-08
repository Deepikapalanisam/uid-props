
import './App.css';
import UserProfile from './UserProfile';

function App() {
  const user={
    name:"Deepika P",
    email:"deepikap.22it@kongu.edu",
    bio:"A motivated and enthusiastic fresher looking to kickstart a career in web development with a passion for learning new technologies.",
    
  }
  return (
    <div className="App">
      <h1>User Profile</h1>
      <UserProfile name={user.name}
      email={user.email}
      bio={user.bio}
      />
    </div>
  );
}

export default App;
