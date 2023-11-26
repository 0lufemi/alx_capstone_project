const activityInput = document.querySelector('#activity-field');
const dateInput = document.querySelector('#date-field');
const timeInput = document.querySelector('#time-field');

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

    return {activity, date, time}
}

// Reset form fields after adding task
const reset = () => {
    activityInput.value = '';
    dateInput.value = '';
    timeInput.value = '';
}

// const htmlElementCreator = (name, element, attr, attrName) => {
//     name = document.createElement(element);
//     name.setAttribute(attr, attrName);
// }


export { validateForm, getActivityFields, reset };
