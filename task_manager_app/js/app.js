import { validateForm } from './utils.js'

const taskFormBtn = document.querySelector("#task-form-btn");

taskFormBtn.addEventListener("click", function () {
    const isValidated = validateForm();

    if (!isValidated) {
        return;
    }

    
});
