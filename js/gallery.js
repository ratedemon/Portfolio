var mqq = window.matchMedia("(min-width: 48em)");
if (mqq.matches) {
	forDesctop();
}
else{
	forMobile();
}
mqq.addListener(function(m) {
    if(m.matches) {
        forDesctop();
    }
    else {
        // Изменено на горизонтальный режим
        forDesctop();
    }
});

function forMobile(){
const polosa = document.querySelector('.works__my');
const page = document.querySelector('.works__page');
const pictures = document.querySelectorAll('.works__pic');
var counter = 0;
addDott();
const dott = document.querySelectorAll('.page__span');
dott[0].classList.add('page__span_active');

function addDott(){
	var newDiv = document.createElement('div');
	newDiv.classList.add('page__span');
	page.appendChild(newDiv);
	for(i=0; i<pictures.length-1;i++){
		var newDiv2 = newDiv.cloneNode(true);
	newDiv.parentNode.insertBefore(newDiv2, newDiv.nextSibling);
	}
}

dott.forEach(num => num.addEventListener('click', toNum))
function toNum(event){
	counter=0;
	dott.forEach(int => int.classList.remove('page__span_active'))
	this.classList.add('page__span_active');
	for(i=0;i<dott.length;i++){
		if(dott[i].classList.contains("page__span_active")){	
			break;
		}
		else{
			counter++;
		}
	}
	polosa.style.transform = 'translateX(' + -100*counter +'%)';
}

$(function(){
Hammer(polosa).on("swipeleft", function() {
  counter++;
  if(counter<pictures.length){
    dott[counter-1].classList.remove('page__span_active');
  }
  else{
    counter=0;
    dott[pictures.length-1].classList.remove('page__span_active');
  }
    dott[counter].classList.add('page__span_active');
    polosa.style.transform = 'translateX(' + -100*counter +'%)';
});
Hammer(polosa).on("swiperight", function() {
  counter--;
  if(counter<0){
    counter=pictures.length-1;
    dott[0].classList.remove('page__span_active');
  }
  else{
    dott[counter+1].classList.remove('page__span_active');
  }  
  dott[counter].classList.add('page__span_active');
  polosa.style.transform = 'translateX(' + -100*counter +'%)';
    });
});
};

function forDesctop(){
const images = document.querySelectorAll('.my__img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
var modalWindow = document.getElementById('my__modal');
var modalImg = document.getElementById('img01');
var caption =document.getElementById('caption');
const span = document.getElementById('close');
var modalBlock = document.getElementById('modal__block');
// var counter=0;
var newArr = [];

images.forEach(keys => keys.addEventListener('click', openImage));
span.addEventListener('click', closeImage);
next.addEventListener('click', toNext);
prev.addEventListener('click', toPrev);

var img, alt, q;
for(i=0;i<images.length;i++){
	newArr.push(images[i].src);
}
function openImage(pic){
	img = pic.src || pic.srcElement.src;
	alt =pic.alt  || pic.target.alt;	
	modalWindow.style.display = 'block';
	var mql = window.matchMedia("(orientation: portrait)");

	if(mql.matches) {  
    // Портретная ориентация
    modalBlock.style.transform = 'translateY(50%)';
	} else {  
    // Горизонтальная ориентация
    modalBlock.style.transform = 'translateY(0%)';
	}
	mql.addListener(function(m) {
    if(m.matches) {
        modalBlock.style.transform = 'translateY(50%)';
    }
    else {
        // Изменено на горизонтальный режим
        modalBlock.style.transform = 'translateY(0%)';
    }
});
	modalImg.src = img;
	modalImg.alt = alt;
	caption.innerHTML = modalImg.alt;
};
function closeImage() {
	modalBlock.style.transform = 'translateY(-500%)';
	setTimeout(	close, 500);
};
function close(){
	modalWindow.style.display ='none';
};
function toNext(){
	q = newArr.indexOf(img);
	console.log(q);
	close();
	if(q>images.length-2){
		q=-1;
	}
	q++;
	openImage(images[q]);
};
function toPrev() {
	q = newArr.indexOf(img);
	close();
	if(q<=0){
		q=images.length;
	}
	q--;
	openImage(images[q]);
};
};