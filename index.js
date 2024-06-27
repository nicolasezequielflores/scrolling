const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const scrollContainer = document.querySelector('.scroll__container');

btnLeft.addEventListener('click', ()=>{
    scrollContainer.scrollLeft -= 300;
    console.log('btn apretado');
});

btnRight.addEventListener('click', () =>{
    scrollContainer.scrollLeft += 300;
    console.log('btn apretado');
});