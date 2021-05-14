(() => {
  // -------- Functions --------

  const initSwiper = () => {
    const mainSwiper = new Swiper('.main-swiper', {
      autoHeight: true,
      slidesPerView: 1,
      autoplay: false,
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
    })
  }



  // -------- Functions execution --------

  initSwiper()
})();
