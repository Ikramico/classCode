let sliderDiv = document.querySelector('.slider');
let slideImage = document.querySelector('.slide')
let leftArr = document.querySelector('.left');
let rightArr = document.querySelector('.right');


let images = ["../images/slide.jpg", "../images/slide2.jpg", "../images/slide3.jpg"];
let i =0;
slideImage.src = images[i];
function left(){
    if(i>0){
        i--;
        slideImage.src = images[i];
    }
    else {i=0;
        slideImage.src = images[i];
    }
}
function right() {
    i++;
	if (i < images.length ) {
		slideImage.src = images[i];
	} 
    else {i=0;
        slideImage.src = images[i];
    }
}