// -------- Variables --------

const viewportWidth = window.innerWidth || document.documentElement.clientWidth;



// -------- Functions --------

/* Document ready function */

const ready = callback => {
  if (document.readyState !== 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback)
}

const initSwiper = () => {
  const tabsSwiper = new Swiper('.tabs-swiper', {
    slidesPerView: 'auto',
    autoplay: false,
    watchOverflow: true,
  })
}


/* Teleport function */

const appendElem = (elem, cont) => {
  if (cont) cont.appendChild(elem)
}



// -------- Functions execution --------

initSwiper();
