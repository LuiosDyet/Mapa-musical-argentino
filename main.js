
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
		var elementDots = document.querySelector('.dots');
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
			dotsContainer.setAttribute('class','dots');
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
	[['Chola','https://github.com/LuiosDyet/Mapa-musical-argentino/blob/e8f4f391e91c337f7cfc52762cafbabd25b0cbb5/img/Puna/Chola.jpg'],['Coyita', 'https://github.com/LuiosDyet/Mapa-musical-argentino/blob/e8f4f391e91c337f7cfc52762cafbabd25b0cbb5/img/Puna/Coyita.jpg'],['Esquila', 'https://github.com/LuiosDyet/Mapa-musical-argentino/blob/e8f4f391e91c337f7cfc52762cafbabd25b0cbb5/img/Puna/Esquila.jpg'],['Ganado', 'https://github.com/LuiosDyet/Mapa-musical-argentino/blob/e8f4f391e91c337f7cfc52762cafbabd25b0cbb5/img/Puna/Ganado.jpg'],
	 ['Hornocal, Jujuy','https://github.com/LuiosDyet/Mapa-musical-argentino/blob/e8f4f391e91c337f7cfc52762cafbabd25b0cbb5/img/Puna/Hornocal-Jujuy.jpg'],['Paisaje del noroeste', 'https://github.com/LuiosDyet/Mapa-musical-argentino/blob/e8f4f391e91c337f7cfc52762cafbabd25b0cbb5/img/Puna/Paisaje-del-noroeste.jpg'],['Quena', 'https://github.com/LuiosDyet/Mapa-musical-argentino/blob/e8f4f391e91c337f7cfc52762cafbabd25b0cbb5/img/Puna/Quena.jpg'],['Yendo a la escuela', 'https://github.com/LuiosDyet/Mapa-musical-argentino/blob/e8f4f391e91c337f7cfc52762cafbabd25b0cbb5/img/Puna/Yendo-a-la-escuela.jpg']]);
	
let Litoral = new Region('Litoral',['Chamamé','Rasguido doble','Chamarrita'],"rgba(44, 146, 191, .3)","rgba(44, 146, 191",	
	[['Bañado','https://github.com/LuiosDyet/Mapa-musical-argentino/blob/e8f4f391e91c337f7cfc52762cafbabd25b0cbb5/img/Litoral/Bañado.jpg'],['Carpincho y yacaré', 'https://github.com/LuiosDyet/Mapa-musical-argentino/blob/e8f4f391e91c337f7cfc52762cafbabd25b0cbb5/img/Litoral/carpincho-y-yacaré.jpg'],['CostaneraCorrientes', 'https://github.com/LuiosDyet/Mapa-musical-argentino/blob/e8f4f391e91c337f7cfc52762cafbabd25b0cbb5/img/Litoral/costanera-Corrientes.jpg'],['Cataratas', 'https://github.com/LuiosDyet/Mapa-musical-argentino/blob/e8f4f391e91c337f7cfc52762cafbabd25b0cbb5/img/Litoral/cataratas.jpg'],
	 ['El Palmar','https://github.com/LuiosDyet/Mapa-musical-argentino/blob/e8f4f391e91c337f7cfc52762cafbabd25b0cbb5/img/Litoral/el-palmar.jpg'],['Pesca en el Paraná', 'https://github.com/LuiosDyet/Mapa-musical-argentino/blob/e8f4f391e91c337f7cfc52762cafbabd25b0cbb5/img/Litoral/pesca-en-el-Paraná.jpg'],['Ruta Jesuita San Ignacio Miní, Misiones', 'https://github.com/LuiosDyet/Mapa-musical-argentino/blob/e8f4f391e91c337f7cfc52762cafbabd25b0cbb5/img/Litoral/Ruta-Jesuita-San-Ignacio-Miní-Misiones.jpg'],['Tierra roja y yerba', 'https://github.com/LuiosDyet/Mapa-musical-argentino/blob/e8f4f391e91c337f7cfc52762cafbabd25b0cbb5/img/Litoral/tierra-roja-y-yerba.jpg']]);

let Centro = new Region('Centro',['Gato norteño','Chacarera','Escondido','Zamba'],"rgba(255, 156, 72, .3)","rgba(255, 156, 72",[]);

let Cuyo = new Region('Cuyo',['Cueca cuyana','Gato cuyano','Tonada'],"rgba(170, 91, 4, .5)","rgba(170, 91, 4",[]);

let Pampeana = new Region('Pampa',['Malambo','Huella','Payada'],"rgba(98, 128, 43, .5)","rgba(98, 128, 43",[]);

let Ciudadana = new Region('Ciudadana',['Tango','Milonga ciudadana'],"rgba(173, 170, 141, .5)","rgba(173, 170, 141",[]);

let Patagonia = new Region('Patagonia',['Loncomeo'],"rgba(52, 57, 107, .5)","rgba(52, 57, 107",[]);
 

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
					[['Pie del huayno', 'https://github.com/LuiosDyet/Mapa-musical-argentino/blob/e8f4f391e91c337f7cfc52762cafbabd25b0cbb5/img/PieHuayno.png'], ['Pie del carnavalito','https://github.com/LuiosDyet/Mapa-musical-argentino/blob/e8f4f391e91c337f7cfc52762cafbabd25b0cbb5/img/PieCarnavalito.png']],
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




