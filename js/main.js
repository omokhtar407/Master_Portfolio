/* ******************* Start Loading ****************** */
$(document).ready(function() {
        $('.my-logo').fadeOut(2500, () => {
            $('.my-logo').parent().fadeOut(3500, () => {
                $('.loading').remove();
                $('body').css("overflow-y", "auto");
            })
        });
    })
    /* ******************* End Loading ****************** */

/* ****************** Start Header ****************** */

/* ****** Start Container ****** */
let SliderContent = document.querySelector('.slider_content');

window.addEventListener('scroll', () => {

    SliderContent.style.opacity = 1 - +window.pageYOffset / 550 + '';
    SliderContent.style.top = +window.pageYOffset + 'px';
    SliderContent.style.backgroundPositionY = - +window.pageYOffset / 2 + 'px';

});
/* ****** End ****** */

/* ****** Start My_sections ****** */
$("a[href^= '#'] ").click(function(e) {
        let aHref = e.target.getAttribute('href');
        let secOffset = $(aHref).offset().top;
        $('body,html').animate({ scrollTop: secOffset }, 1000);
    })
    /* ****** End ****** */

/********* Start My_social *******/
let My_social = document.querySelector('.My_social');
My_social.addEventListener('click', function(e) {
    e.currentTarget.classList.add('active');

    if(e.target.hasAttribute('href') || e.target.classList.contains('fas') || e.target.classList.contains('fab')){
        e.currentTarget.classList.remove('active');
    }
});

window.addEventListener('scroll', function() {
    if(My_social.classList.contains('active')){
        My_social.classList.remove('active');
    }
});

/* ****** End ****** */
/* ****************** End Header ****************** */



/* ****************** Start My Skills ****************** */

/* ****** Start Easy pie chart ****** */
let SkillOff = Math.floor($('#Skills').offset().top);
$(window).scroll(function() {

    let wScroll = Math.floor($(window).scrollTop());

    let html = document.querySelector('.html'),
        css = document.querySelector('.css'),
        js = document.querySelector('.js'),
        ts = document.querySelector('.ts'),
        Jquery = document.querySelector('.Jquery'),
        bootstrab = document.querySelector('.bootstrab'),
        Angular = document.querySelector('.Angular'),
        sass = document.querySelector('.sass'),
        Ajax_json = document.querySelector('.Ajax-json'),
        github = document.querySelector('.github');

    if (wScroll >= SkillOff) {

        new EasyPieChart(html, {
            barColor: '#fd7e14',
            lineWidth: 10,
            trackColor: '#000',
            trackWidth: 10,
            lineCap: 'round',
        });

        new EasyPieChart(css, {
            barColor: '#0d6efd',
            lineWidth: 10,
            trackColor: '#000',
            trackWidth: 10,
            lineCap: 'round'
        });

        new EasyPieChart(js, {
            barColor: '#ffc107',
            lineWidth: 10,
            trackColor: '#000',
            trackWidth: 10,
            lineCap: 'round'
        });

        new EasyPieChart(ts, {
            barColor: '#0d60ff',
            lineWidth: 10,
            trackColor: '#000',
            trackWidth: 10,
            lineCap: 'round'
        });

        new EasyPieChart(Jquery, {
            barColor: '#b3d4fc',
            lineWidth: 10,
            trackColor: '#000',
            trackWidth: 10,
            lineCap: 'round'
        });

        new EasyPieChart(bootstrab, {
            barColor: '#6610f2',
            lineWidth: 10,
            trackColor: '#000',
            trackWidth: 10,
            lineCap: 'round'
        });

        new EasyPieChart(Angular, {
            barColor: 'red',
            lineWidth: 10,
            trackColor: '#000',
            trackWidth: 10,
            lineCap: 'round'
        });

        new EasyPieChart(sass, {
            barColor: '#d63384',
            lineWidth: 10,
            trackColor: '#000',
            trackWidth: 10,
            lineCap: 'round'
        });

        new EasyPieChart(Ajax_json, {
            barColor: '#198754',
            lineWidth: 10,
            trackColor: '#000',
            trackWidth: 10,
            lineCap: 'round'
        });

        new EasyPieChart(github, {
            barColor: '#343a40',
            lineWidth: 10,
            trackColor: '#000',
            trackWidth: 10,
            lineCap: 'round'
        });

    }
});
/* ****** End ****** */

/* ****************** End My Skills ****************** */



/* ****************** Start MY Works ****************** */

/* ****** Start nav-pills  ****** */
$('.nav-item').click(function() {

        $(this).find('.nav-link').addClass('active');
        $(this).siblings().find('.nav-link').removeClass('active');

    })
    /* ****** End ****** */
    /* ****** Start Img Slide  ****** */
let imgs = Array.from(document.querySelectorAll('.inn-img'));
let Plus = Array.from(document.querySelectorAll('.plus'));
let SelectedImg = document.querySelector('#selectedImg');
let prevButton = document.querySelector('.fa-angle-left');
let nextButton = document.querySelector('.fa-angle-right');
let closeButton = document.querySelector('.fa-times-square');

let currentIndex = 0;

for (let x = 0; x < Plus.length; x++) {
    Plus[x].addEventListener('click', function() {
        currentIndex = x;
        let imgSrc = imgs[x].getAttribute('src');
        SelectedImg.setAttribute('src', imgSrc);
    })
}

function slide(i) {
    currentIndex = currentIndex + i;

    if (currentIndex == -1) {
        currentIndex = imgs.length - 1;
    }
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }
    let imgSrc = imgs[currentIndex].getAttribute('src');
    SelectedImg.setAttribute('src', imgSrc);
}

function closeSlider() {
    document.querySelector('.modal').style.cssText = 'transform: translate(0,-50)';
    document.querySelector('.modal-backdrop.show').remove();
    document.body.style.cssText = 'overflow : auto !important';
}

nextButton.addEventListener('click', function() {
    slide(1);
});

prevButton.addEventListener('click', function() {
    slide(-1);
});

document.addEventListener('keydown', function(e) {
        if (e.key == "ArrowRight") {
            slide(1);
        } else if (e.key == "ArrowLeft") {
            slide(-1);
        } else if (e.key == "Escape") {
            closeSlider();
        }
    })
    /* ****** End ****** */

/* ******************* End MY Works ****************** */

/* ******************* Start btnUp ****************** */
let aboutOffset = $('#About_Me').offset().top;
$(window).scroll(function() {
    let wScroll = $(window).scrollTop();
    if (wScroll > aboutOffset - 300) {
        $('#btnUp').fadeIn(500);
    } else {
        $('#btnUp').fadeOut(500);
    }
})
$('#btnUp').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 1000)
    })
    /* ******************* End btnUp ****************** */

/* ******************* Start lock inspect ****************** */

// document.onkeydown = function(e) {
//     if (e.key === 'F12') { // f12
//         return false;
//     }
//     if (e.ctrlKey == true && e.shiftKey == true && e.key == 'I') {
//         return false;
//     }
//     if (e.ctrlKey == true && e.shiftKey == true && e.key == 'C') {
//         return false;
//     }
//     if (e.ctrlKey == true && e.shiftKey == true && e.key == 'J') {
//         return false;
//     }
//     // view source code for html source
//     if (e.ctrlKey == true && (e.key == 'U' || e.key == 'u')) {
//         return false;
//     }
// };

// document.addEventListener('contextmenu', e => e.preventDefault());

/* ******************* End lock inspect ****************** */