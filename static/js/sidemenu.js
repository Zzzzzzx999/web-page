//  side-menu
var menu = document.querySelector('.menu img');
var sidemenu = document.querySelector('.side-menu');
var flag = 0;
menu.onclick = function () {
    if (flag == 0){
        menu.src = 'static/image/关  闭.png';
        sidemenu.style.right = '0';
        flag = 1;
    }else{
        menu.src = 'static/image/sidebar.png';
        sidemenu.style.right = '-33.4%';
        flag = 0;
    }
    
}