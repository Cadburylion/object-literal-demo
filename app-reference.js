'use strict';


var el = document.getElementById('info');

var storeHours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];

var firstAndPike = {
  title: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  totalCookies: 0,
  cookiesPerHour: [],
  // businessHours: [],
  //cookiesAmount calculates the amount of cookies a random amount of customers between an established min and max purchase per hour based off an established average cookies per hour.

  cookiesAmount: function(){
    el.innerHTML += '<h3>' + this.title + '</h3> \n <ul>Sales Estimates Per Hour</ul>';
    // for (var j = 0; j < storeHours.length; j++) {
    //   this.businessHours.push(storeHours[j]);
    // }
    for (var i = 0; i < 15; i++){
      this.cookiesPerHour.push( Math.round(Math.floor(Math.random()*(this.maxCustomer-this.minCustomer + 1) + this.minCustomer) * this.avgCookie));

      el.innerHTML += '<li>' + storeHours[i] + ' ' +  this.cookiesPerHour[i] + ' cookies</li>';

      this.totalCookies += this.cookiesPerHour[i];
    }
    el.innerHTML += '<li> Total cookies :' + ' ' + this.totalCookies + '</li>';
  }
};

// var element = document.createElement(tagName[, options]);

// var ingredientLi;
// for (var i = 0; i < groceryList.items.length; i++){
//   console.log('groceryList.items of i', groceryList.items[i]);
//   ingredientLi = document.createElement('li'); // creates new element in HTML
//   ingredientLi.setAttribute('class', 'grocery-item');
//   ingredientLi.textContent = groceryList.items[i];
//   ingredientsUl.appendChild(ingredientLi);
// }

var seaTacAirport = {
  title: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  totalCookies: 0,
  cookiesPerHour: [],
  // businessHours: [],
  //cookiesAmount calculates the amount of cookies a random amount of customers between an established min and max purchase per hour based off an established average cookies per hour.

  cookiesAmount: function(){
    el.innerHTML += '<h3>' + this.title + '</h3> \n <ul>Sales Estimates Per Hour</ul>';
    // for (var j = 0; j < storeHours.length; j++) {
    //   this.businessHours.push(storeHours[j]);
    // }
    for (var i = 0; i < 15; i++){
      this.cookiesPerHour.push( Math.round(Math.floor(Math.random()*(this.maxCustomer-this.minCustomer + 1) + this.minCustomer) * this.avgCookie));

      el.innerHTML += '<li>' + storeHours[i] + ' ' +  this.cookiesPerHour[i] + ' cookies</li>';

      this.totalCookies += this.cookiesPerHour[i];
    }
    el.innerHTML += '<li> Total cookies :' + ' ' + this.totalCookies + '</li>';
  }
};

var seattleCenter = {
  title: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  totalCookies: 0,
  cookiesPerHour: [],
  // businessHours: [],
  //cookiesAmount calculates the amount of cookies a random amount of customers between an established min and max purchase per hour based off an established average cookies per hour.

  cookiesAmount: function(){
    el.innerHTML += '<h3>' + this.title + '</h3> \n <ul>Sales Estimates Per Hour</ul>';
    // for (var j = 0; j < storeHours.length; j++) {
    //   this.businessHours.push(storeHours[j]);
    // }
    for (var i = 0; i < 15; i++){
      this.cookiesPerHour.push( Math.round(Math.floor(Math.random()*(this.maxCustomer-this.minCustomer + 1) + this.minCustomer) * this.avgCookie));

      el.innerHTML += '<li>' + storeHours[i] + ' ' +  this.cookiesPerHour[i] + ' cookies</li>';

      this.totalCookies += this.cookiesPerHour[i];
    }
    el.innerHTML += '<li> Total cookies :' + ' ' + this.totalCookies + '</li>';
  }
};

var capitolHill = {
  title: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  totalCookies: 0,
  cookiesPerHour: [],
  //cookiesAmount calculates the amount of cookies a random amount of customers between an established min and max purchase per hour based off an established average cookies per hour.

  cookiesAmount: function(){
    el.innerHTML += '<h3>' + this.title + '</h3> \n <ul>Sales Estimates Per Hour</ul>';
    // for (var j = 0; j < storeHours.length; j++) {
    //   this.businessHours.push(storeHours[j]);
    // }
    for (var i = 0; i < 15; i++){
      this.cookiesPerHour.push( Math.round(Math.floor(Math.random()*(this.maxCustomer-this.minCustomer + 1) + this.minCustomer) * this.avgCookie));

      el.innerHTML += '<li>' + storeHours[i] + ' ' +  this.cookiesPerHour[i] + ' cookies</li>';

      this.totalCookies += this.cookiesPerHour[i];
    }
    el.innerHTML += '<li> Total cookies :' + ' ' + this.totalCookies + '</li>';
  }
};

var alki = {
  title: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  totalCookies: 0,
  cookiesPerHour: [],
  // businessHours: [],
  //cookiesAmount calculates the amount of cookies a random amount of customers between an established min and max purchase per hour based off an established average cookies per hour.

  cookiesAmount: function(){
    el.innerHTML += '<h3>' + this.title + '</h3> \n <ul>Sales Estimates Per Hour</ul>';
    // for (var j = 0; j < storeHours.length; j++) {
    //   this.businessHours.push(storeHours[j]);
    // }
    for (var i = 0; i < 15; i++){
      this.cookiesPerHour.push( Math.round(Math.floor(Math.random()*(this.maxCustomer-this.minCustomer + 1) + this.minCustomer) * this.avgCookie));

      el.innerHTML += '<li>' + storeHours[i] + ' ' +  this.cookiesPerHour[i] + ' cookies</li>';

      this.totalCookies += this.cookiesPerHour[i];
    }
    el.innerHTML += '<li> Total cookies :' + ' ' + this.totalCookies + '</li>';
  }
};

// if (position) {
//   var container = document.createElement('div');
//   container.setAttribute('class', 'sales-list');
//
//   var locationHeading = document.createElement('h2');
//   locationHeading.textContent = store.title;
//   container.appendChild(locationHeading);
//   var hrsCookiesList = document.createElement('ul');
//   container.appendChild(hrsCookiesList);
//
// }


firstAndPike.cookiesAmount();
seaTacAirport.cookiesAmount();
seattleCenter.cookiesAmount();
capitolHill.cookiesAmount();
alki.cookiesAmount();
