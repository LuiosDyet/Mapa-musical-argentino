//SlideShow JS

var slideIndex = [1, 1, 1, 1, 1, 1, 1];
var slideId = ["fotosNoroeste", "fotosLitoral", "fotosCuyo", "fotosPampeana", "fotosCiudadana", "fotosCentro", "fotosPatagonia"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);



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

let regiones = document.getElementsByClassName("region");

for (let i = 0; i < regiones.length; i++) {
    regiones[i].addEventListener('click', showRegion, false);

};

function showRegion() {
	hideRegiones()
	let regionEle = this.getAttribute('id');
	region = document.querySelector(`.${regionEle}`);
	region.style.display = 'block';

}

function hideRegiones() {
	regiones = document.querySelectorAll('.regionInfo');
	for(region of regiones){
		region.style.display = 'none';
	};
};

//Show generos


function showGenero(genero) {

	
	hideGeneros();
	generoL = document.querySelector(`.${genero}`);
	generoL.style.display = 'inline-flex';

}

function hideGeneros() {
	generos = document.querySelectorAll('.infoGenero');
	for(genero of generos){
		genero.style.display = 'none';
	};
};



