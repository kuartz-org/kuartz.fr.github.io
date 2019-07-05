import Swipe from '../../../../node_modules/swipejs/swipe';

const slider = document.getElementById('slider');

if (slider) {
  const itemsCount = document.querySelectorAll('.swipe-wrap > div').length;
  const randomPosition = Math.floor(Math.random() * itemsCount);

  window.mySwipe = new Swipe(slider, {
    startSlide:      randomPosition, // index position at which Swipe should start.
    speed:           1000,           // speed of prev and next transitions in milliseconds.
    auto:            4000,           // when specified, start an auto-playing slideshow (time in milliseconds between slide change).
    continuous:      true,           // create an infinite feel with no endpoints.
    autoRestart:     false,          // auto restart slideshow after user's touch event or next/prev calls.
    disableScroll:   false,          // prevent any touch events on this container from scrolling the page.
    stopPropagation: false,          // stop event propagation.
    draggable:       true,           // listen to mouse events in addition to the touch events.
  
    callback: function(index, elem, dir) {
      // runs at slide change. Three parameters are passed to the function: index (the current slide index)elem (the current slide element) and dir (direction: 1 for left or backward-1 for right or forward).
      
    },
  
    transitionEnd: function(index, elem) {
      // runs at the end of a slide transition. Two parameters are passed to the function: index (the current slide index) and elem (the current slide element).
  
    }
  });
}
