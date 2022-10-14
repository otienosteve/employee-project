import { useEffect,useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Employees from './components/Employees';
import Single from './components/Single';
import { Routes , Route} from 'react-router-dom'
import Button from './components/Button';

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
</Routes>
 </>

  );
}

export default App;
