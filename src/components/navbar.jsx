import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <div className="divLogo">
                        <Link to='/'><span className="navbar-brand"><h1>BUGARIN</h1></span></Link>
                    </div>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item"><Link to='/decor' className="nav-link active" aria-current="page">Decor</Link></li>
                            <li className="nav-item"><Link to='/events' className="nav-link active">Events</Link></li>

                            <li className="nav-item dropdown">
                                {/* <span className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">More</span> */}
                                <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">More</a>

                                <ul className="dropdown-menu">
                                    <li><Link to='/about' className="dropdown-item">About us</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link to='/contact' className="dropdown-item">Contact</Link></li>
                                </ul>
                            </li>
                    
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}


export default Navbar;