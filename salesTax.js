var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ],

    taxTotal: function() {
      let thisCompany = {
        totalSales: 0,
        totalTaxes: 0
      };
      let finalTotal = 0;
      for (let tally of this.sales) {
        finalTotal += tally;
      }
      thisCompany.totalSales = finalTotal;
      thisCompany.totalTaxes = (finalTotal * salesTaxRates[this.province]);
      return thisCompany;
    }
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ],

    taxTotal: function() {
      let thisCompany = {
        totalSales: 0,
        totalTaxes: 0
      };
      let finalTotal = 0;
      for (let tally of this.sales) {
        finalTotal += tally;
      }
      thisCompany.totalSales = finalTotal;
      thisCompany.totalTaxes = (finalTotal * salesTaxRates[this.province]);
      return thisCompany;
    }
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ],

    taxTotal: function() {
      let thisCompany = {
        totalSales: 0,
        totalTaxes: 0
      };
      let finalTotal = 0;
      for (let tally of this.sales) {
        finalTotal += tally;
      }
      thisCompany.totalSales = finalTotal;
      thisCompany.totalTaxes = (finalTotal * salesTaxRates[this.province]);
      return thisCompany;
    }
  }
];


function calculateSalesTax(salesData, taxRates) {
  let printTotals = {};
  let i = 0;
  for (let companies of companySalesData) {
    if (printTotals[companies.name]) {
      let tempTotals = companySalesData[i].taxTotal();
      printTotals[companies.name].totalSales += tempTotals.totalSales;
      printTotals[companies.name].totalTaxes += tempTotals.totalTaxes;
    } else {
      printTotals[companies.name] = companySalesData[i].taxTotal();

    }

  i++;
  }

  console.log(printTotals)
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

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