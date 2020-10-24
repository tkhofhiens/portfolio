
function activeFilter(todos){
    todos.filter (todo =>{
        return !todo.completed
    })
}

function completedFilter(todos){
    todos.filter (todo =>{
        return todo.completed
    })
}


export default{
    activeFilter,
    completedFilter
}