import React, {useState} from 'react';

import CustomNavBar from '../components/Navbar/navbar';
import Hero from '../components/Hero/hero';
import FeaturesOverview from '../components/FeaturesOverview/featuresoverview';
import ShipmentProgressBar from '../components/Tracking/shipmentProgressBar';
import Container from '../components/Tracking/enterIDForm';



const Tracking = () => {
    const [shipmentId] = useState(101);
    return (
        <>
            <Container></Container>
            
            <ShipmentProgressBar shipmentId={shipmentId}></ShipmentProgressBar>
            
        </>
        
    );
}
export default Tracking;