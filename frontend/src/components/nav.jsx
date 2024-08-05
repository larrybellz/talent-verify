
import { Outlet,Link } from 'react-router-dom'
import './styles.css'


export default function Nav() {


    return (
        <>
            <div className="nav vw-80 bg-dark d-flex justify-content-around text-light text-decoration-none text-capitalize ">

                <span className='nav-item p-2 current  '><Link to='main/' className='text-light text-decoration-none' >home</Link></span>
                <span className='nav-item p-2' ><Link to='search/' className='text-light text-decoration-none'>search</Link></span>
                <span className='nav-item p-2'><Link to={''} className='text-light text-decoration-none'>about</Link></span>
                <span className='nav-item p-2'><Link to={'login/'}className='text-light text-decoration-none'>sign in</Link></span>



            </div>

            <Outlet />
        </>)
}