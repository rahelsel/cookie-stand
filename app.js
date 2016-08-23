'use strict';
//ARRAY OF STORE HOURS TO DRAW FROM//
var hours = ['6:00 - 7:00am: ', '7:00 - 8:00am: ', '8:00 - 9:00am: ', '9:00 - 10:00am: ', '10:00 - 11:00am: ', '11:00 - 12:00pm: ', '12:00 - 1:00pm: ', '1:00 - 2:00pm: ', '2:00 - 3:00pm: ', '3:00 - 4:00pm: ', '4:00 - 5:00pm: ', '5:00 - 6:00pm: ', '6:00 - 7:00pm: '];

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
  this.finalArray.push('Total Cookies at ' + this.locationName + ': ' + this.totalCookies);
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
