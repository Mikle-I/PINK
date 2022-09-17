const menu = document.querySelector('.main-nav');
const menuitem = document.querySelector('.main-nav__ul--mob_tab');

function visiblMenu(){
   
       menuitem.classList.toggle('menu--notvisible'), 
       menu.classList.toggle('menu--notvisible');
   
};
visiblMenu();