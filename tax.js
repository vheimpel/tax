// TODO: Calculate total sales of each company
// TODO: Calculate total tax of each company



var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function sumSalesData(salesData) {
    var sum = 0;
    for(i = 0, length = salesData.length; i < length; i++) { // Loops through each item in sales array
      sum += salesData[i]; // Adds the sales array items together
    }
    return(sum)
}

function getTotalTaxes(totalSales, taxRate) {
  return(totalSales * taxRate)
}


function calculateSalesTax(salesData, taxRates) {

  finalSalesData = {}

  for(b = 0, length = salesData.length; b < length; b++) {
    if salesData[b].name doesn't exist already {
      totalSales = sumSalesData (salesData[b].sales)
      totalTaxes = getTotalTaxes(totalSales, taxRates[salesData[b].province])

      finalSalesData[salesData[b].name] = {
      totalSales: totalSales,
      totalTaxes: totalTaxes
      }

    else {

    }

    }
  }

console.log(finalSalesData)

}

calculateSalesTax(companySalesData, salesTaxRates)


// console.log(companySalesData[0].sales);

// var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/