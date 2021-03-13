// // Get ratings function declaration
function getRatings() {
  for (let rating in ratings) {
    console.log(rating);
  }
}

// Sorting all elements with rating! 
// =====================================================
var sorted = unsorted.items.sort(function(a, b) {return a.order - b.order});
// ====================================================/
//Star Rating Movies 1st Attempt
var HTML = ""; // Start the HTML string for concatenation
data.forEach(function( ob) {
  for(var i=0; i<5; i++) {  // We need 5 stars
    var icoClass = i<ob.star ? "fa fa-star" : "fa fa-star-o"; // full or empty star?
    HTML += "<i class='"+ icoClass +"'></i>"; // concatenate stars
  }
  HTML += " "+ ob.name +"<br>"; // and concatenate the cool movie name
});

// document.getElementById("id").innerHTML = HTML; // Finally insert

// ${obj.Movies[i].image}


// ${obj.Movies[i].title}

// =============================================================/
// Adding an eventlistener to the page and calling the get ratings function
var ratings = JSON.parse(movieDatabase);
document.addEventListener('DOMcontentloaded', getRatings);



// document.getElementById("data").innerHTML = "Title: " + obj.title + " " + obj.runtime + "" + "br";
// ============================Bootstrap designs====================//
{/* <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div> */}


        {/* <div class="col-md-8">
      <div class="card-body">
      <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div> */}



//   for (i in obj.Movies) {
//     data += `
//     <div class="card mb-3" style="max-width: 540px;">
//   <div class="row g-0">
//     <div class="col-md-4">
//       <img class = "img-fluid" src="${obj.Movies[i].image}" alt="error loading image file">
//     </div>     
//         <h2 class="card-title">${obj.Movies[i].title}</h2>
//         <p class="card-text">${obj.Movies[i].description}</p>
//         <Directed class="fw-bolder">Directed by: ${obj.Movies[i].director}</p> 
//         <p class="card-text"><small class="text-muted">${obj.Movies[i].category}</small></p>
//         <p class="card-text"><small class="text-muted">${obj.Movies[i].year}</small></p>
//         <p class="card-text"><small class="text-muted">${obj.Movies[i].runtime}</small></p> 

//         <div class="row">
//         <div class="col-md-6"><i onclick="doLike(pId${i})" class="fa fa-thumbs-up"></i></div>
//         <span class="col-md-3 ms-6"><p class="card-text"><small id="pId${i}" class="text-muted">${obj.Movies[i].rating}</small></p>
//       </span>
//     </div>            
//      </div>
//   </div>
// </div>
//     `}
//   return data
// }