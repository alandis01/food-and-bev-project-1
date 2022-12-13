var searchButtonEl = document.querySelector('#searchButton');
var userSelectEl = document.querySelectorAll('.form-check-input');
var resultsEl = document.querySelector("#results");

var displayFunction = function(){
  resultsEl.innerHTML = null;

for (var result of results){

  var cardEl = document.createElement("div");
  cardEl.className = "card m-3";

  var cardTitleEl = document.createElement("h5");
  cardTitleEl.className = "card-title";
  cardTitleEl.textContent = result.title;

  var cardBodyEl = document.createElement('div');
  cardBodyEl.className = "card-body";

  var cardLink = document.createElement("a");
  cardLink.className = "card-link";

  caredLink.textContent = result.url;
  cardLink.href = result.url;
  cardLink.target = "_blank";

  resultsEl.appendChild(cardEl);
  cardEl.appendChild(cardBodyEl);
  cardBodyEl.append(cardTitleEl, cardLink);

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
      // bevApi(data);
      displayFunction(data.meals);
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
        .then(function(data2){
            // console.log(data1);
            console.log(data2);
            displayFunction(data.drinks);
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
      }
    }
    
    console.log(q);
    
    //if a search exists, only then should the function fetch results
    if (q) {
        foodApi(q);
        bevApi(q);
    }
};

  searchButtonEl.addEventListener('click', handleSearch);