export default function (target, tabs, content) {
    const listTab = tabs;
    const listTabCont = content;
 
        let src = target.getAttribute('data-tab-index');
        listTab.forEach((elem, index) => {
            elem.classList.remove('active');
            listTabCont[index].classList.remove('active')
        });
        target.classList.add('active');

    document.getElementById(src).classList.add('active')
}