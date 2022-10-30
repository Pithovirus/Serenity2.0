import React from 'react';
import help from '../images/help3.jpeg';
import "../styles/slider.css";
import LoremIpsum from 'react-lorem-ipsum';
import "bootstrap-icons/font/bootstrap-icons.css";







function Slider2 () {
    return( 
        
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-inner">

          <div class="carousel-item active">

            <img src={help} class="d-block min-vh-100 w-100" alt="..."/>
            <div class="carousel-caption">
              <h5 class="fs-1">Contact Us</h5>
              <p>{LoremIpsum()}</p>
              <div class="slider-btn mt-4">

                <button class="btn btn-primary mt-3"> Contact us on Facebook <i class="bi-facebook" ></i></button> 
                <button class="btn btn-secondary ms-lg-3 mt-3">Contact us on Gmail <i class="bi-envelope"></i></button>

              </div>
            </div>

          </div>
          
        </div>
        
      </div>
      
    );
}


export default Slider2;
