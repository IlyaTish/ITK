(() => {
  // -------- Variables --------

  const wrapper          = document.querySelector('.projects-head'),
        thumbnails       = document.querySelectorAll('.swiper-tab'),
        thumbnailsBorder = document.querySelector('.projects-thumbnails .thumbnails-border'),
        swiperBtnPrev    = document.querySelector('.projects-thumbnails__btn-prev'),
        swiperBtnNext    = document.querySelector('.projects-thumbnails__btn-next');



  // -------- Functions --------

  const thumbnailsBorderInit = (
      wrapper,
      elemBorder
    ) => {

    const thumbnails    = document.querySelectorAll('.swiper-tab');
    let activeThumbnail = wrapper.querySelector('.swiper-slide-active');

    const moveBorderToSlide = activeThumbnail => {
      if (wrapper && wrapper.querySelector('.swiper-slide-thumb-active')) {
        activeThumbnail = wrapper.querySelector('.swiper-slide-thumb-active');
      }

      let left = activeThumbnail.offsetLeft;

      elemBorder.setAttribute('style', `left:${left}px`)
    }

    moveBorderToSlide(activeThumbnail);

    thumbnails.forEach(thumbnail =>
      thumbnail.addEventListener('click', e => moveBorderToSlide(activeThumbnail))
    )
  }

  const initSwiper = () => {
    const projectsThumbnails = new Swiper('.projects-thumbnails', {
      slidesPerView: 'auto',
      slideToClickedSlide: true,
      threshold: 10
    });

    const projectsSwiper = new Swiper('.projects-swiper', {
      speed: 600,
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
    });
  }



  // -------- Functions execution --------

  if (document.querySelector('.projects')) {
    initSwiper();

    thumbnailsBorderInit(
      wrapper,
      thumbnailsBorder
    );

    swiperBtnPrev.addEventListener('click', () => {
      console.log('Click prev');
      thumbnailsBorderInit(
        wrapper,
        thumbnailsBorder
      )
    });

    swiperBtnNext.addEventListener('click', () => {
      console.log('Click next');
      thumbnailsBorderInit(
        wrapper,
        thumbnailsBorder
      )
    })
  }
})();
