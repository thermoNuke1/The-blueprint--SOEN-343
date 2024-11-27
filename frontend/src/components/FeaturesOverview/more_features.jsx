import React from "react";
// import './more_features.css';
import { useNavigate } from 'react-router-dom';
import '../../styles/whole_page.css';
const AwesomeComponentsSection = () => {
    const navigate = useNavigate()
    const handlePackage = () =>{
    navigate('/placeDelivary')
    
    }
  return (
    <div id = "services">
        <div class="container px-4 py-5" id="hanging-icons">
    <h2 class="pb-2 border-bottom">Services</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg>
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Cost Calculator</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="/quotationproposal" class="btn btn-primaryy">
            Get a Quote
          </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"><use xlink:href="#cpu-fill"></use></svg>
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Send a Shipment</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a onClick={handlePackage} class="btn btn-primaryy">
            Send Packages
          </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg class="bi" width="1em" height="1em"><use xlink:href="#tools"></use></svg>
        </div>
        <div>
          <h3 class="fs-2 text-body-emphasis">Tracking</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="/tracking" class="btn btn-primaryy">
            Track Your Package
          </a>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default AwesomeComponentsSection;
