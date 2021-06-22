(() => {
  // -------- Variables --------

  const burgerBtn     = document.querySelector('.catalog-btn'),
        burgerMenu    = document.querySelector('.burger-menu'),
        burgerMenuBg  = document.querySelector('.burger-menu-bg'),
        btnClose      = document.querySelector('.btn-close');



  // -------- Functions --------

  /* Burger menu */

  const initBurgerMenu = () => {
    const closeBurgerMenu = () => {
      burgerBtn.classList.remove('active');
      burgerMenu.classList.remove('active');
      burgerMenu.classList.add('transition');
      burgerMenu.classList.add('hidden')
    }

    burgerBtn.addEventListener('click', e => {
      burgerBtn.classList.toggle('active');
      burgerMenu.classList.toggle('active');

      if (burgerMenu.classList.contains('hidden')) {
        // show
        burgerMenu.classList.add('transition');
        burgerMenu.clientWidth;
        burgerMenu.classList.remove('hidden');
      } else {
        // hide
        burgerMenu.classList.add('transition');
        burgerMenu.classList.add('hidden');
      }
    });

    if (document.querySelector('.burger-menu')) {
      if (document.querySelector('.burger-menu-bg'))
        burgerMenuBg.addEventListener('click', e => closeBurgerMenu());

      btnClose.addEventListener('click', e => closeBurgerMenu());

      setTimeout(() => {
        burgerMenu.addEventListener('transitionend', () =>
          burgerMenu.classList.remove('transition')
        )
      }, 100)
    }
  }

  setTimeout(() => {
    burgerMenu.addEventListener('transitionend', () =>
      burgerMenu.classList.remove('transition')
    )
  }, 100)

  burgerMenu.addEventListener('transitionend', () =>
    burgerMenu.classList.remove('transition')
  )



  // -------- Functions execution --------

  initBurgerMenu()
})();
