import React from 'react';
import{Link} from 'react-router-dom';


function Footer() {
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr />
                        <p className="text-white">
                            jbe dejbud ehdbiw2 hebfd2i3e hjedb23ue dhb2uib h3dbu32h eujbdu32 d hdbu3dei 3 d3bedbu3eu d3ubedu3b e d3ubd dhbdu3be bcuebfduewb edbnue fde dwebndj ebujneud f uj d fdh ebjd jed j3e d fde2bude 3j fd udbu32jd
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/">Contact</Link></div>
                        <div><Link to="/">Blog</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr />
                        <div><p className="text-white mb-1">#kdeik eihfiejwd ejunfdiewnd uefdnrewiqnfd fuihndwiqd uednwind udbniwd</p></div>
                        <div><p className="text-white mb-1">+91 2474023423</p></div>
                        <div><p className="text-white mb-1">+91 9741073492</p></div>
                        <div><p className="text-white mb-1">email@domain.com</p></div>
                    </div>
                </div>

            </div>

        </section>



    );



}



export default Footer;