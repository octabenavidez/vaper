// Comprobacion de si el telefono es iphone

if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
    if (document.cookie.indexOf("iphone_redirect=false") == -1){
        const sectionVideo = document.querySelector("#sectionVideo")
        const video = document.querySelector("#bgvid")
        video.remove();

        const img = document.createElement("img")
        img.setAttribute("src", "pexels-tetyana-kovyrina-937980.jpg");
        img.className = "video"
        
        sectionVideo.append(img);
    } 

    window.addEventListener('DOMContentLoaded', () => {
      funcionSliders();
    });
}

// Popup inicial

let popup = localStorage.getItem('popup')

if (popup === null){
  window.addEventListener('load', () => {
    Swal.fire({
        title: '¿Eres mayor de 18 años?',
        icon: 'warning',
        width: "50em",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: "No"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Perfecto!',
            '',
            'success'
          )
          localStorage.setItem('popup', "false")
        } else{
            localStorage.removeItem('popup')
            window.location.href="https://www.google.com.ar/?hl=es";
        }
      })
  });
} 

// Slider

const slider = document.querySelectorAll('.slider');

let i = 0;

function funcionSliders() {
  slider.forEach(slider => {
    let sliderSection = slider.children;
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
  
    let btnLeft = document.querySelectorAll('.slider__btn--left')[i];
    let btnRight = document.querySelectorAll('.slider__btn--right')[i];
  
    ++i
  
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
  
    function next() {
      let sliderSectionFirst = slider.children[0];
      
      slider.style.marginLeft = "-200%";
      slider.style.transition = "all 0.5s";
  
      setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
      }, 500);
    }
  
    function prev() {
      let sliderSection = slider.children;
      let sliderSectionLast = sliderSection[sliderSection.length - 1];
      
      slider.style.marginLeft = "0";
      slider.style.transition = "all 0.5s";
  
      setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
      }, 500);
    }
  
    btnRight.addEventListener("click", function(){
      next();
    });
    
    btnLeft.addEventListener("click", function(){
      prev();
    });
  
  
  
  });
}

funcionSliders();



// setInterval(() => {
//   next();
// }, 5000);









