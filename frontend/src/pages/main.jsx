import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Main = () => {
  const [data, setData] = useState({})
  //get employees from backend
  useEffect(function () {
    axios.get('http://localhost:8000/employee-api/')
      .then(res => {
        console.log(res.data)

        return setData(res.data)
      })
  }, []
  )




  return <div >
    
    
    <div className="container fluid padding-10px border mt-2">
      
      <h3>All company employees</h3>
      <span ><Link to={'/add-employee'} class='btn btn-primary text-light mb-2'>Add Employee</Link></span>
      <br />


      <table className="table table-striped ">
        <thead>
          <tr>
            <th>name</th>
            <th>employee_contacts</th>
            <th>action</th>

          </tr>
        </thead>

        <tbody>
          {
            data && data.length > 0 ?
              data.map(dataitem =>

                <tr>
                  <td>{dataitem.name}</td>

                  <td>{dataitem.employee_contacts}</td>
                  <td>
                    <div className="btn btn-outline-success"><Link to={`/employee/${dataitem.id}`}>view</Link></div>
                  </td>

                </tr>






              ) : <div>nodata</div>
          }
        </tbody>
      </table>
    </div>
  </div>


}
export default Main
