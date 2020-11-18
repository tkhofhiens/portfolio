// document.querySelector('#topicFilter').onclick = topicFilter;	
// document.querySelector('#bookFilter').onclick = bookFilter;

function topicFilter(scriptures, topic) {
    return scriptures.filter(scriptures => {
        //look in ls scripture list
        // check for the correct topic and upt those items into an array
        // get scripture function ??
        // return the array of scriptures as refrence and phrase pairs
        if (scriptures.topic == topic)
            return scriptures
    })
}

function bookFilter() {

    // look in ls scripture list
        // check for the correct book and put those items into an array
        // get scripture function ??
        // return the array of scriptures as refrence and phrase pairs
    // return scriptures.filter(scriptures => {
    console.log('bookFilter');
    document.querySelector('#scriptureList').innerHTML = '';	
    let filteredScriptures = [];	
    const allScriptures = ls.getScriptureList();	
    //a = div.getElementsByTagName("a");
    // for (i = 0; i < a.length; i++) {
    //     txtValue = a[i].textContent || a[i].innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //       a[i].style.display = "";
    //     } else {
    //       a[i].style.display = "none";
    //     }
    allScriptures.forEach(Scripture => {

        
        if (scripture.Book == "OT"){
        filteredScriptures = utils.bookFilter(allScriptures)
        }
    });
    return filteredScriptures;
    
}

export default {
    topicFilter,
    bookFilter
}