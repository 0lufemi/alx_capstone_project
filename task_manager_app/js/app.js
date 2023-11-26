import { validateForm, getActivityFields, reset } from './utils.js'

const taskFormBtn = document.querySelector("#task-form-btn");
const tasks = [];

// event listener for 'Add Task' button
taskFormBtn.addEventListener("click", function () {
    const isValidated = validateForm();

    if (!isValidated) {
        return;
    }

    const taskValues = getActivityFields();
    reset();

    tasks.push(taskValues);
    console.log(tasks);

    createTaskItem()
});

// Create Task cards
const createTaskItem = () => {
    const taskDisplayDiv = document.getElementById('taskDisplay');
    // taskDisplayDiv.setAttribute('class', 'taskDisplay');

    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'card')
    taskDisplayDiv.appendChild(cardDiv);

    const imgGroupDiv = document.createElement('div');
    imgGroupDiv.setAttribute('class', 'img-group')

    const img = document.createElement('img')
    img.setAttribute('src', 'assets/Task-256.png');
    img.setAttribute('alt', 'task icon');
    img.setAttribute('style', 'width: 100px');
    imgGroupDiv.appendChild(img);

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    imgGroupDiv.appendChild(input);

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.setAttribute('class', 'card-body');

    const h4 = document.createElement('h4');
    h4.textContent = 'Activity Name';
    cardBodyDiv.appendChild(h4);

    const paraDiv = document.createElement('div');
    paraDiv.setAttribute('class', 'para');
    cardBodyDiv.appendChild(paraDiv);

    const dateTimePara = document.createElement('p');
    dateTimePara.textContent = 'Date: Time';

    const taskStatusPara = document.createElement('p');
    taskStatusPara.textContent = 'Task Status';

    paraDiv.appendChild(dateTimePara);
    paraDiv.appendChild(taskStatusPara);

    const btnGroupDiv = document.createElement('div');
    btnGroupDiv.setAttribute('class', 'btn-group');
    cardBodyDiv.appendChild(btnGroupDiv);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('class', 'btn-update');
    btnGroupDiv.appendChild(editBtn);

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.setAttribute('class', 'btn-danger');
    btnGroupDiv.appendChild(delBtn);


    cardDiv.appendChild(imgGroupDiv);
    cardDiv.appendChild(cardBodyDiv);

    return cardDiv;
}
