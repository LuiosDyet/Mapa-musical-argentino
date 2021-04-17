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
	//clearInfo();

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
			['ejemplo']
		],
		[//Baguala
			[['Canto solista, acompañado por caja, trifónico','Pueden ser improvisadas'],
			[]],
			['Sin danza'],
			['']
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
			[]
			]//ejemplos
		],
		[//Resguido Doble
			[['compás de 4/4, lento','Puede ser tanto vocal como instrumental'],
			[['influencia de la milonga pampeana (3+3+2)','']]],
			['Danza de pareja enlazada no coreográfica'],
			[]
		],
		[//Chamarrita
			[['compás 2/4'],
			['influencia de la milonga ciudadana corchea con punto semi corchea corchea','']],
			['Sin danza'],
			[]
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
			[[],
			[]
			]//ejemplos
		],
		[//Gato cuyano
			[['3/4 y  6/8 moderado'],
			[['Forma (ver gráfico)','']]],
			['Danza de pareja suelta coreografiada', 'Se diferencia del gato porque aparece la figura del contragiro','Se baila con castañetas y paso básico'],
			['ejemplo']
		],
		[//Tonada
			[['Canto solista, acompañado por caja, trifónico','Pueden ser improvisadas'],
			[]],
			['Sin danza'],
			['ejemplo','<iframe  src="https://www.youtube.com/embed/TVFm7lH3a1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>']
		]	
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
	    case 'centro': changeRegion();
	    	break
	    case 'cuyo' : Cuyo.changeRegion();
	    	break
	    case 'pampeana' : changeRegion();
	    	break
	    case 'ciudadana' : changeRegion();
	    	break
	    case 'patagonia' : changeRegion();
	    	break


    };
};

for (let i = 0; i < regiones.length; i++) {
    regiones[i].addEventListener('click', selRegion, false);

};


// Clear Info
/*function clearInfo(){
	const myNode = document.getElementsById("flip");

  while (myNode.firstChild) {
  	alert('si')
    myNode.removeChild(myNode.lastChild);
  };
};*/
 

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
	let genInfo = document.querySelectorAll('.flip-card-back');
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
	document.body.style.backgroundColor = fondo;
	
	cardBackside = document.querySelectorAll('.flip-card-back');
	for(tile of cardBackside){
		tile.style.backgroundColor = fondo;
		
	}
}




//Scroll

