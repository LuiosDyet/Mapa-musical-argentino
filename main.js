//Hide bigMap

function Region(nombre, provinciasMapa, generosRegion, fotosRegion, fondo,caractGeneros, instrumentos){
	this.nombre = nombre;
	this.provinciasMapa = provinciasMapa;
	this.generosRegion = generosRegion;
	this.fotosRegion = fotosRegion;
	this.fondo = fondo;
	this.caractGeneros = caractGeneros;
	this.instrumentos = instrumentos

this.changeRegion = function(nombre, provinciasMapa, generosRegion, fotosRegion, fondo, caractGeneros, instrumentos){

	clearInfo();

	generosRegion = this.generosRegion;

	createCards(generosRegion.length*4);
	tilesPerRow(generosRegion.length*4);
	
	generosRegion = this.generosRegion;
	changeInfoFrontside(generosRegion);

	frontsideSubtitulo(generosRegion.length*4);

	caractGeneros = this.caractGeneros;
	changeInforBackside(caractGeneros);

	fotosRegion = this.fotosRegion;
	changeBGImages(fotosRegion);

	nombre = this.nombre;
	provinciasMapa = this.provinciasMapa;
	showImgProvincia(nombre, provinciasMapa);

	fondo = this.fondo;
	changeBGColor(fondo);

	instrumentos = this.instrumentos;
	//createInstrumentsBar(instrumentos);

	};
};



let regiones = document.getElementsByClassName("region");

let selRegion = function() {
	hideBigMap();
	
    let region = this.getAttribute("id");

  
    //alert(region);
    
    switch (region) {
    	case 'noroeste' : noroeste.changeRegion();
    		break;
	    case 'litoral' : litoral.changeRegion();
	    	break;
	    case 'centro': centro.changeRegion();
	    	break
	    case 'cuyo' : cuyo.changeRegion();
	    	break
	    case 'pampeana' : pampeana.changeRegion();
	    	break
	    case 'ciudadana' : ciudadana.changeRegion();
	    	break
	    case 'patagonia' : patagonia.changeRegion();
	    	break


    };
    document.getElementById('l3Opcion').innerHTML  = 'Instrumentos de la región';
};

for (let i = 0; i < regiones.length; i++) {
    regiones[i].addEventListener('click', selRegion, false);

};	
//try LOOP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var id = null;
function hideBigMap(){
	let overlayMap = document.getElementById('overlayMap'); 	
    var pos = 1;
    clearInterval(id);
  id = setInterval(frame, 5);
	  function frame() {
	    if (pos < 0) {
	      document.getElementById('overlayMap').style.display = 'none'
	      clearInterval(id);
	      
	    } else {
	      pos-=0.005; 
	      overlayMap.style.opacity = pos; 
	    };
	  };
};	

function showBigMap(){
	document.getElementById('overlayMap').style.display = 'block';
	document.getElementById('overlayMap').style.opacity = '1';
	//document.getElementById('sideBar').style.display = 'none';
};
//Create cards

function createCards(generosRegion){
	document.getElementById('l2').style.display = 'block';

	let main = document.getElementById('main');
	let cardQty = generosRegion;


	for(i = 0; i < cardQty; i++){

	let tile = document.createElement('div');
	tile.setAttribute('class', 'tile');
	main.appendChild(tile);

	let flipCard = document.createElement('div');
	flipCard.setAttribute('class','flip-card');
	tile.appendChild(flipCard);

	let flipCardInner = document.createElement('div');
	flipCardInner.setAttribute('class','flip-card-inner');
	flipCard.appendChild(flipCardInner);

	let flipCardFront = document.createElement('div');
	flipCardFront.setAttribute('class','flip-card-front');
	flipCardInner.appendChild(flipCardFront);

	let r = document.createElement('div');
	r.setAttribute('class','center-cropped');
	r.setAttribute('id',`r${i}`);
	flipCardFront.appendChild(r);

	let tituloGen = document.createElement('h2');
	tituloGen.setAttribute('class', 'titulo gen');
	tituloGen.setAttribute('id',`h2rt${i}`);
	r.appendChild(tituloGen);


	

	let flipCardBack = document.createElement('div');
	flipCardBack.setAttribute('class','flip-card-back');
	flipCardInner.appendChild(flipCardBack);

	let cardInfoDiv = document.createElement('div');
	cardInfoDiv.setAttribute('class','cardInfoDiv');
	flipCardBack.appendChild(cardInfoDiv);

	let clickZoom = document.createElement('a');
	clickZoom.setAttribute('href',`javascript:showZoomInfoOverlay(rt${i})`);
	clickZoom.setAttribute('class','clickZoom');
	cardInfoDiv.appendChild(clickZoom);

	let zoomInfo = document.createElement('img');
	zoomInfo.src = 'img/Lupa.png';
	zoomInfo.setAttribute('class','zoomInfo');
	clickZoom.appendChild(zoomInfo);

	let cardInfo = document.createElement('div');
	cardInfo.setAttribute('class','cardInfo');
	cardInfo.setAttribute('id',`rt${i}`);
	flipCardBack.appendChild(cardInfo);

	};


};

function tilesPerRow(generosRegion){
	let generosQty = generosRegion;
	if (generosQty === 1){
		var j = 1; var k = 1;
	}else if (generosQty === 2){
		var j = 2; var k = 1;
	}else if (generosQty === 3){
		var j = 2; var k = 2;	

	}else if (generosQty === 4){
		var j = 2; var k = 2;
	}else if (generosQty === 5){
		var j = 3; var k = 2;
	}else if (generosQty === 6){
		var j = 3; var k = 2;
	}else if (generosQty === 7){
		var j = 4; var k = 2;
		
	}else if (generosQty === 8){
		var j = 4; var k = 2;
	}else if (generosQty === 12){
		var j = 4; var k = 3;
	}else if (generosQty === 16){
		var j = 4; var k = 4;
	};
	
	let row = document.getElementsByClassName('tile');
	for (i = 0; i < row.length; i++){
		row[i].style.height = `calc(100vh/${j})`;
		row[i].style.width = `calc(85vw/${k})`;
	};

};




//Choose Region Info left side

function showImgProvincia(nombre ,provinciasMapa){
	document.getElementById('regionMapa').style.backgroundImage = provinciasMapa;
	document.getElementById('regionNombre').innerHTML = nombre;
	


}





// Clear Info
function clearInfo(){	
	let myTiles = document.querySelectorAll(".tile");
	
	for (tile of myTiles){		
		tile.remove();
    };

    	let myInstruments = document.querySelectorAll(".instruments");
	
	for (instruments of myInstruments){		
		instruments.remove();
    };

    	

};
 

// Set frontside information generos

function changeInfoFrontside(generosRegion){

	let generoTit = document.querySelectorAll('.gen');
	for (let i = 0; i < generoTit.length;i++){
		let j = Math.floor(i/4);
		generoTit[i].innerHTML = generosRegion[j];
		let k = i%4;
		if(k !== 0){
			generoTit[i].style.display = 'none'
		};
	};
		
	};	

function frontsideSubtitulo(generosRegion){
	
	let cardQty = generosRegion;


	for(i = 0; i < cardQty; i++){	

		let r = document.getElementById(`r${i}`);

		let tituloHiddenCaract = document.createElement('h3');
		tituloHiddenCaract.setAttribute('class', 'titulo hiddenCaract');
		tituloHiddenCaract.setAttribute('id',`h3rt${i}`);
	
	switch(i%4){
		case 0: tituloHiddenCaract.innerHTML = 'Características de la música';
		break;
		case 1: tituloHiddenCaract.innerHTML = 'Ejemplo Música';
		break;
		case 2: tituloHiddenCaract.innerHTML = 'Características de la danza';
		break;
		case 3: tituloHiddenCaract.innerHTML = 'Ejemplo Danza';
		break;
		};
	
	r.appendChild(tituloHiddenCaract);
	};
};


		
// Backside information generos



function changeInforBackside(caractGeneros){
	let genInfo = document.querySelectorAll('.cardInfo');
	for (let i = 0; i<genInfo.length; i++){
		//j is external array
		let j = Math.floor(i/4);
		//k is internal array
		let k = i%4;
		if (i%4 === 0) {
			list = createInfoGeneroMus(caractGeneros,j)
			genInfo[i].appendChild(list);
		}else if (i%4 === 1){
			list = createInfoGeneroEjemploMus(caractGeneros,j)
			genInfo[i].appendChild(list);
		}else if (i%4 === 2){
			list = createInfoGeneroDan(caractGeneros,j)
			genInfo[i].appendChild(list);
		}else if (i%4 === 3){
		list = createInfoGeneroEjemploDan(caractGeneros,j)
		genInfo[i].appendChild(list);
		};

	};

};


function createInfoGeneroMus(caractGeneros, genIndex){
	
	let list = document.createElement('ul');	
		
		for (i = 0; i < caractGeneros[genIndex][0][0].length; i++)  {
			let k = i%4;

			let listItem = document.createElement('li');

			listItem.innerHTML = caractGeneros[genIndex][0][0][k];
			list.appendChild(listItem);

		};

		for (i = 0; i < caractGeneros[genIndex][0][1].length; i++)  {
			let k = i%4;

			let imgData = document.createElement('p');
			let img = document.createElement('img');

			imgData.innerHTML = caractGeneros[genIndex][0][1][k][0];
			img.src = caractGeneros[genIndex][0][1][k][1];

			list.appendChild(imgData);
			list.appendChild(img);
		};

	return list;
};

function createInfoGeneroEjemploMus(caractGeneros, genIndex){
	let list = document.createElement('div');
	list.setAttribute('class', 'videoContainer');

	for (i = 0; i < caractGeneros[genIndex][1].length;i++){
			let k = i%4;

			let videoData = document.createElement('h4');
			let iframe = document.createElement('iframe');
			
			videoData.innerHTML = caractGeneros[genIndex][1][k][0];
			iframe.src = caractGeneros[genIndex][1][k][1];
			
			list.appendChild(videoData);
			list.appendChild(iframe);
		};
		

	return list

}

function createInfoGeneroDan(caractGeneros, genIndex){

	let list = document.createElement('ul');

	for (i = 0; i < caractGeneros[genIndex][2].length; i++)  {
			let k = i%4;

			let listItem = document.createElement('li');

			listItem.innerHTML = caractGeneros[genIndex][2][k];
			list.appendChild(listItem);

		};
	return list;
};

function createInfoGeneroEjemploDan(caractGeneros, genIndex){
	let list = document.createElement('div');
	list.setAttribute('class', 'videoContainer');

	for (i = 0; i < caractGeneros[genIndex][3].length;i++){
			let k = i%4;

			let videoData = document.createElement('h4');
			let iframe = document.createElement('iframe');
			
			videoData.innerHTML = caractGeneros[genIndex][3][k][0];
			iframe.src = (caractGeneros[genIndex][3][k][1]);
			
			list.appendChild(videoData);
			list.appendChild(iframe);
		};
		

	return list

};

// Background images
function changeBGImages(fotosRegion){
	for(let i = 0; i < fotosRegion.length; i++){
	img = document.getElementById(`r${i}`)
	img.style.backgroundImage = fotosRegion[i];
	};
};	

// Background color
function changeBGColor(fondo){
	document.body.style.backgroundImage = `linear-gradient(180deg, grey, ${fondo})`;
	//document.getElementById('sideBar').style.backgroundImage = `linear-gradient(to bottom left, grey, ${fondo})`;
	//document.getElementById('instrumentsBar').style.backgroundImage = `linear-gradient(to bottom right, grey, ${fondo})`;
	
	cardBackside = document.querySelectorAll('.flip-card-back');
	for(tile of cardBackside){
		tile.style.backgroundImage = `linear-gradient(${fondo}, white)`;
		
	}

	document.getElementById('overlayInfo').style.backgroundImage = `linear-gradient(${fondo}, white)`;
	
	document.getElementById('l3Opcion').style.backgroundColor = `${fondo}`;


}


//Zoom info Overlay

function showZoomInfoOverlay(tileCopied){
	document.getElementById('overlayBackground').style.display = 'block';
		
	let copiedCardInfo = document.getElementById('copiedCardInfo');
	let tileSelected = tileCopied.getAttribute("id");
	
	let overlayInfoH2Copied = document.getElementById(`h2${tileSelected}`);
	overlayInfoH2.innerHTML = overlayInfoH2Copied.innerHTML;

	let overlayInfoH3Copied = document.getElementById(`h3${tileSelected}`);
	overlayInfoH3.innerHTML = overlayInfoH3Copied.innerHTML;

	let overlayInfo = document.getElementById('copiedCardInfo');
	overlayInfoBody.innerHTML = tileCopied.innerHTML;
	
};

function hideZoomInfoOverlay(){
	document.getElementById('overlayBackground').style.display = 'none'
};


//Change instrument- genre

function changeInstrGene(){
	let buttonInstGen = document.getElementById('l3Opcion');
	if(buttonInstGen.innerHTML	 === 'Instrumentos de la región'){
		buttonInstGen.innerHTML = 'Géneros de la región';
		setCurrentRegionGeneros();
		} else {
		buttonInstGen.innerHTML	 = 'Instrumentos de la región';
		setCurrentRegionInstrumentos();
	};
};

  function setCurrentRegionGeneros(){
  	clearInfo();

  	let regionNombre = document.getElementById('regionNombre');
  	regionNombre = regionNombre.innerHTML;
  	regionNombre = regionNombre.toLowerCase();
  	switch (regionNombre) {
    	case 'noroeste' : ChangeInstruments(noroeste.instrumentos);
    					  changeBGColor(noroeste.fondo);
    		break;
	    case 'litoral' : ChangeInstruments(litoral.instrumentos);
	    				  changeBGColor(litoral.fondo);
	    	break;
	    case 'centro': ChangeInstruments(centro.instrumentos);
	    				  changeBGColor(centro.fondo);
	    	break
	    case 'cuyo' : ChangeInstruments(cuyo.instrumentos);
	    				  changeBGColor(cuyo.fondo);
	    	break
	    case 'pampeana' : ChangeInstruments(pampeana.instrumentos);
	    				  changeBGColor(pampeana.fondo);
	    	break
	    case 'ciudadana' : ChangeInstruments(ciudadana.instrumentos);
	    				  changeBGColor(ciudadana.fondo);
	    	break
	    case 'patagonia' : ChangeInstruments(patagonia.instrumentos);
	    				  changeBGColor(patagonia.fondo);
	    	break


    };

};

  function setCurrentRegionInstrumentos(){
  	clearInfo();

  	let regionNombre = document.getElementById('regionNombre');
  	regionNombre = regionNombre.innerHTML;
  	regionNombre = regionNombre.toLowerCase();
  	switch (regionNombre) {
    	case 'noroeste' : noroeste.changeRegion();
    		break;
	    case 'litoral' : litoral.changeRegion();
	    	break;
	    case 'centro': centro.changeRegion();
	    	break
	    case 'cuyo' : cuyo.changeRegion();
	    	break
	    case 'pampeana' : pampeana.changeRegion();
	    	break
	    case 'ciudadana' : ciudadana.changeRegion();
	    	break
	    case 'patagonia' : patagonia.changeRegion();
	    	break


    };

};


function ChangeInstruments(instrumentos){
	clearInfo();

	createCards(instrumentos[0].length);
	tilesPerRow(instrumentos[0].length);

	changeInfoFrontsideInstrumentos(instrumentos[0]);

	changeInforBacksideInstrumentos(instrumentos);

	fotosInstrumentos(instrumentos[2]);
	

};

// Set frontside information instrumentos

function changeInfoFrontsideInstrumentos(instrumentos){

	let generoTit = document.querySelectorAll('.gen');
	for (let i = 0; i < generoTit.length;i++){
		
		generoTit[i].innerHTML = instrumentos[i];
			};
};	


// Backside information instrumentos



function changeInforBacksideInstrumentos(instrumentos){
	let genInfo = document.querySelectorAll('.cardInfo');
	for (let i = 0; i<genInfo.length; i++){
		
			list = createInfoInstrumento(instrumentos[1][i])
			genInfo[i].appendChild(list);
	
	};

};

function createInfoInstrumento(instrumentos){
	
	let list = document.createElement('ul');	
		
		for (i = 0; i < instrumentos.length; i++)  {
			
			let listItem = document.createElement('li');

			listItem.innerHTML = instrumentos[i];
			list.appendChild(listItem);

		};

		/*for (i = 0; i < caractGeneros[genIndex][0][1].length; i++)  {
			let k = i%4;

			let imgData = document.createElement('p');
			let img = document.createElement('img');

			imgData.innerHTML = caractGeneros[genIndex][0][1][k][0];
			img.src = caractGeneros[genIndex][0][1][k][1];

			list.appendChild(imgData);
			list.appendChild(img);
		};
*/
	return list;
};


//fotos instrumentos

function fotosInstrumentos(instrumentos){
	for(let i = 0; i < instrumentos.length; i++){
	img = document.getElementById(`r${i}`)
	img.style.backgroundImage = instrumentos[i];
	};
};	



//Show Info Region initial overlay

let regionesBig = document.getElementsByClassName("regionBig"); 

for (let i = 0; i < regionesBig.length; i++) {
    regionesBig[i].addEventListener('mouseover', showRegionInfoFicha, false);

};

for (let i = 0; i < regionesBig.length; i++) {
    regionesBig[i].addEventListener('mouseout', hideRegionInfoFicha, false);

};

for (let i = 0; i < regionesBig.length; i++) {
    regionesBig[i].addEventListener('click', selRegion, false);

};



function showRegionInfoFicha() {
	let regionBig = this.getAttribute("id");
	document.getElementById(`irom-${regionBig}`).style.display = "block";
}

function hideRegionInfoFicha() {
  let regionBig = this.getAttribute("id");
  document.getElementById(`irom-${regionBig}`).style.display = "none";
}


//clear with escape key

//detect Escape key press
document.addEventListener("keydown", function(event) {
    if(event.keyCode === 27){
       hideZoomInfoOverlay()//Esc key was pressed
   }
});




//DATA	

let noroeste = new Region('Noroeste',
	"url('img/Regiones/noroeste.png')",
	['Huayno y Carnavalito','Vidala o yaraví','Baguala'], 
	[
	"url('img/Puna/Chola.jpg')",
	"url('img/Puna/Coyita.jpg')",
	"url('img/Puna/Esquila.jpg')",
	"url('img/Puna/Ganado.jpg')",
	"url('img/Puna/Paisaje-del-noroeste.jpg')",
	"url('img/Puna/Yendo-a-la-escuela.jpg')",
	"url('img/Puna/Quena.jpg')",
	"url('img/Puna/Hornocal-Jujuy.jpg')",
	"url('img/Puna/carnaval.jpg')",
	"url('img/Puna/pucaratilcara.jpg')",
	"url('img/Puna/salinas-puna.jpg')",
	"url('img/Puna/salta-ciudad.jpg')"
	],
	"rgb(215, 139, 125)",
		[
		[//Huayno
			[['Pie binario', 'Generalmente pentatónico (cinco notas)' ],//caract
			[['Pie del huayno', 'img/PieHuayno.png'],['Pie del carnavalito','img/PieCarnavalito.png']]], //img
			[['Ejemplo música', 'https://www.youtube.com/embed/BoLZRaM2vfA']
			],//ejemplos música
			['Danza grupal vivaz no coreografiada', 'Huayñunakunay: (quechua) bailar tomados de la mano'],//danza
			[['Ejemplo danza', 'https://www.youtube.com/embed/s2EwDKiuAFs']
			]//ejemplos
		],
		[//Vidala
			[['Forma estrófica con vuelo poético','Puede estar acompañada por instrumentos y ser a dos voces', 'Compás de 3/4, lenta'],
			[['negra con punto, corchea, negra','img/PieHuayno.png']]],
			[['ejemplo','']],
			['Sin danza'],
			[['ejemplo','']]
		],
		[//Baguala
			[['Canto solista, acompañado por caja, trifónico','Pueden ser improvisadas'],
			[]],
			[['','']],
			['Sin danza'],
			[['','']]
		]	
	],
	[[//instrumentos
	'Caja','Quena','Siku o zampoña','Erke', 'Chajchaj', 'Charango'],
	[//características instrumentos
	['Tambor pequeño, doble parche, se toca con una mano sosteniendola y con la otra con baqueta'], 
	['Aerófono de caña, un solo tubo con agujeros, con bisel de muesca'],
	['Hileras de tubos de cañas, una nota cada tubo','Siku (aymará) tubo que da sonido'],
	['Corneta o cuerno'],
	['Sonajero de pezuñas'],
	['Instrumento de 5 cuerdas dobles, pequeño']],
	[//fotos instrumentos
	"url('img/Instrumentos/caja.jpg')",
	"url('img/Instrumentos/quena.jpg')",
	"url('img/Instrumentos/siku.jpg')",
	"url('img/Instrumentos/Erke.jpg')",
	"url('img/Instrumentos/Chajchas.jpg')",
	"url('img/Instrumentos/Charango.jpg')",
	]]
	);

let litoral = new Region('Litoral',
	"url('img/Regiones/litoral.png')",
	['Chamamé','Rasguido doble','Chamarrita'], 
	[
	"url('img/Litoral/Bañado.jpg')",
	"url('img/Litoral/carpincho-y-yacaré.jpg')",
	"url('img/Litoral/costanera-Corrientes.jpg')",
	"url('img/Litoral/cataratas.jpg')",
	"url('img/Litoral/el-palmar.jpg')",
	"url('img/Litoral/pesca-en-el-Paraná.jpg')",
	"url('img/Litoral/Ruta-Jesuita-San-Ignacio-Miní-Misiones.jpg')",
	"url('img/Litoral/tierra-roja-y-yerba.jpg')",
	"url('img/Litoral/Ave.jpg')",
	"url('img/Litoral/Caraballo-Entre-Ríos.jpg')",
	"url('img/Litoral/dorado.jpg')",
	"url('img/Litoral/Flamencos-en-Santa-Fe.jpg')"
	],
	"rgb(146, 199, 222)",
			[
		[//Chamamé
			[['compás de 3/4 (tres negras en el grave) y 6/8 (corchea negra corchea negra en el agudo)',
			    'Elementos carácteristicos: Sapucay (expresión de alegría o lamento que se manifiesta en un grito caracteristico) y tapa (acorde final que cierra la obra)',
			    'Tiene un fluir relacionado al rio',
				'Tiene muchas variantes que van desde tempos moderados a muy vivaces',
				'Puede ser tanto vocal como instrumental'
			],//caract
			[[]]], //img
			[['','']],
			['Danza de pareja enlazada no coreográfica'],//danza
			[['Ejemplo música', ''],			
			[['','']]
			]//ejemplos
		],
		[//Resguido Doble
			[['compás de 4/4, lento','Puede ser tanto vocal como instrumental'],
			[['influencia de la milonga pampeana (3+3+2)','']]],
			[['','']],
			['Danza de pareja enlazada no coreográfica'],
			[['','']]
		],
		[//Chamarrita
			[['compás 2/4'],
			['influencia de la milonga ciudadana corchea con punto semi corchea corchea','']],
			[['','']],
			['Sin danza'],
			[['','']]
		]	
	],
	[[//instrumentos
	'Guitarra','Acordeón','Bandoneón'],
	[//características instrumentos
	['Instrumento de 6 cuerdas, pueden ser pulsadas o rasgueadas'],
	['Instrumento armónico de viento, con un fuelle y botoneras o teclado.'],
	['Instrumento armónico de viento, con un fuelle y botoneras']],
	[//fotos instrumentos
	"url('img/Instrumentos/Guitarra-chamamé.jpg')",
	"url('img/Instrumentos/acordeon.jpg')",
	"url('img/Instrumentos/bandoneon-chamamé.jpg')"
	]]
	);


let cuyo = new Region('Cuyo',
	"url('img/Regiones/cuyo.png')",
	['Cueca','Gato cuyano','Tonada'], 
	[
	"url('img/Cuyo/Aconcagua-desde-arriba.jpg')",
	"url('img/Cuyo/Camino-al-aconcagua.jpg')",
	"url('img/Cuyo/cerro-gloria.jpg')",
	"url('img/Cuyo/Mendoza-viñedos.jpg')",
	"url('img/Cuyo/San-Juan.jpg')",
	"url('img/Cuyo/San-luis.jpg')",
	"url('img/Cuyo/San-Rafael.jpg')",
	"url('img/Cuyo/uvas-viñedos-mendoza.jpg')",
	"url('img/Cuyo/Bodegas-de-San-Rafael.jpg')",
	"url('img/Cuyo/lasleñas.jpg')",
	"url('img/Cuyo/puente-inca.jpg')",
	"url('img/Cuyo/sanjuan.jpg')"
	],
	"rgb(212, 172, 129)",
		[
		[//Cueca
			[['3/4 y 6/8 vivaz','proviene de la zamacueca - parentesco con la zamba' ],//caract
			[['Patrón rítmico característico: corchea con punto, semi, corchea corchea negra', ''],['Formalmente ligado a la danza. Dos vueltas de intro- estrofa 1- estrofa 2 escribillo','']]], //img
			[['','']],
			['Danza de pareja suelta con pañuelo coreografiada'],//danza
			[['',''],
			]//ejemplos
		],
		[//Gato cuyano
			[['3/4 y  6/8 moderado'],
			[['Forma (ver gráfico)','']]],
			[['','']],
			['Danza de pareja suelta coreografiada', 'Se diferencia del gato porque aparece la figura del contragiro','Se baila con castañetas y paso básico'],
			[['ejemplo','']]
		],
		[//Tonada
			[['Canto solista, acompañado por caja, trifónico','Pueden ser improvisadas'],
			[]],
			[['','']],
			['Sin danza'],
			[['ejemplo','https://www.youtube.com/embed/TVFm7lH3a1Qope']]
		]	
	],
	[[//instrumentos
	'Guitarra'],
	[//características instrumentos
	['Instrumento de 6 cuerdas, pueden ser pulsadas o rasgueadas']
	],
	[//fotos instrumen
	"url('img/Instrumentos/guitarra-cuyana.jpg')"
	]]
	);

let centro = new Region('Centro',
	"url('img/Regiones/centro.png')",
	['Gato Norteño','Chacarera','Escondido','Zamba'], 
	[
	"url('img/Centro/bailando.jpg')",
	"url('img/Centro/columna-banda.jpg')",
	"url('img/Centro/cuestablanca.jpg')",
	"url('img/Centro/el-estadio.jpg')",
	"url('img/Centro/embudo.jpg')",
	"url('img/Centro/lagosanroque.jpg')",
	"url('img/Centro/Patio-del-Indio-Froilan.jpg')",
	"url('img/Centro/termas.jpg')",
	"url('img/Centro/abuela.jpg')",
	"url('img/Centro/carabajal.jpg')",
	"url('img/Centro/empanadas.jpg')",
	"url('img/Centro/Merlo.jpg')",
	"url('img/Centro/Nono.jpg')",
	"url('img/Centro/puente-carretero.jpg')",
	"url('img/Centro/Rafaela.jpg')",
	"url('img/Centro/rio-dulce.jpg')"
	],
	"rgb(253, 225, 200)",
		[
		[//Gato Norteño
			[['6/8 y 3/4','tempo alegre y ágil' ],//caract
			[['Forma (gráfico)', '']]], //img
			[['','']], //ejemplo música
			['Danza de pareja suelta coreografiada', 'Se baila con castañetas y paso básico'],//danza
			[['', ''],			
			]//ejemplos
		],
		[//Chacarera
			[['6/8 y 3/4','tempo alegre y ágil' ],//caract
			[['Forma (gráfico)', '']]], //img
			[['','']], //ejemplo música
			['Danza de pareja suelta coreografiada', 'Se baila con castañetas y paso básico'],//danza
			[['', ''],
			]//ejemplos
		],
		[//Escondido
			[['6/8 y 3/4','tempo alegre y ágil' ],//caract
			[['Forma (gráfico)', '']]], //img
			[['','']], //ejemplo música
			['Danza de pareja suelta coreografiada', 'Se baila con castañetas y paso básico'],//danza
			[['', ''],
			]//ejemplos
		],	
		[//Zamba
			[['6/8 y 3/4','tempo tranquilo' ],//caract
			[['Forma (gráfico)', '']]], //img
			[['','']], //ejemplo música
			['Danza de pareja suelta coreografiada con lugar a improvisación, con pañuelo', 'Se baila con castañetas y paso básico'],//danza
			[['', ''],
			]//ejemplos
		],	
	],
	[[//instrumentos
	'Guitarra','Bombo',	'Violín'],
	[//características instrumentos
	['Instrumento de 6 cuerdas, pueden ser pulsadas o rasgueadas'],
	['Instrumento de doble parche que se toca en el aro o el parche con dos baquetas'],
	['Instrumento de 4 cuerdas frotadas por un arco. También pueden ser pulsadas (pizzicato)']],
	[//fotos instrumen
	"url('img/Instrumentos/guitarra-chacarera.jpg')",
	"url('img/Instrumentos/bombo.jpg')",
	"url('img/Instrumentos/violín.jpg')"
	]]
	);

let pampeana = new Region('Pampeana',
	"url('img/Regiones/pampeana.png')",
	['Malambo','Huella','Payada'], 
	[
	"url('img/Pampeana/Atardecer-pampeano.jpg')",
	"url('img/Pampeana/Ganado.jpg')",
	"url('img/Pampeana/gaucho.jpg')",
	"url('img/Pampeana/Girasol-La-Pampa.jpg')",
	"url('img/Pampeana/ombu.jpg')",
	"url('img/Pampeana/Paisaje-campestre.jpg')",
	"url('img/Pampeana/Payador_rancho.jpg')",
	"url('img/Pampeana/soja.jpg')",
	"url('img/Pampeana/ganadoyaves.jpg')",
	"url('img/Pampeana/hornero.jpg')",
	"url('img/Pampeana/pulperia.jpg')",
	"url('img/Pampeana/trigo.jpg')"
	],
	"rgb(176, 191, 148)",
		[
		[//Malambo
			[['6/8, I- IV- V','sin letra','baile de desafío' ],//caract
			[['', '']]], //img
			[['','']], //ejemplo música
			['Danza no coreográfica originalmente masculina','en base a un contrapunto de mudanzas (combinación de movimientos entre pies y piernas)'],//danza
			[['', ''],
			]//ejemplos
		],
		[//Huella
			[['6/8, suele decir huella en su letra','Forma: Intro, estrofa, estrofa (menor), estribillo (mayor).','Ritmo lento y señorial' ],//caract
			[['', '']]], //img
			[['','']], //ejemplo música
			['Danza de pareja coreografiada','Figura especial: el hombre toma la mano de la mujer'],//danza
			[['', ''],
			]//ejemplos
		],
		[//Payada
			[['Improvisación de versos con acompañamiento de guitarra que hace un payador; generalmente los versos relatan sucesos o sentimientos de la cotidianidad rural, y pueden tener un carácter lírico, trágico o humorístico.','payada de contrapunto Competencia poético-musical en la que, alternándose dos payadores, improvisan cantos con la guitarra, sobre un mismo tema, tratando de superar al otro en originalidad y destreza poética.' ],//caract
			[['', '']]], //img
			[['','']], //ejemplo música
			['Sin danza'],//danza
			[['', ''],
			]//ejemplos
		],	
	],
	[[//instrumentos
	'Guitarra'],
	[//características instrumentos
	['Instrumento de 6 cuerdas, pueden ser pulsadas o rasgueadas']
	],
	[//fotos instrumen
	"url('img/Instrumentos/guitarra-pampeana.jpg')"
	]]
	);

let ciudadana = new Region('Ciudadana',
	"url('img/Regiones/ciudadana.png')",
	['Tango','Milonga Ciudadana'//,''
	], 
	[
	"url('img/Ciudadana/caminito.jpg')",
	"url('img/Ciudadana/diego_prenollio.jpg')",
	"url('img/Ciudadana/floralis-generica.jpg')",
	"url('img/Ciudadana/obelisco.jpg')",
	"url('img/Ciudadana/orquesta.jpg')",
	"url('img/Ciudadana/plazamayo.jpg')",
	"url('img/Ciudadana/puerto-madero.jpg')",
	"url('img/Ciudadana/tango.jpg')"
	],
	"rgb(213, 212, 198)",
		[
		[//Tango
			[['Base binaria (2/4 o 4/4), tempo moderado','temática nostalgia','Esencialmente homofónico con imitaciones y compensaciones entre instrumentos' ],//caract
			[['Patrones rítmicos', ''],['Arrastre','']]], //img
			[['','']], //ejemplo música
			['Danza de pareja enlazada no coreográfica'],//danza
			[['', ''],
			]//ejemplos
		],
		[//Milonga Ciudadana
			[['4/4 ritmo de habanera rápida, tempo vivo','letras pícaras' ],//caract
			[['Forma (gráfico)', '']]], //img
			[['','']], //ejemplo música
			['Danza de pareja enlazada no coreográfica'],//danza
			[['', ''],
			]//ejemplos
		],
		[//
			[['','' ],//caract
			[['', '']]], //img
			[['','']], //ejemplo música
			['', ''],//danza
			[['', ''],
			]//ejemplos
		],	
	],
	[[//instrumentos
	'Bandoneón'],
	[//características instrumentos
	['Instrumento armónico de viento, con un fuelle y botoneras']
	],
	[//fotos instrumen
	"url('img/Instrumentos/bandoneon-tango.jpg')"
	]]
	);

let patagonia = new Region('Patagonia',
	"url('img/Regiones/patagonia.png')",
	['Loncomeo'//,'',''
						], 
	[
	//"url('img/Patagonia/7lagos.jpg')",
	"url('img/Patagonia/Estancia.jpg')",
	"url('img/Patagonia/glaciar.jpg')",
	//"url('img/Patagonia/manzanas.jpg')",
	"url('img/Patagonia/mapuches.jpg')",
	"url('img/Patagonia/Paisaje-patagónico.jpg')",
	//"url('img/Patagonia/Tulipanes-en-Chubut.jpg')",
	//"url('img/Patagonia/villa-traful.jpg')"
	],
	"rgb(153, 155, 180)",
		[
		[//Loncomeo
			[['del mapuche, lonco (cabeza) y meu (aquí bajar).','rogativa mapuches (araucanos)  a partir de sonidos del kultrúm y la trutruka instrumentos ambos ejecutados en ceremonias rituales o religiosas.' ],//caract
			[['', '']]], //img
			[['','']], //ejemplo música
			['el loncomeo se baila principalmente con movimientos de cabeza.','Consiste en correr saltar, agacharse, erguirse, imitar a los animales con movimientos grotescos, sacudiendo fuertemente la cabeza. Se baila entre varios. El que resista mas tiempo será el vencedor. ','Los bailarines tocan su cabeza con pintorescas vinchas, tejidas por sus mujeres.'],//danza
			[['', ''],
			]//ejemplos
		],
		[//
			[['','' ],//caract
			[['', '']]], //img
			[['','']], //ejemplo música
			['', ''],//danza
			[['', ''],
			]//ejemplos
		],
		[//
			[['','' ],//caract
			[['', '']]], //img
			[['','']], //ejemplo música
			['', ''],//danza
			[['', ''],
			]//ejemplos
		],	
	],
	[[//instrumentos
	'Kultrum','Trutruka'],
	[//características instrumentos
	['Tambor ceremonial mapuche con una membrana'],
	['Aerófono mapuche similar a la  trompeta y al Erke']
	],
	[//fotos instrumen
	"url('img/Instrumentos/Kultrún.jpg')",
	"url('img/Instrumentos/trutruca.jpg')"
	]]
	);


