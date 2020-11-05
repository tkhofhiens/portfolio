
// from w3schools (pulling from from scripture.json)
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myObj[3].Reference + myObj[3].Phrase;
    localStorage.setItem('scriptureList', this.responseText);
  }
};
xmlhttp.open("GET", "data/scriptures.json", true);
xmlhttp.send();
// end of w3schools example


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








// import list from './scriptures.js';
//import './scriptures.js';
// import list from './scriptures.js';

// var obj = JSON.parse(list);
// var newData = userData.data.userList;
// ------------- (working pulling from scriptures.js)
// var list = '{ "scriptures" : [' +
//   '{ "Refrence": "Proverbs 3:5–6","KeyPhrase": " Trust in the Lord with all thine heart, and He shall direct thy paths","Topic": "Acquiring Spiritual Knowledge","Book": "OT"},' +
//   '{ "Refrence": "Isaiah 5:20","KeyPhrase": " Woe unto them that call evil good, and good evil","Topic": "Acquiring Spiritual Knowledge","Book": "OT"},' +
//   '{ "Refrence": "John 7:17", "KeyPhrase": " Do God’s will to know His doctrine","Topic": "Acquiring Spiritual Knowledge","Book": "NT"},' +
//   '{ "Refrence": "1 Corinthians 2:5, 9–11", "KeyPhrase": " We can only know the things of God through the Spirit","Topic": "Acquiring Spiritual Knowledge","Book": "NT"} ]}';

// var obj = JSON.parse(list);
// console.log(list);
// document.getElementById("test").innerHTML =
// obj.scriptures[1].Refrence;
// ----------------------------

//-------------------- (working example)
// var text = '{"employees":[' +
//   '{"firstName":"John","lastName":"Doe" },' +
//   '{"firstName":"Anna","lastName":"Smith" },' +
//   '{"firstName":"Peter","lastName":"Jones" }]}';

// var obj = JSON.parse(text);
// document.getElementById("demo").innerHTML =
//   obj.employees[1].firstName + " " + obj.employees[1].lastName;
//--------------------

//-------------------- (not working)
// example from stackOverflow 
// function load() {
//   var mydata = JSON.parse(js/scripture.json);
//   alert(mydata.length);

//   document.getElementById("data").innerHTML =
//   obj.scriptures[1].Refrence;

//   var div = document.getElementById('data');
//   for (var i = 0; i < mydata.length; i++) {
//       div.innerHTML = div.innerHTML + "<p class='inner' id=" + i + ">" + mydata[i].Refrence + "</p>" + "<br>";
//   }
// }
//stack overflow end
//--------------------