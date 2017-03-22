 var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    const navbar = document.querySelector(".navbar__ul");
    const link = document.querySelectorAll(".navbar__a");
    const toLink = document.querySelectorAll(".to__link");
    var counter = 0, timer, scrolled, scrollTop;
    // console.log(toLink.length, link.length);
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", showBar, false);
      });
    }
    link.forEach(superLink => superLink.addEventListener('click', Scrolling));


   function showBar(){
   	this.classList.toggle("is-active");
    this.classList.toggle("hamburger-center");
    navbar.classList.toggle("navbar__ul_active");
    if(this.classList.contains('is-active')){
    	document.body.style.overflow = 'hidden';
  	}
  	else{
  		document.body.style.overflow = '';
  	}
   }



  function Scrolling(event){
  	counter = this.dataset;
  	hamburgers[0].classList.toggle("is-active");
    hamburgers[0].classList.toggle("hamburger-center");
    navbar.classList.toggle("navbar__ul_active");
    document.body.style.overflow = '';
  	counter = counter.key;
  	var themeHeig = toLink[counter];
  	themeHeig = themeHeig.offsetTop;
  	window.scrollTo(0, themeHeig);
  }
