//функция которая скрывает меню
const menu = document.querySelector('.main-nav'),
      menuitem = document.querySelector('.main-nav__ul--mob_tab'),
      button = document.querySelector('.intro-nav__button'),
      closemenu = document.querySelector('.main-nav__button')


function visiblMenu(){
   
       menuitem.classList.toggle('menu--notvisible'), 
       menu.classList.toggle('menu--notvisible');
   
};
visiblMenu();
// конец функции

// обработчки событий нажатия кнопок меню/закрытие меню
button.addEventListener("click", function() {
   menuitem.classList.toggle('menu--notvisible'), 
   menu.classList.toggle('menu--notvisible');
});

closemenu.addEventListener("click", function() {
   menuitem.classList.toggle('menu--notvisible'), 
   menu.classList.toggle('menu--notvisible');
});

// конец обработчика

// слайдер вариант карусель

  // Slider( карусель вариант)

  const slids = document.querySelectorAll('.review__1'),
  prev = document.querySelector('.review__buttonback'),
  next = document.querySelector('.review__buttonup'),
  total = document.querySelector('#total'),
  current = document.querySelector('#current'),
  slidesWrapper =document.querySelector('.review-wraper'),
  slidesField = document.querySelector('.review__inner'),
  width = window.getComputedStyle(slidesWrapper).width;

  let slideIndex = 1;
  let otstup = 0;


  slidesField.style.width = 100 * slids.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.8s all';
  slidesWrapper.style.overflow = 'hidden';
  
  
  slids.forEach(slide =>{
     slide.style.width = width;
  });

  next.addEventListener('click', () =>{
      if (otstup == +width.slice(0, width.length - 2) * (slids.length - 1)){
      otstup = 0;
     } else {
         otstup += +width.slice(0, width.length - 2)
     }

         slidesField.style.transform = `translateX(-${otstup}px)`;

         if (slideIndex == slids.length){
             slideIndex = 1;
         } else {
             slideIndex++;
         }
         
     });
  prev.addEventListener('click', () =>{
     if (otstup == 0){
      otstup = +width.slice(0, width.length - 2) * (slids.length - 1);
    } else {
        otstup -= +width.slice(0, width.length - 2)
    }
     
    
    if (slideIndex == 1){
     slideIndex = slids.length;
     } else {
     slideIndex--;
      }

        
        slidesField.style.transform = `translateX(-${otstup}px)`;
 });

// конец слайдера

