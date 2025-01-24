// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}







$(function () {
    $(document).scroll(function () {
      var $navbar = $("#navbar");
      var $brand = $('#navbar-brand');
      var $main = $('#main');
      var $nav = $("#nav");
      var $items = $('.nav-link, .dropdown-item')

        var $toggle = $('.navbar-toggler');
        if ($(this).scrollTop() > $main.height()) { 
          $items.toggleClass('small-fg', true)  
          $navbar.toggleClass('fixed-top', true)
          $brand[0].classList.replace('hide', 'show')
          $toggle.toggleClass('navbar-toggler-scrolled', true)

          if ($('.main').length > 0) {
            $navbar[0].classList.replace('eastBay-bg', 'snow-bg')
            $nav[0].classList.replace('snow-fg', 'eastBay-fg')
          } else {
            $('.page-title')[0].style.bottom = '70px'
          }
            
        } else {
          $items.toggleClass('small-fg', false)
          $navbar.toggleClass('fixed-top', false)
          $brand[0].classList.replace('show', 'hide')
          $toggle.toggleClass('navbar-toggler-scrolled', false)
           
          if ($('.main').length > 0) {
            $navbar[0].classList.replace('snow-bg', 'eastBay-bg')
            $nav[0].classList.replace('eastBay-fg', 'snow-fg')
          } else {
            $('.page-title')[0].style.bottom = '0px'
          }
        }
        
    });

    var sw = new Swiper('.swiper-container', {
      speed: 400,
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
      zoom: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })

    AOS.init();
  });

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



