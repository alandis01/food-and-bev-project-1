// http://www.thecocktaildb.com/api/json/v1/1/search.php?i= + q
// http://www.themealdb.com/api/json/v1/1/filter.php?i= + q
var searchButtonEl = document.querySelector('#searchButton');
var userSelectEl = document.querySelector('#userSelect');


function foodApi(event){
    var foodUrl= "http://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
    
    event.preventDefault();
    
    fetch(foodUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        bevApi(data);
      })
      .catch(function (error) {
        console.log(error);
      });
}


  function bevApi(data1){
    var bevUrl = "http://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka";
    fetch(bevUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data2){
            console.log(data1);
            console.log(data2);
        })
        .catch(function (error) {
            console.log(error);
        });
  }

  searchButtonEl.addEventListener('click', foodApi);