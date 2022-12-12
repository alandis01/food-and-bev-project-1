// http://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka
// http://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
var searchButtonEl = document.querySelector('#searchButton');
var userSelectEl = document.querySelector('#userSelect');



fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
