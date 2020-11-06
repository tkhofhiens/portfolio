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

function updateTodo(id, status){
    const toDoList = getTodoList();
    // find the todo item in list
    console.log('updateTodo Function: id ', id, 'status', status);
    toDoList.forEach(todo =>{
        let checkId = todo.id.toString();
        console.log('todo id', todo.id, 'comp', todo.completed);
        if(checkId === id){
            todo.completed = status;
            console.log('ls completed ', todo.completed, 'was updated');
        }
        console.log('list ',toDoList);
    });

    // update the ls
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

export default{
    saveTodo,
    deleteTodo,
    updateTodo,
    getTodoList
}