const todoList = [
];

function renderTodo() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
     todoList.splice(${i}, 1);
     renderTodo();
    " class="delete-button">Delete</button>
    `;
    todoListHTML += html;
  }
  document.querySelector('.js-display-todo')
   .innerHTML = todoListHTML;
}
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
