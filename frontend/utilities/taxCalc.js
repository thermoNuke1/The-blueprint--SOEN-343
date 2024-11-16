

export function Taxcalc(amount) {
    const GST_RATE = 0.05;  // 5%
    const QST_RATE = 0.09975;  // 9.975%
    
    const gst = amount * GST_RATE;
    const qst = amount * QST_RATE;
    const total = amount + gst + qst;
    
    return total.toFixed(2); // Returns the total rounded to 2 decimal places
} 