(() => {
  // -------- Variables --------

  const productSwiperEl      = document.querySelector('.product-main-swiper'),
        productThumbnailsEL  = document.querySelector('.product-thumbnails'),
        productTabsSwiperEl  = document.querySelector('.product-main-tabs'),
        productItemsSwiperEl = document.querySelectorAll('.product-items-swiper'),
        productDocumentationSwiperEl = document.querySelector('.product-documentation-swiper')



  // -------- Functions --------

  const initSwiper = () => {
    const productThumbnails = new Swiper(productThumbnailsEL, {
      loop: true,
      slidesPerView: 2,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.product-main__btn-next',
        prevEl: '.product-main__btn-prev'
      }
    });

    const productSwiper = new Swiper(productSwiperEl, {
      slidesPerView: 1,
      autoplay: false,
      loop: true,
      watchOverflow: true,
      mousewheel: {
        forceToAxis: true
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
      thumbs: {
        swiper: productThumbnails
      }
    });

    const productTabsSwiper = new Swiper(productTabsSwiperEl, {
      slidesPerView: 'auto',
      watchOverflow: true,
      mousewheel: {
        forceToAxis: true
      },
      navigation: {
        nextEl: '.product-main-tabs__btn-next',
        prevEl: '.product-main-tabs__btn-prev'
      }
    });

    const productDocumentationSwiper = new Swiper(productDocumentationSwiperEl, {
      slidesPerView: 'auto',
      watchOverflow: true,
      mousewheel: {
        forceToAxis: true
      }
    });

    [].forEach.call(productItemsSwiperEl, (el, index) => {
      const swiper = el,
            swiperParent = el.parentNode;

      swiper.classList.add('s-' + index);

      if (swiperParent.querySelector('.swiper-button-next')) {
        swiperParent
          .querySelector('.swiper-button-next')
          .classList.add('product-items-btn-next-' + index);

        swiperParent
          .querySelector('.swiper-button-prev')
          .classList.add('product-items-btn-prev-' + index)
      }

      const productItemsSwiper = new Swiper('.s-' + index, {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: true,
        watchOverflow: true,
        mousewheel: {
          forceToAxis: true,
        },
        navigation: {
          nextEl: '.product-items-btn-next-' + index,
          prevEl: '.product-items-btn-prev-' + index
        },
        breakpoints: {
          1199: {
            slidesPerView: 4,
          }
        }
      })
    })
  }



  // -------- Functions execution --------

  initSwiper()
})();
