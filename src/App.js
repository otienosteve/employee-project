import { useEffect,useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Employees from './components/Employees';

function App() {
  const [employees,setEmployees]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/employees').then(res=>res.json()).then(data=>setEmployees(data))

  },[])


  return (<>
  <Navbar />
<Employees employees={employees}/>
  </>

  );
}

export default App;
