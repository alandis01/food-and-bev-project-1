var searchButtonEl = document.querySelector("#searchButton");
var userSelectEl = document.querySelectorAll(".form-check-input");
var resultsEl = document.querySelector("#results");
var foodResultsEl = document.querySelector("#foodResults");
var renderLocalEl = document.querySelector("#renderLocal");


var displayDrinks = function(drinks){
resultsEl.innerHTML = null;

  for (var drink of drinks){

    var cardEl = document.createElement("div");
    cardEl.className = "card m-3";

    var cardTitleEl = document.createElement("h5");
    cardTitleEl.className = "card-title text-dark";
    cardTitleEl.textContent = drink.strDrink;

    var cardBodyEl = document.createElement("div");
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

    var cardEl = document.createElement("div");
    cardEl.className = "card m-3";

    var cardTitleEl = document.createElement("h5");
    cardTitleEl.className = "card-title text-dark";
    cardTitleEl.textContent = meal.strMeal;

    var cardBodyEl = document.createElement("div");
    cardBodyEl.className = "card-body";

    var cardImg = document.createElement("img");
    cardImg.className = "card-image img-fluid";
    cardImg.src = meal.strMealThumb;
    

    foodResultsEl.appendChild(cardEl);
    cardEl.appendChild(cardBodyEl);
    cardBodyEl.append(cardTitleEl, cardImg);
  }

};


function foodApi(q){
  var foodUrl= "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + q ;
  
  
  fetch(foodUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
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
          displayDrinks(data.drinks);
      })
      .catch(function (error) {
          console.log(error);
      });
}

function renderLocal(){
  renderLocalEl.textContent = "Selected: " + localStorage.getItem("user selection");
};

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
  
  //if a search exists, only then should the function fetch results
  if (q) {
      foodApi(q);
      bevApi(q);
  }

  localStorage.setItem("user selection", q);
  renderLocal();
};

searchButtonEl.addEventListener("click", handleSearch);