import { Link } from 'react-router-dom'
import '../css/bootstrap.min.css'

const Sidebar = () => {
    return <div>

        <div className="sidebar border border-right bg-dark col-md-3 col-lg-2 col-xl-2 p-0 bg-body-tertiary">
            <div className="bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">

                <div className="d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 active" aria-current="page">
                                Categories
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2" >

                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2" href="#">

                                Orders
                            </Link>
                        </li>


                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                            <span>-------------</span>
                     
                        </h6>
                        <ul className="nav flex-column mb-auto">
                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center gap-2" href="#">
                                    staff
                                </Link>
                            </li>



                        </ul>

                        

                        <ul classname="nav flex-column mb-auto">
                            <li classname="nav-item">
                                <a classname="nav-link d-flex align-items-center gap-2" href="#">
                                    Settings
                                </a>
                            </li>

                            <form action="">

                                <input classname="d-flex align-items-center gap-2 btn btn-outline-info" type="submit" value="logout" ></input>

                            </form>
                        </ul>
                    </ul>

                </div>
            </div>
        </div>
    </div>
}
export default Sidebar