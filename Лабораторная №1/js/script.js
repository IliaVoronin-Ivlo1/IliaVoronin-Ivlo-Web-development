function bacAutoPlaySlider(){
   let sliderElemCollection= document.querySelectorAll('.header_main_slider_item');

  

  if(sliderElemCollection[0].classList.toString().split(' ').length==3){

    sliderElemCollection[0].classList.remove('hide')

    sliderElemCollection[1].classList.add('hide')

    sliderElemCollection[2].classList.remove('hide')

    return;

  }

  if(sliderElemCollection[1].classList.toString().split(' ').length==3){

    sliderElemCollection[0].classList.remove('hide')

    sliderElemCollection[1].classList.remove('hide')

    sliderElemCollection[2].classList.add('hide')


    return;


  }

  if(sliderElemCollection[2].classList.toString().split(' ').length==3){

    sliderElemCollection[0].classList.add('hide')

    sliderElemCollection[1].classList.remove('hide')

    sliderElemCollection[2].classList.remove('hide')

    return;


  }
}

setInterval(bacAutoPlaySlider,4*1000);