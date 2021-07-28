const comfort = document.querySelector('.comfort');
const sport = document.querySelector('.sport');
const van = document.querySelector('.van');
const luxury = document.querySelector('.luxury');

const slideComfort = comfort.innerHTML;
const slideSport = sport.innerHTML;
const slideVan = van.innerHTML;
const slideLuxury = luxury.innerHTML;

(function() {

    /*const slides = [
      'https://placekitten.com/g/200/300',
      'https://placekitten.com/g/200/301',
      'https://placekitten.com/g/200/302',
      'https://placekitten.com/g/200/303',
      'https://placekitten.com/g/200/304',
      'https://placekitten.com/g/200/306'
    ];*/

    const slides = [
        slideComfort,
        slideSport,
        slideVan,
        slideLuxury,
    ];
  
    let firstSlide = 0;
    let slidesToShow = 3;
  
    function showCurrentSlide() {
      const slidesContainer = document.querySelector('.slides');
      let slideIdx = firstSlide;
      let html = '';
      for (let i = 1; i <= slidesToShow; i++) {
         html += slides[slideIdx];
        slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
      }
      slidesContainer.innerHTML = html;
    }
  
    function nextSlide() {
      firstSlide = firstSlide + 1 >= slides.length ? 0 : firstSlide + 1;
      showCurrentSlide();
    }
  
  
    setInterval(nextSlide, 2000);
  
    function resize() {
      console.log(window.screen.width);
      if (window.screen.width <= 400) {
        slidesToShow = 1;
      } else if (window.screen.width <= 600) {
        slidesToShow = 2;
      } else if (window.screen.width <= 900) {
        slidesToShow = 3;
      } else {
        slidesToShow = 4;
      }
      showCurrentSlide();
    }
   
    window.addEventListener('resize', resize);
  
  })();


  
  /*

<div class="carousel-two">
     <h3></h3>
     <img src="" alt="Carousel image">
     <button></button>
</div>

let currentSlide = 0;
function showCurrentSlide() {
    const slideImage = document.querySelector('.carousel-two img"')
    slideImage.src = product[currentSlide].imageUrl;
    const slideTitle = document.querySelector('.carousel-two h3"');
    slideTitle.innerText = product[currentSlide].title;
    const slideButton = document.querySelector('.carousel-two button');
    slideButton.innerHTML = product[currentSlide].button;
}

*/