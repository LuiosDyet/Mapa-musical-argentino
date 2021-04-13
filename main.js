//SlideShow JS

var slideIndex = [1,1];
var slideId = ["fotosNoroeste", "fotosLitoral", "fotosCuyo", "fotosPampeana", "fotosCiudadana", "fotosCentro", "fotosPatagonia"]
showSlides(1, 0);
showSlides(1, 1);
/*showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
*/


function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}


//Show regiones

function showRegionNoroeste() {
	hideRegiones()
	region = document.querySelector('.noroeste');
	region.style.display = 'block';

};

function showRegionLitoral() {
	hideRegiones()
	region = document.querySelector('.litoral');
	region.style.display = 'block';

};

function showRegionCuyo() {
	hideRegiones()
	region = document.querySelector('.cuyo');
	region.style.display = 'block';

};

function showRegionPampeana() {
	hideRegiones()
	region = document.querySelector('.pampeana');
	region.style.display = 'block';

};

function showRegionCiudadana() {
	hideRegiones()
	region = document.querySelector('.ciudadana');
	region.style.display = 'block';

};

function showRegionCentro() {
	hideRegiones()
	region = document.querySelector('.centro');
	region.style.display = 'block';

};

function showRegionPatagonia() {
	hideRegiones()
	region = document.querySelector('.patagonia');
	region.style.display = 'block';

};

function hideRegiones() {
	regiones = document.querySelectorAll('.regionInfo');
	for(region of regiones){
		region.style.display = 'none';
	};
};
