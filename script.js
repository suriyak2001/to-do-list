const todoList = [
];

function renderTodo() {
  let todoListHTML = '';

  todoList.forEach( (todoObject, index) => {
    const {name, dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button js-delete-button">Delete</button>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-display-todo')
   .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button')
   .forEach( (deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodo();
    });
  });
}

document.querySelector('.js-add-button')
 .addEventListener('click', () => {
  addTodo();
 });

function addTodo() {
 const inputElement = document.querySelector('.js-input-text');
 const name = inputElement.value;

 const dueDateInputElement = document.querySelector('.js-duedate-input');
 const dueDate = dueDateInputElement.value;

 if(name && dueDate) {
  todoList.push(
    {name,
    dueDate
  });
 } else {
  alert('Please Enter the activity and date.');
 }
 inputElement.value = '';
 renderTodo();
}
