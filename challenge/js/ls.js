
// ----------  help from w3schools (pulling from from scripture.json)
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    // document.getElementById("demo").innerHTML = myObj[3].Reference + myObj[3].Phrase;
    localStorage.setItem('scriptureList', this.responseText);
  }
};
xmlhttp.open("GET", "data/scriptures.json", true);
xmlhttp.send();
// -----------  end of w3schools

function saveScripture(scripture){	
  const scriptureList = getScriptureList();	
  scriptureList.push(scripture);	
  localStorage.setItem('scriptureList', JSON.stringify(scriptureList));	
}

function deleteScripture(id){
  const scriptureList = getScriptureList();
  
  const updatedTodos = scriptureList.filter(todo => todo.id != id);
  localStorage.setItem('scriptureList', JSON.stringify(updatedTodos));
}

function getScriptureList(){
  const scriptureListString = localStorage.getItem('scriptureList');
  let scriptureList = [];

  if (scriptureListString){
    scriptureList = JSON.parse(scriptureListString);
  }

  return scriptureList;
}


export default{
  saveScripture,
  deleteScripture,
  getScriptureList
}
