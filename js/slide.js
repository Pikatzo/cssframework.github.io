document.addEventListener('DOMContentLoaded', function() {
const slides = document.querySelectorAll('.slide');

    function setActiveSlide(clickedSlide) {
      slides.forEach(slide => {
        slide.classList.remove('active');
      });
      clickedSlide.classList.add('active');
    }
    
    slides.forEach(slide => {
      slide.addEventListener('click', () => {
        setActiveSlide(slide);
      });
    });

    const carImage = document.getElementById('car');

    document.getElementById('black-btn').addEventListener('click', function() {
        carImage.src = './img/black.webp';
    });

    document.getElementById('white-btn').addEventListener('click', function() {
        carImage.src = './img/iris.webp'; 
    });

    document.getElementById('red-btn').addEventListener('click', function() {
        carImage.src = './img/red.webp'; 
    });

});
