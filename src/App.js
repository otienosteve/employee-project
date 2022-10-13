import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
function App() {
  return (
 <div className="navbar">
  <div className="logo">EMS</div>
  <div className="links">
    <ul>
<Button text="Home"/> 
<Button text="Profile"/>
<Button text="List"/>
<Button text="Roles"/>
    </ul>
  </div>
 </div>
  );
}

export default App;
