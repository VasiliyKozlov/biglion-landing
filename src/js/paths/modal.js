export default function () {
    const modal = document.querySelector('.modal');
    const modalBody = modal.querySelector('.modal__body');
    let position;

    document.body.addEventListener('click', function (e) {
        if(!e.target.closest('.modal-link')) return;
        position = window.pageYOffset;
        var url = e.target.getAttribute('data-link');
        //getTemplate(url);
        show();
    })

    var show = function () {
        modal.classList.add('active');
        window.scrollTo(0,0);
    }

    var close = function () {
        modal.classList.remove('active')
        window.scrollTo(0, position);
    }

    document.body.addEventListener('click', function (e) {
        if(!e.target.closest('.modal__close')) return;
        close();
    })


    var getTemplate = function (url) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET',url, true);

        xhr.send();

        xhr.onreadystatechange = function () {
            if(xhr.readyState != 4) return;

            if(xhr.status == 200) {
                modalBody.innerHTML = xhr.responseText ;
                //console.log()
            }
        }
    }
}

// document.querySelector('.form__application').onsubmit = function (e) {
//     document.querySelector('.btn_submit').classList.add('ok')
//     e.preventDefault()
// }