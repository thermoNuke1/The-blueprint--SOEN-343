import React from 'react';

function Hero() {
    return (
<div class="container col-xxl-8 px-4 py-1">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-1">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="../../assets/hero-picture.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">DELTRA</h1>
        <h2 class="display-5 fw bold text-body-emphasis lh-1 mb-3">Fast.Reliable.Everywhere</h2>
        <p class="lead">Deltra makes deliveries easy and fast. Whether it's nearby or far away, we make sure your package gets where it needs to be, on time. With real-time tracking and modern technology. Deltra delivers with care and speed you can count on.</p>
      </div>
    </div>
</div>
/* <div class="container">
  <div class="text-container">
    <h1>DELTRA</h1>
    <h2>Fast. Reliable. Everywhere.</h2>
    <p>Deltra makes deliveries easy and fast. Whether it’s nearby or far away, we make sure your package gets where it needs to be, on time. With real-time tracking and modern technology, Deltra delivers with care and speed you can count on.</p>
  </div>
  <div class="image-container">
    <img src="../../assets/hero-picture.png" alt="Delivery person with boxes" />
  </div>
</div> */
    );
}

export default Hero;