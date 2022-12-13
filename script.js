var searchButtonEl = document.querySelector('#searchButton');
var userSelectEl = document.querySelectorAll('.form-check-input');



function foodApi(q){
    var foodUrl= "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + q ;
    
    
    fetch(foodUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // bevApi(data);
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