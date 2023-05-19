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
            
            const myData4 = people.results[randomIndex].height;
            const contentElement4 = document.createElement("p");
            contentElement4.textContent = myData4;
            const infoElement = document.getElementById("info2");
            infoElement.innerHTML = '';
            infoElement.appendChild(contentElement4);
          
            const myData5 = people.results[randomIndex].birth_year;
            const contentElement5 = document.createElement("p");
            contentElement5.textContent = myData5;
            const birthElement = document.getElementById("info3");
            birthElement.innerHTML = '';
            birthElement.appendChild(contentElement5);
        
        
        
        })
}

