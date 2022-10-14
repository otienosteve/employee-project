import { useEffect,useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Employees from './components/Employees';
import Single from './components/Single';
import { Routes , Route} from 'react-router-dom'
import Button from './components/Button';
import Profile from './components/Profile';
import Roles from './components/Roles';
import Edit from './components/Edit';

function App() {
  const [employees,setEmployees]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/employees').then(res=>res.json()).then(data=>setEmployees(data))

  },[])

  return (<>
   <Navbar />
<Routes>
<Route exact path='/' element={<Employees employees={employees} />} />
<Route exact path='/single/:id' element={<Single employees={employees}/>} />
<Route exact path='/Profile' element={<Profile/>} />
<Route exact path='/Roles' element={<Roles/>} />
<Route exact path='/Edit' element={<Edit/>} />


</Routes>
 </>

  );
}

export default App;
