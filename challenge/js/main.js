// import scriptures from './scriptures.js';
import ls from './ls.js';
import utils from './utils.js';

//------------ 
// load list of scriptures in study.html when buttn is clicked 
// document.querySelector('#load').onclick = loadScriptures;
//------------

document.querySelector('#mySelect').onchange = bookFilter;

loadScriptures();

function loadScriptures(){
  const scriptureList = ls.getScriptureList();
  renderList(scriptureList);
}

function renderList(list){
  list.forEach(scripture => {
    const el = createScriptureElement(scripture)
    addToList(el);
});
}

function createScriptureElement(scripture){
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


function addToList(scriptureDiv){
  // add to the document 
  document.querySelector('#scriptureList').appendChild(scriptureDiv);
}

function bookFilter(){
  document.querySelector('#scriptureList').innerHTML= '';
  console.log('bookFilter');
  var book = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + book;
  const allScriptures = ls.getScriptureList();
  let filteredList = [];	

  // allScriptures.forEach(scripture => {
  //   if (scripture.Book == book){
  // let filterList = 
  //   }
  // });
  filteredList = allScriptures.filter(s =>{
    s.Book == book;
    console.log(s.Book, book);
  })
  console.log(filteredList);
  renderList(filteredList);

}
