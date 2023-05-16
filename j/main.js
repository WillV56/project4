document.addEventListener('DOMContentLoaded', init);

function init() {

    fetch("https://swapi.dev/api/people/?page=2")
    .then(responce => responce.json())
    .then(people => {
    const randomIndex = Math.floor(Math.random() * people.results.length);
    const myData = people.results[randomIndex].name;
    const contentElement = document.createElement("p");
    contentElement.textContent = myData;
    const peopleElement = document.getElementById("people");
    peopleElement.appendChild(contentElement);
    })

    fetch("https://swapi.dev/api/people/?page=2")
    .then(responce => responce.json())
    .then(movies => {
        const myData2 = movies.results[0].films;
        const contentElement = document.createElement("p");
        contentElement.textContent = myData2;
        const moviesElement = document.getElementById("movies");
        moviesElement.appendChild(contentElement);
    })
}

