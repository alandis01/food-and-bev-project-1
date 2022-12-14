var searchButtonEl = document.querySelector('#searchButton');
var userSelectEl = document.querySelectorAll('.form-check-input');
var resultsEl = document.querySelector("#results");
var foodResultsEl = document.querySelector('#foodResults');

var displayDrinks = function(drinks){
  resultsEl.innerHTML = null;

  for (var drink of drinks){

    var cardEl = document.createElement("div");
    cardEl.className = "card m-3";
  
    var cardTitleEl = document.createElement("h5");
    cardTitleEl.className = "card-title text-dark";
    cardTitleEl.textContent = drink.strDrink;
  
    var cardBodyEl = document.createElement('div');
    cardBodyEl.className = "card-body";
  
    var cardImg = document.createElement("img");
    cardImg.className = "card-image img-fluid";
    cardImg.src = drink.strDrinkThumb;
   
  
    resultsEl.appendChild(cardEl);
    cardEl.appendChild(cardBodyEl);
    cardBodyEl.append(cardTitleEl, cardImg);
  }
};

var displayMeals = function(meals){
  foodResultsEl.innerHTML = null;

  for (var meal of meals){
//for (var i = 0; i < drinks.length; i++) {
//  var drink = drinks[i];
    var cardEl = document.createElement("div");
    cardEl.className = "card m-3";
  
    var cardTitleEl = document.createElement("h5");
    cardTitleEl.className = "card-title text-dark";
    cardTitleEl.textContent = meal.strMeal;
  
    var cardBodyEl = document.createElement('div');
    cardBodyEl.className = "card-body";
  
    var cardImg = document.createElement("img");
    cardImg.className = "card-image img-fluid";
    cardImg.src = meal.strMealThumb;
   
  
    foodResultsEl.appendChild(cardEl);
    cardEl.appendChild(cardBodyEl);
    cardBodyEl.append(cardTitleEl, cardImg);
  }

};

// <!-- <div class="card" style="width: 18rem;">
// <img src="..." class="card-img-top" alt="...">
// <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the
//         bulk
//         of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>


function foodApi(q){
    var foodUrl= "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + q ;
    
    
    fetch(foodUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displayMeals(data.meals);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  

  function bevApi(q){
    var bevUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + q;
    
    fetch(bevUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            displayDrinks(data.drinks);
        })
        .catch(function (error) {
            console.log(error);
        });
  }


  var handleSearch = function (event){
    event.preventDefault();


    var q;
    for (var i = 0; i < userSelectEl.length; i++){
      if(userSelectEl[i].checked){
        q = userSelectEl[i].value;
        userSelectEl[i].checked = false;
      }
      var selectedIngredient = document.createElement ("h4");
        selectedIngredient.className = "";
        selectedIngredient.textContent = q;
    }
    
    console.log(q);
    
    //if a search exists, only then should the function fetch results
    if (q) {
        foodApi(q);
        bevApi(q);
    }
};

  searchButtonEl.addEventListener('click', handleSearch);