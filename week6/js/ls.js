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
    console.log('UpdateTodo Function: id ', id, 'status', status);
    toDoList.forEach(todo =>{
        console.log('todo id', todo.id);
        if(todo.id === id){
            console.log('todo comp', todo.completed);
            todo.completed = status;
            console.log('ls completed ', todo.completed, 'was updated');
        }
  
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



      //     console.log(btn.getAttribute('completed'));
        //     if (btn.getAttribute('completed') === 'false'){
        //         btn.setAttribute('completed', true);
        //         btn.innerHTML = '&#10004';  
        //         console.log(btn.getAttribute('completed'));
        //     } else{
        //         btn.setAttribute('completed', false);
        //         btn.innerHTML = ''; 
        //         console.log(btn.getAttribute('completed'));
        //     }  