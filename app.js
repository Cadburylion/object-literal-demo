'use strict';

var firstAndPike = {
  title: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  cookiesAmmt: [],
  randoCustomer: function(){
    return Math.floor(Math.random()*(this.maxCustomer-this.minCustomer)+this.minCustomer);
  }
}
  // randoCustomer: function() {
    // Math.floor(Math.random()*(this.maxCustomer-this.minCustomer+1)+1);

// };
// var randoCustomer = function() {
//   console.log(Math.floor(Math.random()*(firstAndPike.maxCustomer-firstAndPike.minCustomer+1)+1));
// }
// //   console.log(firstAndPike.minCustomer);
// //   console.log(firstAndPike.maxCustomer);
//   console.log(Math.floor(Math.random()*(firstAndPike.maxCustomer-firstAndPike.minCustomer)+firstAndPike.minCustomer));
//
// function randoCustomer(min,max) {
//     (Math.floor(Math.random()*(max-min)+min));
//   }
// // console.log(randoCustomer(23,65));

// };

// function randomIntFromInterval(min,max)
// {
// console.log(Math.floor(Math.random()*(10-1+1)+1));// }

var seaTacAirport = {
  location: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  cookiesAmmt: [],
  randoCustomer: function(){
    return Math.floor(Math.random()*(this.maxCustomer-this.minCustomer)+this.minCustomer);
  }
};

var seattleCenter = {
  location: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  cookiesAmmt: [],
  randoCustomer: function(){
    return Math.floor(Math.random()*(this.maxCustomer-this.minCustomer)+this.minCustomer);
  }
};

var capitolHill = {
  location: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  cookiesAmmt: [],
  randoCustomer: function(){
    return Math.floor(Math.random()*(this.maxCustomer-this.minCustomer)+this.minCustomer);
  }
};

var alki = {
  location: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  cookiesAmmt: [],
  randoCustomer: function(){
    return Math.floor(Math.random()*(this.maxCustomer-this.minCustomer)+this.minCustomer);
  }
};

// // set the title of the page (the h1 tag with id="title")
//
// var heading = document.getElementById('title');
// heading.textContent = groceryList.title;
// heading.setAttribute('class', 'title') // sets attribute to element
//
// var ingredientsUl = document.getElementById('ingredients');
// // create a li tag for each string in groceryList.items
// // fill that li with the string from the groceryList.items[i]
// // put the new li at the end of ingredientsUl (using appendChild)
//
//
// var ingredientLi;
// for (var i = 0; i < groceryList.items.length; i++){
//   console.log('groceryList.items of i', groceryList.items[i]);
//   ingredientLi = document.createElement('li'); // creates new element in HTML
//   ingredientLi.setAttribute('class', 'grocery-item')
//   ingredientLi.textConent = groceryList.items[i];
//   ingredientsUl.appendChild(ingredientLi);
// }


console.log('shark in the dark!');
