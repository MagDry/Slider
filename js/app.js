document.addEventListener('DOMContentLoaded', function(){

//Slider 

//przyciski lewy i prawy w sekcji Slider

let leftBtn = document.querySelector('.sliderButtonPrev');
//console.log(leftBtn);
let rightBtn = document.querySelector('.sliderButtonNext');
//console.log(rightBtn);

//lista obrazów - znajduje pierwszy element li (black chair)
let imgClass = document.querySelectorAll('.imageSize');
//console.log(imgClass);

//zakładam zmienną o wartości 0
let index = 0;


//dane zdjęcie ma mieć dodaną klasę "visible"
imgClass[index].classList.add('visible');


//po naciśnięciu prawego przycisku usuwana jest klasa "visible"
rightBtn.addEventListener('click', function(){
    imgClass[index].classList.remove('visible');
    index++;
    if(index==imgClass.length){
        index=0;
    }
    imgClass[index].classList.add('visible');
});


leftBtn.addEventListener('click', function(){
    imgClass[index].classList.remove('visible');
    index--;
    if(index==-1){
        index=imgClass.length-1;
    }
    imgClass[index].classList.add('visible');
});


});