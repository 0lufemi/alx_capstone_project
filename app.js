const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls');
const sectionBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function iconSelector() {
    for(let i = 0; i < sectionBtn.length; i++) {
        sectionBtn[i].addEventListener('click', function() {
            let selectedBtn = document.querySelectorAll('.active-btn');
            selectedBtn[0].className = selectedBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';
        })
    }
}
