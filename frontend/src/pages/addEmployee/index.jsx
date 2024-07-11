
import { useState } from "react";
import Nav from "../../components/nav"
import '../../css/bootstrap.min.css'

export default function AddEmployee(){
  
  const options=['department1','department2','department3'];
  const [formData,setFormData]=useState({name:'',employee_contacts:'',role:'',duties:''});

  console.log()
  function handleChange(event){
    console.log(event.target.value)
    setFormData(prevFormData=>{
      return{
        ...prevFormData,[event.target.name]:event.target.value
      }
    })
  }

  const handleSubmit=async (event)=>{
    event.preventDefault();
   
    const data=formData ;
    const response=await fetch('http://127.0.0.1:8000/employee-api/',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(data),

    });
    const responseData=await response.json();
    console.log(responseData)
    setFormData({name:'',employee_contacts:'',role:'',duties:''})

    
  }
    

  


    return <div>
        <Nav/>
        <div className="container mt-4 ">
          <h1>enter employee details</h1>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input 
            type="text" 
            className="form-control" 
            name='name'
            onChange={handleChange}
            value={formData.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">employee contacts</label>
            <input 
            type="text" 
            className="form-control" 
            name='employee_contacts'
            onChange={handleChange}
            value={formData.employee_contacts}
          />
          </div>

          <div className="form-group">
            <label htmlFor="">role</label>
            <input type="text" 
            className="form-control"
            onChange={handleChange}
            name='role'
            value={formData.role}
 />
          </div>
          

          <select name="" id="" className="form-group">
            {options.map((option,index)=>(
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="form-group">
            <label htmlFor="">duties</label>
            <input type="text" 
            className="form-control" 
            onChange={handleChange}
            name='duties'
            value={formData.duties}
/>

          </div>
          <div className="form-group">
            <button type='submit'className="btn btn-outline-success">save</button>
          </div>

 

          </form>
        </div>

        


    </div>
}