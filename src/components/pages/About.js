import React from "react";
import carbonilla from '../images/CARBONILLA.jpg';
import caguan from '../images/CAGUAN.jpg';
import reyes from '../images/REYES.jpg';
import solano from '../images/SOLANO.jpg';


function Aboutus() {
    document.body.style = 'background: #c7bfc2;';
    return (
        
      <div className="container">
        <div className="row mt-5 mb-5">
        <div className="text-center">
        <h1 className="fw-bold">
            About Us
        </h1>
        <p className="fw-semibold">
        Sereniteam started the project for those who are afraid to seek professional help regarding mental health. We have created a chatbot to help accomodate people with mental health conditions that aims to pave a way for them to get help they need from mental health professionals. Along the way, we encountered some minor setbacks in making this project possible and able but even so,we're counting to improve this project <br/>because we want people to know that help is always available.
        </p>
        <p className="fw-bold fs-5" style={{color:'black'}}>
            Meet the Team.
        </p>
        </div>
            <div className="col-md-3 col-sm-6">
                <div className="card text-center">
                    <div className="card-block">
                        <img src={carbonilla} alt="" className="img-fluid"/>
                        <div className="card-title">
                        <h5 className="fw-bold">
                           FRONTEND DEVELOPER
                            </h5>
                            <h6 className="fw-semibold">Gene Caleb Carbonilla</h6>
                        </div>

                    </div>

                </div>

            </div>

            <div className="col-md-3 col-sm-6">
                <div className="card text-center">
                    <div className="card-block">
                        <img src={caguan} alt="" className="img-fluid"/>
                        <div className="card-title">
                           <h5 className="fw-bold">
                           BACKEND DEVELOPER
                            </h5>
                            <h6 className="fw-semibold">Xyphrus Von Keith Caguan</h6>
                        </div>

                    </div>

                </div>

            </div>

            <div className="col-md-3 col-sm-6">
                <div className="card text-center">
                    <div className="card-block">
                        <img style={{height:'260px', width:'260px'}}src={reyes} alt="" className="img-fluid"/>
                        <div className="card-title">
                        <h5 className="fw-bold">
                           DATA SPECIALIST
                            </h5>
                            <h6 className="fw-semibold">Joshreen Reyes</h6>
                        </div>

                    </div>

                </div>

            </div>

            <div className="col-md-3 col-sm-6">
                <div className="card text-center">
                    <div className="card-block">
                        <img src={solano} alt="" className="img-fluid"/>
                        <div className="card-title">
                        <h5 className="fw-bold">
                           DATA ANALYST
                            </h5>
                            <h6 className="fw-semibold">Jirah Kate Solano</h6>
                        </div>

                    </div>

                </div>

            </div>

        </div>

      </div>
  

    );
    

}

export default Aboutus;