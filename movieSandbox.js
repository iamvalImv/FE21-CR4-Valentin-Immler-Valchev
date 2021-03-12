// Creating the movies array 

let moviesArray = JSON.parse(movies);
// console.log(moviesArray);

for (let i=0; i<moviesArray; i++){
    // Creating a <div container 
    var movieCont = document.createElement("div");
    movieCont.setAttribute("id", "movie", + [i]);
    document.getElementById("main").appendChild(movieCont); 
    
    // create element <p> for title
    var movieTitle = createElement("p");
    var movieTitleText= document.createTextNode("Title: " + moviesArray[i].title);
    movieTitle.appendChild(movieTitleText);
    document.getElementById(movie + [i]).appendChild(movieTitle);
     
     
}
