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
        <h1>
            About Us
        </h1>
        <p>
        Sereniteam started the project for those who are afraid to seek professional help regarding mental health. We have created a chatbot to help accomodate people with mental health conditions that aims to pave a way for them to get help they need from mental health professionals. Along the way, we encountered some minor setbacks in making this project possible and able but even so,we're counting to improve this project <br/>because we want people to know that help is always available.
        </p>
        </div>
            <div className="col-md-3 col-sm-6">
                <div className="card text-center">
                    <div className="card-block">
                        <img src={carbonilla} alt="" className="img-fluid"/>
                        <div className="card-title">
                           <h4>
                            Front-End
                            </h4>
                            <h6>Gene</h6>
                            <div className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida.
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="col-md-3 col-sm-6">
                <div className="card text-center">
                    <div className="card-block">
                        <img src={caguan} alt="" className="img-fluid"/>
                        <div className="card-title">
                           <h4>
                            Back-End
                            </h4>
                            <h6>Von</h6>
                            <div className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida.
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="col-md-3 col-sm-6">
                <div className="card text-center">
                    <div className="card-block">
                        <img style={{height:'260px', width:'260px'}}src={reyes} alt="" className="img-fluid"/>
                        <div className="card-title">
                           <h4>
                            Data/Document
                            </h4>
                            <h6>Joshreen</h6>
                            <div className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida.
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="col-md-3 col-sm-6">
                <div className="card text-center">
                    <div className="card-block">
                        <img src={solano} alt="" className="img-fluid"/>
                        <div className="card-title">
                           <h4>
                            Document
                            </h4>
                            <h6>Jirah</h6>
                            <div className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida.
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

      </div>
  

    );
    

}

export default Aboutus;