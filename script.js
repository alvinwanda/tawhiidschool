

  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
    var carouselElems = document.querySelectorAll('.slider');

    // var elems = document.querySelectorAll('.slider');
    var carouselOptions = {
        fullWidth:true,
      indicators: true,
      autoScroll: 1000,
    };
    var instances = M.Slider.init(carouselElems, carouselOptions);
    // var instances = M.Slider.init(elems, options);
  });
