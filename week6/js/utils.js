
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

// function completeTodo(id){
//     const toDoList = getTodoList();
//     toDoList.forEach(todo => {
//         if (todo.id === id){
//             btn.setAttribute('completed', true);
//         }
//     });
//     localStorage.setItem('toDoList', JSON.stringify(updatedTodos));
// }

export default{
    activeFilter,
    // completeTodo,
    completedFilter
}