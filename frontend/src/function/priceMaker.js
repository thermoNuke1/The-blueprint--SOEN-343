
    const calculatePrice = (parcel) => {

        const volumeRate = 0.05; 
        const weightRate = 0.1;  
    
        const volume = parcel.width_dimension * parcel.length_dimension * parcel.height_dimension;
        const volumeCost = volume * volumeRate;
        const weightCost = parcel.weight * weightRate;
    
        const totalPrice = volumeCost + weightCost;
        return totalPrice.toFixed(2);
      
    }

export default calculatePrice;