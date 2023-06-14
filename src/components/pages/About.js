import React from "react";
import VMC from './inc/Vmc';

function Aboutus(){
    return(
       <div>
       <section className="py-4 bg-info ">
        <div className="container">
            <div classname="row">
                <div className="col-md-3 my-auto">
                    <h4>About Us</h4>
                </div>
                <div className="col-md-7 m-auto float-end">
                    <h6 className="float-end">
                        Home  /   About Us
                    </h6>
                </div>
            </div>
        </div>
       </section>
       <section className="section  border-bottom">
        <div className="container">
            <h5 className="main-heading">Our Company</h5>
            <div className="underline"></div>
            <p>
                euwgbfuir uiwqefhuirqw uiqwrtgbhfie uriwqehnfi wuertfbiuqwe urebgire gfuij rgfiur egfiurbe tgiur gfjugrbtgu fgujr gftu4r gfde
            </p>
        </div>
       </section>

       <VMC/>
        
       </div>
    );
}
export default Aboutus;