(() => {
  // -------- Variables --------

  const productSwiperEl      = document.querySelector('.product-main-swiper'),
        productThumbnailsEL  = document.querySelector('.product-thumbnails'),
        productItemsSwiperEl = document.querySelectorAll('.product-items-swiper'),
        productDocumentationSwiperEl = document.querySelector('.product-documentation-swiper')



  // -------- Functions --------

  const initSwiper = () => {
    const productThumbnails = new Swiper(productThumbnailsEL, {
      loop: false,
      slidesPerView: 'auto',
      watchSlidesVisibility: true,
      navigation: {
        nextEl: '.product-main__btn-next',
        prevEl: '.product-main__btn-prev'
      },
      breakpoints: {
        590: {
          loop: true,
          slidesPerView: 2
        }
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
        slidesPerView: 'auto',
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
            slidesPerView: 4
          },
          880: {
            slidesPerView: 3
          },
          590: {
            slidesPerView: 2
          }
        }
      })
    })
  }



  // -------- Functions execution --------

  initSwiper()
})();
