function topicFilter(scriptures, topic){
    return scriptures.filter (scriptures =>{
        //look in ls scripture list
        // check for the correct topic and upt those items into an array
        // get scripture function ??
        // return the array of scriptures as refrence and phrase pairs
        if (scriptures.topic == topic)
        return scriptures
    })
}

function bookFilter(scriptures){
    return scriptures.filter (todo =>{
        // look in ls scripture list
        // check for the correct book and upt those items into an array
        // get scripture function ??
        // return the array of scriptures as refrence and phrase pairs
    })
}

export default{
    topicFilter,
    bookFilter
}