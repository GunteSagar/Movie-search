
async function loadDetails(){
    let params = new URLSearchParams(window.location.search);
    let imdbID = params.get("id");

    const apiKey = "7ae9852f";
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    const box = document.getElementById("details");
    const template = document.getElementById("details-template");

    let d = template.content.cloneNode(true);

    d.querySelector(".title").textContent = `${data.Title} (${data.Year})`;
    d.querySelector(".poster").src = data.Poster;
    d.querySelector(".genre").textContent = data.Genre;
    d.querySelector(".rating").textContent = data.imdbRating;
    d.querySelector(".actors").textContent = data.Actors;
    d.querySelector(".writer").textContent = data.Writer;
    d.querySelector(".director").textContent = data.Director;
    d.querySelector(".plot").textContent = data.Plot;
    d.querySelector(".released").textContent = data.Released;
    d.querySelector(".runtime").textContent = data.Runtime;
    d.querySelector(".awards").textContent = data.Awards;
    d.querySelector(".boxoffice").textContent = data.BoxOffice;
    d.querySelector(".country").textContent = data.Country;
    d.querySelector(".language").textContent = data.Language;

    box.appendChild(d);
}

loadDetails();

