let sliderIndex = 1;

showSlides(sliderIndex);

function nextSlide(){
    showSlides(sliderIndex +=1);
}
function prevSlide(){
   showSlides(sliderIndex -=1);
   
}
function currentSlide(n){
   showSlides(sliderIndex = n);
}

function showSlides(n){
  
  let slides = document.getElementsByClassName('item');
   
   if(n > slides.length){
      sliderIndex = 1;
      
   }
    if(n < 1){
       sliderIndex = slides.length;
    }
   
   for (slide of slides){
      slide.style.display = 'none';
   }
   
   slides[sliderIndex - 1].style.display ="block";

}


let autoSlider = setInterval(nextSlide, 3000);
