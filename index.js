let api = "https://www.omdbapi.com/?apikey=c960406b&t="
let title = document.getElementById("title")
let poster = document.getElementById("poster")
let director = document.getElementById("director")
let actor = document.getElementById("actors")
let collections = document.getElementById("collection")
let description = document.getElementById("description")
let awards = document.getElementById("awards")
let writer = document.getElementById("writer")
let ratings = document.getElementById("ratings")
let date = document.getElementById("released")
let genre = document.getElementById("genre")
let year = document.getElementById("year")
let post = document.getElementById("post")

function showMovieDetails() {
   let paragraphs = document.querySelectorAll('.container .content1 p');
    paragraphs.forEach(function(paragraph) {
        paragraph.style.display = 'block';
    });
}

function searchmovie() {
   let movie = document.getElementById("moviename")
   fetch(api+movie.value).then((data)=>{
     return data.json()
   }).then((data)=>{
      title.innerText = data.Title || "Baaney extralu deng... ra😆";
      director.innerText = data.Director ||"❔";
      actor.innerText = data.Actors ||"❔";
      collections.innerText = data.BoxOffice ||"❔";
      description.innerText = data.Plot ||"❔";
      awards.innerText = data.Awards ||"❔";
      writer.innerText = data.Writer ||"❔";
      ratings.innerText = data.imdbRating ||"❔";
      date.innerText = data.Released ||"❔";
      genre.innerText = data.Genre ||"❔";
      year.innerText = data.Year ||"❔";
      post.src = data.Poster;



    showMovieDetails();

   })

}
