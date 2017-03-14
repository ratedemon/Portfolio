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
})

