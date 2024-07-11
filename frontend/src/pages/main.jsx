import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/nav'
import '../css/bootstrap.min.css'
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




  return <div>
    <Nav />

    <div className="container fluid padding-10px border mt-2">
      <h3>company employees</h3>
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
                    <div className="btn btn-outline-success"><Link>view</Link></div>
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
