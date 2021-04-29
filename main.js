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

var showGenerosHideInstrumentos = true;

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
	if(showGenerosHideInstrumentos === false){	
	setCurrentRegionGeneros();
	//document.getElementById('l3Opcion').innerHTML  = 'Ver instrumentos de la región';
    };
    
};

for (let i = 0; i < regiones.length; i++) {
    regiones[i].addEventListener('click', selRegion, false);

};	
//try LOOP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var id = null;
var bigMapShown = true;
function hideBigMap(){
	if(document.getElementById('avisoClick') !== null){
		document.getElementById('avisoClick').remove();
	}
	
	let overlayMap = document.getElementById('overlayMap'); 	
    var pos = 1;
    clearInterval(id);
  id = setInterval(frame, 5);
	  function frame() {
	    if (pos < 0) {
	      document.getElementById('overlayMap').style.display = 'none'
	      clearInterval(id);
	      bigMapShown = false;
	    } else {
	      pos-=0.005; 
	      overlayMap.style.opacity = pos; 
	    };
	  };
};	

function showBigMap(){
	document.getElementById('overlayMap').style.display = 'block';
	document.getElementById('overlayMap').style.opacity = '1';
	bigMapShown = true;
	//document.getElementById('sideBar').style.display = 'none';
};
//Create cards

function createCards(generosRegion){
	document.getElementById('l2').style.display = 'block';
	document.getElementById('l3').style.display = 'block';

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

	let zoomInfoFront = document.createElement('img');
	zoomInfoFront.src = 'img/botones/Lupa.png';
	zoomInfoFront.setAttribute('class','zoomInfoFront');
	r.appendChild(zoomInfoFront);

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
	zoomInfo.src = 'img/botones/Lupa.png';
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
		var j = 2; var k = 2;
	}else if (generosQty === 2){
		var j = 2; var k = 2;
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

    stopVideo()	

};

 	
function stopVideo() {
	let iframes = document.querySelectorAll('iframe');
	let videos = document.querySelectorAll('video');

	for (iframe of iframes){
		if ( iframe ) {
		var iframeSrc = iframe.src;
		iframe.src = iframeSrc;
		};
	};	
	for( video of videos ){
		if ( video ) {
		video.pause();
		};
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
		case 1: tituloHiddenCaract.innerHTML = 'Ejemplos musicales';
		break;
		case 2: tituloHiddenCaract.innerHTML = 'Para tocar';
		break;
		case 3: tituloHiddenCaract.innerHTML = 'Danza';
		break;
		};
	
	r.appendChild(tituloHiddenCaract);
	};
};


		
// Backside information generos



function changeInforBackside(caractGeneros){
	let genInfo = document.querySelectorAll('.cardInfo');
	for (let i = 0; i < genInfo.length; i++){
		//j es el género elegido (Huayno, Vidale, etc.)
		let j = Math.floor(i/4);
		//k es el tipo de info (caract, ejemplo, partitura, danza)
		let k = i%4;

		

		//alert(`gen ${j}, info ${k}`);
		for(l = 0; l < caractGeneros[j][k].length; l++){

			let type = caractGeneros[j][k][l][0];
			let info = caractGeneros[j][k][l][1];

				if (type === 'img'){
			        let img = document.createElement('img');
			        img.src = info;
			        genInfo[i].appendChild(img);

				  } else if (type === 'p') {
			        let para =  document.createElement('p');
			        para.innerHTML = info;
			        genInfo[i].appendChild(para);

				  } else if (type === 'h5'){
			        let h5 = document.createElement('h5');
			        h5.innerHTML = info;
			        genInfo[i].appendChild(h5);

				   } else if (type === 'li'){
				   	let list = document.createElement('ul');	
				    let li = document.createElement('li');
				    li.innerHTML = info;
				    list.appendChild(li);
				    genInfo[i].appendChild(list);

				  	} else if (type === 'iframe') {
				  	let	iframeDiv = document.createElement('div');
				   	iframeDiv.setAttribute('class', 'iframeDiv');
				    let iframe = document.createElement('iframe');
				    iframe.src = info;
				    iframeDiv.appendChild(iframe);
				    genInfo[i].appendChild(iframeDiv);
					          
				  	};
		};
					 

	};

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
		let color = fondo;
		let randomLightness = Math.floor(Math.random() * 50) + 50;
		color = color.replace(50, randomLightness);
		tile.style.backgroundColor = `${color}`;
		
		//tile.style.backgroundImage = `linear-gradient(${fondo}, white)`;
		
	}
	cardBackside = document.querySelectorAll('.flip-card-back');
	for(tile of cardBackside){
		let color = fondo;
		let randomLightness = (Math.floor(Math.random() * 6.6))*10 + 33;
		color = color.replace(50, randomLightness);
		tile.style.backgroundColor = `${color}`;
		
		//tile.style.backgroundImage = `linear-gradient(${fondo}, white)`;
		
	}

	let color = fondo;
	let randomLightness = (Math.floor(Math.random() * 6.6))*10 + 33;
	color = color.replace(50, randomLightness);

	document.getElementById('overlayInfo').style.backgroundColor = `${color}`;
	
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
	if(overlayInfoH3Copied === null){
		overlayInfoH3.innerHTML = ''
	}else{
		overlayInfoH3.innerHTML = overlayInfoH3Copied.innerHTML;
	};
	
	

	let overlayInfo = document.getElementById('copiedCardInfo');
	overlayInfoBody.innerHTML = tileCopied.innerHTML;
	
};

function hideZoomInfoOverlay(){
	document.getElementById('overlayBackground').style.display = 'none'
	stopVideo();

};


//Change instrument- genre

function changeInstrGene(){
	let buttonInstGen = document.getElementById('l3Opcion');
	if(buttonInstGen.innerHTML	 === 'Ver instrumentos de la región'){
		buttonInstGen.innerHTML = 'Ver géneros de la región';
		setCurrentRegionGeneros();
		showGenerosHideInstrumentos = false;
		} else {
		buttonInstGen.innerHTML	 = 'Ver instrumentos de la región';
		setCurrentRegionInstrumentos();
		showGenerosHideInstrumentos = true;
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
	for (let i = 0; i < genInfo.length; i++){
			let type = instrumentos[1][i][0];
			let info = instrumentos[1][i][1];

				if (type === 'img'){
			        let img = document.createElement('img');
			        img.src = info;
			        genInfo[i].appendChild(img);

				  } else if (type === 'p') {
			        let para =  document.createElement('p');
			        para.innerHTML = info;
			        genInfo[i].appendChild(para);

				  } else if (type === 'h5'){
			        let h5 = document.createElement('h5');
			        h5.innerHTML = info;
			        genInfo[i].appendChild(h5);

				   } else if (type === 'li'){
				   	let list = document.createElement('ul');	
				    let li = document.createElement('li');
				    li.innerHTML = info;
				    list.appendChild(li);
				    genInfo[i].appendChild(list);

				  	} else if (type === 'iframe') {
				  	let iframeDiv = document.createElement('div');
				  	iframeDiv.setAttribute('class', 'iframeDiv');
				    let iframe = document.createElement('iframe');
				    iframe.src = info;
				    iframeDiv.appendChild(iframe);
				    genInfo[i].appendChild(iframeDiv);
					          
				  	};

		
					 

	};

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


// Click region 

 function clickRegion(){
			setTimeout(function(){ 
				if(bigMapShown === true){
					let avisoCont = document.createElement('div');
					avisoCont.setAttribute('id', 'avisoClick');
					avisoCont.innerHTML = `Clickeá una región para ver más detalles`
					document.body.appendChild(avisoCont);
				};

			}, 10000);
		};


// Go to top Button

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//DATA	

let noroeste = new Region('Noroeste',
    "url('img/Regiones/noroeste.png')",
    ['Huayno y Carnavalito', 'Vidala o yaraví', 'Baguala'],
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
    "hsl(8, 98%, 50%)",
    [ //CaractGeneros
        [ //Huayno
            [//caract
       
	        	['li', 'Pie binario'], 
	        	['li', 'Generalmente pentatónico (cinco notas)'],      
	            ['h5', 'Pie del huayno'],
	            ['img', 'img/ejemplos/Pies/PieHuayno.png'],
	            ['h5', 'Pie del carnavalito'],
	            ['img', 'img/ejemplos/Pies/PieCarnavalito.png']
        
            ], 
            [//Videos Ejemplos Mus
                ['h5', 'Ejemplo música'], 
                ['iframe', 'https://www.youtube.com/embed/BoLZRaM2vfA']
            ], 
           	[//Partituras
            	 
            ], 
            [//danza
            	['li', 'Danza grupal vivaz no coreografiada'],
            	['li', 'Huayñunakunay: (quechua) bailar tomados de la mano'],
            	['h5', 'Carnavalito'],
            	['iframe', 'https://www.youtube.com/embed/s2EwDKiuAFs']
            ] 
          
        ],
        [ //Vidala
            [//caract
                
            	['li', 'Forma estrófica con vuelo poético'], 
            	['li', 'Puede estar acompañada por instrumentos y ser a dos voces'], 
            	['li', 'Compás de 3/4, lenta'],            
                ['h5', 'Pie de la Vidala'], 
                ['img', 'img/ejemplos/Pies/PieVidala.png']
            
            ],
            [//Videos Ejemplos Mus
                
            ],
            [//Partituras
            	
            ],
            [//danza
            	['h5', 'Sin danza']
        	]            
        ],
        [ //Baguala
            [//caract
                
            	['li', 'Canto solista, acompañado por caja, trifónico'], 
            	['li', 'Pueden ser improvisadas']
            	
            ],
            [//Videos Ejemplos Mus
                [, ]
            ],
            [//Partituras
            	
        	],
            [//danza
            	['h5', 'Sin danza']
            ]
            
            

        ]
    ],
    [
        [ //instrumentos
            'Caja', 'Quena', 'Siku o zampoña', 'Erke', 'Chajchaj', 'Charango'
        ],
        [ //características instrumentos
            ['h5','Tambor pequeño, doble parche, se toca con una mano sosteniendola y con la otra con baqueta'],
            ['h5','Aerófono de caña, un solo tubo con agujeros, con bisel de muesca'],
            ['h5','Hileras de tubos de cañas, una nota cada tubo', 'Siku (aymará) tubo que da sonido'],
            ['h5','Corneta o cuerno'],
            ['h5','Sonajero de pezuñas'],
            ['h5','Instrumento de 5 cuerdas dobles, pequeño']
        ],
        [ //fotos instrumentos
            "url('img/Instrumentos/caja.jpg')",
            "url('img/Instrumentos/quena.jpg')",
            "url('img/Instrumentos/siku.jpg')",
            "url('img/Instrumentos/Erke.jpg')",
            "url('img/Instrumentos/Chajchas.jpg')",
            "url('img/Instrumentos/Charango.jpg')",
        ]
    ]
);

let litoral = new Region('Litoral',
    "url('img/Regiones/litoral.png')",
    ['Chamamé', 'Rasguido doble', 'Chamarrita'],
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
    "hsl(197, 76%, 50%)",
    [//generos
        [ //Chamamé
            [//caractMus
                ['li', 'Tiene un fluir relacionado al rio'],
                ['li', 'Tiene muchas variantes que van desde tempos moderados a muy vivaces'],
				['li', 'Elementos carácteristicos: Sapucay (expresión de alegría o lamento que se manifiesta en un grito caracteristico) y tapa (acorde final que cierra la obra)'],
                ['li', 'Puede ser tanto vocal como instrumental'],
                ['li', 'polirritmia entre el bajo y la melodía'],
                ['h5', 'compás de 3/4 (tres negras en el grave) y 6/8 (corchea negra corchea negra en el agudo)'], 
                ['img', 'img/ejemplos/Pies/ejChamamé.png']
               
            ], 
            [//Videos Ejemplos Mus
                
            ],
            [//Partituras
            		
            ],
            [//danza
            	['li', 'Danza de pareja enlazada no coreográfica']
        	]            
        ],
        [ //Resguido Doble
            [//caract
                ['li', 'compás de 4/4, lento'], 
                ['li', 'Puede ser tanto vocal como instrumental'],
            	['h5', 'influencia de la milonga pampeana (3+3+2)'], 
            	['img', 'img/ejemplos/Pies/pieMilonga.png']
            ],
            [//Videos Ejemplos Mus
                
            ],
            [//Partituras

            ],
            [//danza
            	['li', 'Danza de pareja enlazada no coreográfica']
        	]                    
        ],
        [ //Chamarrita
            [//caract
                ['li', 'compás 2/4'],
                ['h5', 'influencia de la milonga ciudadana'], 
                ['img', 'img/ejemplos/Pies/PieChamarrita.png']              
            ],
            [//Videos Ejemplos Mus
                
            ],
            [//Partituras

            ],
            [//danza
           		['h5', 'Sin danza']
       		]                      
        ]
    ],
    [
        [ //instrumentos
            'Guitarra', 'Acordeón', 'Bandoneón'
        ],
        [ //características instrumentos
            ['h5','Instrumento de 6 cuerdas, pueden ser pulsadas o rasgueadas'],
            ['h5','Instrumento armónico de viento, con un fuelle y botoneras o teclado.'],
            ['h5','Instrumento armónico de viento, con un fuelle y botoneras']
        ],
        [ //fotos instrumentos
            "url('img/Instrumentos/Guitarra-chamamé.jpg')",
            "url('img/Instrumentos/acordeon.jpg')",
            "url('img/Instrumentos/bandoneon-chamamé.jpg')"
        ]
    ]
);


let cuyo = new Region('Cuyo',
    "url('img/Regiones/cuyo.png')",
    ['Cueca', 'Gato cuyano', 'Tonada'],
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
    "hsl(26, 71%, 50%)",
    [//generos
        [ //Cueca
            [//caract
                ['li', '3/4 y 6/8 vivaz'], 
                ['li', 'proviene de la zamacueca - parentesco con la zamba'],
                ['h5', 'Patrón rítmico característico:'], 
                ['img', 'img/ejemplos/Pies/PieCueca.png'],
                ['p',''],
                ['h5', 'Formalmente ligado a la danza'], 
                ['p', 'Dos vueltas de intro- estrofa 1- estrofa 2 escribillo']
            ],
            [//Videos Ejemplos Mus
                
            ],
            [//Partituras

            ], 
            [//danza
            	['li', 'Danza de pareja suelta con pañuelo coreografiada']
        	],    
        ],
        [ //Gato cuyano
            [//caract
                ['li', '3/4 y  6/8 moderado'],
                ['h5','Forma (ver gráfico)' ]
            ],
            [//Videos Ejemplos Mus
                
            ],
            [//Partituras

            ],
            [//danza
            	['li', 'Danza de pareja suelta coreografiada'], 
            	['li', 'Se diferencia del gato porque aparece la figura del contragiro', 'Se baila con castañetas y paso básico']
        	]  
        ],
        [ //Tonada
            [//caract
                ['li', 'Canto solista, acompañado por caja, trifónico'], 
                ['li', 'Pueden ser improvisadas']
            ],
            [//Videos Ejemplos Mus
                
            ],
            [//Partituras

            ],
            [//danza
            	['h5', 'Sin danza']
        	],
           
        ]
    ],
    [
        [ //instrumentos
            'Guitarra'
        ],
        [ //características instrumentos
            ['h5', 'Instrumento de 6 cuerdas, pueden ser pulsadas o rasgueadas']
        ],
        [ //fotos instrumen
            "url('img/Instrumentos/guitarra-cuyana.jpg')"
        ]
    ]
);

let centro = new Region('Centro',
    "url('img/Regiones/centro.png')",
    ['Gato Norteño', 'Chacarera', 'Escondido', 'Zamba'],
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
    "hsl(31, 97%, 50%)",
    [
        [ //Gato Norteño
            [//caract
                ['li', '6/8 y 3/4'], 
                ['li', 'tempo alegre y ágil'], 
				['h5', 'Forma (gráfico)']
            ], 
            [//Videos Ejemplos Mus
                
            ], 
            [//Partituras

            ], 
            [//danza
            	['li', 'Danza de pareja suelta coreografiada'], 
            	['li', 'Se baila con castañetas y paso básico']
        	],            
        ],
        [ //Chacarera
            [//caract
	                ['li', '6/8 y 3/4'], 
	                ['li', 'tempo alegre y ágil'], 
					['h5', 'Forma de la chacarera'],
					['img' , 'img/ejemplos/Forma/Forma-Chacarera-01.png'],
                    ['img' , 'img/ejemplos/Forma/Forma-Chacarera-02.png'],
                    ['img' , 'img/ejemplos/Forma/Forma-Chacarera-03.png'],
                    ['img' , 'img/ejemplos/Forma/Forma-Chacarera-04.png'],
                    ['img' , 'img/ejemplos/Forma/Forma-Chacarera-05.png'],
                    ['img' , 'img/ejemplos/Forma/Forma-Chacarera-06.png'],
                    ['img' , 'img/ejemplos/Forma/Forma-Chacarera-07.png'] 
            ], 
            [//Videos Ejemplos Mus
                
            ], 
            [//Partituras
            	['h5', 'El puente carretero'], 
            	['p',''],
            	['img', 'img/ejemplos/Para tocar/El puente carretero.png']
            ], 
            [//danza
            	['li', 'Danza de pareja suelta coreografiada'], 
            	['li', 'Se baila con castañetas y paso básico']
        	]
        ],
        [ //Escondido
            [//caract
                ['li', '6/8 y 3/4'], 
                ['li', 'tempo alegre y ágil'], 
				['h5', 'Forma (gráfico)']
            ], 
            [//Videos Ejemplos Mus
                
            ],
            [//Partituras

            ], 
            [//danza
            	['li', 'Danza de pareja suelta coreografiada'], 
            	['li', 'Se baila con castañetas y paso básico']
            ]
        ],
        [ //Zamba
            [//caract
                ['li', '6/8 y 3/4'], 
                ['li', 'tempo tranquilo'], 
                ['h5', 'Forma (gráfico)']
            ],
            [//Videos Ejemplos Mus
                
            ], 
            [ //Partituras
                ['h5', 'Zamba para olvidar'], 
                ['p',''],
                ['img', 'img/ejemplos/Para tocar/Zamba para olvidar-01.png'],
                ['p',''],
                ['img', 'img/ejemplos/Para tocar/Zamba para olvidar-02.png']
            ], 
            [//danza
            	['li', 'Danza de pareja suelta coreografiada con lugar a improvisación, con pañuelo'], 
            	['li', 'Se baila con castañetas y paso básico'],
            	['h5', 'Zamba'],
            	['iframe', 'https://www.youtube.com/embed/x2Ra80ktd9Y']
            ]            
        ]
    ],
    [
        [ //instrumentos
            'Guitarra', 'Bombo', 'Violín'
        ],
        [ //características instrumentos
            ['h5', 'Instrumento de 6 cuerdas, pueden ser pulsadas o rasgueadas'],
            ['h5', 'Instrumento de doble parche que se toca en el aro o el parche con dos baquetas'],
            ['h5', 'Instrumento de 4 cuerdas frotadas por un arco. También pueden ser pulsadas (pizzicato)']
        ],
        [ //fotos instrumen
            "url('img/Instrumentos/guitarra-chacarera.jpg')",
            "url('img/Instrumentos/bombo.jpg')",
            "url('img/Instrumentos/violín.jpg')"
        ]
    ]
);

let pampeana = new Region('Pampeana',
    "url('img/Regiones/pampeana.png')",
    ['Malambo', 'Huella', 'Payada'],
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
    "hsl(80, 66%, 50%)",
    [
        [ //Malambo
            [//caract
                ['li', '6/8, I- IV- V'], 
                ['li', 'sin letra'], 
                ['li', 'baile de desafío']
            ], 
            [//Videos Ejemplos Mus
                
            ],  
            [//Partituras

            ],
            [//danza
            	['li', 'Danza no coreográfica originalmente masculina'], 
            	['li', 'en base a un contrapunto de mudanzas (combinación de movimientos entre pies y piernas)']
            ]   
        ],
        [ //Huella
            [//caract
                ['li', '6/8'], 
                ['li', 'Forma: Intro, estrofa, estrofa (menor), estribillo (mayor)'], 
                ['li', 'Ritmo lento y señorial']
            ], 
            [//Videos Ejemplos Mus
                
            ],
            [//Partituras

            ],
            [//danza
            	['li', 'Danza de pareja coreografiada'], 
            	['li', 'Figura especial: el hombre toma la mano de la mujer'],
            	['h5', 'Huella'], 
            	['iframe', 'https://www.youtube.com/embed/8fLPmHi62Ns']
            ]  
        ],
        [ //Payada
            [//caract
                ['li', 'Improvisación de versos con acompañamiento de guitarra que hace un payador; generalmente los versos relatan sucesos o sentimientos de la cotidianidad rural, y pueden tener un carácter lírico, trágico o humorístico.', 'payada de contrapunto Competencia poético-musical en la que, alternándose dos payadores, improvisan cantos con la guitarra, sobre un mismo tema, tratando de superar al otro en originalidad y destreza poética.'], 
            ], 
            [//Videos Ejemplos Mus
                
            ],
            [//Partituras

            ], 
            [//danza
            	['h5', 'Sin danza']
            ]  
        ]
    ],
    [
        [ //instrumentos
            'Guitarra'
        ],
        [ //características instrumentos
            ['h5', 'Instrumento de 6 cuerdas, pueden ser pulsadas o rasgueadas']
        ],
        [ //fotos instrumen
            "url('img/Instrumentos/guitarra-pampeana.jpg')"
        ]
    ]
);

let ciudadana = new Region('Ciudadana',
    "url('img/Regiones/ciudadana.png')",
    ['Tango', 'Milonga Ciudadana' //,
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
    "hsl(53, 18%, 50%)",
    [
        [ //Tango
            [//caract
                ['li', 'Base binaria (2/4 o 4/4), tempo moderado'], 
                ['li', 'temática nostalgia'], 
                ['li', 'Esencialmente homofónico con imitaciones y compensaciones entre instrumentos'],
                ['h5', 'Patrones rítmicos'], 
                ['h5', 'Arrastre']
            ], 
            [//Videos Ejemplos Mus
                ['p', 'Ver hasta el minuto 6 sobre los orígenes del tango'], 
                ['iframe', 'https://www.youtube.com/embed/8hu2IyKjif4']
            ],
            [//Partituras

            ],  
            [//danza
            	['li', 'Danza de pareja enlazada no coreográfica'],
                ['h5', 'Tango Canyengue'],
                ['iframe', 'https://www.youtube.com/embed/8fLPmHi62Ns']
            ]
        ],
        [ //Milonga Ciudadana
            [//caract
                ['li', '4/4 ritmo de habanera rápida, tempo vivo'], 
                ['li', 'letras pícaras'],
                ['h5', 'Forma (gráfico)']
            ], 
            [//Videos Ejemplos Mus
                
            ], 
            [//Partituras

            ],
            [//danza
            	['li', 'Danza de pareja enlazada no coreográfica'],
                ['h5', 'Milonga Ciudadana'], 
                ['iframe', 'https://www.youtube.com/embed/bUFFLZVvttk']
            ] 
        ]
   ],
    [
        [ //instrumentos
            'Bandoneón'
        ],
        [ //características instrumentos
            ['h5', 'Instrumento armónico de viento, con un fuelle y botoneras']
        ],
        [ //fotos instrumen
            "url('img/Instrumentos/bandoneon-tango.jpg')"
        ]
    ]
);

let patagonia = new Region('Patagonia',
    "url('img/Regiones/patagonia.png')",
    ['Loncomeo' //,,
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
    "hsl(234, 51%, 50%)",
    [
        [ //Loncomeo
            [//caract
                ['li', 'del mapuche, lonco (cabeza) y meu (aquí bajar)'], 
                ['li', 'rogativa mapuches (araucanos)  a partir de sonidos del kultrúm y la trutruka instrumentos ambos ejecutados en ceremonias rituales o religiosas']
            ], 
            [//Videos Ejemplos Mus
                
            ], 
            [//Partituras

	        ],
            [//danza
            	['li', 'el loncomeo se baila principalmente con movimientos de cabeza'], 
            	['li', 'Consiste en correr saltar, agacharse, erguirse, imitar a los animales con movimientos grotescos, sacudiendo fuertemente la cabeza. Se baila entre varios. El que resista mas tiempo será el vencedor'], 
            	['li', 'Los bailarines tocan su cabeza con pintorescas vinchas, tejidas por sus mujeres']
            ]
        ]
    ],
    [
        [ //instrumentos
            'Kultrum', 'Trutruka'
        ],
        [ //características instrumentos
            ['h5', 'Tambor ceremonial mapuche con una membrana'],
            ['h5', 'Aerófono mapuche similar a la  trompeta y al Erke']
        ],
        [ //fotos instrumen
            "url('img/Instrumentos/Kultrún.jpg')",
            "url('img/Instrumentos/trutruca.jpg')"
        ]
    ]
);

