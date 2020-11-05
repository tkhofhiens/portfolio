// import list from './scriptures.js';
//import './scriptures.js';
// import list from './scriptures.js';



//   var obj = JSON.parse(list);
// var newData = userData.data.userList;

var list = '{ "scriptures" : [' +
  '{ "Refrence": "Proverbs 3:5–6","KeyPhrase": " Trust in the Lord with all thine heart, and He shall direct thy paths","Topic": "Acquiring Spiritual Knowledge","Book": "OT"},' +
  '{ "Refrence": "Isaiah 5:20","KeyPhrase": " Woe unto them that call evil good, and good evil","Topic": "Acquiring Spiritual Knowledge","Book": "OT"},' +
  '{ "Refrence": "John 7:17", "KeyPhrase": " Do God’s will to know His doctrine","Topic": "Acquiring Spiritual Knowledge","Book": "NT"},' +
  '{ "Refrence": "1 Corinthians 2:5, 9–11", "KeyPhrase": " We can only know the things of God through the Spirit","Topic": "Acquiring Spiritual Knowledge","Book": "NT"} ]}';


// var obj = list;

var obj = JSON.parse(list);
console.log(list);
document.getElementById("test").innerHTML =
  obj.scriptures[1].Refrence;

// var text = '{"employees":[' +
//   '{"firstName":"John","lastName":"Doe" },' +
//   '{"firstName":"Anna","lastName":"Smith" },' +
//   '{"firstName":"Peter","lastName":"Jones" }]}';

// var obj = JSON.parse(text);
// document.getElementById("demo").innerHTML =
//   obj.employees[1].firstName + " " + obj.employees[1].lastName;

