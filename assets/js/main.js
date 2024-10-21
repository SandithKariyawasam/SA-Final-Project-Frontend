(function($) {
    "use strict";
    jQuery(window).on('load', function() {
      $(".preloader").delay(1600).fadeOut("slow");
    });
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 80) {
        $('header').addClass('sticky-header');
      } else {
        $('header').removeClass('sticky-header');
      }
    });
    $('.hamburger').on('click', function(event) {
      $(this).toggleClass('h-active');
      $('.main-nav').toggleClass('slidenav');
    });
    $('.header-home .main-nav ul li  a').on('click', function(event) {
      $('.hamburger').removeClass('h-active');
      $('.main-nav').removeClass('slidenav');
    });
    $(".main-nav .fl").on('click', function(event) {
      var $fl = $(this);
      $(this).parent().siblings().find('.sub-menu').slideUp();
      $(this).parent().siblings().find('.fl').addClass('flaticon-plus').text("+");
      if ($fl.hasClass('flaticon-plus')) {
        $fl.removeClass('flaticon-plus').addClass('flaticon-minus').text("-");
      } else {
        $fl.removeClass('flaticon-minus').addClass('flaticon-plus').text("+");
      }
      $fl.next(".sub-menu").slideToggle();
    });
    $('.search-btn').on("click", function() {
      $('.mobile-search').addClass('slide');
    });
    $('.search-cross-btn').on("click", function() {
      $('.mobile-search').removeClass('slide');
    });
    var toggleIcon = document.querySelectorAll('.menu-sidebar-btn')
    var closeIcon = document.querySelectorAll('.cross-icon')
    var searchWrap = document.querySelectorAll('.menu-toggle-btn-full-shape')
    toggleIcon.forEach((element) => {
      element.addEventListener('click', () => {
        document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el) => {
          el.classList.add('show-sidebar')
        })
      })
    })
    closeIcon.forEach((element) => {
      element.addEventListener('click', () => {
        document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el) => {
          el.classList.remove('show-sidebar')
        })
      })
    })
    window.onclick = function(event) {
      searchWrap.forEach((el) => {
        if (event.target === el) {
          el.classList.remove('show-sidebar')
        }
      })
    }
    
    
    (function() {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
      let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
      const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {
          const now = new Date().getTime(),
            distance = countDown - now;
          if (distance < 0) {
            document.getElementById("countdown1").style.display = "none";
            clearInterval(x);
          }
          if (distance < 0) {
            document.getElementById("countdown2").style.display = "none";
            clearInterval(x);
          }
          if (distance < 0) {
            document.getElementById("countdown4").style.display = "none";
            clearInterval(x);
          }
        }, 0)
    }());
  
    
    setInterval(function() {
      makeTimer();
    }, 1000);
    var heroSlider = new Swiper('.hero-slide-one', {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 0,
      loop: true,
      effect: 'fade',
      centeredSlides: true,
      roundLengths: true,
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 7000
      },
      navigation: {
        nextEl: '.hero-next1',
        prevEl: '.hero-prev1',
      },
    });
    var heroSliderTwo = new Swiper('.hero-slider-two', {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 0,
      effect: 'fade',
      centeredSlides: true,
      roundLengths: true,
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 7000
      },
      navigation: {
        nextEl: '.hero-next2',
        prevEl: '.hero-prev2',
      },
    });
    var heroSliderThree = new Swiper('.hero-slider-three', {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 0,
      loop: false,
      effect: 'fade',
      centeredSlides: true,
      roundLengths: true,
      fadeEffect: {
        crossFade: false
      },
      autoplay: {
        delay: 7000
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function(index, className) {
          return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
        },
      },
    });
    var heroSliderThree = new Swiper('.hero-slider-dark', {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 0,
      loop: true,
      effect: 'fade',
      centeredSlides: true,
      roundLengths: true,
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 7000
      },
      pagination: {
        clickable: true,
        el: ".hero-pagination",
      },
    });
    var testimonialSliderOne = new Swiper('.testimonial-slider', {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 20,
      loop: true,
      roundLengths: true,
      autoplay: {
        delay: 15000
      },
      navigation: {
        nextEl: '.testi-prev',
        prevEl: '.testi-next',
      },
    });
    var topWinnerSlider_One = new Swiper('.winner-slider', {
      slidesPerView: 2,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      autoplay: {
        delay: 9000
      },
      navigation: {
        nextEl: '.winner-next',
        prevEl: '.winner-prev',
      },
      breakpoints: {
        480: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 4
        },
        1200: {
          slidesPerView: 4
        },
        1400: {
          slidesPerView: 5
        },
        1600: {
          slidesPerView: 6
        },
      }
    });
    var testimonialSlider_two = new Swiper('.testimonial-slider-two', {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      autoplay: {
        delay: 9000
      },
      navigation: {
        nextEl: '.testi-next2',
        prevEl: '.testi-prev2',
      },
      breakpoints: {
        480: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 1
        },
        992: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 2
        },
      }
    });
    var testimonialSlider_four = new Swiper('.testimonial-slider-four', {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      autoplay: {
        delay: 9000
      },
      navigation: {
        nextEl: '.testi-next4',
        prevEl: '.testi-prev4',
      }
    });
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 4,
      speed: 1000,
      spaceBetween: 2,
      slidesPerColumn: 4,
      loop: true,
      autoplay: {
        delay: 9000
      },
      navigation: {
        nextEl: '.testi-next4',
        prevEl: '.testi-prev4',
      }
    });
    var categorySlider_three = new Swiper('.category-slider', {
      slidesPerView: 2,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      navigation: {
        nextEl: '.category-next4',
        prevEl: '.category-prev4',
      },
      breakpoints: {
        480: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 4
        },
        992: {
          slidesPerView: 5
        },
        1200: {
          slidesPerView: 6
        },
      }
    });
    var categorySlider_three = new Swiper('.category-slider3', {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      navigation: {
        nextEl: '.category-next3',
        prevEl: '.category-prev3',
      },
      breakpoints: {
        480: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 4
        },
        992: {
          slidesPerView: 5
        },
        1200: {
          slidesPerView: 6
        },
      }
    });
    var collectionSlider_three = new Swiper('.collection-slider', {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      navigation: {
        nextEl: '.collection-next3',
        prevEl: '.collection-prev3',
      },
      breakpoints: {
        480: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 4
        },
        1200: {
          slidesPerView: 4
        },
      }
    });
    var artistSlider = new Swiper('.artist-slider', {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      navigation: {
        nextEl: '.artist-next',
        prevEl: '.artist-prev',
      },
      breakpoints: {
        480: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        992: {
          slidesPerView: 4
        },
        1200: {
          slidesPerView: 4
        },
      }
    });
    var upcomingLandAuction_slider = new Swiper('.upcoming-land-auction', {
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 1000,
      loop: true,
      roundLengths: true,
      navigation: {
        nextEl: '.upcoming-next',
        prevEl: '.upcoming-prev',
      },
      breakpoints: {
        480: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        },
      }
    });
    var upcomingLandAuction_slider = new Swiper('.catrgory-tab-slider', {
      slidesPerView: 2,
      spaceBetween: 24,
      speed: 1000,
      loop: true,
      roundLengths: false,
      navigation: {
        nextEl: '.upcoming-next',
        prevEl: '.upcoming-prev',
      },
      breakpoints: {
        480: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 3
        },
      }
    });
    var best_auction_slider = new Swiper('.best-auction-slider', {
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 1000,
      loop: true,
      roundLengths: false,
      navigation: {
        nextEl: '.upcoming-next',
        prevEl: '.upcoming-prev',
      },
      breakpoints: {
        480: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 1
        },
        992: {
          slidesPerView: 1
        },
        1200: {
          slidesPerView: 1
        },
      }
    });
    $('.video-frame').magnificPopup({
      type: 'iframe'
    });
    $('select').niceSelect();
    let autoPlayDelay = 4000;
    let options = {
      init: true,
      loop: false,
      autoplay: {
        delay: autoPlayDelay
      }
    };
    let mySwiper = new Swiper('.swiper-container', options);
    let slidersCount = mySwiper.params.loop ? mySwiper.slides.length - 2 : mySwiper.slides.length;
    let widthParts = 100 / slidersCount;
    $('.swiper-counter .total').html(slidersCount);
    for (let i = 0; i < slidersCount; i++) {
      $('.swiper-progress-bar .progress-sections').append('<span></span>');
    }
  
    function initProgressBar() {
      let calcProgress = (slidersCount - 1) * (autoPlayDelay + mySwiper.params.speed);
      calcProgress += autoPlayDelay;
      $('.swiper-progress-bar .progress').animate({
        width: '100%'
      }, calcProgress, 'linear');
    }
    initProgressBar();
    mySwiper.on('slideChange', function() {
      let progress = $('.swiper-progress-bar .progress');
      $('.swiper-counter .current').html(this.activeindex + 1);
      if ((this.progress === -0 || (this.progress === 1 && this.params.loop)) && !progress.parent().is('.stopped')) {
        progress.css('width', '0');
        if (this.activeindex === 0) {
          initProgressBar();
        }
      }
      if (progress.parent().is('.stopped')) {
        progress.animate({
          'width': Math.round(widthParts * (this.activeindex + 1)) + '%'
        }, this.params.speed, 'linear');
      }
    });
    mySwiper.on('touchMove', function() {
      $('.swiper-progress-bar .progress').stop().parent().addClass('stopped');
    });
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');
    if (togglePassword) {
      togglePassword.addEventListener('click', function(e) {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('bi-eye');
      });
    }
    const togglePassword2 = document.getElementById('togglePassword2');
    const password2 = document.querySelector('#password2');
    if (togglePassword2) {
      togglePassword2.addEventListener('click', function(e) {
        const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
        password2.setAttribute('type', type);
        this.classList.toggle('bi-eye');
      });
    }
  }(jQuery));


  
  document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.nav-tabs a');
    const tabContent = document.querySelectorAll('.tab-pane'); 


    function switchTab(e) {
        e.preventDefault(); 

        
        tabs.forEach(tab => tab.classList.remove('active'));
        tabContent.forEach(content => content.classList.remove('show', 'active'));

        
        this.classList.add('active');

        
        const activeTab = document.querySelector(this.getAttribute('href'));
        activeTab.classList.add('show', 'active');
    }

    
    tabs.forEach(tab => tab.addEventListener('click', switchTab));
});
