import { useState } from "react"

const CreateAccount = () => {
    const [formData, setFormData] = useState({ username: '', company_name: '', company_address: '', email: '',password:'' })

    function handleChange(event) {
        console.log(event.target.value)
        setFormData(prevFormData => {
            return {
                ...prevFormData, [event.target.name]: event.target.value
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault()
        const data=formData
        fetch('http://127.0.0.1:8000/employer-api/',{
         method:"POST",
         header:{
             "content-type":"application/json"
         },
         body:JSON.stringify(data),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            //reset state
            setFormData({ username: '', company_name: '', company_address: '', email: '',password:''  })
        })
        .catch(error=>console.error(error))
        

  
    }

    return <div>
        <div className="container mt-4 ">
            <h1>Create company account</h1>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="">Enter your Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name='username'
                        onChange={handleChange}
                        value={formData.username}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Company Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name='company_name'
                        onChange={handleChange}
                        value={formData.company_name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">company address</label>
                    <input
                        type="text"
                        className="form-control"
                        name='company_address'
                        onChange={handleChange}
                        value={formData.company_address}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="">email</label>
                    <input type="text"
                        className="form-control"
                        onChange={handleChange}
                        name='email'
                        value={formData.email}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="">password</label>
                    <input type="password"
                        className="form-control"
                        onChange={handleChange}
                        name='password'
                        value={formData.password}
                    />
                </div>




                <div className="form-group">
                    <button type='submit' className="btn btn-outline-primary">create account</button>
                </div>



            </form>
        </div>
    </div>
}

export default CreateAccount