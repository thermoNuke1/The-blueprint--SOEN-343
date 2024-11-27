// function Hero() {
//     return (
// <div className="container col-xxl-8 px-4 py-1">
//     <div className="row flex-lg-row-reverse align-items-center g-5 py-1">
//       <div className="col-10 col-sm-8 col-lg-6">
//         <img src="../../assets/hero-picture.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
//       </div>
//       <div className="col-lg-6">
//         <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">DELTRA</h1>
//         <h2 className="display-5 fw bold text-body-emphasis lh-1 mb-3">Fast.Reliable.Everywhere</h2>
//         <p className="lead">Deltra makes deliveries easy and fast. Whether it's nearby or far away, we make sure your package gets where it needs to be, on time. With real-time tracking and modern technology. Deltra delivers with care and speed you can count on.</p>
//       </div>
//     </div>
// </div>

//     );
// }
import React from 'react';
import './hero.css'; 
import { useNavigate } from 'react-router-dom';

const Hero = ({ scrollToServices }) => {
  const navigate = useNavigate(); 

  const handleSignUpClick = (e) => {
    e.preventDefault(); 
    navigate('/signup'); 
  };

  return (
    <div className="container-fluid px-2 py-3 my-3 text-center hero-container">
      <div className="lc-block">
        <div editable="rich">
          <h1 className="display-5 fw-bold text-light">
            DELTRA
          </h1>
        </div>
      </div>
      <div className="lc-block col-lg-6 mx-auto mb-4">
        <div editable="rich">
          <p className="lead text-light">
            Deltra makes deliveries easy and fast. Whether it's nearby or far away, we make sure your package gets 
            where it needs to be, on time. With real-time tracking and modern technology. Deltra delivers with care and speed you can count on.
          </p>
        </div>
      </div>

      <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <a className="hero-btn-left px-4 gap-3" href="#services" role="button">
          Learn More
        </a>
        <a className="hero-btn-right px-4" href="#" role="button" onClick={handleSignUpClick}>
          Get Started
        </a>
      </div>

   
      <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 img-fluid border rounded-3 shadow-lg"
                src="https://images.pexels.com/photos/8931732/pexels-photo-8931732.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
                alt="delivery"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 img-fluid border rounded-3 shadow-lg"
                src="https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="delivery"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 img-fluid border rounded-3 shadow-lg"
                src="https://images.pexels.com/photos/7844003/pexels-photo-7844003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="delivery"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 img-fluid border rounded-3 shadow-lg"
                src="https://images.pexels.com/photos/6868785/pexels-photo-6868785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="delivery"
              />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;



