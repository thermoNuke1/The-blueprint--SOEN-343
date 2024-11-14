import { base } from "../models/parcel";    

const calculateShipingCost = (weight) => {
    const baseCost = 10.0;
    let shippingCost;

    if (weight <= 1){
        shippingCost = baseCost;
    } else if (weight <= 5) {
        shippingCost = baseCost + (weight - 1) * 2.0;
    } else if (weight <= 10){
        shippingCost = baseCost + 4 * 2.0 + (weight - 5) * 1.5;
    } else {
        shippingCost = baseCost + 4 * 2.0 + 5 * 1.5 + (weigth -10) *1.0;
    }

    return shippingCost.toFixed(2);
};

