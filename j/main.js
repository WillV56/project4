document.addEventListener('DOMContentLoaded', init);

function init() {

    fetch("https://swapi.dev/api/people/?page=2")
    .then(responce => responce.json())
    .then(people => {
    const myData = people.results[0].name;
    const contentElement = document.createElement("p");
    contentElement.textContent = myData;
    const peopleElement = document.getElementById("people");
    peopleElement.appendChild(contentElement);
    })
}