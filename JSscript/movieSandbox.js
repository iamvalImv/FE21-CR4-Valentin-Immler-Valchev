// Assigning the JSON DATABASE to an object variable 
// Now we have the obj to work with 
var obj = JSON.parse(movieDatabase);
// console-logging all 8 movie arays
// console.log(obj);
function generateMainHTML() {
    let data="";
for (i in obj.Movies){
    data +=`
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img class = "img-fluid" src="${obj.Movies[i].image}" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">${obj.Movies[i].title}</h2>
        <p class="card-text">${obj.Movies[i].description}</p>
        <p class="card-text"><small class="text-muted">${obj.Movies[i].year}</small></p>
      </div>
    </div>
  </div>
</div>
    `}
return data
}

document.getElementById("data").innerHTML += generateMainHTML();


// ${obj.Movies[i].image}


// ${obj.Movies[i].title}



// document.getElementById("data").innerHTML = "Title: " + obj.title + " " + obj.runtime + "" + "br";





