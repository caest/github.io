var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30, 
    centeredSlides: true, 
    autoplay:false, 
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    loop: true, 
    breakpoints: {
      645: {
        slidesPerView: 2,
        /* spaceBetween: 20 */
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1310: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      clickable: true,
    },
    
  });

  var swiper = new Swiper(".swiper-reviews", {
    slidesPerView: 1,
    spaceBetween: 30, 
    centeredSlides: true, 
    autoplay:false, 
/*     autoplayTimeout:5000,
    autoplayHoverPause:false, */
    loop: false, 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

    pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
  });


  var swiper = new Swiper(".slider-news", {
    slidesPerView: 1,
    spaceBetween: 30, 
    centeredSlides: true, 
    autoplay:false, 
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    loop: true, 
    breakpoints: {
      360: {
        slidesPerView:1,
         spaceBetween: 40 
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1330: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      clickable: true,
    },
    
  });

  
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


// Убавляем кол-во по клику
$('.quantity_inner .bt_minus').click(function() {
  let $input = $(this).parent().find('.quantity');
  let count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
});
// Прибавляем кол-во по клику
$('.quantity_inner .bt_plus').click(function() {
  let $input = $(this).parent().find('.quantity');
  let count = parseInt($input.val()) + 1;
  count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
  $input.val(parseInt(count));
}); 
// Убираем все лишнее и невозможное при изменении поля
$('.quantity_inner .quantity').bind("change keyup input click", function() {
  if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
  }
  if (this.value == "") {
      this.value = 1;
  }
  if (this.value > parseInt($(this).data('max-count'))) {
      this.value = parseInt($(this).data('max-count'));
  }    
});
