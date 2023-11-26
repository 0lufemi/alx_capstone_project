const activityInput = document.querySelector('#activity-field');
const dateInput = document.querySelector('#date-field');
const timeInput = document.querySelector('#time-field');

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

export { validateForm };
