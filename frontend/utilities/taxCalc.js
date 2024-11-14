const Tax_rate = 0.15;

export const Taxcalc = (amount) => {

    const tax = amount * Tax_rate;
    const totalWithTax = amount + tax;

    return {

        tax: tax.toFixed(2),
        totalWithTax: totalWithTax.toFixed(2)
    };


};