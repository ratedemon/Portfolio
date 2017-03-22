$('.works__add').on('click', loadItems);
var newWin = $('.works__pic');
function loadItems(){
	//загрузка изображений 
	$(this).hide("fast");
	$.getJSON('pictures2.json', function(data){
		var out = "";
		for(var key in data){
			for(var prop in data[key]){
				out += '<div class="works__pic">';
				out += '<img class="my__img" data-linking="'+data[key][prop]['hrefImg']+'" src="' + data[key][prop]['imgSrc'] +'" alt="'+ data[key][prop]['altImg'] + '">';
				out += '</div>';
			}
		}
		$('.works__my').html(out);
		var mqk = window.matchMedia("(min-width: 48em)");
if (mqk.matches) {
	document.querySelector('.works__my').style.transform = "translateX(0%)";
	forDesctop();
}
else{
	$('.page__span').remove();
	document.querySelector('.my__modal').style.display = "none";
	forMobile();
}
mqk.addListener(function(m) {
    if(m.matches) {
    	//изменено на десктопное
  		document.body.style.overflow = '';
    	document.querySelector('.navbar').style.display = "flex";
    		document.querySelector('.works__my').style.transform = "translateX(0%)";
        forDesctop();
    }
    else {
        // Изменено на мобильное
      $('.page__span').remove();
      document.querySelector('.my__modal').style.display = "none";
      document.querySelector('.navbar').style.display = "flex";
			forMobile();
    }
});
	});
};
