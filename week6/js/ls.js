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

function completeTodo(id){
    const toDoList = getTodoList();

    const updatedTodos = 
        toDoList.forEach(todo => {
            if (todo.id === id){
                btn.setAttribute('completed', true);
            }
        });
    localStorage.setItem('toDoList', JSON.stringify(updatedTodos));
}

export default{
    saveTodo,
    deleteTodo,
    completeTodo,
    getTodoList
}