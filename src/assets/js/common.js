//= require common/script.js


// -------- Execution of functions --------

ready(() => {
  // -------- Exports --------

  //= require @index/main/script.js
  //= require @index/news/script.js

  //= require @product/script.js
  //= require @catalog/script.js

  //= require @solutions/production-swiper/script.js
  //= require @solutions/realized-swiper/script.js

  //= require @contacts/script.js

  window.onresize = () =>
    catalogScript.catalogTeleport()
})
