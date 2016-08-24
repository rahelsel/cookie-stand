'use strict';
//Array of store hours//
var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

// Constructor function //
function Location(name, minCust, maxCust, avgCookie) {
  this.locationName = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  this.finalArray = [];

// Method for random customers/hour //
  this.getCustPerHour = function() {
    for (var i = 0; i < hours.length; i++ ) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    };
  };
  this.getCustPerHour();

// Method for cookies/hour from customers/hour //
  this.getCookiesPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      var numCookiesPerHour = Math.ceil(this.CustPerHour[i] * this.avgCookie);
      this.cookiesPerHour.push(numCookiesPerHour);
    }
  };
  this.getCookiesPerHour();

  this.render = function() {
    for(var i = 0; i < hours.length; i++){
      this.finalArray.push(hours[i] + this.cookiesPerHour[i] + ' cookies');
    }
    this.finalArray.push('Total: ' + this.totalCookies);
  };
  this.render();
}

// New variables for constructor //
var firstAndPike = new Store('First and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

console.log(firstAndPike);
console.log(seaTacAirport);
console.log(seattleCenter);
console.log(capitolHill);
console.log(alki);
