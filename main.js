//Hide bigMap


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
	    }
	  }
}	






//Choose Region


function Region(nombre, generosRegion, fotosRegion, fondo,caractGeneros){
	this.nombre = nombre;
	this.generosRegion = generosRegion;
	this.fotosRegion = fotosRegion;
	this.fondo = fondo;
	this.caractGeneros = caractGeneros;

this.changeRegion = function(generosRegion, fotosRegion, caractGeneros){
	clearInfo();

	generosRegion = this.generosRegion;
	changeInfoFrontside(generosRegion);

	caractGeneros = this.caractGeneros;
	changeInforBackside(caractGeneros);

	fotosRegion = this.fotosRegion;
	changeBGImages(fotosRegion);

	fondo = this.fondo;
	changeBGColor(fondo);
	};
};


let NOA = new Region('Noroeste',
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
			['Danza grupal vivaz no coreografiada', 'Huayñunakunay: (quechua) bailar tomados de la mano'],//danza
			[['Ejemplo música', '<iframe src="https://www.youtube.com/embed/BoLZRaM2vfA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
			['Ejemplo danza','<iframe src="https://www.youtube.com/embed/s2EwDKiuAFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']
			]//ejemplos
		],
		[//Vidala
			[['Forma estrófica con vuelo poético','Puede estar acompañada por instrumentos y ser a dos voces', 'Compás de 3/4, lenta'],
			[['negra con punto, corchea, negra','img/PieHuayno.png']]],
			['Sin danza'],
			[['ejemplo','']]
		],
		[//Baguala
			[['Canto solista, acompañado por caja, trifónico','Pueden ser improvisadas'],
			[]],
			['Sin danza'],
			[['','']]
		]	
	]
	);

let Litoral = new Region('Litoral',
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
			['Danza de pareja enlazada no coreográfica'],//danza
			[['Ejemplo música', ''],
			[['','']]
			]//ejemplos
		],
		[//Resguido Doble
			[['compás de 4/4, lento','Puede ser tanto vocal como instrumental'],
			[['influencia de la milonga pampeana (3+3+2)','']]],
			['Danza de pareja enlazada no coreográfica'],
			[['','']]
		],
		[//Chamarrita
			[['compás 2/4'],
			['influencia de la milonga ciudadana corchea con punto semi corchea corchea','']],
			['Sin danza'],
			[['','']]
		]	
	]);


let Cuyo = new Region('Cuyo',
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
			['Danza de pareja suelta con pañuelo coreografiada'],//danza
			[['',''],
			]//ejemplos
		],
		[//Gato cuyano
			[['3/4 y  6/8 moderado'],
			[['Forma (ver gráfico)','']]],
			['Danza de pareja suelta coreografiada', 'Se diferencia del gato porque aparece la figura del contragiro','Se baila con castañetas y paso básico'],
			[['ejemplo','']]
		],
		[//Tonada
			[['Canto solista, acompañado por caja, trifónico','Pueden ser improvisadas'],
			[]],
			['Sin danza'],
			[['ejemplo','<iframe  src="https://www.youtube.com/embed/TVFm7lH3a1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>']]
		]	
	]
	);

let Centro = new Region('Centro',
	['Gato Norteño','Chacarera','Escondido'], 
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
			['Danza de pareja suelta coreografiada', 'Se baila con castañetas y paso básico'],//danza
			[['', ''],			
			]//ejemplos
		],
		[//Chacarera
			[['6/8 y 3/4','tempo alegre y ágil' ],//caract
			[['Forma (gráfico)', '']]], //img
			['Danza de pareja suelta coreografiada', 'Se baila con castañetas y paso básico'],//danza
			[['', ''],
			]//ejemplos
		],
		[//Escondido
			[['6/8 y 3/4','tempo alegre y ágil' ],//caract
			[['Forma (gráfico)', '']]], //img
			['Danza de pareja suelta coreografiada', 'Se baila con castañetas y paso básico'],//danza
			[['', ''],
			]//ejemplos
		],	
	]
	);

let Pampeana = new Region('Pampeana',
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
			['Danza no coreográfica originalmente masculina','en base a un contrapunto de mudanzas (combinación de movimientos entre pies y piernas)'],//danza
			[['', ''],
			]//ejemplos
		],
		[//Huella
			[['6/8, suele decir huella en su letra','Forma: Intro, estrofa, estrofa (menor), estribillo (mayor).','Ritmo lento y señorial' ],//caract
			[['', '']]], //img
			['Danza de pareja coreografiada','Figura especial: el hombre toma la mano de la mujer'],//danza
			[['', ''],
			]//ejemplos
		],
		[//Payada
			[['Improvisación de versos con acompañamiento de guitarra que hace un payador; generalmente los versos relatan sucesos o sentimientos de la cotidianidad rural, y pueden tener un carácter lírico, trágico o humorístico.','payada de contrapunto Competencia poético-musical en la que, alternándose dos payadores, improvisan cantos con la guitarra, sobre un mismo tema, tratando de superar al otro en originalidad y destreza poética.' ],//caract
			[['', '']]], //img
			['Sin danza'],//danza
			[['', ''],
			]//ejemplos
		],	
	]
	);

let Ciudadana = new Region('Ciudadana',
	['Tango','Milonga Ciudadana',''], 
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
			['Danza de pareja enlazada no coreográfica'],//danza
			[['', ''],
			]//ejemplos
		],
		[//Milonga Ciudadana
			[['4/4 ritmo de habanera rápida, tempo vivo','letras pícaras' ],//caract
			[['Forma (gráfico)', '']]], //img
			['Danza de pareja enlazada no coreográfica'],//danza
			[['', ''],
			]//ejemplos
		],
		[//
			[['','' ],//caract
			[['', '']]], //img
			['', ''],//danza
			[['', ''],
			]//ejemplos
		],	
	]
	);

let Patagonia = new Region('Patagonia',
	['Loncomeo','',''], 
	[
	"url('img/Patagonia/7lagos.jpg')",
	"url('img/Patagonia/Estancia.jpg')",
	"url('img/Patagonia/glaciar.jpg')",
	"url('img/Patagonia/manzanas.jpg')",
	"url('img/Patagonia/mapuches.jpg')",
	"url('img/Patagonia/Paisaje-patagónico.jpg')",
	"url('img/Patagonia/Tulipanes-en-Chubut.jpg')",
	"url('img/Patagonia/villa-traful.jpg')"
	],
	"rgb(153, 155, 180)",
		[
		[//Loncomeo
			[['del mapuche, lonco (cabeza) y meu (aquí bajar).','rogativa mapuches (araucanos)  a partir de sonidos del kultrúm y la trutruka instrumentos ambos ejecutados en ceremonias rituales o religiosas.' ],//caract
			[['', '']]], //img
			['el loncomeo se baila principalmente con movimientos de cabeza.','Consiste en correr saltar, agacharse, erguirse, imitar a los animales con movimientos grotescos, sacudiendo fuertemente la cabeza. Se baila entre varios. El que resista mas tiempo será el vencedor. ','Los bailarines tocan su cabeza con pintorescas vinchas, tejidas por sus mujeres.'],//danza
			[['', ''],
			]//ejemplos
		],
		[//
			[['','' ],//caract
			[['', '']]], //img
			['', ''],//danza
			[['', ''],
			]//ejemplos
		],
		[//
			[['','' ],//caract
			[['', '']]], //img
			['', ''],//danza
			[['', ''],
			]//ejemplos
		],	
	]
	);

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


// Clear Info
function clearInfo(){
	let myNode = document.getElementsByClassName("cardInfo");
	for (i = 0; i < myNode.length; i++){
		myNode[i].removeChild(myNode[i].lastChild);
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
		let j = Math.floor(i/3);
		generoTit[i].innerHTML = generosRegion[j];
		};
	};	
	
		
// Backside information



function changeInforBackside(caractGeneros){
	let genInfo = document.querySelectorAll('.cardInfo');
	for (let i = 0; i<genInfo.length; i++){
		//j is external array
		let j = Math.floor(i/3);
		//k is internal arrya
		let k = i%3;
		if (i%3 === 0) {
			list = createInfoGeneroMus(caractGeneros,j)
			genInfo[i].appendChild(list);
		}else if (i%3 === 1){
			list = createInfoGeneroDan(caractGeneros,j)
			genInfo[i].appendChild(list);
		}else if (i%3 === 2){
		list = createInfoGeneroEjemplo(caractGeneros,j)
		genInfo[i].appendChild(list);
		};
	};

};


function createInfoGeneroMus(caractGeneros, genIndex){
	
	let list = document.createElement('ul');
		
		for (i = 0; i < caractGeneros[genIndex][0].length; i++)  {
			let k = i%3;

			let listItem = document.createElement('li');

			listItem.innerHTML = caractGeneros[genIndex][0][0][k];
			list.appendChild(listItem);

		};

		for (i = 0; i < caractGeneros[genIndex][0][1].length; i++)  {
			let k = i%3;

			let imgData = document.createElement('p');
			let img = document.createElement('img');

			imgData.innerHTML = caractGeneros[genIndex][0][1][k][0];
			img.src = caractGeneros[genIndex][0][1][k][1];

			list.appendChild(imgData);
			list.appendChild(img);
		};

	return list;
};

function createInfoGeneroDan(caractGeneros, genIndex){

	let list = document.createElement('ul');

	for (i = 0; i < caractGeneros[genIndex][1].length; i++)  {
			let k = i%3;

			let listItem = document.createElement('li');

			listItem.innerHTML = caractGeneros[genIndex][1][k];
			list.appendChild(listItem);

		};
	return list;
};

function createInfoGeneroEjemplo(caractGeneros, genIndex){
	let list = document.createElement('ol');

	for (i = 0; i < caractGeneros[genIndex][2].length;i++){
			let k = i%3;

			let videoData = document.createElement('h4');
			let iframe = document.createElement('iframe');
			
			videoData.innerHTML = caractGeneros[genIndex][2][k][0];
			iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(caractGeneros[genIndex][2][k][1]);
			
			list.appendChild(videoData);
			list.appendChild(iframe);
		};
		

	return list

}

// Background images
function changeBGImages(fotosRegion){
	for(let i = 0; i < fotosRegion.length; i++){
	img = document.getElementById(`r${i+1}`)
	img.style.backgroundImage = fotosRegion[i];
	};
};	

// Background color
function changeBGColor(fondo){
	document.body.style.backgroundImage = `linear-gradient(to bottom right, grey, ${fondo})`;
	
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


	
//Scroll

