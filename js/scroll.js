const colorMain = document.querySelector('.colorChange');
colorMain.addEventListener('change', chooseColor);

function chooseColor() {
	// console.log(this.value);
	if(this.value == "#ffffff"){	
		document.documentElement.style.setProperty(`--main-color`, '#000000');
	}
	else{
		document.documentElement.style.setProperty(`--main-color`, '#fff');
	}
	document.documentElement.style.setProperty(`--${this.name}`, this.value);
}