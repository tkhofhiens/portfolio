import utils from './utils.js';
import ls from './ls.js';

loadTodos();

document.querySelector('#addBtn').onclick = newTodo;
document.querySelector('#activeFilter').onclick = applyFilter;
document.querySelector('#allFilter').onclick = applyFilter;
document.querySelector('#completedFilter').onclick = applyFilter;


function loadTodos(){
    const todoList = ls.getTodoList();

    todoList.forEach(todo => {
        const el = createTodoElement(todo)
        addToList(el);
    });
}

function newTodo(){
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    addToList(todoDiv);
    ls.saveTodo(todo);
}

function createTodo(){
    const input = document.querySelector('#todoInput');
    const newTodo = {id: Date.now(), content: input.value, completed: false}
    input.value = '';
    return newTodo;
}

function createTodoElement(todo){
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // complete btn
    const completeBtn = document.createElement('button');
    completeBtn.setAttribute('data-id', todo.id);
    completeBtn.setAttribute('completed', todo.completed);
    completeBtn.classList.add('complete-btn');
    completeBtn.onclick = toggleComplete;

    // todo content 
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');

    // delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = 'X';
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);
    console.log(todoDiv);
    return todoDiv;
}

function addToList(todoDiv){
    // add to the document 
    document.querySelector('#todos').appendChild(todoDiv);
}

// event handlers
function deleteTodo(e){
    const btn = e.currentTarget;
    console.log(e.currentTarget);
    ls.deleteTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}

function toggleComplete(e){
    const btn = e.currentTarget;
    console.log(e.currentTarget);
    if (btn.getAttribute('completed') === 'false'){
        let status = btn.setAttribute('completed', true);
        btn.innerHTML = '&#10004';
        ls.updateTodo(btn.id, status);
        // btn.parent.  
        // console.log('btn.getAttribute completed is ',btn.getAttribute('completed'));
    } else{
        btn.setAttribute('completed', false);
        btn.innerHTML = '';
        ls.updateTodo(btn.id, status);
        // console.log('btn.getAttribute completed is ',btn.getAttribute('completed'));
    }
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}

function applyFilter(e){
    document.querySelector('#todos').innerHTML = '';
    let filteredTodos = [];
    const allTodos = ls.getTodoList();

    if (e.currentTarget.id == 'activeFilter'){
        filteredTodos = utils.activeFilter(allTodos)
    }
    else if (e.currentTarget.id == 'allFilter'){
        filteredTodos = allTodos
    }
    else if (e.currentTarget.id == 'completedFilter'){
        filteredTodos = utils.completedFilter(allTodos)
    }

    filteredTodos.forEach(todo =>{
        const el = createTodoElement(todo)
        addToList(el)
    })
}
