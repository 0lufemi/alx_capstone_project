const activityInput = document.querySelector('#activity-field');
const dateInput = document.querySelector('#date-field');
const timeInput = document.querySelector('#time-field');
// const checkbox = document.querySelector('#checkbox');

// Validate task forms
const validateForm = () => {
    const inputs = document.querySelectorAll("input");

    if (activityInput.value === '' || dateInput.value === '' || timeInput.value === '') {
        inputs.forEach(input => {
            input.classList.add('error-prompt')
        })
        return false;
    } else {
        inputs.forEach(input => {
            input.classList.remove('error-prompt')
        })
        return true;
    }
};

// Return task information
const getActivityFields = () => {
    const activity = activityInput.value;
    const date = dateInput.value;
    const time = timeInput.value;
    // const taskStatus = 'UNDONE';
    // let taskStatus;
    // if (checkbox.checked) {
    //     taskStatus = 'DONE';
    // } else {
    //     taskStatus = 'UNDONE';
    // }

    return {activity, date, time};
}

// Reset form fields after adding task
const reset = () => {
    activityInput.value = '';
    dateInput.value = '';
    timeInput.value = '';
}

const editTask = (task) => {
    activityInput.value = task.activity;
    dateInput.value = task.date;
    timeInput.value = task.time;

    const addTaskBtn = document.getElementById('task-form-btn');
    addTaskBtn.value = 'Update Task';
}

export { validateForm, getActivityFields, reset, editTask };
