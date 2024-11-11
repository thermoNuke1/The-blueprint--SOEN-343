function Hero() {
    return (
<div className="container col-xxl-8 px-4 py-1">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-1">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="../../assets/hero-picture.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">DELTRA</h1>
        <h2 className="display-5 fw bold text-body-emphasis lh-1 mb-3">Fast.Reliable.Everywhere</h2>
        <p className="lead">Deltra makes deliveries easy and fast. Whether it&aposs nearby or far away, we make sure your package gets where it needs to be, on time. With real-time tracking and modern technology. Deltra delivers with care and speed you can count on.</p>
      </div>
    </div>
</div>
/* <div className="container">
  <div className="text-container">
    <h1>DELTRA</h1>
    <h2>Fast. Reliable. Everywhere.</h2>
    <p>Deltra makes deliveries easy and fast. Whether it’s nearby or far away, we make sure your package gets where it needs to be, on time. With real-time tracking and modern technology, Deltra delivers with care and speed you can count on.</p>
  </div>
  <div className="image-container">
    <img src="../../assets/hero-picture.png" alt="Delivery person with boxes" />
  </div>
</div> */
    );
}

export default Hero;