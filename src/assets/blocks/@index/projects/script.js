(() => {
  // -------- Functions --------

  const initSwiper = () => {
    const projectsThumbnails = new Swiper('.projects-thumbnails', {
      slidesPerView: 'auto',
      slideToClickedSlide: true,
      threshold: 10
    });

    const projectsSwiper = new Swiper('.projects-swiper', {
      slidesPerView: 1,
      watchOverflow: true,
      slideToClickedSlide: true,
      mousewheel: {
        forceToAxis: true
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
      thumbs: {
        swiper: projectsThumbnails
      },
      navigation: {
        nextEl: '.projects-thumbnails__btn-next',
        prevEl: '.projects-thumbnails__btn-prev'
      }
    })
  }



  // -------- Functions execution --------

  initSwiper()
})();
