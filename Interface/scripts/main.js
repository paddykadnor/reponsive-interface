/*
Jquery library for interface and basic animation 
@code Pradeep D Kadnor
*/
$(document).ready(function () {
    $('.main-menu').css('min-height', window.innerHeight);
    $('.content').css('height', window.innerHeight-100);

    $('.main-menu li').click(function () {
        if ($(this).hasClass('hasmenu')) {
            if ($(this)[0].childNodes[3].style.display == "none" || $(this)[0].childNodes[3].style.display == "") {
                $(this)[0].childNodes[3].style.display = "block";
                $(this).css({ 'background': 'url(../images/arrow-down.png) 193px 8px no-repeat', 'background-size': '10%' });
                //  $(this).css('background-size', '10%');
            }
            else {
                $(this)[0].childNodes[3].style.display = "none";
                $(this).css({ 'background': 'url(../images/arrow-right.png) 193px 8px no-repeat', 'background-size': '10%' });
            }
        }
    }).on('click', 'li', function (e) {
        e.stopPropagation();
    });

    $('.submenu li').hover(function () {
        $(this).css('border-left', '6px solid #87C876');
        $(this).css('position', 'relative');
        $(this).css('left', '0px');
    }, function () {
        $(this).removeAttr('style');
    });

    $('.nav').click(function () {

        $('.main-menu').css('display', 'block');
        $('.main-menu').animate({ left: '0' });
    });
    $('.nav-inner').click(function () {
        $('.main-menu').animate({ left: '-250px' });
        $('.main-menu').css('display', 'none');
       
    });
});