
let mood = 'Add';
const form = document.getElementById("add-todo");
const submit = form.childNodes[3];
let tmp ;

function buildNewTodo(value) {
    const todoList = document.querySelector('#todo-list ul');
    // create li element 
    const parentLi = document.createElement('li');

    // create todo title 
    const todoSpanTitle = document.createElement('span');
    todoSpanTitle.textContent = value;
    const randomId = Math.floor(Math.random() * (100000 - 1 + 1) + 1);
    parentLi.setAttribute('id', randomId);
    // create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.classList.add('actions');
    deleteButton.addEventListener('click', () => {
        deleteTodo(randomId);
    });
    // create edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.classList.add('actions');
    editButton.addEventListener('click', () => {
        editTodo(randomId);
    });
    // add title and delete and edit to li
    parentLi.append(todoSpanTitle, deleteButton, editButton);
    todoList.append(parentLi);
}



function addNewTodo() {
    const todoItem = document.getElementById('todo-item');
    const warning = document.getElementById('warning');
    const todoItemValue = todoItem.value;
    if (!todoItemValue.length) {
        warning.classList.remove('hidden-item');
        return;
    }
    if (!warning.classList.contains('hidden-item')) {
        warning.classList.add('hidden-item');
    }
    if(mood  === 'Add'){
    buildNewTodo(todoItemValue);
    }else{//(edit)
        const todoItem1 = document.getElementById(`${tmp}`);
        todoItem1.firstChild.innerHTML = todoItem.value ;
        mood = 'Add';
        submit.innerHTML = 'Add';
    }
    todoItem.value = '';

}

function deleteTodo(id) {
    const todoItem1 = document.getElementById(`${id}`);
    todoItem1.remove();
}


function editTodo(id) {
    const todoItem1 = document.getElementById(`${id}`);//li
    const todoItem = document.getElementById('todo-item');//input
    todoItem.value = todoItem1.firstChild.innerHTML;

    mood = 'Edit';
    tmp = id;
    submit.innerHTML = 'Edit';
}

function searchTodo(value) {
    
    const todoList = document.querySelector('#todo-list ul');

    for(let item of todoList.children){

        if(item.firstChild.innerHTML.toLowerCase().includes(value.toLowerCase())){
            item.style.display = 'block';
        }else{
        item.style.display = 'none';
    }
}}
