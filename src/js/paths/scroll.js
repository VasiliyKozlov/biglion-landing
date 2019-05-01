export default function scrollAnimate (to, duration) {

    if (duration <= 0) return;
    let difference = to - window.pageYOffset;
    let perTick = difference / duration * 10;

    setTimeout(function() {
        window.scrollTo(0, window.pageYOffset + perTick);
        console.log(window.pageYOffset, ' = ', to)
        if (window.pageYOffset === to) return;
        scrollAnimate(to, duration - 10);
    }, 10);
}
