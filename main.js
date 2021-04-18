//Hide bigMap

function Region(nombre, provinciasMapa, generosRegion, fotosRegion, fondo,caractGeneros, instrumentos){
	this.nombre = nombre;
	this.provinciasMapa = provinciasMapa;
	this.generosRegion = generosRegion;
	this.fotosRegion = fotosRegion;
	this.fondo = fondo;
	this.caractGeneros = caractGeneros;
	this.instrumentos = instrumentos

this.changeRegion = function(nombre, provinciasMapa, generosRegion, fotosRegion, caractGeneros, instrumentos){
	clearInfo();

	generosRegion = this.generosRegion;
	createCards(generosRegion);
	tilesPerRow(generosRegion);
	
	generosRegion = this.generosRegion;
	changeInfoFrontside(generosRegion);

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
	createInstrumentsBar(instrumentos);

	};
};



let regiones = document.getElementsByClassName("region");

let selRegion = function() {
	hideBigMap();
	
    let region = this.getAttribute("id");
    //alert(region);
    
    switch (region) {
    	case 'noroeste' : NOA.changeRegion();
    		break;
	    case 'litoral' : Litoral.changeRegion();
	    	break;
	    case 'centro': Centro.changeRegion();
	    	break
	    case 'cuyo' : Cuyo.changeRegion();
	    	break
	    case 'pampeana' : Pampeana.changeRegion();
	    	break
	    case 'ciudadana' : Ciudadana.changeRegion();
	    	break
	    case 'patagonia' : Patagonia.changeRegion();
	    	break


    };
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
	document.getElementById('colLeft').style.display = 'none';
};
//Create cards

function createCards(generosRegion){
	let colRight = document.getElementById('colRight');
	let cardQty = generosRegion.length * 4;


	for(i = 0; i < cardQty; i++){

	let tile = document.createElement('div');
	tile.setAttribute('class', 'tile');
	colRight.appendChild(tile);

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
	r.appendChild(tituloGen);

	let tituloHiddenCaract = document.createElement('h3');
	tituloHiddenCaract.setAttribute('class', 'titulo hiddenCaract');
	
	switch(i%4){
		case 0: tituloHiddenCaract.innerHTML = 'Música';
		break;
		case 1: tituloHiddenCaract.innerHTML = 'Ejemplo Música';
		break;
		case 2: tituloHiddenCaract.innerHTML = 'Danza';
		break;
		case 3: tituloHiddenCaract.innerHTML = 'Ejemplo Danza';
		break;
	}
	
	r.appendChild(tituloHiddenCaract);

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
	let generosQty = generosRegion.length;
	if (generosQty === 1){
		var j = 50; var k = 2;
	}else if (generosQty === 2){
		var j = 50; var k = 4;
	}else if (generosQty === 3){
		var j = 25; var k = 3;
	}else if (generosQty === 4){
		var j = 25; var k = 4;
	};
	
	let row = document.getElementsByClassName('tile');
	for (i = 0; i < row.length; i++){
		row[i].style.flex = `1 0 ${j}%`;
		row[i].style.minHeight = `calc((89.3vh)/${k})`;
	};

};




//Choose Region Info left side

function showImgProvincia(nombre ,provinciasMapa){
	document.getElementById('regionMapa').src = provinciasMapa;
	document.getElementById('regionNombre').innerHTML = nombre;
	document.getElementById('colLeft').style.display = 'flex';

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
 

// Set frontside information

function changeInfoFrontside(generosRegion){
	let caract = document.querySelectorAll('.hiddenCaract');
	for(element of caract){
		element.style.display = 'block'
	};

	let generoTit = document.querySelectorAll('.gen');
	for (let i = 0; i < generoTit.length;i++){
		let j = Math.floor(i/4);
		generoTit[i].innerHTML = generosRegion[j];
		};
	};	
	
		
// Backside information



function changeInforBackside(caractGeneros){
	let genInfo = document.querySelectorAll('.cardInfo');
	for (let i = 0; i<genInfo.length; i++){
		//j is external array
		let j = Math.floor(i/4);
		//k is internal arrya
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
		
		for (i = 0; i < caractGeneros[genIndex][0].length; i++)  {
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
	document.body.style.backgroundImage = `linear-gradient(to bottom right, grey, ${fondo})`;
	document.getElementById('colLeft').style.backgroundImage = `linear-gradient(to bottom left, grey, ${fondo})`;
	document.getElementById('instrumentsBar').style.backgroundImage = `linear-gradient(to bottom right, grey, ${fondo})`;
	
	cardBackside = document.querySelectorAll('.flip-card-back');
	for(tile of cardBackside){
		tile.style.backgroundImage = `linear-gradient(${fondo}, white)`;
		
	}
}


//Zoom info Overlay

function showZoomInfoOverlay(tileCopied){
	document.getElementById('overlayBackground').style.display = 'block';
	let overlayInfo = document.getElementById('copiedCardInfo');
	overlayInfo.innerHTML = tileCopied.innerHTML;


};

function hideZoomInfoOverlay(){
	document.getElementById('overlayBackground').style.display = 'none'
};


//Instruments info

function createInstrumentsBar(instrumentos) {
	let footer = document.querySelector('footer');

	for (i = 0; i < instrumentos.length; i++){
	let instrument = document.createElement('div');
	instrument.setAttribute('class','instruments');
	instrument.innerHTML = instrumentos[i];
	footer.appendChild(instrument);

	};
	

};

function instrumentsInfo() {


};






//DATA	

let NOA = new Region('Noroeste',
	'img/Regiones/noroeste.png',
	['Huayno y Carnavalito','Vidala o yaraví','Baguala'], 
	[
	"url('img/Puna/Chola.jpg')",
	"url('img/Puna/Coyita.jpg')",
	"url('img/Puna/Esquila.jpg')",
	"url('img/Puna/Ganado.jpg')",
	"url('img/Puna/Paisaje-del-noroeste.jpg')",
	"url('img/Puna/Yendo-a-la-escuela.jpg')",
	"url('img/Puna/Quena.jpg')",
	"url('img/Puna/Hornocal-Jujuy.jpg')"
	],
	"rgb(215, 139, 125)",
		[
		[//Huayno
			[['Generalmente pentatónico (cinco notas)','Pie binario' ],//caract
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
	[//instrumentos
	'Caja o tambor de mano','Quena','Siku o zampoña','Erke', 'Chajchaj', 'Charango']
	);

let Litoral = new Region('Litoral',
	'img/Regiones/litoral.png',
	['Chamamé','Rasguido doble','Chamarrita'], 
	[
	"url('img/Litoral/Bañado.jpg')",
	"url('img/Litoral/carpincho-y-yacaré.jpg')",
	"url('img/Litoral/costanera-Corrientes.jpg')",
	"url('img/Litoral/cataratas.jpg')",
	"url('img/Litoral/el-palmar.jpg')",
	"url('img/Litoral/pesca-en-el-Paraná.jpg')",
	"url('img/Litoral/Ruta-Jesuita-San-Ignacio-Miní-Misiones.jpg')",
	"url('img/Litoral/tierra-roja-y-yerba.jpg')"
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
	[//instrumentos
	'Guitarra','Acordeón']
	);


let Cuyo = new Region('Cuyo',
	'img/Regiones/cuyo.png',
	['Cueca','Gato cuyano','Tonada'], 
	[
	"url('img/Cuyo/Aconcagua-desde-arriba.jpg')",
	"url('img/Cuyo/Camino-al-aconcagua.jpg')",
	"url('img/Cuyo/cerro-gloria.jpg')",
	"url('img/Cuyo/Mendoza-viñedos.jpg')",
	"url('img/Cuyo/San-Juan.jpg')",
	"url('img/Cuyo/San-luis.jpg')",
	"url('img/Cuyo/San-Rafael.jpg')",
	"url('img/Cuyo/uvas-viñedos-mendoza.jpg')"
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
	[//instrumentos
	'Guitarra']
	);

let Centro = new Region('Centro',
	'img/Regiones/centro.png',
	['Gato Norteño','Chacarera','Escondido','Zamba'], 
	[
	"url('img/Centro/bailando.jpg')",
	"url('img/Centro/columna-banda.jpg')",
	"url('img/Centro/cuestablanca.jpg')",
	"url('img/Centro/el-estadio.jpg')",
	"url('img/Centro/embudo.jpg')",
	"url('img/Centro/lagosanroque.jpg')",
	"url('img/Centro/Patio-del-Indio-Froilan.jpg')",
	"url('img/Centro/termas.jpg')"
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
	[//instrumentos
	'Guitarra','Bombo',	'Violín']
	);

let Pampeana = new Region('Pampeana',
	'img/Regiones/pampeana.png',
	['Malambo','Huella','Payada'], 
	[
	"url('img/Pampeana/Atardecer-pampeano.jpg')",
	"url('img/Pampeana/Ganado.jpg')",
	"url('img/Pampeana/gaucho.jpg')",
	"url('img/Pampeana/Girasol-La-Pampa.jpg')",
	"url('img/Pampeana/ombu.jpg')",
	"url('img/Pampeana/Paisaje-campestre.jpg')",
	"url('img/Pampeana/Payador_rancho.jpg')",
	"url('img/Pampeana/soja.jpg')"
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
	[//instrumentos
	'Guitarra']
	);

let Ciudadana = new Region('Ciudadana',
	'img/Regiones/ciudadana.png',
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
	[//instrumentos
	'Bandoneón']
	);

let Patagonia = new Region('Patagonia',
	'img/Regiones/patagonia.png',
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
	[//instrumentos
	'Kultrum','Trutruka']
	);

var instrumentos = {
	Caja: ['Caja o tambor de mano','Tambor pequeño, doble parche, se toca con una mano sosteniendola y con la otra con baqueta'],
	Quena: ['Quena','Aerófono de caña, un solo tubo con agujeros, con bisel de muesca'],
	Siku:['Siku o zampoña','Hileras de tubos de cañas, una nota cada tubo, Siku (aymará) tubo que da sonido'],
}