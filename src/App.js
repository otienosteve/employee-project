import { useEffect,useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Employees from './components/Employees';
import Single from './components/Single';
import { Routes , Route} from 'react-router-dom';
import Roles from './components/Roles';
import Edit from './components/Edit';
import Add from './components/Add';

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
<Route exact path='/Add' element={<Add/>} />
<Route exact path='/Roles' element={<Roles/>} />
<Route exact path='/Edit' element={<Edit employees={employees}/>} />


</Routes>
 </>

  );
}

export default App;
