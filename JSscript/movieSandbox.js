// Assigning the JSON DATABASE to an object variable 
// Now we have the obj to work with 
var obj = JSON.parse(movieDatabase);
// console-logging all 8 movie arays
// console.log(obj);

// Declaring a function 
function generateMainHTML() {
  let data = "";
 
  // movieDatabase.sort(function(a,b) {
  //   return a.movieDatabase.rating > b.movieDatabase.rating;
  // });

  //create html
  for (i in obj.Movies) {
    data += `
    <div class="card bg-dark mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img class = "img-fluid" src="${obj.Movies[i].image}" alt="error loading image file">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">${obj.Movies[i].title}</h2>
        <p class="card-text">${obj.Movies[i].description}</p>
        <Directed class="fw-bolder">Directed by: ${obj.Movies[i].director}</p> 
        <p class="card-text"><small class="text-muted">${obj.Movies[i].category}</small></p>
        <p class="card-text"><small class="text-muted">${obj.Movies[i].year}</small></p>
        <p class="card-text"><small class="text-muted">${obj.Movies[i].runtime}</small></p> 

        <div class="row">
        <div class="col-md-6"><i onclick="doLike(pId${i})" class="fa fa-thumbs-up"></i></div>
        <div class="col-md-6"><p class="card-text"><small id="pId${i}" class="text-muted">${obj.Movies[i].rating}</small></p>
</div>
    </div>

            
      </div>
  </div>
</div>
    `}
  return data
}

function doLike(pId) {
  let oldRating = parseInt(pId.innerHTML);
  let newRating = oldRating + 1;
  pId.innerHTML = '' + newRating;
}

document.getElementById("data").innerHTML += generateMainHTML();

// =============================================================/
// Adding an eventlistener to the page and calling the get ratings function
var ratings = JSON.parse(movieDatabase);
document.addEventListener('DOMcontentloaded', getRatings);


// Get ratings
function getRatings() {
  for (let rating in ratings) {
    console.log(rating);
  }
}


// // Star Rating Movies 1st Attempt
// var HTML = ""; // Start the HTML string for concatenation
// data.forEach(function( ob) {
//   for(var i=0; i<5; i++) {  // We need 5 stars
//     var icoClass = i<ob.star ? "fa fa-star" : "fa fa-star-o"; // full or empty star?
//     HTML += "<i class='"+ icoClass +"'></i>"; // concatenate stars
//   }
//   HTML += " "+ ob.name +"<br>"; // and concatenate the cool movie name
// });
// document.getElementById("id").innerHTML = HTML; // Finally insert

// ${obj.Movies[i].image}


// ${obj.Movies[i].title}



// document.getElementById("data").innerHTML = "Title: " + obj.title + " " + obj.runtime + "" + "br";




