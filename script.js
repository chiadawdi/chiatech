let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');

};

const sr=ScrollReveal({
    distance:'40px',
    duration:2500,
    reset:true
})
sr.reveal('.logo',{dealy:200,origin:'left'});
sr.reveal('.navbar',{dealy:400,origin:'top'});
sr.reveal('.menu-btn',{dealy:520,origin:'right'});
sr.reveal('.home-text span',{dealy:600,origin:'top'});
sr.reveal('.home-text',{dealy:680,origin:'left'});
sr.reveal('.home-text p',{dealy:700,origin:'right'});
sr.reveal('.main-btn',{dealy:800,origin:'bottom'});
sr.reveal('.share',{dealy:900,origin:'bottom'});

$('.main-carousel').flickity({
    cellAlign: 'left',
    wrapAround:true,
    FreeScoll:false,
    contain: true
  });

