export default function mostProfitableDepartment(item) {
    var departmentSales = {};
    
    item.forEach(function(item) {
        if (!departmentSales[item.department]) {
            departmentSales[item.department] = 0;
        }
        departmentSales[item.department] += item.sales;
    });
    
    var maxi = 0;
    var mostProfit = '';
    
    for (var depart in departmentSales) {
        if (departmentSales[depart] > maxi) {
            maxi = departmentSales[depart];
            mostProfit = depart;
        }
    }
    
    return mostProfit;
}

/*
export default function mostProfitableDay(salesData) {
    var daySales = {};
    
    salesData.forEach(function(sale) {
        if (!daySales[sale.day]) {
            daySales[sale.day] = 0;
        }
        daySales[sale.day] += sale.sales;
    });
    
    var maxSales = 0;
    var mostProfitableDay = '';
    
    for (var day in daySales) {
        if (daySales[day] > maxSales) {
            maxSales = daySales[day];
            mostProfitableDay = day;
        }
    }
    
    return mostProfitableDay;
}*/
