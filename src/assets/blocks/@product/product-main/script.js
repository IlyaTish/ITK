(() => {
  // -------- Variables --------

  const productMainTabsItem = document.querySelectorAll('.product-main-tabs__item');



  // -------- Functions --------

  const initTabs = () => {
    [].forEach.call(productMainTabsItem, item => {
      item.addEventListener('click', e => {
        const curItem = e.currentTarget,
              anchor  = curItem.getAttribute('data-link-to');

        [].forEach.call(
          productMainTabsItem, item => item.classList.remove('active')
        );

        curItem.classList.add('active');

        document.querySelector(anchor).scrollIntoView({
          behavior: 'smooth'
        })
      })
    })
  }



  // -------- Functions execution --------

  initTabs()
})();
