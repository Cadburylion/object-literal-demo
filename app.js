'use strict';

// Cookie Shop Object Constructor
function CookieShop(title, minCustomer, maxCustomer, avgCookie){
  this.title = title;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.totalCookies = 0;
  this.cookiesPerHour = [];
}

CookieShop.prototype.getHourlyCookies = function(maxCust, minCust, avgCookie){
  var cookies = Math.round(Math.floor(Math.random()*(maxCust-minCust + 1) + minCust) * avgCookie);
  this.totalCookies += cookies;
  return cookies;
};

CookieShop.prototype.getCookiesPerHour = function(){
  for (var i = 0; i < 15; i++){
    this.cookiesPerHour.push(this.getHourlyCookies(this.maxCustomer, this.minCustomer, this.avgCookie));
  }
};

CookieShop.prototype.getTable = function(){
  var titleHeading = document.createElement('th');
  var titleRow = document.createElement('tr');

  var app = document.getElementById('app');

  app.appendChild(titleRow);

  titleHeading.textContent = this.title;
  titleRow.appendChild(titleHeading);
  // create a new row for each item and add it to the table
  console.log(this.cookiesPerHour.length);
  for(var i = 0; i < this.cookiesPerHour.length; i++){
    var itemName = document.createElement('td');

    titleRow.appendChild(itemName);
    itemName.textContent = this.cookiesPerHour[i];
  }
  var totalCell = document.createElement('td');
  titleRow.appendChild(totalCell);
  totalCell.textContent = this.totalCookies;
};

var getStoreHours = function() {

  var hoursRow = document.createElement('tr'); // creates a row to add to
  var emptyCell = document.createElement('td'); // creates an empty cell
  hoursRow.appendChild(emptyCell); // adds empty cell to the hoursRow
  for (var i = 0; i < storeHours.length; i++){ // creates amount of new cells = to store hours
    var hoursCell = document.createElement('td');
    hoursCell.textContent = storeHours[i]; // populating cells with data
    hoursRow.appendChild(hoursCell); // adds cells into the row
    // console.log(storeHours[i])
  }
  var app = document.getElementById('app'); // setting app to reference to element with id of app

  app.appendChild(hoursRow); // adding the hours row to the page

  var totalCell = document.createElement('td');
  hoursRow.appendChild(totalCell);
  totalCell.textContent = 'Totals';  
};

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

getStoreHours();

var firstAndPike = new CookieShop('1st and Pike', 23, 65, 6.3);
firstAndPike.getCookiesPerHour();
firstAndPike.getTable();

var seaTacAirport = new CookieShop('SeaTac Airport', 3, 24, 1.2);
seaTacAirport.getCookiesPerHour();
seaTacAirport.getTable();

var seattleCenter = new CookieShop('Seattle Center', 11, 38, 3.7);
seattleCenter.getCookiesPerHour();
seattleCenter.getTable();

var capitolHill = new CookieShop('Capitol Hill', 20, 38, 2.3);
capitolHill.getCookiesPerHour();
capitolHill.getTable();

var alki = new CookieShop('Alki', 2, 16, 4.6);
alki.getCookiesPerHour();
alki.getTable();
