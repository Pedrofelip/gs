const glider = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    // faz o loop
    rewind: true
  });
  
  function sliderAuto(slider, miliseconds) {
   const slidesCount = slider.track.childElementCount;
   let slideTimeout = null;
   let nextIndex = 1;
  
   function slide () {
     slideTimeout = setTimeout(
       function () {
         if (nextIndex >= slidesCount ) {
           nextIndex = 0;
         }
         slider.scrollItem(nextIndex++);
       },
       miliseconds
     );
   }
  
   slider.ele.addEventListener('glider-animated', function() {
     window.clearInterval(slideTimeout);
     slide();
   });
  
   slide();
  }
  
  sliderAuto(glider, 5000)

  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  