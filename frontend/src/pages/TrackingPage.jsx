import React, {useState} from 'react';

import CustomNavBar from '../components/Navbar/navbar';
import Hero from '../components/Hero/hero';
import FeaturesOverview from '../components/FeaturesOverview/featuresoverview';
import ShipmentProgressBar from '../components/Tracking/shipmentProgressBar';
import ShipmentStatusForm from '../components/Tracking/shipmentStatusForm';



const Tracking = () => {
    const [shipmentId] = useState(101);
    return (
        <>
            <ShipmentStatusForm></ShipmentStatusForm>
            {/* <ShipmentProgressBar shipmentId={shipmentId}></ShipmentProgressBar> */}
            
        </>
        
    );
}
export default Tracking;