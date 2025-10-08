


document.addEventListener("DOMContentLoaded", () => {


 let swipercars = new Swiper('.swiper-cars', {

  loop: true,
  slidesPerView: 3,
  spaceBetween: 70,
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
   },
    breakpoints: {
      1200:  {
        spaceBetween: 50,
      },
      1024: {
        spaceBetween: 30,
      },
      990: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      550: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },

   }

  });



});



document.querySelectorAll('.slider-review').forEach(el => {
    const swiper = new Swiper(el, {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: el.parentNode.querySelector('.swiper-button-next'),
            prevEl: el.parentNode.querySelector('.swiper-button-prev')
        },
         pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
          769: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 1,
          },
          550: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1,
          },
        }
    });

});




document.querySelector('.youtube-btn').addEventListener('click', function() {
  console.log('click youtube button!');
});




let tablebodyes = document.querySelectorAll('.table-body');
let tablebtnopen = document.querySelectorAll('.unactive-img');
let tablebtncloose = document.querySelectorAll('.active-img');



function clickbtn (btns) {
  for (let elem of btns) {
    elem.addEventListener('click', function () {
      if(elem.classList.contains("unactive-img") == true) {
        elem.parentNode.parentNode.nextElementSibling.classList.add('table-body-active');
        elem.classList.add('active-img');
        elem.classList.remove('unactive-img');
      } else if (elem.classList.contains("active-img") == true) {
        elem.parentNode.parentNode.nextElementSibling.classList.remove('table-body-active');
        elem.classList.remove('active-img');
        elem.classList.add('unactive-img');
      }
    })
  }
}

clickbtn(tablebtnopen);
clickbtn(tablebtncloose);



document.querySelectorAll('.swiper-compare').forEach(el => {
    const swiper = new Swiper(el, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: el.parentNode.querySelector('.swiper-button-next'),
            prevEl: el.parentNode.querySelector('.swiper-button-prev')
        },
         pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    });

});




document.querySelectorAll('.swiper-delivered').forEach(el => {
    const swiper = new Swiper(el, {
        observer: true,
        observeParents: true,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
            nextEl: el.parentNode.querySelector('.swiper-button-next'),
            prevEl: el.parentNode.querySelector('.swiper-button-prev')
        },
         pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
          769: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 1,
          },
          550: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1,
          },
        }
    });

});


//questions

const questionplusbtns = document.querySelectorAll('.questions-plus');
const questionminusbtn = document.querySelectorAll('.questions-minus');

function questuinscloseopen (btns) {
  for(let el of btns) {
    el.addEventListener('click', function () {
      if(el.classList.contains('questions-plus') == true ) {
        el.classList.remove('questions-active');
        el.classList.add('questions-unactive')
        el.nextElementSibling.classList.add('questions-active');
        el.nextElementSibling.classList.remove('questions-unactive');
        el.parentNode.nextElementSibling.classList.add('questions-active');
        el.parentNode.nextElementSibling.classList.remove('questions-unactive');
      } else if (el.classList.contains('questions-minus') == true ) {
        el.classList.remove('questions-active');
        el.classList.add('questions-unactive')
        el.previousElementSibling.classList.add('questions-active');
        el.previousElementSibling.classList.remove('questions-unactive');
        el.parentNode.nextElementSibling.classList.remove('questions-active');
        el.parentNode.nextElementSibling.classList.add('questions-unactive');
      }
    })
  }
}

questuinscloseopen(questionplusbtns);
questuinscloseopen(questionminusbtn);


//header
const openburger = document.querySelector('.hamburger-menu');
const closeburger = document.querySelector('.hamburger-close');

function openclosebergermenu (btn) {
  btn.addEventListener('click', function () {
    if(btn.classList.contains('hamburger-menu') == true) {
      btn.style.display = 'none';
      btn.previousElementSibling.classList.add('header-unactive');
      btn.nextElementSibling.classList.add('header-active');
      btn.nextElementSibling.classList.remove('header-unactive');
      btn.parentNode.nextElementSibling.classList.add('header-active');
      btn.parentNode.nextElementSibling.classList.remove('header-unactive');
    } else if (btn.classList.contains('hamburger-close') == true) {
      btn.previousElementSibling.previousElementSibling.classList.add('header-active');
      btn.previousElementSibling.previousElementSibling.classList.remove('header-unactive');
      btn.previousElementSibling.style.display = 'block';
      btn.classList.add('header-unactive');
      btn.classList.remove('header-active');
      btn.parentNode.nextElementSibling.classList.remove('header-active');
      btn.parentNode.nextElementSibling.classList.add('header-unactive');
    }
  });
}

openclosebergermenu(openburger);
openclosebergermenu(closeburger);