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

    displayTaskItems(tasks);
});

const displayTaskItems = (tasks) => {
    const taskDisplayDiv = document.getElementById('taskDisplay');
    taskDisplayDiv.innerHTML = '';

    for (let itemPosition = 0; itemPosition < tasks.length; itemPosition++) {
        const task = tasks[itemPosition];
        const item = createTaskItem(task, itemPosition);
        taskDisplayDiv.appendChild(item);
    }
}

// Create Task cards
const createTaskItem = (param, position) => {

    // taskDisplayDiv.setAttribute('class', 'taskDisplay');

    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'card')


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
    h4.textContent = param.activity;
    cardBodyDiv.appendChild(h4);

    const paraDiv = document.createElement('div');
    paraDiv.setAttribute('class', 'para');
    cardBodyDiv.appendChild(paraDiv);

    const dateTimePara = document.createElement('p');
    dateTimePara.textContent = `${param.date} : ${param.time}`;

    const taskStatusPara = document.createElement('p');
    taskStatusPara.textContent = param.taskStatus;

    paraDiv.appendChild(dateTimePara);
    paraDiv.appendChild(taskStatusPara);

    const btnGroupDiv = document.createElement('div');
    btnGroupDiv.setAttribute('class', 'btn-group');
    cardBodyDiv.appendChild(btnGroupDiv);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('class', 'btn-update');
    // editBtn.addEventListener('click', function() {
    //     console.log('You clicked edit:', param.activity);
    // })
    btnGroupDiv.appendChild(editBtn);

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.setAttribute('class', 'btn-danger');
    delBtn.addEventListener('click', function() {
        tasks.splice(position, 1);
        displayTaskItems(tasks);
    })

    btnGroupDiv.appendChild(delBtn);


    cardDiv.appendChild(imgGroupDiv);
    cardDiv.appendChild(cardBodyDiv);

    return cardDiv;
}
