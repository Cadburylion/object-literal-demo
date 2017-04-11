'use strict';


var el = document.getElementById('info');

var storeHours = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];




// Cookie Shop Object Constructor
function CookieShop(title, minCustomer, maxCustomer, avgCookie){
  this.title = title;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.totalCookies = 0;
  this.cookiesPerhour = [];



}

CookieShop.prototype.cookies = function(maxCust, minCust, avgCookie){
  return Math.round(Math.floor(Math.random()*(maxCust-minCust + 1) + minCust) * avgCookie);

}

CookieShop.prototype.cookiesPerHour = function(){
  for (var i = 0; i < 15; i++){
    this.cookiesPerHour.push(cookies(this.maxCustomer, this.minCustomer, this.avgCookie));
  }
}
//   el.innerHTML += '<li>' + storeHours[i] + ' ' +  this.cookiesPerHour[i] + ' cookies</li>';
//
//   this.totalCookies += this.cookiesPerHour[i];
// }
// el.innerHTML += '<li> Total cookies :' + ' ' + this.totalCookies + '</li>';





//
//
var firstAndPike = new CookieShop('1st and Pike', 23, 65, 6.3);
//
//
// // var firstAndPike = {
// // title: '1st and Pike',
// // minCustomer: 23,
// // maxCustomer: 65,
// // avgCookie: 6.3,
// // totalCookies: 0,
// // cookiesPerHour: [],
// // businessHours: [],
// //cookiesAmount calculates the amount of cookies a random amount of customers between an established min and max purchase per hour based off an established average cookies per hour.
//
// cookiesAmount: function(){
//   el.innerHTML += '<h3>' + this.title + '</h3> \n <ul>Sales Estimates Per Hour</ul>';
//   // for (var j = 0; j < storeHours.length; j++) {
//   //   this.businessHours.push(storeHours[j]);
//   // }
//
//   for (var i = 0; i < 15; i++){
//     this.cookiesPerHour.push(cookies(this.maxCustomer, this.minCustomer, this.avgCookie));
//
//
//
//     el.innerHTML += '<li>' + storeHours[i] + ' ' +  this.cookiesPerHour[i] + ' cookies</li>';
//
//     this.totalCookies += this.cookiesPerHour[i];
//   }
//   el.innerHTML += '<li> Total cookies :' + ' ' + this.totalCookies + '</li>';
// }
// // };
//
// firstAndPike.cookiesAmount();
