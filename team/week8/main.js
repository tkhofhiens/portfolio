
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

function renderPeople(data) {
    //clear curent list to show the next or previous 10 people
    document.querySelector('#peopleList').innerHTML = "";

    const starwarsContainer = document.querySelector('#peopleList');
    data.results.forEach(people => {
        const listItem = document.createElement('li');
        // listItem.innerText = people.name;
        listItem.innerHTML =
            `
        <button class="view-btn" onclick="showDetails('${people.name}','${people.height}','${people.mass}')">${people.name}</button>
        `
        listItem.id = people.name;
        starwarsContainer.appendChild(listItem);
    })

    //check to see if there is a next attribute
    if (data.next) {
        onward.setAttribute('onclick', `learnSW('${data.next}')`);
    }
    //check to see if there is a previous attribute
    if (data.previous) {
        back.setAttribute('onclick', `learnSW('${data.previous}')`);
    }
}

function showDetails(id,height,mass) {
    // console.log();
    var li = document.getElementById(id);
    var div = document.createElement('div' );
    div.innerHTML =
        `
    <div id= 'details'>
    <p>Height ${height}</p> <p>Mass ${mass}</p>
    </div>
    `
    li.appendChild(div);
}

