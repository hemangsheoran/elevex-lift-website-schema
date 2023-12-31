import React from 'react';
import {Outlet,Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-dark navbar-expand-lg navbar-light bg-dark shadow">
            <div class="container-fluid">
                
                <Link to="/" Style="margin-left:100px" class="navbar-brand">Elevex Elevator India Private Limited</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            
                            <Link to="/" class="nav-link active">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/about" class="nav-link active">About Us</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/contact" class="nav-link active">Contact Us</Link>
                        </li>

                    </ul>

                </div>
            </div>
            <Outlet/>
        </nav>
        
    );
}
export default Navbar;







