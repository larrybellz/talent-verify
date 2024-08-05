//rrd
import { Link } from 'react-router-dom'
//component import
import Sidebar from "../components/sidebar"
import Nav from "../components/nav"
//styles


const LandingPage = () => {

    return <div className="container-fluid vh-100">




        <div className="w-80 bg-secondary h-100 " >

            <div className="showcase p-2 d-flex justify-content-center h-40 border-bottom border-2 border-solid">
                <div>
                <h1><span className='text-teal'>T</span>alent-<span>V</span>erify</h1>
                <p className='text-light'>keep and show your employees history with us !</p>
                <p className='text-light'>telent verify got your employees progress anytyme everytime</p>
                </div>
            </div>


            <div className='buttons h-50 w-100 d-flex align-items-center justify-content-around'>
                <div className="btn btn-outline-primary"><Link to={'create-account/'}>Create account</Link></div>
                <div className="btn btn-outline-info"><Link to={'login/'}>Sign In</Link></div>
            </div>



        </div>
    </div>


}
export default LandingPage