import Flickity from 'flickity';
import fizzyUIUtils from 'fizzy-ui-utils';

export default function() {
  var utils = fizzyUIUtils;
  var carousel = document.querySelector('.carusel');
  var flkty = new Flickity(carousel, {
    prevNextButtons: false,
    pageDots: false
  });
  // elements
  var cellsButtonGroup = document.querySelector('.button-group--cells');
  var cellsButtons = utils.makeArray(cellsButtonGroup.children);

  // update buttons on select
  flkty.on('select', function() {
    var previousSelectedButton = cellsButtonGroup.querySelector('.is-selected');
    var selectedButton = cellsButtonGroup.children[flkty.selectedIndex];
    previousSelectedButton.classList.remove('is-selected');
    selectedButton.classList.add('is-selected');
  });

  // cell select
  cellsButtonGroup.addEventListener('click', function(event) {
    // if (!matches(event.target, '.button')) {
    //   return;
    // }
    var index = cellsButtons.indexOf(event.target);
    console.log('slide index', index);
    flkty.select(index);
  });
  // previous
  var previousButton = document.querySelector('.button--previous');
  previousButton.addEventListener('click', function() {
    flkty.previous();
  });
  // next
  var nextButton = document.querySelector('.button--next');
  nextButton.addEventListener('click', function() {
    flkty.next();
  });

  //-------------------
  var carousel2 = document.querySelector('.carusel2');
  var flkty2 = new Flickity(carousel2, {
    prevNextButtons: false,
    pageDots: false
  });
  // elements
  var cellsButtonGroup2 = document.querySelector(
    '.button-row2 .button-group--cells'
  );
  var cellsButtons2 = utils.makeArray(cellsButtonGroup2.children);

  // update buttons on select
  flkty2.on('select', function() {
    var previousSelectedButton2 = cellsButtonGroup2.querySelector(
      '.button-row2 .is-selected'
    );
    var selectedButton2 = cellsButtonGroup2.children[flkty2.selectedIndex];
    previousSelectedButton2.classList.remove('is-selected');
    selectedButton2.classList.add('is-selected');
  });

  // cell select
  cellsButtonGroup2.addEventListener('click', function(event) {
    // if (!matches(event.target, '.button-row2 .button')) {
    //   return;
    // }
    var index = cellsButtons2.indexOf(event.target);
    flkty2.select(index);
  });
  // previous
  var previousButton2 = document.querySelector(
    '.button-row2 .button--previous'
  );
  previousButton2.addEventListener('click', function() {
    flkty2.previous();
  });
  // next
  var nextButton2 = document.querySelector('.button-row2 .button--next');
  nextButton2.addEventListener('click', function() {
    flkty2.next();
  });
}
