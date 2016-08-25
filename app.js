'use strict';

var hours = [' ', '6:00am' , '7:00am' , '8:00am' , '9:00am' , '10:00am' , '11:00am' ,'12:00pm' , '1:00pm' , '2:00pm' , '3:00pm' , '4:00pm' , '5:00pm' , '6:00pm' , '7:00pm' , '8:00pm', 'TOTAL'];

var storeLocations = [];
//Constructor //
function StoreLocation(storeName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.storeName = storeName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custEachHourArray = [];
  this.cookiesEachHourArray = [];
  this.totalDailyCookiesSale = 0;
  this.stringsForDisplayInLists = [];
  this.calcCustEachHour();
  this.calcCookiesEachHour();
  storeLocations.push(this);
};

// The method for random number of customers for each hour (and then push them into a array) //
StoreLocation.prototype.calcCustEachHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    this.custEachHourArray.push(singleHourCust);
  }
  console.log(this.custEachHourArray);
};

// This method uses the array of customers for each hour, multiplies each of those hourly values by the average cookies per customer, and then generates an array of hourly cookie sales //
StoreLocation.prototype.calcCookiesEachHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
    this.cookiesEachHourArray.push(singleHourCookies);
    this.totalDailyCookiesSale += singleHourCookies;
  }
  this.stringsForDisplayInLists.push('Total: ' + this.totalDailyCookiesSale + ' cookies');
};

// Stores that go through the constructor //
var pike = new StoreLocation('First And Pike' , 23 , 65 , 6.3);
var seatac = new StoreLocation('SeaTac Airport' , 3 , 24 , 1.2);
var center = new StoreLocation('Seattle Center' , 11 , 38 , 3.7);
var capitol = new StoreLocation('Capitol Hill' , 20 , 38 , 2.3);
var alki = new StoreLocation('Alki' , 2 , 16 , 4.6);



// Create the table header //
function makeHeaderRow() {
  var table = document.getElementById('storeTable');
  var tableRow = document.createElement('tr');
  // Create a table header for all items in the hours array //
  for (var i = 0; i < hours.length; i++) {
    var tableHeader = document.createElement('th');
    tableHeader.textContent = hours[i];
    tableRow.appendChild(tableHeader);
  };
  table.appendChild(tableRow);
};
makeHeaderRow();

// Fill in table body with data //
function makeAllStoreRows() {
  for (var j = 0; j < storeLocations.length; j++) {
    var table = document.getElementById('storeTable');
    var tableRow = document.createElement('tr');
    var tableName = document.createElement('th');
    tableName.textContent = storeLocations[j].storeName;
    tableRow.appendChild(tableName);
    // Create table data for each item in 'cookiesEachHourArray' array //
    for (var i = 0; i < (hours.length - 2); i++) {
      var tableData =  document.createElement('td');
      tableData.textContent = storeLocations[j].cookiesEachHourArray[i];
      tableRow.appendChild(tableData);
    };
    var tableTotal =  document.createElement('td');
    tableTotal.textContent = storeLocations[j].totalDailyCookiesSale;
    tableRow.appendChild(tableTotal);
    table.appendChild(tableRow);
  }
};
makeAllStoreRows();
