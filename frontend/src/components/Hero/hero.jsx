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

const Hero = () => {
  return (
    <div className="container-fluid px-4 py-5 my-5 text-center hero-container">
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
 
        <a className="hero-btn-left px-4 gap-3" href="#" role="button">
         Learn More
        </a>
   
        <a className="hero-btn-right px-4" href="#" role="button">
         Sign Up
        </a>
      </div>
      <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
        <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
          <div className="container px-5">
            <img
              className="img-fluid border rounded-3 shadow-lg mb-4"
              src="/assets/delivery5.jpeg"
              alt="delivery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


