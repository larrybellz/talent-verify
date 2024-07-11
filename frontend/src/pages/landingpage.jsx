//rrd
import { Link } from 'react-router-dom'
//component import
import Sidebar from "../components/sidebar"
import Nav from "../components/nav"
//styles
import './styles.css'
import '../css/bootstrap.min.css'

const LandingPage = () => {

    return <div >

        <Nav />
        <div className="row">
            
            <div className="container-fluid content col-md-9 col-lg-10" >


                <div className="btn btn-outline-primary"><Link to={'create-account/'}>Create account</Link></div>
                <div className="btn btn-outline-secondary">Sign In</div>


            </div>
        </div>
    </div>

}
export default LandingPage