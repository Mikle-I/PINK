const menu = document.querySelector('.main-nav'),
      menuitem = document.querySelector('.main-nav__ul--mob_tab'),
      button = document.querySelector('.intro-nav__button'),
      closemenu = document.querySelector('.main-nav__button')


function visiblMenu(){
   
       menuitem.classList.toggle('menu--notvisible'), 
       menu.classList.toggle('menu--notvisible');
   
};
visiblMenu();

button.addEventListener("click", function() {
   menuitem.classList.toggle('menu--notvisible'), 
   menu.classList.toggle('menu--notvisible');
});

closemenu.addEventListener("click", function() {
   menuitem.classList.toggle('menu--notvisible'), 
   menu.classList.toggle('menu--notvisible');
});