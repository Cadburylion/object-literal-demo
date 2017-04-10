'use strict';

var storeHours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];

var firstAndPike = {
  title: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  cookiesPerHour: [],
  businessHours: [],
  //cookiesAmount calculates the amount of cookies a random amount of customers between an established min and max purchase per hour based off an established average cookies per hour.
  cookiesAmount: function(){
    for (var j = 0; j < storeHours.length; j++) {
      this.businessHours.push(storeHours[j]);
    }
    for (var i = 0; i < 15; i++){
      this.cookiesPerHour.push(storeHours[i] + ' ' +  Math.round(Math.floor(Math.random()*(this.maxCustomer-this.minCustomer) + this.minCustomer) * this.avgCookie)+ ' cookies');
    }
  }
};

var seaTacAirport = {
  location: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  cookiesPerHour: [],
  businessHours: [],
  //cookiesAmount calculates the amount of cookies a random amount of customers between an established min and max purchase per hour based off an established average cookies per hour.
  cookiesAmount: function(){
    for (var j = 0; j < storeHours.length; j++) {
      this.businessHours.push(storeHours[j]);
    }
    for (var i = 0; i < 15; i++){
      this.cookiesPerHour.push(storeHours[i] + ' ' +  Math.round(Math.floor(Math.random()*(this.maxCustomer-this.minCustomer) + this.minCustomer) * this.avgCookie)+ ' cookies');
    }
  }
};

var seattleCenter = {
  location: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  cookiesPerHour: [],
  businessHours: [],
  //cookiesAmount calculates the amount of cookies a random amount of customers between an established min and max purchase per hour based off an established average cookies per hour.
  cookiesAmount: function(){
    for (var j = 0; j < storeHours.length; j++) {
      this.businessHours.push(storeHours[j]);
    }
    for (var i = 0; i < 15; i++){
      this.cookiesPerHour.push(storeHours[i] + ' ' +  Math.round(Math.floor(Math.random()*(this.maxCustomer-this.minCustomer) + this.minCustomer) * this.avgCookie)+ ' cookies');
    }
  }
};

var capitolHill = {
  location: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  cookiesAmmt: [],
  cookiesPerHour: [],
  businessHours: [],
  //cookiesAmount calculates the amount of cookies a random amount of customers between an established min and max purchase per hour based off an established average cookies per hour.
  cookiesAmount: function(){
    for (var j = 0; j < storeHours.length; j++) {
      this.businessHours.push(storeHours[j]);
    }
    for (var i = 0; i < 15; i++){
      this.cookiesPerHour.push(storeHours[i] + ' ' +  Math.round(Math.floor(Math.random()*(this.maxCustomer-this.minCustomer) + this.minCustomer) * this.avgCookie)+ ' cookies');
    }
  }
};

var alki = {
  location: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  cookiesPerHour: [],
  businessHours: [],
  //cookiesAmount calculates the amount of cookies a random amount of customers between an established min and max purchase per hour based off an established average cookies per hour.
  cookiesAmount: function(){
    for (var j = 0; j < storeHours.length; j++) {
      this.businessHours.push(storeHours[j]);
    }
    for (var i = 0; i < 15; i++){
      this.cookiesPerHour.push(storeHours[i] + ' ' +  Math.round(Math.floor(Math.random()*(this.maxCustomer-this.minCustomer) + this.minCustomer) * this.avgCookie)+ ' cookies');
    }
  }
};
