const endpoint = "pictures.json";
const picImg = [];
var count = 0;

fetch(endpoint).then(b=>b.json()).then(data=>picImg.push(...data));
// console.log(picImg.length);

const btnAdd = document.querySelector('.works__add');
const worksMy = document.querySelector('.works__my')

btnAdd.addEventListener('click', displayWorks);

function displayWorks() {
	const html = picImg.map(pict => {
		return `<div class="works__pic">
		<img src="${pict.imgSrc}" alt="${pict.altImg}" class="my__img"/>
		</div>`
	}).join('');
	worksMy.innerHTML = html;
}
// const newWin = document.querySelector('.works__pic');