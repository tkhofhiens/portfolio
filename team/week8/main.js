// function learnSW(url) {


//     fetch(url)
//     .then((response) => {
//         if(response.ok) {
//             return response;
//         }
//         throw Error(response.statusText);
//     })
//     .then(response => response.json()) 
//     .then(data => console.log(Object.defineProperties(data)))
//     .catch( error => console.log(response.statusText) )
//     }

//     function buildStuff(response) {

//         text = JSON.parse(response)
//         document.getElementsByClassName('onward').innerHTML = `<button onClick="learnSW(` + text.next + `)">Onward</button>`;  
//     }
// }

async function learnSW(url) {
    try {
        response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            const fetchJson = await response.json();
            console.log(fetchJson);
            renderPeople(fetchJson);
        }
    } catch (error) {
        console.log(error);
    }
}
const nextBtn = document.querySelector('#onward');
const backBtn = document.querySelector('#back');

function renderPeople(data){
    //clear curent list to show the next or previous 10 people
    document.querySelector('#peopleList').innerHTML = "";
    
    const starwarsContainer = document.querySelector('#peopleList');
    data.results.forEach(people => {
        const listItem = document.createElement('li');
        listItem.innerText = people.name;
        starwarsContainer.appendChild(listItem);
    })

    //check to see if there is a next attribute
    if(data.next){
        onward.setAttribute('onclick', `learnSW('${data.next}')`);
    }
    //check to see if there is a previous attribute
    if(data.previous){
        back.setAttribute('onclick', `learnSW('${data.previous}')`);
    }
}

