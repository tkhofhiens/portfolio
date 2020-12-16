// import scriptures from './scriptures.js';
import ls from './ls.js';
import utils from './utils.js';

//------------ 
// load list of scriptures in study.html when buttn is clicked 
// document.querySelector('#load').onclick = loadScriptures;
//------------

document.querySelector('#selectBook').onchange = bookFilter;
document.querySelector('#selectTopic').onchange = topicFilter;

loadScriptures();

function loadScriptures() {
  const scriptureList = ls.getScriptureList();
  renderList(scriptureList);
}

function renderList(list) {
  list.forEach(scripture => {
    const el = createScriptureElement(scripture)
    addToList(el);
  });
}

function createScriptureElement(scripture) {
  // Scripture div
  const scriptureDiv = document.createElement('div');
  scriptureDiv.classList.add('scripture');

  // scripture Reference
  const scriptureReference = document.createElement('div');
  scriptureReference.innerText = scripture.Reference;
  scriptureReference.classList.add('reference');


  // scripture Phrase
  const scripturePhrase = document.createElement('div');
  scripturePhrase.innerText = scripture.Phrase;
  scripturePhrase.classList.add('phrase');


  scriptureDiv.appendChild(scriptureReference);
  scriptureDiv.appendChild(scripturePhrase);
  // console.log(scriptureDiv);
  return scriptureDiv;
}


function addToList(scriptureDiv) {
  // add to the document 
  document.querySelector('#scriptureList').appendChild(scriptureDiv);
}

function bookFilter() {
  document.querySelector('#scriptureList').innerHTML = '';
  console.log('Book Filter');
  var book = document.getElementById("selectBook").value;
  // document.getElementById("demo").innerHTML = "You selected: " + book;
  const allScriptures = ls.getScriptureList();
  let filteredList = [];

  filteredList = allScriptures.filter(s => {
    // console.log(s.Book, book);
    return s.Book == book;
  })
  console.log(filteredList);
  renderList(filteredList);

}

function topicFilter() {
  document.querySelector('#scriptureList').innerHTML = '';
  console.log('Topic Filter');
  var topic = document.getElementById("selectTopic").value;
  // document.getElementById("demo").innerHTML = "You selected: " + topic;
  const allScriptures = ls.getScriptureList();
  let filteredList = [];

  filteredList = allScriptures.filter(s => {
    // console.log(s.Topic, topic);
    return s.Topic == topic;
  })
  console.log(filteredList);
  renderList(filteredList);

}


