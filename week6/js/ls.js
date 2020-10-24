function saveTodo(todo){
    const toDoList = getTodoList();

    toDoList.push(todo);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

function deleteTodo(id){
    const toDoList = getTodoList();
    
    const updatedTodos = toDoList.filter(todo => todo.id != id);
    localStorage.setItem('toDoList', JSON.stringify(updatedTodos));
}

function getTodoList(){
    const todoListString = localStorage.getItem('toDoList');
    let todoList = [];

    if (todoListString){
        todoList = JSON.parse(todoListString);
    }

    return todoList;
}

// function completeTodo(id){
//     const toDoList = getTodoList();
//     // find the todo item in list
//     console.log(id);
//     toDoList.forEach(todo => {
//         console.log(todo.id);
//         if (todo.id === id){
//             console.log(btn.getAttribute('completed'));
//             // update the completed status and view
//             if (btn.getAttribute('completed') === 'false'){
//                 btn.setAttribute('completed', true);
//                 btn.innerHTML = '&#10004';  
//                 console.log(btn.getAttribute('completed'));
//             } else{
//                 btn.setAttribute('completed', false);
//                 btn.innerHTML = ''; 
//                 console.log(btn.getAttribute('completed'));
//             }  
//         }
//     });
//     // update the ls
//     localStorage.setItem('toDoList', JSON.stringify(toDoList));
// }

export default{
    saveTodo,
    deleteTodo,
    // completeTodo,
    getTodoList
}