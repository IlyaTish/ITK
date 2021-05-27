(() => {
  // -------- Variables --------

  const mainSwiperEl = document.querySelector('.main-swiper');



  // -------- Functions --------

  const initSwiper = () => {
    const mainSwiper = new Swiper(mainSwiperEl, {
      autoHeight: true,
      slidesPerView: 1,
      autoplay: false,
      allowTouchMove: false,
      watchOverflow: true,
      navigation: {
        nextEl: '.main__btn-next',
        prevEl: '.main__btn-prev'
      },
      pagination: {
        el:   '.swiper-pagination',
        type: 'custom',
        renderCustom: (swiper, current, total) => {
          return '<span class="current">'+ ('0' + current).slice(-2) +'</span>' + ' / ' + ('' + total).slice(-2);
        }
      },
      mousewheel: {
        forceToAxis: true
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      breakpoints: {
        590: {
          autoHeight: false
        }
      }
    });

    if (document.querySelector('.main-swiper')) {
      setTimeout(() => {
        mainSwiper.update()
      }, 100)
    }
  }



  // -------- Functions execution --------

  initSwiper()
})();
