import { Taxcalc } from './taxCalc'; // Import Taxcalc


export function calculatePriceAfterTax(total, discountAmount) {
    const totalAfterDiscount = total - discountAmount; // Subtract discount
    const taxResult = Taxcalc(totalAfterDiscount); // Use Taxcalc for tax calculations

    return {
        totalAfterDiscount,
        tax: taxResult.tax,
        totalWithTax: taxResult.totalWithTax,
    };
}
