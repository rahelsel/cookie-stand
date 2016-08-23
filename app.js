'use strict';
//ARRAY OF STORE HOURS TO DRAW FROM//
var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

// STORE OBJECTS//

//STORE ONE
var firstAndPike = {
 // PROPERTIES
  name: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  totalCookies: 0,
 // ARRAY PROPERTIES
  avgCustPerHour: [],
  cookiesPerHour: [],
  finalArray: [],
};

// CALCULATE METHOD FOR RANDOM CUSTOMERS/HR
firstAndPike.custPerHour = function() {
  for (var i = 0; i < hours.length; i++ ) {
    this.avgCustPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

// CALCULATE METHOD FOR COOKIES/HR FROM CUSTOMERS/HR
firstAndPike.cookiesPerCust = function() {
  this.custPerHour();
  for (var i = 0; i < hours.length; i++) {
    var cookiesPurchased = Math.ceil(this.avgCustPerHour[i] * this.avgCookie);
    this.cookiesPerHour.push(cookiesPurchased);

// TOTAL COOKIE TRACKER
    this.totalCookies += cookiesPurchased;
  }
};


// PUSH INTO ARRAYS
firstAndPike.final = function() {
  firstAndPike.cookiesPerCust();
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    this.finalArray.push(hours[i] + this.cookiesPerHour[i] + ' cookies');
  }
  this.finalArray.push('Total Cookies at ' + this.name + ': ' + this.totalCookies);
};

firstAndPike.final();

// LOCATION TITLE
var firstAndPikeTitle = document.createElement('h2');
document.body.appendChild(firstAndPikeTitle);

firstAndPikeTitle.textContent = firstAndPike.locationName;

// ADD UL WITH LI
var firstAndPikeList = document.createElement('ul');

for (var i = 0; i < firstAndPike.finalArray.length; i++) {
  var listElement = document.createElement('li');
  listElement.textContent = firstAndPike.finalArray[i];
  firstAndPikeList.appendChild(listElement);
};

document.body.appendChild(firstAndPikeList);


// var storeTwo = {
//   name: 'SeaTac',
//   minCust: 3,
//   maxCust: 24,
//   avgSalePerCust: 1.2
// };
//
// var storeThree = {
//   name: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgSalePerCust: 3.7
// };
//
// var storeFour = {
//   name: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgSalePerCust: 2.3
// };
//
// var storeFive = {
//   name: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgSalePerCust: 4.6
// };
