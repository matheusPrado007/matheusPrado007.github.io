AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



  // $(document).ready(function () {
  //   $("#projetos .row").owlCarousel({
  //     loop: true,
  //     margin: 30,
  //     nav: true,
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       768: {
  //         items: 2,
  //       },
  //       992: {
  //         items: 3,
  //       },
  //     },
  //   });
  // });


