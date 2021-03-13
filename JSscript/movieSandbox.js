// Assigning the JSON DATABASE to an object variable 
// Now we have the obj to work with 
var obj = JSON.parse(movieDatabase);
// console-logging all 8 movie arays
// console.log(obj);

// Declaring the generate HTML function with the for-in loop inside to loop through the JSON file
function generateMainHTML() {
  let data = "";

  //create html
  for (i in obj.Movies) {
    let singleMovie = obj.Movies[i];
    data += `
  <div class="col-md-8 col-lg-6">
    <div class="card-body">
      <div class="col">
        <div class="card">
          <img class="w-50 img-fluid" src="${singleMovie.image}" alt="error loading image file"></img>
            <div class="card-body">
              <h5 class="card-title">${singleMovie.title}</h5>
              <p class="card-text">${singleMovie.description}</p>
              <Directed class="fw-bolder">Directed by: ${singleMovie.director}</p> 
              <p class="card-text"><small class="text-muted">${singleMovie.category}</small></p>
              <p class="card-text"><small class="text-muted">${singleMovie.year}</small></p>
              <p class="card-text"><small class="text-muted">${singleMovie.runtime}</small></p> 
              <!-- Rating section-->
              <!--Thumbs up button -->
              <div class="col-md-6"><i onclick="doLike(pRatingId${i})" class="fa fa-thumbs-up"></i></div>
              <!-- Creating an id variable and assigning it the paragraph id value and the object rating in the Movie data base -->
             <span class="col-md-3 ms-6"><p class="card-text"><small id="pRatingId${i}" class="text-muted">${singleMovie.rating}</small></p>
             </span>
            </div>
         </div>
      </div>
    </div>
   </div> 
        `}
  return data
}

//call on load document
setMainHtml();

//click event for sort-button
function sortMovies(){
  obj.Movies.sort(function(a, b) {return b.rating - a.rating});
  setMainHtml();
}

// Get ratings function declaration
function doLike(pRatingId) {
  let oldRating = parseInt(pRatingId.innerHTML);
  let newRating = oldRating + 1;
  pRatingId.innerHTML = '' + newRating;
}

function setMainHtml(){
  document.getElementById("data").innerHTML = generateMainHTML();
}

var ratings = JSON.parse(movieDatabase);
// document.addEventListener('DOMcontentloaded', getRatings);