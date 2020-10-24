import utils from './utils.js';
import ls from './ls.js';

loadTodos();

document.querySelector('#addBtn').onclick = newTodo;
document.querySelector('#activeFilter').onclick = applyFilter;
document.querySelector('#allFilter').onclick = applyFilter;
document.querySelector('#compleatedFilter').onclick = applyFilter;


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
    const newTodo = {id: Date.now(), content: input.value, compleated: false}
    input.value = '';
    return newTodo;
}

function createTodoElement(todo){
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // complete btn
    const completeBtn = document.createElement('button');
    completeBtn.setAttribute('compleated', todo.compleated);
    completeBtn.classList.add('complete-btn');
    completeBtn.onclick = markComplete;

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

function markComplete(e){
    const btn = e.currentTarget;
    console.log(e.currentTarget);
    // ls.completeTodo(btn.getAttribute('compleated'));
    // ls.completeTodo(btn.setAttribute('compleated', true));
    btn.setAttribute('compleated', true);
    btn.innerHTML = 'X';
    // document.querySelector('compleated').compleated = true;
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
    else if (e.currentTarget.id == 'compleatedFilter'){
        filteredTodos = utils.compleatedFilter(allTodos)
    }

    filteredTodos.forEach(todo =>{
        const el = createTodoElement(todo)
        addToList(el)
    })
}
