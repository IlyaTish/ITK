const catalogScript = (() => {
  // -------- Variables --------

  const layoutBtn   = document.querySelectorAll('.catalog-nav__btn'),
        catalogGrid = document.querySelector('.catalog__grid');

  const elementsToTeleport = [
    '.catalog-filters'
  ];

  const containersSmallerScreen = [
    '.settings-menu__cont'
  ];

  const containersDefault = [
    '.catalog__cont'
  ];

  let flag = 1;



  // -------- Functions --------

  // Switch catalog layout function

  const switchCatalogLayout = () => {
    [].forEach.call(layoutBtn, (btn, btnIndex) => {
      btn.addEventListener('click', e => {
        const thisBtn    = e.currentTarget,
              dataLayout = Number(thisBtn.getAttribute('data-layout'));

        // Remove active class
        [].forEach.call(layoutBtn, btn =>
          btn.classList.remove('active'));

        // Add active class
        thisBtn.classList.add('active');

        switch (dataLayout) {
          case 1:
            catalogGrid.classList.remove('catalog__grid--layout-2');
            break;
          case 2:
            catalogGrid.classList.add('catalog__grid--layout-2');
            break;
        }
      })
    })
  }

  // Teleport onResize function

  const catalogTeleport = () => {
    if (document.querySelector('.catalog-page')) {
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

      if ((viewportWidth < 1199) && (flag === 1)) {
        flag = 0;
        teleportEach(elementsToTeleport, containersSmallerScreen)
      }

      if ((viewportWidth > 1199) && (flag === 0)) {
        flag = 1;
        teleportEach(elementsToTeleport, containersDefault)
      }
    }
  }



  // -------- Functions execution --------

  switchCatalogLayout();
  catalogTeleport();

  return {
    catalogTeleport: catalogTeleport
  }
})();