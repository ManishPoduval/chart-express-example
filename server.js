const express = require('express');

const app = express();

const path = require("path");

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 3000;

// Normalizes the path to the views folder
app.set("views", path.join(__dirname, "views"));
// Sets the view engine to handlebars
app.set("view engine", "hbs");

// Handles access to the public folder
app.use(express.static(path.join(__dirname,"public")));


//ROUTE TO SHOW BAR CHART
app.get("/", (req, res, next) => {
    // Assume we get some data from our DB

    let chartData = [12, 19, 3, 5, 2, 3]
    let chartLabels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']

    // Sending some data to the hbs page

    // since our data will be used in JS we need to stringify it
    res.render("barChart.hbs", {
        chartData: JSON.stringify(chartData),
        chartLabels: JSON.stringify(chartLabels)
    });
  });
  
//ROUTE TO SHOW LINE CHART
app.get("/line", (req, res, next) => {
    // Assume we get some data from our DB

    let chartData =  [65, 59, 80, 81, 56, 55, 40]
    let chartLabels = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July']

    // Sending some data to the hbs page

    // since our data will be used in JS we need to stringify it
    res.render("lineChart.hbs", {
        chartData: JSON.stringify(chartData),
        chartLabels: JSON.stringify(chartLabels)
    });
}); 


//ROUTE TO SHOW RADAR CHART
app.get("/radar", (req, res, next) => {
    // Assume we get some data from our DB

    let chartData1 =  [65, 59, 90, 81, 56, 55, 40]
    let chartData2 =  [28, 48, 40, 19, 96, 27, 100]
    let chartLabels =  [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
      ]

    // Sending some data to the hbs page

    // since our data will be used in JS we need to stringify it
    res.render("radarChart.hbs", {
        chartData1: JSON.stringify(chartData1),
        chartData2: JSON.stringify(chartData2),
        chartLabels: JSON.stringify(chartLabels)
    });
});  

//ROUTE TO SHOW DOUGHNUT CHART
app.get("/donut", (req, res, next) => {
    // Assume we get some data from our DB

    let chartData = [300, 50, 100]
    let chartLabels = [
        'Red',
        'Blue',
        'Yellow'
      ]

    // Sending some data to the hbs page

    // since our data will be used in JS we need to stringify it
    res.render("donutChart.hbs", {
        chartData: JSON.stringify(chartData),
        chartLabels: JSON.stringify(chartLabels)
    });
}); 


//ROUTE TO SHOW POLAR CHART
app.get("/polar", (req, res, next) => {
    // Assume we get some data from our DB

    let chartData =   [11, 16, 7, 3, 14]
    let chartLabels = [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
      ]

    // Sending some data to the hbs page

    // since our data will be used in JS we need to stringify it
    res.render("polarChart.hbs", {
        chartData: JSON.stringify(chartData),
        chartLabels: JSON.stringify(chartLabels)
    });
});  

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
