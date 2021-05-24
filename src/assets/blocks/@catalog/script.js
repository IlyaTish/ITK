const catalogScript = (() => {
  // -------- Variables --------

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

  // Teleport onResize function

  const catalogTeleport = () => {
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



  // -------- Functions execution --------

  catalogTeleport();

  return {
    catalogTeleport: catalogTeleport
  }
})();