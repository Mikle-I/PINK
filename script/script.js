const pageWidth = document.documentElement.scrollWidth;
const menu = document.querySelector('.main-nav');
const menuitem = document.querySelector('.main-nav__ul--mob_tab');

function visiblMenu(){
   if (pageWidth < 1200) {
       menuitem.classList.toggle('menu--notvisible'), 
       menu.classList.toggle('menu--notvisible');
   }
};
visiblMenu();