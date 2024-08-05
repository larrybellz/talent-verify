import { useState } from "react"
import axios  from 'axios'
const AccountLogin=()=>{
    const [username,setUsername]=useState('')

    const [password,setPassword]=useState('')
    const [toekn,setToken]=useState(null)

    const handleSubmit=(event)=>{
        event.preventDefault();
        const response=axios.post('http://localhost:8000/login/',{
            username,
            password
        })
        .then(res => {
          console.log(res.data)
  
          return setToken(res.data.token)
        })
    }
    return <div className="d-flex vh-100  justify-content-center align-items-center">
        <div className="card card-bg  m-auto p-3">
            <h2 className="border-bottom border-2 pb-2">Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="companyName">Company Name</label>
                <input 
                className="w-100" 
                type="text" 
                id="companyName" 
                value={username} 
                onChange={(event)=>setUsername(event.target.value)}/>
                <label  htmlFor="password">Password</label>
                <input 
                className="w-100" 
                type="password" 
                id='password'
                value={password}
                onChange={(event)=>setPassword(event.target.value)}/>
                <button type='submit'className="btn btn-primary mt-4">login</button>
            </form>
        </div>
    </div>
    
}
export default AccountLogin