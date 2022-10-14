import { useEffect,useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Employees from './components/Employees';
import Single from './components/Single';
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  const [employees,setEmployees]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/employees').then(res=>res.json()).then(data=>setEmployees(data))

  },[])
function showCard(id){

}

  return (<>
   <Navbar />
  <BrowserRouter>
<Routes>
<Route exact path='/' element={<Employees employees={employees} showCard={showCard}/>} />
<Route exact path='/single/:id' element={<Single employees={employees}/>} />
<Route exact path='/Profile' element={<Employees/>} />
<Route exact path='/List' element={<Employees/>} />
<Route exact path='/Roles' element={<Employees/>} />
<Route exact path='/Home' element={<Employees/>} />


</Routes>

</BrowserRouter>
 

  </>

  );
}

export default App;
