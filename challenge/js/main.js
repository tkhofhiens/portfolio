// import scriptures from './scriptures.js';
import ls from './ls.js';
import utils from './utils.js';



//------------ 
// load list of scriptures in study.html when buttn is clicked 
// document.querySelector('#load').onclick = loadScriptures;
//------------
loadScriptures();

function loadScriptures(){
  const scriptureList = ls.getScriptureList();

  scriptureList.forEach(scripture => {
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


// function applyFilter(e){
//   document.querySelector('#scriptureList').innerHTML = '';	
//   let filteredScriptures = [];	
//   const allScriptures = ls.getScriptureList();	

//   if (e.currentTarget.id == 'bookFilter'){	
//       filteredScriptures = utils.bookFilter(allScriptures)	
//   }	
//   else if (e.currentTarget.id == 'topicFilter'){
//       filteredScriptures = utils.topicFilter(allScriptures)	
//   }	
//   filteredScriptures.forEach(scripture =>{	
//       const el = createTodoElement(scripture)
//       addToList(el)	
//   })	
// }