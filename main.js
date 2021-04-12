
// elección de regiones

function Region(nombre, generos, fondo, colorTit, imgRegion) {
	this.nombre = nombre;
	this.generos = generos;
	this.fondo = fondo;
	this.colorTit =colorTit;
	this.imgRegion = imgRegion;

	this.info = function() {

		borrarCaract();
		//eliminar lista anterior
		let infoRegion = document.getElementById('infoRegion');
		let orList = document.querySelector('#listaRegion');
		infoRegion.removeChild(orList);

		var elementImg = document.querySelector('.slideshow-container');
		infoRegion.removeChild(elementImg);
		var elementDots = document.querySelector('.puntos');
		infoRegion.removeChild(elementDots);
		
		



		let nombreRegion = document.getElementById('nombreRegion')
		nombreRegion.innerHTML = nombre;
	
		let generoTit = document.getElementById('generoTit')
		generoTit.innerHTML = 'Géneros musicales';
		
		let list = document.createElement('ol');
		list.setAttribute('id', 'listaRegion');
		list.setAttribute('class', 'listaRegionCl');
		let generos = this.generos;

		for (i = 0; i < generos.length; i++)  {
			
			let listItem = document.createElement('li');
			listItem.innerHTML = generos[i];
			let generoString = generos[i].toString().split(' ');
			let iValue = generoString[0];
			listItem.setAttribute('class', 'genero');
			listItem.setAttribute('id', iValue);
			listItem.addEventListener('click', selGenero, false)
			list.appendChild(listItem);
		};
		
		infoRegion.appendChild(list);


		// cambiar imagen de fondo
		
		
		document.body.style.backgroundColor = fondo;
		document.querySelector('h1').style.textShadow = `2.5px 2.5px 5px ${colorTit}` 
		document.querySelector('h2').style.textShadow = `2px 2px 8px ${colorTit}`

		



		//SlideShow

		var slideIndex = 0;
		createSlides();
		showSlides();

		//console.log(imgRegion);

		function createSlides() {


			let infoRegion = document.getElementById('infoRegion');
			let slideshowContainer = document.createElement('div');
			slideshowContainer.setAttribute('class', 'slideshow-container');
			infoRegion.appendChild(slideshowContainer);

			for(let i = 0; i < imgRegion.length; i++){

				let mySlidesFade = document.createElement('div');
				mySlidesFade.setAttribute('class','mySlides fade');
				slideshowContainer.appendChild(mySlidesFade);

				let numbertext = document.createElement('div');
				numbertext.setAttribute('class', 'numbertext');
				numbertext.innerHTML = `${i+1} / ${imgRegion.length}`
				mySlidesFade.appendChild(numbertext);

				let img = document.createElement('img');
				img.src = imgRegion[i][1];
				img.setAttribute('style', 'width:100%')
				mySlidesFade.appendChild(img);

				let text = document.createElement('div');
				text.setAttribute('class', 'text');
				text.innerHTML = imgRegion[i][0];
				mySlidesFade.appendChild(text);
			};
								

			let dotsContainer = document.createElement('div');
			dotsContainer.setAttribute('class','puntos');
			dotsContainer.setAttribute('style', 'text-align:center');
			infoRegion.appendChild(dotsContainer);

			for (let j = 0; j < imgRegion.length; j++){
				let dots = document.createElement('span');
				dots.setAttribute('class', 'dot')
				dotsContainer.appendChild(dots);	
			};
		};



			

		function showSlides() {
		  var i;
		  var slides = document.getElementsByClassName("mySlides");
		  var dots = document.getElementsByClassName("dot");
		  for (i = 0; i < slides.length; i++) {
		    slides[i].style.display = "none";  
		  };
		  slideIndex++;
		  if (slideIndex > slides.length) {slideIndex = 1}    
		  for (i = 0; i < dots.length; i++) {
		    dots[i].className = dots[i].className.replace(" active", "");
		  }
		  slides[slideIndex-1].style.display = "block";  
		  dots[slideIndex-1].className += " active";
		  setTimeout(showSlides, 5000); // Change image every 5 seconds
		};


	
	};
};



let NOA = new Region('Noroeste',['Huayno y Carnavalito','Vidala o yaraví','Bagüala'],"rgba(175, 27, 2, .3)","rgba(175, 27, 2",
	[['Chola','img/Puna/Chola.jpg'],['Coyita', 'img/Puna/Coyita.jpg'],['Esquila', 'img/Puna/Esquila.jpg'],['Ganado', 'img/Puna/Ganado.jpg'],
	 ['Hornocal, Jujuy','img/Puna/Hornocal-Jujuy.jpg'],['Paisaje del noroeste', 'img/Puna/Paisaje-del-noroeste.jpg'],['Quena', 'img/Puna/Quena.jpg'],['Yendo a la escuela', 'img/Puna/Yendo-a-la-escuela.jpg']]);
	
let Litoral = new Region('Litoral',['Chamamé','Rasguido doble','Chamarrita'],"rgba(44, 146, 191, .3)","rgba(44, 146, 191",	
	[['Bañado','img/Litoral/Bañado.jpg'],['Carpincho y yacaré', 'img/Litoral/carpincho-y-yacaré.jpg'],['Costanera Corrientes', 'img/Litoral/costanera-Corrientes.jpg'],['Cataratas', 'img/Litoral/cataratas.jpg'],
	 ['El Palmar','img/Litoral/el-palmar.jpg'],['Pesca en el Paraná', 'img/Litoral/pesca-en-el-Paraná.jpg'],['Ruta Jesuita San Ignacio Miní, Misiones', 'img/Litoral/Ruta-Jesuita-San-Ignacio-Miní-Misiones.jpg'],['Tierra roja y yerba', 'img/Litoral/tierra-roja-y-yerba.jpg']]);

let Centro = new Region('Centro',['Gato norteño','Chacarera','Escondido','Zamba'],"rgba(255, 156, 72, .3)","rgba(255, 156, 72",
	[['Bailando','img/Centro/bailando.jpg'],['Columna banda', 'img/Centro/columna-banda.jpg'],['Cuesta blanca', 'img/Centro/cuestablanca.jpg'],['El estadio', 'img/Centro/el-estadio.jpg'],
	 ['Embudo','img/Centro/embudo.jpg'],['Lago San Roque', 'img/Centro/lagosanroque.jpg'],['Patio del Indio Froilan', 'img/Centro/Patio-del-Indio-Froilan.jpg'],['Termas', 'img/Centro/termas.jpg']]);

let Cuyo = new Region('Cuyo',['Cueca cuyana','Gato cuyano','Tonada'],"rgba(170, 91, 4, .5)","rgba(170, 91, 4",
	[['Aconcagua desde arriba','img/Cuyo/Aconcagua-desde-arriba.jpg'],['Camino al Aconcagua', 'img/Cuyo/Camino-al-aconcagua.jpg'],['Cerro de la Gloria', 'img/Cuyo/cerro-gloria.jpg'],['Viñedos, Mendoza', 'img/Cuyo/Mendoza-viñedos.jpg'],
	 ['San-Juan','img/Cuyo/San-Juan.jpg'],['San Rafael', 'img/Cuyo/San-Rafael.jpg'],['San Luis', 'img/Cuyo/San-luis.jpg'],['viñedos, Mendoza', 'img/Cuyo/uvas-viñedos-mendoza.jpg']]);

let Pampeana = new Region('Pampa',['Malambo','Huella','Payada'],"rgba(98, 128, 43, .5)","rgba(98, 128, 43",
	[['Atardecer pampeano','img/Pampeana/Atardecer-pampeano.jpg'],['Ganado', 'img/Pampeana/Ganado.jpg'],['Gaucho', 'img/Pampeana/gaucho.jpg'],['Girasoles, La Pampa', 'img/Pampeana/Girasol-La-Pampa.jpg'],
	 ['Ombú','img/Pampeana/ombu.jpg'],['Paisaje Campestre', 'img/Pampeana/Paisaje-campestre.jpg'],['Payador en su rancho', 'img/Pampeana/Payador_rancho.jpg'],['soja', 'img/Pampeana/soja.jpg']]);

let Ciudadana = new Region('Ciudadana',['Tango','Milonga ciudadana'],"rgba(173, 170, 141, .5)","rgba(173, 170, 141",
	[['Caminito','img/Ciudadana/caminito.jpg'],['Fileteado', 'img/Ciudadana/diego_prenollio.jpg'],['Floralis Generica', 'img/Ciudadana/floralis-generica.jpg'],['Obelisco', 'img/Ciudadana/obelisco.jpg'],
	 ['Orquesta de tango','img/Ciudadana/orquesta.jpg'],['Plaza de Mayo', 'img/Ciudadana/plazamayo.jpg'],['Puerto Madero', 'img/Ciudadana/puerto-madero.jpg'],['Tango', 'img/Ciudadana/tango.jpg']]);

let Patagonia = new Region('Patagonia',['Loncomeo'],"rgba(52, 57, 107, .5)","rgba(52, 57, 107",
	[['7 Lagos','img/Patagonia/7lagos.jpg'],['Estancia', 'img/Patagonia/Estancia.jpg'],['Glaciar', 'img/Patagonia/glaciar.jpg'],['Villa Traful', 'img/Patagonia/villa-traful.jpg'],
	 ['Manzanas','img/Patagonia/manzanas.jpg'],['Mapuches', 'img/Patagonia/mapuches.jpg'],['Paisaje patagónico', 'img/Patagonia/Paisaje-patagónico.jpg'],['Tulipanes en Chubut', 'img/Patagonia/Tulipanes-en-Chubut.jpg']]);
 

let regiones = document.getElementsByClassName("region");

let selRegion = function() {
	
    let region = this.getAttribute("id");
    //alert(region);
    
    switch (region) {
    	case 'NOA' : NOA.info();
    		break;
	    case 'Litoral' : Litoral.info();
	    	break;
	    case 'Centro': Centro.info();
	    	break
	    case 'Cuyo' : Cuyo.info();
	    	break
	    case 'Pampeana' : Pampeana.info();
	    	break
	    case 'Ciudadana' : Ciudadana.info();
	    	break
	    case 'Patagonia' : Patagonia.info();
	    	break


    }


};

for (let i = 0; i < regiones.length; i++) {
    regiones[i].addEventListener('click', selRegion, false);

};






// seleción de géneros

let selGenero = function() {



    let genero = this.getAttribute("id");

//colorear y descolorear géneros
    document.querySelector(`#${genero}`).style.textShadow = `2px 2px 8px`
    let uncolorLi = document.querySelectorAll(`li:not(#${genero})`)
    for(element of uncolorLi) {
    	element.style.textShadow = 'none';
    }

    
    //alert(genero);

      switch (genero) {
    	case 'Huayno' : Huayno.info();
    		break;
	    case 'Chamamé' : Chamamé.info();
    		break;


    }
 };

function borrarCaract(){
		var elementTitulos = document.querySelectorAll('h3')
		for (element of elementTitulos) {
			element.innerHTML = ''
		};
		
		var elementLista = document.querySelectorAll('ul')
		for (element of elementLista) {
			element.innerHTML = ''
		};	


		

	

};


function gnr(nombre, caract, imagenes, video, nombreDanza, caractDanza, videoDanza) {
	this.nombre = nombre;
	this.caract = caract;
	this.imagenes = imagenes;
	this.video = video;
	this.nombreDanza = nombreDanza;
	this.caractDanza = caractDanza;
	this.videoDanza = videoDanza;

	
	

	this.info = function() {

		//eliminar género anterior
		borrarCaract();


		let nombreGenero = document.getElementById('nombreGenero')
		nombreGenero.innerHTML = nombre;
		
		let list = document.createElement('ul');
		list.setAttribute('id', 'listaGenero');
		let caract = this.caract;
		for (i = 0; i < caract.length; i++)  {
			
			let listItem = document.createElement('li');
			listItem.innerHTML = caract[i];
			list.appendChild(listItem);

			
		};

		for (j = 0; j < imagenes.length; j++){
			let imgData = document.createElement('h4');
			let img = document.createElement('img');
			
			imgData.innerHTML = imagenes[j][0];
			img.src = imagenes[j][1];

			list.appendChild(imgData);
			list.appendChild(img);
		};


		for (k = 0; k < video.length; k++){
			let videoData = document.createElement('h4');
			let iframe = document.createElement('iframe');
			
			videoData.innerHTML = video[k][0];
			iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(video[k][1]);
			
			list.appendChild(videoData);
			list.appendChild(iframe);
		};
		

		infoGenero.appendChild(list)
	
		//Culumna de Danza

		//eliminar género anterior
		

		let nombreGeneroDanza = document.getElementById('nombreGeneroDanza')
		nombreGeneroDanza.innerHTML = nombreDanza;

		
		let listDanza = document.createElement('ul');
		listDanza.setAttribute('id', 'listaGeneroDanza');
		let caractDanza = this.caractDanza;
		for (l= 0; l < caractDanza.length; l++)  {
			
			let listItem = document.createElement('li');
			listItem.innerHTML = caractDanza[l];
			listDanza.appendChild(listItem);

			
		};

		
		for (n = 0; n < videoDanza.length; n++){
			let videoData = document.createElement('h4');
			let iframe = document.createElement('iframe');
			
			videoData.innerHTML = videoDanza[n][0];
			iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(videoDanza[n][1]);
			
			listDanza.appendChild(videoData);
			listDanza.appendChild(iframe);
		};
		

		infoGeneroDanza.appendChild(listDanza);

	}
};


let Huayno = new gnr('Huayno y Carnavalito',
					['Generalmente pentatónico (cinco notas)','Pie binario'],
					[['Pie del huayno', 'img/PieHuayno.png'], ['Pie del carnavalito','img/PieCarnavalito.png']],
					[['Video de muestra del Huayno', '<iframe width="300" height="168.75" src="https://www.youtube.com/embed/BoLZRaM2vfA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']],
					'Danza',
					['Danza grupal vivaz no coreografiada', 'Huayñunakunay: (quechua) bailar tomados de la mano'],
					[['Baile de Huayno','<iframe width="300" height="168.75" src="https://www.youtube.com/embed/yiS9k873oJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']]
					);






let Chamamé = new gnr('Chamamé',
					['Compás de 3/4 (tres negras en el grave) y 6/8 (corchea negra corchea negra en el agudo)',
					'Tiene muchas variantes que van desde tempos moderados a muy vivaces',
					'Puede ser tanto vocal como instrumental',
					'Tiene un fluir relacionado al rio',
					'Elementos carácteristicos: Sapucay (expresión de alegría o lamento que se manifiesta en un grito caracteristico) y tapa (acorde final que cierra la obra)'],
					[],
					[['Video de muestra del Chamamé','<iframe width="300" height="168.75" src="https://www.youtube.com/embed/yA-X8CcnF6Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']],
					'Danza',
					['Danza de pareja enlazada no coreográfica'],
					[['Baile de Chamamé', '<iframe width="300" height="168.75" src="https://www.youtube.com/embed/v2EwMGSAKyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']]
					);




