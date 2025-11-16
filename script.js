
document.getElementById('movie-input').addEventListener("keypress", e=>{
    if(e.key === "Enter") searchMovie();
});

async function searchMovie(){
    const movieName = document.getElementById('movie-input').value;
    const box = document.getElementById('movie-info');
    box.innerHTML = "";

    if(movieName.trim() === ""){
        box.innerHTML = "<h3>Please enter a movie name</h3>";
        return;
    }

    const apiKey = "7ae9852f";
    const url = `https://www.omdbapi.com/?s=${encodeURIComponent(movieName)}&apikey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if(data.Response === "False"){
        box.innerHTML = "<h3>No movies found</h3>";
        return;
    }

    const template = document.getElementById("movie-card-template");

    data.Search.forEach(movie => {
        let card = template.content.cloneNode(true);

        card.querySelector(".poster").src =
            movie.Poster !== "N/A" ? movie.Poster : "https://dummyimage.com/200x300";

        card.querySelector(".title").textContent = movie.Title;
        card.querySelector(".year").textContent = movie.Year;

        // ⭐ OPEN NEW PAGE
        card.querySelector(".movie-card").onclick = () => {
            window.location.href = `movie.html?id=${movie.imdbID}`;
        };

        box.appendChild(card);
    });
}

