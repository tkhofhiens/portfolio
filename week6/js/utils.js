
function activeFilter(todos){
    todos.filter (todo =>{
        return !todo.compleated
    })
}

function compleatedFilter(todos){
    todos.filter (todo =>{
        return todo.compleated
    })
}


export default{
    activeFilter,
    compleatedFilter
}