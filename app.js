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

//STORE TWO
var seatacAirport = {
 // PROPERTIES
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  totalCookies: 0,
 // ARRAY PROPERTIES
  avgCustPerHour: [],
  cookiesPerHour: [],
  finalArray: [],
};

// CALCULATE METHOD FOR RANDOM CUSTOMERS/HR
seatacAirport.custPerHour = function() {
  for (var i = 0; i < hours.length; i++ ) {
    this.avgCustPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

// CALCULATE METHOD FOR COOKIES/HR FROM CUSTOMERS/HR
seatacAirport.cookiesPerCust = function() {
  this.custPerHour();
  for (var i = 0; i < hours.length; i++) {
    var cookiesPurchased = Math.ceil(this.avgCustPerHour[i] * this.avgCookie);
    this.cookiesPerHour.push(cookiesPurchased);

// TOTAL COOKIE TRACKER
    this.totalCookies += cookiesPurchased;
  }
};

// PUSH INTO ARRAYS
seatacAirport.final = function() {
  seatacAirport.cookiesPerCust();
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    this.finalArray.push(hours[i] + this.cookiesPerHour[i] + ' cookies');
  }
  this.finalArray.push('Total Cookies at ' + this.name + ': ' + this.totalCookies);
};

seatacAirport.final();

// LOCATION TITLE
var seatacAirportTitle = document.createElement('h2');
document.body.appendChild(seatacAirportTitle);

seatacAirport.textContent = seatacAirport.name;

// ADD UL WITH LI
var seatacAirportList = document.createElement('ul');

for (var i = 0; i < seatacAirport.finalArray.length; i++) {
  var listElement = document.createElement('li');
  listElement.textContent = seatacAirport.finalArray[i];
  seatacAirportList.appendChild(listElement);
};

document.body.appendChild(seatacAirportList);

//STORE THREE
var seattleCenter = {
 // PROPERTIES
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  totalCookies: 0,
 // ARRAY PROPERTIES
  avgCustPerHour: [],
  cookiesPerHour: [],
  finalArray: [],
};

// CALCULATE METHOD FOR RANDOM CUSTOMERS/HR
seattleCenter.custPerHour = function() {
  for (var i = 0; i < hours.length; i++ ) {
    this.avgCustPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

// CALCULATE METHOD FOR COOKIES/HR FROM CUSTOMERS/HR
seattleCenter.cookiesPerCust = function() {
  this.custPerHour();
  for (var i = 0; i < hours.length; i++) {
    var cookiesPurchased = Math.ceil(this.avgCustPerHour[i] * this.avgCookie);
    this.cookiesPerHour.push(cookiesPurchased);

// TOTAL COOKIE TRACKER
    this.totalCookies += cookiesPurchased;
  }
};

// PUSH INTO ARRAYS
seattleCenter.final = function() {
  seattleCenter.cookiesPerCust();
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    this.finalArray.push(hours[i] + this.cookiesPerHour[i] + ' cookies');
  }
  this.finalArray.push('Total Cookies at ' + this.name + ': ' + this.totalCookies);
};

seattleCenter.final();

// LOCATION TITLE
var seattleCenterTitle = document.createElement('h2');
document.body.appendChild(seattleCenterTitle);

seattleCenter.textContent = seattleCenter.name;

// ADD UL WITH LI
var seattleCenterList = document.createElement('ul');

for (var i = 0; i < seattleCenter.finalArray.length; i++) {
  var listElement = document.createElement('li');
  listElement.textContent = seattleCenter.finalArray[i];
  seattleCenterList.appendChild(listElement);
};

document.body.appendChild(seattleCenterList);

//STORE FOUR
var capitolHill = {
 // PROPERTIES
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  totalCookies: 0,
 // ARRAY PROPERTIES
  avgCustPerHour: [],
  cookiesPerHour: [],
  finalArray: [],
};

// CALCULATE METHOD FOR RANDOM CUSTOMERS/HR
capitolHill.custPerHour = function() {
  for (var i = 0; i < hours.length; i++ ) {
    this.avgCustPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

// CALCULATE METHOD FOR COOKIES/HR FROM CUSTOMERS/HR
capitolHill.cookiesPerCust = function() {
  this.custPerHour();
  for (var i = 0; i < hours.length; i++) {
    var cookiesPurchased = Math.ceil(this.avgCustPerHour[i] * this.avgCookie);
    this.cookiesPerHour.push(cookiesPurchased);

// TOTAL COOKIE TRACKER
    this.totalCookies += cookiesPurchased;
  }
};

// PUSH INTO ARRAYS
capitolHill.final = function() {
  capitolHill.cookiesPerCust();
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    this.finalArray.push(hours[i] + this.cookiesPerHour[i] + ' cookies');
  }
  this.finalArray.push('Total Cookies at ' + this.name + ': ' + this.totalCookies);
};

capitolHill.final();

// LOCATION TITLE
var capitolHillTitle = document.createElement('h2');
document.body.appendChild(capitolHillTitle);

capitolHill.textContent = capitolHill.name;

// ADD UL WITH LI
var capitolHillList = document.createElement('ul');

for (var i = 0; i < capitolHill.finalArray.length; i++) {
  var listElement = document.createElement('li');
  listElement.textContent = capitolHill.finalArray[i];
  capitolHillList.appendChild(listElement);
};

document.body.appendChild(capitolHillList);

//STORE FIVE
var alki = {
 // PROPERTIES
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  totalCookies: 0,
 // ARRAY PROPERTIES
  avgCustPerHour: [],
  cookiesPerHour: [],
  finalArray: [],
};

// CALCULATE METHOD FOR RANDOM CUSTOMERS/HR
alki.custPerHour = function() {
  for (var i = 0; i < hours.length; i++ ) {
    this.avgCustPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

// CALCULATE METHOD FOR COOKIES/HR FROM CUSTOMERS/HR
alki.cookiesPerCust = function() {
  this.custPerHour();
  for (var i = 0; i < hours.length; i++) {
    var cookiesPurchased = Math.ceil(this.avgCustPerHour[i] * this.avgCookie);
    this.cookiesPerHour.push(cookiesPurchased);

// TOTAL COOKIE TRACKER
    this.totalCookies += cookiesPurchased;
  }
};

// PUSH INTO ARRAYS
alki.final = function() {
  alki.cookiesPerCust();
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    this.finalArray.push(hours[i] + this.cookiesPerHour[i] + ' cookies');
  }
  this.finalArray.push('Total Cookies at ' + this.name + ': ' + this.totalCookies);
};

alki.final();

// LOCATION TITLE
var alkiTitle = document.createElement('h2');
document.body.appendChild(alkiTitle);

alki.textContent = alki.name;

// ADD UL WITH LI
var alkiList = document.createElement('ul');

for (var i = 0; i < alki.finalArray.length; i++) {
  var listElement = document.createElement('li');
  listElement.textContent = alki.finalArray[i];
  alkiList.appendChild(listElement);
};

document.body.appendChild(alkiList);
