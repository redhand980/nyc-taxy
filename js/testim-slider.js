
(function() {

    const testimSlides = [
      '<div class="testimSlides-item"><div class="testim-image-container"><img src="img/alice-mend.webp" alt="woman foto"></div><p>“When I am in New York, I always use this taxi. I like polite drivers and clean cars. I have never encountered any problems with this taxi service. Moreover, there are discounts, so getting around New York by taxi is profitable.”</p><h3>Alice Mendels</h3></div>',
      '<div class="testimSlides-item"><div class="testim-image-container"><img src="img/dean-pet.webp" alt="man foto"></div><p>“I have been using only this taxi service for several years now. Whenever I book a ride, the car arrives within 10-15 minutes. I also sometimes use this taxi to get to the airport. This service offers really competitive rates.”</p><h3>Dean Peterson</h3></div>',
      '<div class="testimSlides-item"><div class="testim-image-container"><img src="img/jes-wen.webp" alt="woman foto"></div><p>“New York is a city where it is often more profitable and faster to get somewhere by taxi than by car. I often call a taxi to get home from work, go to meetings, and I always use this service. I am completely satisfied."</p><h3>Jessica Wenner</h3></div>',
      '<div class="testimSlides-item"><div class="testim-image-container"><img src="img/sam-fer.webp" alt="man foto"></div><p>“When I go to the airport, I always call this taxi service. I like polite drivers, clean cars, and punctuality. Whenever I call a taxi, the car arrives in a few minutes. Punctuality is really important to me, as I used to often be late for the flights because of taxis.”</p><h3>Sam Ferrels</h3></div>',      
    ];

   
  
    let firstSlide = 0;
    let slidesToShow = 2;
  
    function showCurrentSlide() {
      const testimSlidesContainer = document.querySelector('.testimSlides');
      let slideIdx = firstSlide;
      let html = '';
      for (let i = 1; i <= slidesToShow; i++) {
         html += testimSlides[slideIdx];
        slideIdx = slideIdx + 1 >= testimSlides.length ? 0 : slideIdx + 1;
      }
      testimSlidesContainer.innerHTML = html;
    }
  
    function nextSlide() {
      firstSlide = firstSlide + 1 >= testimSlides.length ? 0 : firstSlide + 1;
      showCurrentSlide();
    }
  
  
    setInterval(nextSlide, 3000);
  
    function resize() {
      console.log(window.screen.width);
      if (window.screen.width <= 400) {
        slidesToShow = 1;
      } else if (window.screen.width <= 600) {
        slidesToShow = 2;
      } else if (window.screen.width <= 900) {
        slidesToShow = 2;
      } else {
        slidesToShow = 2;
      }
      showCurrentSlide();
    }
   
    window.addEventListener('resize', resize);
  
  })();

