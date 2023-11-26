import { validateForm } from './utils.js'

const taskFormBtn = document.querySelector("#task-form-btn");

taskFormBtn.addEventListener("click", function () {
    validateForm()
});
