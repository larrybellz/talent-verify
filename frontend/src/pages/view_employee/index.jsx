import './styles.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Employee() {
    const [data, setData] = useState({})
    const { id } = useParams();
   
    useEffect(function () {
        axios.get(`http://localhost:8000/employee/${id}`)
            .then(res => {
                console.log(res.data)

                return setData(res.data)
            })
            .catch(error=>{
                console.log(error)
            })
    }, [id]
    )



    return <div className='vh-100 vw-100 d-flex align-items-center justify-content-center'>
        <div className="card card-bg p-3 ">
            {
                
                    
                        <div>
                            <h3 className="card-title text-capitalize p-1  border-bottom border-dark border-1">employee name</h3>
                            <div className='card-content text-capitalize border border-2 p-2'>
                                <p><strong>name: </strong> {data.name}</p>
                                <p><strong>Employee Contact: </strong> {data.employee_contacts}</p>
                                <p><strong>role: </strong>{data.role}</p>
                                    <p><strong>duties: </strong> {data.duties}</p>
                            </div>
                        </div>
                    
            }
        </div>
    </div>
}

