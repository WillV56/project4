document.addEventListener('DOMContentLoaded', init);

function init() {
getData();
   
document.getElementById("btn").addEventListener('click', getData);
}
function getData() {
    const moviesElement = document.getElementById("movies");
    moviesElement.innerHTML = '';
    const homeElement = document.getElementById("info");
    homeElement.innerHTML = '';
    fetch("https://swapi.dev/api/people/?page=2")
    .then(response => response.json())
    .then(people => {
    const randomIndex = Math.floor(Math.random() * people.results.length);
    const myData = people.results[randomIndex].name;
    const contentElement = document.createElement("h2");
    contentElement.textContent = myData;
    const peopleElement = document.getElementById("people");
    peopleElement.innerHTML = '';
    peopleElement.appendChild(contentElement);

        const myData2 = people.results[randomIndex].films;
        myData2.forEach(film => {
            fetch(film)
            .then(response => response.json())
            .then(item => {
                const myData2 = item.title;
                const contentElement2 = document.createElement("p");
                contentElement2.textContent = myData2;
                moviesElement.appendChild(contentElement2);
            })
        });

        const myData3 = people.results[randomIndex].homeworld;
            fetch(myData3)
            .then(response => response.json())
            .then(item2 => {
                const myData3 = item2.name;
                const contentElement3 = document.createElement("p");
                contentElement3.textContent = myData3;
                homeElement.appendChild(contentElement3);
            })
            
           
            })
}

