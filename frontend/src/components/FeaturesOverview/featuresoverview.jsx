import React from 'react';
import './featuresoverview.css';

function FeaturesOverview() {
    return(
     <div class="container">
  <div class="row g-4 py-5 row-cols-1 row-cols-lg-3 justify-content-center mx-auto">
      <div class="feature col text-center">
      <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
        <svg class="bi" width="1em" height="1em">
            <image href="../../assets/calculator.png" width="1em" height="1em" />
        </svg>
      </div>
      <h3 class="fs-2 text-body-emphasis">Cost Calculator</h3>
      <p>Find out about our affordable rates!</p>
      <a href="#" class="icon-link">
        Go to Cost Calculator
        <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
      </a>
    </div>
      <div class="feature col text-center">
      <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
        <svg class="bi" width="1em" height="1em">
          <image href="../../assets/delivery.png" width="1em" height="1em" />
        </svg>
      </div>
      <h3 class="fs-2 text-body-emphasis">Send Shipment</h3>
      <p>Sending packages is easy!</p>
      <a href="#" class="icon-link">
        Sending a package
        <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
      </a>
    </div>
      <div class="feature col text-center">
      <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
        <svg class="bi" width="1em" height="1em">
          <image href="../../assets/support.png" width="1em" height="1em" />
        </svg>
      </div>
      <h3 class="fs-2 text-body-emphasis">Help and Support</h3>
      <p>Let's get you the right help!</p>
      <a href="#" class="icon-link">
        Get Help
        <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
      </a>
    </div>
  </div>
</div>
    );
}

export default FeaturesOverview;