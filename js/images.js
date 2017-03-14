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
}