'use strict';

var groceryList = {
  title: 'Sunday dinner',
  items: [
    'eggs',
    'flower',
    'peach',
    'pasta',
  ],
};

// set the title of the page (the h1 tag with id="title")

var heading = document.getElementById('title');
heading.textContent = groceryList.title;
heading.setAttribute('class', 'title') // sets attribute to element

var ingredientsUl = document.getElementById('ingredients');
// create a li tag for each string in groceryList.items
// fill that li with the string from the groceryList.items[i]
// put the new li at the end of ingredientsUl (using appendChild)


var ingredientLi;
for (var i = 0; i < groceryList.items.length; i++){
  console.log('groceryList.items of i', groceryList.items[i]);
  ingredientLi = document.createElement('li'); // creates new element in HTML
  ingredientLi.setAttribute('class', 'grocery-item');
  ingredientLi.textContent = groceryList.items[i];
  ingredientsUl.appendChild(ingredientLi);
}


console.log('shark in the dark!');
