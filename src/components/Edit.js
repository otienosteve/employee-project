import React,{useState} from 'react'

export default function Edit({employees}) {
  function getKeyByValue(object) {
    var names=[]
    object.forEach(obj=>{
      console.log(obj["name"])
      let dict={}
      dict.name=obj["name"]
      names.push(dict)
    })
    return names 
  }
  const found=getKeyByValue(employees)
  function select(e){
console.log("name",e.target.innerText)
const onset=employees.filter(emp=>emp.name===e.target.innerText)
console.log(onset)
setName(onset[0].name)
setAge(onset[0].age)
setImage(onset[0].image)
setRole(onset[0].title)
setSalary(onset[0].salary)
  }
  console.log(found)
  const [name,setName]=useState()
  const [age,setAge]=useState()
  const [image,setImage]=useState()
  const [salary,setSalary]=useState()
  const [role,setRole]=useState()
 const  handleSubmit=(e)=>{
  e.preventDefault()
  const employee={
      name:name,
      age:age,
      salary:salary,
      title:role,
      image:image
  }
  console.log(employee)
  fetch('http://localhost:8000/employees',{method:"PATCH",headers:{"content-type":"application/json", 'Accept':'application/json'}, body:JSON.stringify(employee)}).then(res=>res.json()).then(data=>console.log(data))
 }
  return (
    <div className='row'>
      <div className="col-md-3">
    {found.map(item=><h3 onClick={select}> {item.name}</h3>)}

      </div>
      <div className="col-md-9">
    <div className="h1 text-center">Edit</div>
    <form className='text-center' onSubmit={handleSubmit}>
      <label htmlFor="Name">Name</label>
<input type="text" name="" value={name} onChange={(e)=>setName(e.target.value)} />
<br />
<label htmlFor="Name">Image Url</label>
<input type="text" name="" value={image} onChange={(e)=>setImage(e.target.value)} />
<br />
<label htmlFor="Age" >Age</label>

<input type="text" name="" value={age} onChange={(e)=>setAge(e.target.value)} />
<br />
<label htmlFor="Salary">Salary</label>

<input type="text" name="" value={salary} onChange={(e)=>setSalary(e.target.value)} />
<br />
<label htmlFor="Role">Role</label>

<input type="text" name="" value={role} onChange={(e)=>setRole(e.target.value)} />
<br />
<input type="submit" value="Submit" />
    </form>


  </div>
  </div>
  )
}
