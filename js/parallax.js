(function() {
  /*
    How To Impress Your Friends In 2014, or Write Plain Javascript Without Libraries!

    By Johan Brook (@johanbrook), 2014.
  */

  var isTouch = function() {
    var platform = navigator.platform.toLowerCase()
    return platform.indexOf('ipad') != -1  ||  platform.indexOf('iphone') != -1
  }

  var transform = function(el, offset) {
    el.style.webkitTransform = "translate3d(0, " + offset + "px, 0)";
    el.style.MozTransform = "translate3d(0, " + offset + "px, 0)";
    el.style.msTransform = "translateY(" + offset + "px)";
    el.style.OTransform = "translate3d(0, " + offset + "px, 0)";
    el.style.transform = "translate3d(0, " + offset + "px, 0)";
  }

  var parallaxThis = function() {
    var logo = document.querySelector('.parallax-logo'),
        header = document.querySelector('.parallax-header')

    var scrollHandler = function(e) {
      var val = Math.max(window.pageYOffset, 0),
          offset = -(val * 0.5),
          opacity = (1 - (val / 500))

      logo.style.opacity = opacity
      header.style.opacity = opacity*1.5

      transform(logo, offset*1.5)
      transform(header, offset)
    }

    document.addEventListener('scroll', scrollHandler, false)
  }

  var init = function(){
    if(!isTouch()) {
      document.body.classList.add('no-touch');
      parallaxThis()
    }
    else {
      document.body.classList.add('touch');
    }

  }


  document.addEventListener('DOMContentLoaded', init)

})();
