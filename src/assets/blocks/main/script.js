(() => {
  // -------- Functions --------

  const initSwiper = () => {
    const mainSwiper = new Swiper('.main-swiper', {
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
      }
    })
  }



  // -------- Functions execution --------

  initSwiper()
})();
