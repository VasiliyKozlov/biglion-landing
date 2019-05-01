import fixed from './paths/fixedBlock.js';
import modal from './paths/modal.js';
import scroll from './paths/scroll.js';
import tabs from './paths/tabs.js';
import carusel from './paths/carusel.js';
import CustomValidity from './paths/customValidity.js';
import '../scss/all.scss'


carusel();
modal();
window.onscroll = () => {
    fixed();
};


document.body.addEventListener('click', function (event) {
    let target = event.target;
    while (target != document.body) {

        if ( target.classList.contains('conditions__person-tab') ) {
            tabs(target, document.querySelectorAll('.conditions__person-tab'), document.querySelectorAll('.conditions__person-tab-content'))
            return;
        } else if( target.classList.contains('advantages__item-head') ) {
            tabs(target, document.querySelectorAll('.advantages__item-head'), document.querySelectorAll('.advantages__item-text'))
            return;
        } else if(target.classList.contains('anchor-link')) {
            event.preventDefault();
            let to = document.querySelector(target.getAttribute('data-href'));
            let coords = to.getBoundingClientRect().top + pageYOffset - 100;
            scroll(coords, 600);
        }
        target = target.parentNode;
    }

})
document.body.addEventListener('click', function (event) {
    let target = event.target;
    if(target.tagName !== 'INPUT') return;
    target.classList.remove('form__input-error')
    console.log(target.closest('.form__application-line'))
    target.closest('.form__application-line').removeChild(target.closest('.form__application-line').querySelector('.form__error'))
    target.setCustomValidity("")
})

document.getElementById('submit').addEventListener('click', function (e) {
    let inputs = document.forms[0].querySelectorAll('input');
    inputs.forEach((input) => {
        console.log(input, input.checkValidity())
        if (input.checkValidity() == false) {
            input.classList.add('form__input-error')
            var inputCustomValidation = new CustomValidity();
            inputCustomValidation.checkValidity(input);
            //var customValidityMessage = inputCustomValidation.getInvalidities(); 
            //input.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке
            input.insertAdjacentHTML('afterend', `<p class="form__error">${inputCustomValidation.getInvaliditiesForHTML()}</p>`)
        }
    })
    e.preventDefault();
});



