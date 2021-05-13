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

	this.createMemotest = function(nombre, generosRegion, caractGeneros, fondo){

	nombre = this.nombre;
	generosRegion = this.generosRegion;
	caractGeneros = this.caractGeneros;
	fondo = this.fondo;

	selectedRegions(nombre, generosRegion, caractGeneros, fondo);

	
	//storeBGColorMemo(fondo);
	

	

	


	};
};



let regiones = document.getElementsByClassName("region");

var showGenerosHideInstrumentos = true;

let selRegion = function() {

	
		hideBigMap();

		showBtnDown();
		
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
			generoTit[i].setAttribute('class', 'titulo NameForCel');
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
		case 1: tituloHiddenCaract.innerHTML = 'Historia';
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
				    iframe.setAttribute('allowFullScreen', '');
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
		let randomLightness = Math.floor(Math.random() * 66) + 33;
		color = color.replace(50, randomLightness);
		tile.style.backgroundColor = `${color}`;
		
		//tile.style.backgroundImage = `linear-gradient(${fondo}, white)`;
		
	}

	

	let color = fondo;
	let randomLightness = Math.floor(Math.random() * 66) + 33;
	color = color.replace(50, randomLightness);

	document.getElementById('overlayInfo').style.backgroundColor = `${color}`;
	
	document.getElementById('l3Opcion').style.backgroundColor = `${fondo}`;

	document.getElementById('cuantoSabes').style.backgroundColor = `${fondo}`;


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
				    iframe.setAttribute('allowFullScreen', '');
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
       stopVideo();
       
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
var mybuttonDown = document.getElementById("myBtnDown");
var mybuttonUp = document.getElementById("myBtnUp");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 640 || document.documentElement.scrollTop > 640) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

    if (document.body.scrollTop > 640 || document.documentElement.scrollTop > 640) {
    mybuttonUp.style.display = "block";
  } else {
    mybuttonUp.style.display = "none";
  }

  if (window.innerHeight + window.innerHeight + window.scrollY + 640 > document.body.clientHeight) {
    mybuttonDown.style.display = "none";
  } else {
  	mybuttonDown.style.display = "block";
  }


}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Go down Button

//Get the button


function showBtnDown() {
      mybuttonDown.style.display = "block";
  
}


function scrollWin(x, y) {
  window.scrollBy(x, y);
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
	            ['img', 'img/ejemplos/Pies/PieCarnavalito.png'],
	            ['h5', 'El humahuaqueño'], 
                ['iframe', 'https://www.youtube.com/embed/AI_1LARRHsQ'],
                ['h5', 'El humahuaqueño (versión del compositor)'], 
                ['iframe', 'https://www.youtube.com/embed/zHFbHfAK8wU'],
                ['h5','El Quebradeño / El Humahuaqueño (carnavalitos) - Orquesta Argentina de Charangos'],
                ['iframe','https://www.youtube.com/embed/X26-pLJoRcI']
        
            ], 
            [//Historia
            	['p', 'En nuestro país, huayno y carnavalito son denominaciones de una misma especia musical. “Carnavalito” vendría a ser un bautismo argentino del huayno originario de Perú y Bolivia, países donde este género aparece con variantes regionales. La alusión al carnaval da cuenta de su importancia en cuanto fiesta popular de arraigadas tradiciones en el noroeste argentino, fiesta que cobra dimensiones particulares en La Rioja y el altiplano noroestico, región esta de difusión de huaynos o carnavalitos. '],
                ['p', 'Es también danza, con la particularidad de constituir uno de los pocos géneros de bailes colectivo no sujeto a coreografías determinadas, sino a un paso rítmico acompañado de un movimiento corporal en dos tiempos (agachado y levantando la cabeza y tronco)']
            ], 
           	[//Partituras
           		['p',''],
           		['img', 'img/ejemplos/Para tocar/El-humahuaqueño.png' ]	 
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
                ['img', 'img/ejemplos/Pies/PieVidala.png'],
                ['h5', "Mariana Carrizo - Te He'i De Olvidar - Vidala Popular"],
                ['iframe', 'https://www.youtube.com/embed/1_NFv2Imrg8'],
                ['h5','Sube (vidala) Rolando Valladares'],
                ['iframe', 'https://www.youtube.com/embed/Pr_i8cdpyhU']
            
            ],
            [//Historia
            	['p', 'Género lírico, no coreográfico. Su emparentamiento con la baguala puede visualizarse en la rítmica de tres tiempos y en el carácter.'],
                ['p', 'La vidala posiblemente signifique algo así como “¡Ah! Vida”, una forma exclamativa de referirse a la vida misma. '],
                ['p', 'De carácter existencial, la vidala es el género adecuado para expresa cantando emociones y situaciones tales como el amor, el olvido, la distancia, la soledad, la muerte o la vida misma. '],
                ['p', 'Definida por Atahualpa Yupanqui como “una oración que se canta”, la vidala tiene en efecto un carácter místico que la coloca en un plano singular y respetable, dentro del mosaico de las músicas tradicionales argentinas.'],
                ['p', 'Su emparentamiento con las formas arcaicas del canto regional, le confieren un carácter antiguo y un fuerte atractivo, aún en sus variantes más modernas de proyección. '],
                ['p', 'Desde el punto de vista morfológico, existen varias formas de Vidales (recuérdese que al no estar sujeta a coreografías, tiene mayor libertad formal). La más común es: Introducción (rasgueada o percutida, no necesariamente musical) A A… (en número indefinido). O esa misma distribución, pero intercalando el recitado de una o más coplas entre los periodos. '],
                ['p', 'También es habitual que, de una vidala a otra, los períodos A tengan diferentes medidas en cuanto a frases y compases. ']
            ],
            [//Partituras
            	['p',''],
           		['img', 'img/ejemplos/Para tocar/Vidala-para-mi-sombra.png' ]	            	
            ],
            [//danza
            	['h5', 'Sin danza']
        	]            
        ],
        [ //Baguala
            [//caract
                
            	['li', 'Canto solista, acompañado por caja, trifónico'], 
            	['li', 'Pueden ser improvisadas'],
            	['h5', 'Leda Valladares Coplas de Baguala'],
            	['iframe', 'https://www.youtube.com/embed/0mGpjD3a10E'],
            	['h5', 'Baguala de las estrellas. Graciela Mendoza. Tierra en flor. Música ancestral para niños.'],
            	['iframe', 'https://www.youtube.com/embed/uVYd0WfuxKM']
            	
            ],
            [//Historia
               ['p','La baguala es el canto ancestral de nuestro país. Su área de difusión son los montes, valees y quebradas del noroeste, en particular los Valles Calchaquíes, que se extienden desde Jujuy hasta Catamarca, pasando por Salta y Tucumán.'],
               ['p','Anterior a la llegada del conquistador y vigente en nuestros días, la baguala perdura como la única expresión indígena, libre de fusiones. Su canto se basa en melodías que transita los tres sonidos del acorde perfecto mayor, en diferentes combinaciones y octavas. '],
               ['p','La amplia tesitura de una baguala exige del cantor o cantora una utilización de la voz de cabeza o falsete, técnica desarrollada en altísimo grado. Se acompaña con caja, que es percutida en tres tiempos por el mismo cantor. '],
               ['p','La temática de la baguala es diversa, pero siempre espontánea. El propio interprete es el autor de la letra, basada en un motivo o situación presente. '],
               ['p','Según Leda Valladares, la baguala es un canto cósmico, apreciación que seguramente remite al contexto en que se gesta esta expresión autóctona:'],
               ['li','su carácter ancestral remite a los orígenes;'],
               ['li','su entorno paisajístico (la montaña y su vecino inmediato que es el propio cosmos).'],
               ['p','La fuerza intrínseca de esta forma de canto, ha teñido, sea melódica o rítmicamente, otras formas musicales del noroeste argentino. En particular, ha influenciado melódicamente en muchas zambas, vidalas y chayas. Citamos a Leda Valladares:'],
               ['p','Grito en el cielo, nos instala en el canto ancestral con una técnica de expresión milenaria y poderosas melodías. '],
               ['p','Los sagrados cantores de los valles, los “vallistos” que descienden de los siglos andinos nos están esperando en los cerros del noroeste argentino para revelarnos otra dimensión del canto, terrestre y sideral. Al escucharlos aterrizamos en América y la descubrimos. Su discurso de cantores es la suprema desnudez: solo tres notas escalofriadas por la voz del abismo. Este rayo nos inicia en el canto planetario que establece la jerarquía del grito y el lamento como sacralidades del iniciado. '],
               ['p','Los “vallistos” nos alumbran el despeñadero del canto. De ellos buscamos sus secretos, su repertorio, su baqueanías y zarpazos.'],
               ['p','Para los que claman “las fuentes” queda sonando esta magia, y para esas multitudes estudiantiles que sin saberlo van suplicando raíces para afincar su sed de rumbo y belleza.'],
               ['p','La montaña nos muestra el milagro. Las ciudades deberán bendecirlo y enarbolarlo para que cumpla su misión de epicentro solar. '],
	           ['h5', 'DOC Pequeños Universos... // La Baguala // El canto de los Andes'],
	           ['iframe', 'https://www.youtube.com/embed/7_Kf2Jt-MN4']
            ],
            [//Partituras
            	['p',''],
           		['img', 'img/ejemplos/Para tocar/Señores-dueños.png' ]
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
                ['img', 'img/ejemplos/Pies/ejChamamé.png'],
                ['h5', 'Milagros Caliva - La Calandria'],
                ['iframe', 'https://www.youtube.com/embed/v7ivX7mEktw'],
                ['h5', 'Las Hermanas Vera - El Moncho'],
                ['iframe', 'https://www.youtube.com/embed/B8eOP3NadA8']               
            ], 
            [//Historia
            	['p', 'El chamamé se inscribe dentro de las danzas de pareja enlazada, con coreografía libre. '],
            	['p', 'Hay quienes sostienen que este baile – el más popular y masivamente practicado entre las especies argentinas – incorpora algunos elementos del tango, lo cual no resulta visible en lo musical, aunque si en el uso del bandoneón.'],
            	['p', 'El vocablo “chamamé” (en guaraní algo así como “cosa hecha a la ligera”) aparece designando una composición de F. Precánico llamada “Corrientes potí”, en 1930. Si este hecho fuese considerado como el bautismo del chamamé, podrías suponerse que se trata de un género musical bastante nuevo. Sin embargo, aún sin la designación de chamamé, es de suponer que sus sedimentos son más antiguos. Compositores y autores que nacieron con el siglo, como Heraclio Pérez, dan testimonio de haber escuchado las formas incipientes del futuro chamamé, dos o tres décadas antes del nacimiento oficial de 1930. '],
            	['p', 'Claramente emparentado con la polca paraguaya, el chamamé adquiere personalidad y desarrollo en Corrientes y se difunde rápidamente entre las restantes provincias de la región Litoral. En el caso de Misiones, vecina de Paraguay, se hace más notoria la influencia cultural de este país que, en el caso de las músicas, se traduce en la difusión de guaranias y galopas.'],
            	['p', 'El chamamé se ha desarrollado por igual en sus tras aspectos interpretativos: baile, canto y versiones instrumentales. Pero es desde el punto de vista instrumental, donde aparece toda su potencialidad, pues se transforma en una muestra del tema y sus variaciones, con notable capacidad lúdica de sus intérpretes populares. '],
            	['p', 'Su sencilla estructura armónica realza aún más esta capacidad en el arte de realizar variaciones sobre un tema básico. '],
            	['p', 'Siendo este género el modo de expresión masivos y a veces excluyente de toda una región, se diversifica para expresar diferentes emociones o situaciones. De allí suponer que el chamamé es tan solo “alegre”, se trata de una falacia, pues no es solo alegría lo que expresa el hombre del litoral. Existe el chamamé alegre, el melancólico, el paisajista, el romántico, etc. '],
            	['p', 'Se ejecuta con acordeón (desde el más simple de una hilera de botones, llamado “verdulera”, hasta los de dos y tres hileras), y bandoneón (de posterior inclusión en el género), siendo las guitarras instrumentos rítmicos acompañantes. '],
            	['p', 'Sin embargo, hay una tendencia a una presencia mayor de la guitarra como instrumento también cantante, que suelte tocarse con púa o plectro. ']
            ],
            [//Partituras
            	['p',''],
            	['img', 'img/ejemplos/Para tocar/Merceditas.png']
            		
            ],
            [//danza
            	['li', 'Danza de pareja enlazada no coreográfica']
        	]            
        ],
        [ //Resguido Doble
            [//caract
                ['li', 'compás de 4/4, lento'], 
                ['li', 'Puede ser tanto vocal como instrumental'],
            	['h5', 'influencia de la milonga "mal acentuada"'], 
            	['img', 'img/ejemplos/Pies/pieMilonga.png'],
            	['h5', 'Los Hermanos Barrios - Puente Pexoa'],
            	['iframe', 'https://www.youtube.com/embed/4J7dxrN9GcM'],
            	['h5', 'Ramón Ayala - El cosechero'],
            	['iframe', 'https://www.youtube.com/embed/8Got6COhC18']
            ],
            [//Historia
            	['p', 'Uno de los pocos géneros que escapan al carácter birrítmico general, su compás es de 4/4.'],
                ['p', 'Es muy popular en casi todo el litoral, pero principalmente en Corrientes y Chaco. En Uruguay existe un símil llamado “sobrepaso”. '],
                ['p', 'El “rasguido doble” no alude a ninguna medida de tiempo musical, sino posiblemente a un modo más “cargado” de rasguear. Es también baile, sujeto a un paso y no a coreografía. '],
                ['p', 'Morfológicamente acepta diversas estructuras, siendo las más habituales AAB o ABAB.']
            ],
            [//Partituras
            	['p',''],
            	['img', 'img/ejemplos/Para tocar/El-dominguero.png']
            ],
            [//danza
            	['li', 'Danza de pareja enlazada no coreográfica']
        	]                    
        ],
        [ //Chamarrita
            [//caract
                ['li', 'compás 2/4'],
                ['h5', 'influencia de la milonga'], 
                ['img', 'img/ejemplos/Pies/PieChamarrita.png'],
                ['h5', 'Chamarrita de la costa - Larralde'],
                ['iframe', 'https://www.youtube.com/embed/7VmDgOee1s8'],
                ['h5', 'Mi novia la chamarrita - Los hermanos Cuestas'], 
                ['iframe', 'https://www.youtube.com/embed/c7ABck_nS8g']              
            ],
            [//Historia
               ['p', 'Su área de difusión es la provincia de Entre Ríos (y Uruguay).'], 
               ['p', 'Género nuevo, emparentado con la milonga y, por tanto, con la habanera. Su principal impulsor fue Linares Cardoso, a través de composiciones que ganaron adeptos al punto de representar el canto típico entrerriano. Cuando decimos “nuevo” nos referimos a su inserción en la región, pues la chamarrita como danza de pareja tomada, se bailaba allá por 1855 y, según algunas hipótesis, pude tener origen portugués. '],
               ['p', 'También se la denomina chamarra, y en este sentido puede aludir a “enramada”, esto es, el lugar del campo en el que se acostumbra bailar. Si esta línea interpretativa del término fuses válida, cabría pensar en cierta relación entre “chamarra” y “chamamé”, ambos bailados en enramadas. '],
               ['p', 'Una particularidad de la chamarrita, y en ello se nota el parentesco con la milonga pampeana o uruguaya, es que se acompaña en guitarras y con la técnica de arpegios. Esporádicamente se utilizan rasgueos. ']
            ],
            [//Partituras
            	['p',''],
            	['img', 'img/ejemplos/Para tocar/Pal-que-se-va.png']
            ],
            [//danza
           		['li', 'Danza de pareja enlazada no coreográfica']
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
                ['p', 'Dos vueltas de intro- estrofa 1- estrofa 2 escribillo'],
                ['h5', 'Calle Angosta (Cueca Cuyana)'],
                ['iframe', 'https://www.youtube.com/embed/kQ34P6dnCVA'],
                ['h5', "Pa' la Celeste"],
                ['iframe', 'https://www.youtube.com/embed/aQcbQir7wYQ'],
                ['h5', 'Póngale por las hileras (Cueca cuyana) / Orozco - Barrientos'],
                ['iframe', 'https://www.youtube.com/embed/F6J4p5hG0os']
                
            ],
            [//Historia
            	['p', 'Es danza de coreografía fija. Descendiente de la zamacueca peruana, adquiere forma de cueca o “chilena” en Chile y desde allí ingresa a nuestro país a través de Cuyo. Ya como cueca cuyana, este género se desarrolla más en la forma canción que en cuanto a danza. En cierto sentido, gana en refinamiento musical, pero ve diluirse aspectos rítmicos muy marcados en la cueca chilena (y más apropiados para la danza). '],
                ['p', 'Existe una variante que es llamada cueca norteña o boliviana, que ingresa desde el norte chileno a Bolivia y desde este país al norte argentino. Esta cueca se diferencia de la cuyana en que es más rápida, su modo es usualmente menor y presenta diferencia morfológicas y coreográficas.'],
                ['p', 'En cuanto sus aspectos rítmicos, suele definirse al rasgueo de la cueca como similar al de la zamba, pero más rápido, Esta opinión alude a las figuras del rasgueo, en verdad similares, y a su mecánica, también con movimientos similares. Sin embargo, ambos rasgueos son cualitativamente diferentes: el rasgueo de la zamba tiene más “aire” y graves profundos, mientras que el rasgueo de la cueca tiene golpes más stacattos y presencia mayor de sus figuras agudas, particularmente la que corresponde al segundo tiempo del 6/8.  En tal sentido, el rasgueo de la cueca se asocia al paso de su baile – más saltarín-, mientras que el de la zamba se asemeja al paso “caminado” de su danza. '],
                ['p', 'La forma de la cueca es similar a la de la zamba, con la única diferencia de que en su primer periodo A, la frase de pregunta música se repite. Así la forma de la cueca será:'],
                ['li', 'Int '],
                ['li', 'A (16 compases)'],
                ['li', 'A’ (12 compases) '],
                ['li', 'B (12 compases) '],
                ['li', 'Int '],
                ['li', 'A (16 compases)'],
                ['li', 'A’ (12 compases) '],
                ['li', 'B (12 compases) ']
            ],
            [//Partituras
            	['p',''],
            	['img', 'img/ejemplos/Para tocar/Pongale-por-las-hileras.png']
            ], 
            [//danza
            	['li', 'Danza de pareja suelta con pañuelo coreografiada']
        	],    
        ],
        [ //Gato cuyano
            [//caract
                ['li', '3/4 y  6/8 moderado'],
                ['h5','Forma del gato cuyano' ],
                ['img' , 'img/ejemplos/Forma/Forma-GatoCuyano-01.png'],
                ['img' , 'img/ejemplos/Forma/Forma-GatoCuyano-02.png'],
                ['img' , 'img/ejemplos/Forma/Forma-GatoCuyano-03.png'],
                ['img' , 'img/ejemplos/Forma/Forma-GatoCuyano-04.png'],
                ['img' , 'img/ejemplos/Forma/Forma-GatoCuyano-05.png'],
                ['h5', 'Los Quilla Huasi - El Chulengo'],
                ['iframe', 'https://www.youtube.com/embed/4Ec9JLJeYos'],
                ['h5', 'Algarroba.com - El marucho'],
                ['iframe', 'https://www.youtube.com/embed/CYBa3ITCm88']
            ],
            [//Historia
            	['p', '«No hay cueca sin gato…»(Así lo dice el refranero cuyano). Mientras que la cueca es una invitación, el gato es una respuesta positiva a ella, de ahí el refrán.'],
            	['p', 'El gato es una alegre danza criolla que se bailó en Argentina desde antes de 1820 y que llegó desde el Perú.  Representa un discreto juego amoroso de cortejo. El hombre persigue a la mujer con las mejores mudanzas de sus zapateos hasta obtener su correspondencia en la coronación final. Es de ritmo vivo. Se bailó en varios países americanos – Perú, Chile, Uruguay, Paraguay y hasta México – pero en nuestro país arraigó con mayor fuerza, y en nuestra provincia tomó raíces el gato cuyano, una variante con giro y contragiro después de la vuelta entera (tiene cuatro compases más que el gato común).']
            ],
            [//Partituras
            	['p',''],
            	['img', 'img/ejemplos/Para tocar/El-Marucho.png']
            ],
            [//danza
            	['li', 'Danza de pareja suelta coreografiada'], 
            	['li', 'Se diferencia del gato porque aparece la figura del contragiro', 'Se baila con castañetas y paso básico']
        	]  
        ],
        [ //Tonada
            [//caract
                ['li', 'Canto solista, acompañado por caja, trifónico'], 
                ['li', 'Pueden ser improvisadas'],
                ['h5', 'Mi amor en una tonada'],
                ['iframe', 'https://www.youtube.com/embed/fRUg1doBSv8'],
                ['h5', 'Dúo Nuevo Cuyo - A mi compadre'],
                ['iframe', 'https://www.youtube.com/embed/9VXYJ66VpH4']
            ],
            [//Historia
            	['p', 'Género lírico no coreográfico. Es más apropiado hablar de tonada cuyana, pues bajo la denominación simple de tonada existen cantos característicos de diversas regiones de diferentes países. En Argentina existe tonadas en ´los Valles Calchaquíes, que nada tienen que ver con la que nos ocupa. '],
            	['p', 'Formalmente, como todo género no coreográfico presenta diversas formas. La más tradicional es:'],
            	['li', 'Int'],
                ['li', 'A'],
                ['li', 'Int'],
                ['li', 'A'],
                ['li', 'Int'],
                ['li', 'A'],
                ['li', '...'],
                ['p', 'Dentro de las formas tradicionales existen las tonadas de melodías única, a la que se adaptan diversas letras. Asimismo, hay tonadas tradicionales cuyos periodos A difieren en la cantidad de compases o las medidas de sus frases musicales. '],
                ['p', 'El “cogollo” es una dedicatoria improvisada y espontánea. Sobre la melodía tradicional, el cantor crea una letra que canta en homenaje a alguien presente, o simplemente para expresar diversas situaciones o afectos. '],
                ['p', 'Junto con la payada, pero más vigente, el cogollo en las tonadas cuyanas es un raro vestigio de la impronta del canto, a la sazón poeta-cantor. ']
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
				['h5', 'Forma del gato norteño'],
				['img' , 'img/ejemplos/Forma/Forma-GatoNorteño-01.png'],
                ['img' , 'img/ejemplos/Forma/Forma-GatoNorteño-02.png'],
                ['img' , 'img/ejemplos/Forma/Forma-GatoNorteño-03.png'],
                ['img' , 'img/ejemplos/Forma/Forma-GatoNorteño-04.png'],
                ['h5', 'Duo Coplanacu - El 180'],
                ['iframe', 'https://www.youtube.com/embed/b5g9vTzXg-I'],
                ['h5', 'Raly Barrionuevo - Gato de festival'],
                ['iframe', 'https://www.youtube.com/embed/jQQDH646uTw']

            ], 
            [//Historia
                ['p', 'Danza de coreografía fija. Si bien desciende de Lima, hay documentos que atestiguan su presencia en México, Colombia, Chile, Bolivia, Uruguay y Paraguay. Pero es en nuestro país que, ingresada por el norte desde 1800, adquiere forma definitiva y se afinca en las diversas regiones culturales argentinas.'],
                ['p', 'Ya como forma musical (instrumental o con letra cantada), el gato se compone, interpreta y danza en todas las regiones argentinas, pero es en Santiago del Estero donde mantiene mayor vigencia colectiva y tradicional.'],
                ['p', 'Su enorme difusión no fue solamente territorial, sino también social pues lo abrazó tanto el gaucho como la aristocracia de todas las provincias. Se dice que el mismo Rosas “punte[o un gato” en cierta reunión en Los Cerrillos entre 1820 y 1821. Desde 1837 es acogido en el Circo Criollo que, como se sabe, fue un importante receptor y transmisor de las culturas populares.' ],
                ['p', 'Es probable que su nombre derive de una antigua copla popular, con forma de “seguidilla” española, esto es, versos intercalados de siete y cinco sílabas. Esta forma, de gran arraigo, se mantiene hasta hoy en el gato y otras formas musicales, como la huella pampeana.'],
                ['p', 'Salta la perdiz madre <br> Salta al infeliz <br> Que se la lleva el gato <br> El gato mis-mis'],
                ['p', 'Los diversos nombres que tuvo esta danza, como perdiz o gato mis-mis, pueden originarse en esta copla popular.']
            ], 
            [//Partituras
            	['p',''],
            	['img', 'img/ejemplos/Para tocar/El-pintao.png']
            ], 
            [//danza
            	['li', 'Danza de pareja suelta coreografiada'], 
            	['li', 'Se baila con castañetas y paso básico'],
            	['h5', 'Forma del gato norteño'],
				['img' , 'img/ejemplos/Forma/Forma-GatoNorteño-01.png'],
                ['img' , 'img/ejemplos/Forma/Forma-GatoNorteño-02.png'],
                ['img' , 'img/ejemplos/Forma/Forma-GatoNorteño-03.png'],
                ['img' , 'img/ejemplos/Forma/Forma-GatoNorteño-04.png']	
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
                    ['img' , 'img/ejemplos/Forma/Forma-Chacarera-07.png'],
                    ['h5', 'Peteco Carabajal - Borrando Fronteras'],
                    ['iframe', 'https://www.youtube.com/embed/dLfGMx3dZw4'],
                    ['h5', 'Néstor Garnica - Chacarera del Violín'],
                    ['iframe', 'https://www.youtube.com/embed/Nu09TNvxinQ'] 
            ], 
            [//Historia
                	['p', 'Danza de coreografía fija. Si bien centrada y muy cultivada en Santiago del Estero, la chacarera navega también por las profundidades del inconsciente colectivo tucumano y salteño.'],
                	['p', 'La chacarera forma parte de un grupo números de danzas folklóricas sustentadas en una célula rítmica que algunos llaman “tipo gato”, tal vez por ser el gato la especia más añeja de este grupo de danzas. Además de chacareras y gatos, esa base rítmica acompañará bailecitos, escondidos, huellas, triunfos y un buen número de danzas menos vigentes.'],
                	['p', 'Tal vez menos pícara que el gato o menos tierna que un bailecito, la chacarera es tenaz y vigorosa, incansable como sus intérpretes, adecuada para es canto expansivo santiagueño, mucho menos introspectivo que el modo de los vecinos tucumanos. Y es danza vital, agreste y sensual como pocas.']
            ], 
            [//Partituras
            	['p',''],
            	['img', 'img/ejemplos/Para tocar/El puente carretero.png']
            ], 
            [//danza
            	['li', 'Danza de pareja suelta coreografiada'], 
            	['li', 'Se baila con castañetas y paso básico'],
        		['h5', 'Forma de la chacarera'],
				['img' , 'img/ejemplos/Forma/Forma-Chacarera-01.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Chacarera-02.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Chacarera-03.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Chacarera-04.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Chacarera-05.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Chacarera-06.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Chacarera-07.png'] 
        	]
        ],
        [ //Escondido
            [//caract
                ['li', '6/8 y 3/4'], 
                ['li', 'tempo alegre y ágil'], 
				['h5', 'Forma (gráfico)'],
				['h5', 'El escondido'],
				['img' , 'img/ejemplos/Forma/Forma-Escondido-01.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Escondido-02.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Escondido-03.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Escondido-04.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Escondido-05.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Escondido-06.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Escondido-07.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Escondido-08.png'],
				['iframe', 'https://www.youtube.com/embed/v5oEOS0TIBk'],
				['h5', 'La chacarerata santiagueña - Escondido de los bombos'],
				['iframe', 'https://www.youtube.com/embed/9ymnYegbB8c'],
				['h5', 'Escondido para Bailar'],
				['iframe', 'https://www.youtube.com/embed/TAR7ngkhEr0']
            ], 
            [//Historia
            	['p', 'Es una danza de galanteo, de pareja suelta e independiente y de movimiento vivo, caracterizada por la pantomima del escondimiento.'],
            	['p', 'El nombre de la danza surge inspirado del texto poético en el ocultamiento de los bailarines. En algunas regiones se lo llama “Gato Escondido”. Antiguamente, en el momento del escondimiento, uno de los bailarines se ocultaba detrás de los objetos o personas, y el que buscaba al compañero zarandeando o zapateando.'],
            	['p', 'Arturo Berutti en 1862, publicó un artículo en una revista, bajo el nombre de “Aires Nacionales” y se refiere a esta danza describiéndola como la vió bailar en San Juan, utilizando pañuelo.'],
            	['p', 'Se bailó en todo el territorio Nacional desde 1850, o quizás un poco antes. Actualmente se baila en el centro y noroeste, llegando hasta San Juan, Santa Fé, Salta, Catamarca, Jujuy, Córdoba, etc.']
                
            ],
            [//Partituras
            	['p',''],
            	['img', 'img/ejemplos/Para tocar/El-escondido.png']
            ], 
            [//danza
            	['li', 'Danza de pareja suelta coreografiada'], 
            	['li', 'Se baila con castañetas y paso básico'],
            	['h5', 'El escondido'],
				['img' , 'img/ejemplos/Forma/Forma-Escondido-01.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Escondido-02.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Escondido-03.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Escondido-04.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Escondido-05.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Escondido-06.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Escondido-07.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Escondido-08.png']
            ]
        ],
        [ //Zamba
            [//caract
                ['li', '6/8 y 3/4'], 
                ['li', 'tempo tranquilo'], 
                ['h5', 'Forma de la zamba'],
                ['img' , 'img/ejemplos/Forma/Forma-Zamba-01.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Zamba-02.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Zamba-03.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Zamba-04.png'],
                ['h5', 'Zamba del ángel - Raly Barrionuevo'],
                ['iframe', 'https://www.youtube.com/embed/1yMRSn-iqxU'],
                ['h5', 'Juan Falú - Zamba del Lozano'],
                ['iframe', 'https://www.youtube.com/embed/5am2eS4Yq04']
            ],
            [//Historia
                ['p','La zamba es una danza nacional. En tal sentido, su ubicación en la región central puede resultar arbitraria. Sin embargo, es en esta región y en el noroeste argentino donde reside el semillero más significativo de la zamba, no tan solo desde el punto de vista cuantitativo, sino también por haberse desarrollado allí la más dilatada proyección histórica del género: desde sus formas más tradicionales hasta las composiciones del Cuchi Leguizamón. '], 
                ['p', 'Deriva de la zamacueca, que a su vez proviene del fandango español. La zamacueca, con centro ene l Perú y difusión hacia Chile, Bolivia, ingresa a nuestro territorio por Cuyo (desde Chile) y el Norte (desde Bolivia). Esta zamacueca toma del fandango el lenguaje amoroso, al que acrecienta con el agregado criollo del pañuelo. '],
                ['p', 'En Chile adquiere la denominación de cueca o chilena, denominación esta última que estimuló el nacionalismo peruano cuando, en plena guerra con Chile, trocó la designación de zamacueca por marinera, en homenaje a su marina de guerra.'],
                ['p', 'Ya en nuestro país y con la denominación de zamba, pasó a constituirse en el género nacional por excelencia, sea en forma de danza, canto o instrumental.'],
                ['p', 'Danza amorosa, su coreografía es fija y se resume en una trama de seducción entre hombre y mujer. Decimos entre y no “del” hombre “hacia” la mujer, pues a pesar de la aparente iniciativa masculina en la búsqueda de su pareja, la mujer seduce al hombre con su propio “rehuir”. El alejamiento, en este caso, no pasa de una simulación o de un juego que se integra dialécticamente con el lenguaje de acercamiento de miradas y pañuelos.'],
                ['p', 'El modo más completo de aprehender una zamba en su forma musical consiste en integrarla – sea como participe o espectador interesado – a sus expresiones coreográficas y poéticas.']
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
            	['h5', 'Forma de la zamba'],
                ['img' , 'img/ejemplos/Forma/Forma-Zamba-01.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Zamba-02.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Zamba-03.png'],
                ['img' , 'img/ejemplos/Forma/Forma-Zamba-04.png'],
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
    ['Triunfo', 'Huella', 'Payada'],
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
        [ //Triunfo
            [//caract
            	['h5', 'Emiliano Zerbini - La vuelta de obligado'],
            	['iframe', 'https://www.youtube.com/embed/_xlSpj1nTPk' ],
            	['h5', 'La Yegua Mía · Aquí Les Luthiers'],
            	['iframe', 'https://www.youtube.com/embed/M5HhIbSyYgg' ]                
            ], 
            [//Historia
            	['p', 'Danza de coreografía Fija. Se dice que rememora victorias militares y se ubican sus orígenes en un período inmediatamente posterior a la Revolución de Mayo.'],
                ['p', 'Otrora se bailaba en todo el país, pero se ha radicado como canto vigoroso en la región pampeana. '],
                ['p', 'Morfológicamente, se compone de introducciones de seis compases, que luego se han de intercalar (en forma de interludios) a lo largo de 5 períodos A. Estos períodos están distribuidos en tres frases de dos compases cada una. Estos períodos se cantan con coplas de “seguidilla” o “pie quebrado”. '],
                ['p', 'Rítmicamente, el triunfo se asemeja al malambo, en sus introducciones y se acompaña de modo similar al de gato y chacarera, durante su canto. En este sentido, es un género birrímico, con melodías en 6/8 y base rítmica en 3/4.'],
                ['p', 'La célula rítmica básica es igual a la del gato y la chacarera. ']
            ],  
            [//Partituras
            	['p',''],
            	['img', 'img/ejemplos/Para tocar/Triunfo-de-la-vuelta-de-obligado.png']
            ],
            [//danza
            	
            ]   
        ],
        [ //Huella
            [//caract
                ['li', '6/8'], 
                ['li', 'Forma: Intro, estrofa, estrofa (menor), estribillo (mayor)'], 
                ['li', 'Ritmo lento y señorial'],
                ['h5', 'Huella sin huella - Omar Moreno Palacios ft Los Indios Tacunau'],
                ['iframe', 'https://www.youtube.com/embed/t3xatKM3eME'],
                ['h5', 'Juan Quintero y Luna Monti - De Ida y Vuelta'],
                ['iframe', 'https://www.youtube.com/embed/fU69grGpnoU']
            ], 
            [//Historia
            	['p', 'De coreografía fija, es una danza señorial que se cultivó casi un siglo entre 1830 y 1920, para ir perdiendo fuerza y afincarse como una expresión más de la canción. Si bien tuvo carácter nacional, acabó regionalizándose en la campaña bonaerense y la provincia de La Pampa, donde mantiene total vigencia. '],
            	['p', 'Armónicamente, se sitúa en el campo del modo menor, con permanentes pasajes al relativo mayor. Como forma de proyección, suele emplearse el modo mayor en los periodos B. '],
                ['p', 'Generalmente, las huellas tradicionales, o las actuales a ala usanza tradicional, se desarrollan dentro de la misma secuencia armónica (válida también para las introducciones). '],
                ['p', 'La huella es, morfológicamente, constituida como sigue:'],
                ['li', 'Int. A A B B A Int. A A B B A '],
                ['p', 'Las más tradicionales, tienen la misma cantidad de periodos, pero son todos A. '],
                ['p', 'Cada periodo contiene estrofas de cuatro versos de 7, 5, 7 y 5 silabas respectivamente. Desde el punto de vista poético, esta estructura (que puede observarse también en gatos y cuecas) corresponde al a copla de “pie quebrado” o “seguidilla”.'],
                ['p', 'La huella está emparentada rítmicamente con el gato, chacarera y bailecito, pero si rasgueo es más suave, más lento y menos percutido. El 3/4 ha de aparecer esporádicamente en acompañamientos o desenlaces de las melodías, pero ello bastará para sentar su presencia y utilizarla en mayor o menor medida, a gusto del intérprete. ']
            ],
            [//Partituras
            	['p',''],
            	['img', 'img/ejemplos/Para tocar/Huella-de-ida-y-vuelta.png'],
            	['p','esta huella es Formalmente una excepción']
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
            	['h5', 'Contrapunto entre Martín Fierro y el Moreno'],
            	['iframe', 'https://www.youtube.com/embed/WnDyA1toSaA'],
            	['h5', 'Payada de la Vaca · Aquí Les Luthiers'],
            	['iframe', 'https://www.youtube.com/embed/7ydlVCj94x4']
            ], 
            [//Historia
                
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
                ['h5', 'Arrastre'],
                ['p', 'Ver hasta el minuto 6 sobre los orígenes del tango'], 
                ['iframe', 'https://www.youtube.com/embed/8hu2IyKjif4']
            ], 
            [//Historia
                
            ],
            [//Partituras
            	['p',''],
            	['img', 'img/ejemplos/Para tocar/Caminito-01.png'],
            	['p',''],
            	['img', 'img/ejemplos/Para tocar/Caminito-02.png']
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
            [//Historia
                
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
                ['li', 'rogativa mapuches (araucanos)  a partir de sonidos del kultrúm y la trutruka instrumentos ambos ejecutados en ceremonias rituales o religiosas'],
            	['h5', 'Loncomeo del Amor Mapuche - Los Hermanos Berbel'],
            	['iframe', 'https://www.youtube.com/embed/Qgebs-ggLRs'],
            	['h5', 'José Larralde - Quimey Neuquén'],
            	['iframe', 'https://www.youtube.com/embed/hxq_hC4wgvM']
            ],	
            [//Historia
            	['h5', 'El Loncomeo // El Legado de Marcelo Berbel // Neuquén'],
            	['iframe', 'https://www.youtube.com/embed/3ceyigDGOIs']
            ], 
               
            [//Partituras

	        ],
            [//danza
            	['li', 'el loncomeo se baila principalmente con movimientos de cabeza'], 
            	['li', 'Consiste en correr saltar, agacharse, erguirse, imitar a los animales con movimientos grotescos, sacudiendo fuertemente la cabeza. Se baila entre varios. El que resista mas tiempo será el vencedor'], 
            	['li', 'Los bailarines tocan su cabeza con pintorescas vinchas, tejidas por sus mujeres']
            ]
        ], 
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

////////////////////////////////////////////////////////////////////////


//MEMOTEST

//Select Regiones

let regionesMemotest = document.getElementsByClassName("regionMemotest");

var showGenerosHideInstrumentos = true;

let selRegionMemotest = function() {

	
				
	    let region = this.getAttribute("id");

	  
	    //alert(region);
	    
	    switch (region) {
	    	case 'noroeste' : noroeste.createMemotest();
	    		break;
		    case 'litoral' : litoral.createMemotest();
		    	break;
		    case 'centro': centro.createMemotest();
		    	break
		    case 'cuyo' : cuyo.createMemotest();
		    	break
		    case 'pampeana' : pampeana.createMemotest();
		    	break
		    case 'ciudadana' : ciudadana.createMemotest();
		    	break
		    case 'patagonia' : patagonia.createMemotest();
		    	break
		};    
	if(showGenerosHideInstrumentos === false){	
	setCurrentRegionGeneros();
	//document.getElementById('l3Opcion').innerHTML  = 'Ver instrumentos de la región';
    };
    
};

for (let i = 0; i < regionesMemotest.length; i++) {
    regionesMemotest[i].addEventListener('click', selRegionMemotest, false);

};	



//Select Cantidad de Géneros por región y crear Arrays for Cards

function random(num){
	let randomNum = Math.floor(Math.random() * num);  
	return randomNum;
}

/* Shuffle del array */
	function shuffle(array) {
		var i=array.length;
		while(i--){
			var j=Math.floor( Math.random() * (i+1) );
			var tmp=array[i];
			array[i]=array[j];
			array[j]=tmp;
		}
	}
let isRegionSelected = false;
if(document.getElementById('crearMemotest')){
document.getElementById('crearMemotest').disabled = true;
document.getElementById('crearMemotest').addEventListener('click', createCardsMemotest,false);
};

var generosQtyTotalNum = 0;
var regionesSelected = [];
let memoArray = []
let memoArrayAux = []



function selectedRegions(nombre, generosRegion, caractGeneros, fondo){
	
	let nombreLowercase = nombre.toLocaleLowerCase();
	selectedRegion = document.getElementById(nombreLowercase);

	let tnombreLowercase = 't'+nombreLowercase;
	let selTableName = document.getElementById(tnombreLowercase);
	
	let selectedRegionClass = selectedRegion.getAttribute('class');
	if(selectedRegionClass === "regionMemotest selected"){
		
		selTableName.style.display = 'none';
		selectedRegion.style.filter = 'brightness(1)';
		selectedRegion.setAttribute('class', 'regionMemotest ');
		let regionIndex = regionesSelected.indexOf(selectedRegion);
		
		regionesSelected.splice(regionIndex, 1);
		regionIndex = regionIndex * 24
		memoArray.splice(regionIndex, 24);
		
		generosQtyTotalNum -= generosRegion.length;
		
	}else{
		selTableName.style.display = 'block';
		selectedRegion.style.filter = 'brightness(1.4)';
		selectedRegion.classList.add('selected');
		generosQtyTotalNum += generosRegion.length;
		regionesSelected.push(selectedRegion);

		
		
	};

	let selRegCartel = document.getElementsByClassName('selRegCartel');
	let isRegionSelectedArray = []
for(i = 0; i < selRegCartel.length; i++){
	if(selRegCartel[i].style.display === 'block' ){
		isRegionSelectedArray.push(true);
	} else {
		isRegionSelectedArray.push(false);
	}	
}	

if(isRegionSelectedArray.includes(true)){
	isRegionSelected = true 

}else {
	isRegionSelected = false;
}
//console.log(isRegionSelected)


createMemoArray(nombreLowercase, generosRegion, caractGeneros, fondo);


	//console.log(generosQtyTotalNum)
	//console.log(regionesSelected)
	//console.log(memoArray)

if(isRegionSelected === true){
	document.getElementById('crearMemotest').disabled = false;
	document.getElementById('noHayRegionesElegidas').style.display = 'none'
}else{
	document.getElementById('crearMemotest').disabled = true;
	document.getElementById('noHayRegionesElegidas').style.display = 'inline-block'
}

};


function createMemoArray(nombreLowercase, generosRegion, caractGeneros, fondo){
	
	for(i = 0; i < 96; i++){
		let generoNum = random(generosRegion.length);
		let caractType = random(4);
		let memoInfo = caractGeneros[generoNum][caractType][random(caractGeneros[generoNum][caractType].length)]
		if(memoInfo === undefined || memoInfo[1] === '' ||  memoInfo[0] === 'h5'){

		}else{	
		let arrayPair = [];
		arrayPair.push(nombreLowercase);
		arrayPair.push(generosRegion[generoNum]);
		arrayPair.push(memoInfo);
		color = randomColorLightness(fondo);

		arrayPair.push(color);
		
		memoArray.push(arrayPair);
		

		};

	};
	

};

function randomColorLightness(fondo){
	let color = fondo;
	let randomLightness = Math.floor(Math.random() * 66) + 33;
	color = color.replace(50, randomLightness);
	return color;
}

function prepareMemoArray(){
	for (j = 0; j < regionesSelected.length; j++){
		regionesSelected[j] = regionesSelected[j].id
	};

	if(regionesSelected.length === 0){
		memoArray = [];
	}else{
		for (i = memoArray.length-1; i >= 0; i--){
			if (memoArray[i][0] === regionesSelected[0]||
				memoArray[i][0] === regionesSelected[1]||
				memoArray[i][0] === regionesSelected[2]||
				memoArray[i][0] === regionesSelected[3]||
				memoArray[i][0] === regionesSelected[4]||
				memoArray[i][0] === regionesSelected[5]||
				memoArray[i][0] === regionesSelected[6]||
				memoArray[i][0] === regionesSelected[7]){
				memoArray[i].splice(0,1)
			}else{
				memoArray.splice(i,1);
				//console.log(memoArray[])
			}	
		}
	
	}
	
shuffle(memoArray);
}

//Select cards Quantity

var cardsQty = 12;

function selectCardsQty(){
	document.getElementById('moveElSlider').style.visibility = 'hidden';
	let slider =  document.getElementById('myRange');
	let sliderValue = document.getElementById('sliderValue');
	switch (slider.value){
		case '1' :  sliderValue.innerHTML = '4';
					cardsQty = 4;
			break;
		case '2' :  sliderValue.innerHTML = '8';
					cardsQty = 8;
			break;
		case '3' :  sliderValue.innerHTML = '12';
					cardsQty = 12;
			break;
		case '4' :  sliderValue.innerHTML = '16';
					cardsQty = 16;
			break;
		case '5' :  sliderValue.innerHTML = '20';
					cardsQty = 20;
			break;
		case '6' :  sliderValue.innerHTML = '24';
					cardsQty = 24;
			break;
		case '7' :  sliderValue.innerHTML = '30';
					cardsQty = 30;
			break;
		case '8' :  sliderValue.innerHTML = '36';
					cardsQty = 36;
			break;
		case '9' :  sliderValue.innerHTML = '42';
					cardsQty = 42;
			break;
		case '10' :  sliderValue.innerHTML = '48';
					cardsQty = 48;
			break;
						

	}
	
}



//Create cards

function createCardsMemotest(){
	document.getElementById('reiniciar').style.display = 'block';
	prepareMemoArray();
	document.getElementById('first-page').style.display = 'none';
	document.getElementById('memoSideBar').style.display = 'flex'

	let main = document.getElementById('main');
	let cardQty = cardsQty;


	for(i = 0; i < cardQty; i++){


	let memoCard = document.createElement('div');
	memoCard.setAttribute('class', 'memoCard');
	main.appendChild(memoCard);

	let memoFlipCard = document.createElement('div');
	memoFlipCard.setAttribute('class','memoFlip-card');
	memoFlipCard.setAttribute('id',`m${i}`);
	//memoFlipCard.setAttribute('onclick', 'checkMemotestCards(this)');
	memoCard.appendChild(memoFlipCard);

	let flipCardInner = document.createElement('div');
	flipCardInner.setAttribute('class','memo-flip-card-inner');
	flipCardInner.setAttribute('id',`fci${i}`);
	memoFlipCard.appendChild(flipCardInner);

	let flipCardFront = document.createElement('div');
	flipCardFront.setAttribute('class','memo-flip-card-front');
	flipCardInner.appendChild(flipCardFront);

	let r = document.createElement('div');
	r.setAttribute('class','center-cropped');
	r.setAttribute('id',`r${i}`);
	flipCardFront.appendChild(r);

	let imgInfoFront = document.createElement('img');
	imgInfoFront.src = 'img/Argentina con Provincias.png';
	imgInfoFront.setAttribute('class','front-memotest-img');
	r.appendChild(imgInfoFront);

		

	let flipCardBack = document.createElement('div');
	flipCardBack.setAttribute('class','memo-flip-card-back');
	flipCardInner.appendChild(flipCardBack);

	let cardInfoDiv = document.createElement('div');
	cardInfoDiv.setAttribute('class','memo-cardInfoDiv');
	flipCardBack.appendChild(cardInfoDiv);

	let clickZoom = document.createElement('a');
	//clickZoom.setAttribute('href',`javascript:memoShowZoomInfoOverlay(rt${i})`);
	clickZoom.setAttribute('class','clickZoom');
	cardInfoDiv.appendChild(clickZoom);

	let zoomInfo = document.createElement('img');
	zoomInfo.src = 'img/botones/Lupa.png';
	zoomInfo.setAttribute('class','zoomInfo');
	zoomInfo.setAttribute('id',`zi${i}`);
	clickZoom.appendChild(zoomInfo);

	let cardInfo = document.createElement('div');
	cardInfo.setAttribute('class','memo-cardInfo');
	cardInfo.setAttribute('id',`rt${i}`);
	flipCardBack.appendChild(cardInfo);

	};


//Events




let memocards = document.getElementsByClassName('memoFlip-card');

for (let i = 0; i <  memocards.length; i++) {
    memocards[i].addEventListener('click', checkMemotestCards, false);

};		


let memoZooms = document.getElementsByClassName('zoomInfo');


for (let i = 0; i <  memoZooms.length; i++) {
    memoZooms[i].addEventListener('mousemove', memoShowZoomInfoOverlay,false);

};	
/*
for (let i = 0; i <  memoZooms.length; i++) {
    memoZooms[i].addEventListener('mousemove', memoHideZoomInfoOverlay,false);

};	
*/



tilesPerRowMemotest(cardQty);
};

function tilesPerRowMemotest(cardQty){
	//let cardQty = cardQty;
	if (cardQty === 4){
		var j = 2; var k = 2;
	}else if (cardQty === 8){
		var j = 4; var k = 2;
	}else if (cardQty === 12){
		var j = 4; var k = 3;	

	}else if (cardQty === 16){
		var j = 4; var k = 4;
	}else if (cardQty === 20){
		var j = 4; var k = 5;
	}else if (cardQty === 24){
		var j = 4; var k = 6;
	}else if (cardQty === 30){
		var j = 6; var k = 5;
		
	}else if (cardQty === 36){
		var j = 6; var k = 6;
	}else if (cardQty === 42){
		var j = 6; var k = 7;
	}else if (cardQty === 48){
		var j = 6; var k = 8;
	};

		
	let row = document.getElementsByClassName('memoCard');
	for (i = 0; i < row.length; i++){
		row[i].style.height = `calc(90vh/${j})`;
		row[i].style.width = `calc(100vw/${k})`;
	};


memoCardBack()
};


function memoCardBack(){
	let cards = document.getElementsByClassName('memo-cardInfo');
	let memoFlipCards = document.getElementsByClassName('memo-flip-card-inner');
	let backgroundCard = document.getElementsByClassName('memo-flip-card-back');

	



	memoArray.splice(cards.length/2, memoArray.length-(cards.length/2));
	let randArray = [];
	//console.log(memoArray)
	for (i = 0; i < cards.length; i++){	randArray.push([i]);};
	shuffle(randArray);

	//console.log(randArray)
	for (j = 0; j < cards.length/2; j++ ){
		
			l = randArray[j]
			let tit = document.createElement('h3');
			let infoTit = memoArray[j][0];
			tit.innerHTML = infoTit; //infoTit;
			cards[l].appendChild(tit);	
			let idGen = memoArray[j][0].toLocaleLowerCase().split(' ');
			memoFlipCards[l].classList.add(idGen[0]);
			memoFlipCards[l].classList.add('Tit');
			backgroundCard[l].style.backgroundColor = memoArray[j][2];
		
	}
		
	for (k = 0; k < cards.length/2; k++ ){	
			m = randArray[k+(cards.length/2)];
			let type = memoArray[k][1][0];
			let info = memoArray[k][1][1];
			let idGen = memoArray[k][0].toLocaleLowerCase().split(' ');
			memoFlipCards[m].classList.add(idGen[0]);
			memoFlipCards[m].classList.add('Info');
			backgroundCard[m].style.backgroundColor = memoArray[k][2];
		
			if (type === 'img'){
		        let img = document.createElement('img');
		        img.src = info;
		        img.setAttribute('class','imgMemo');
		        cards[m].appendChild(img);

			  } else if (type === 'p') {
		        let para =  document.createElement('p');
		        para.innerHTML = info;
		        cards[m].appendChild(para);

			  } else if (type === 'h5'){
		        let h5 = document.createElement('h5');
		        h5.innerHTML = info;
		        cards[m].appendChild(h5);

			   } else if (type === 'li'){
			   	let list = document.createElement('ul');	
			    let li = document.createElement('li');
			    li.innerHTML = info;
			    list.appendChild(li);
			    cards[m].appendChild(list);

			  	} else if (type === 'iframe') {
			  	let	iframeDiv = document.createElement('div');
			   	iframeDiv.setAttribute('class', 'iframeDiv');
			   	let iframe = document.createElement('iframe');
			    iframe.setAttribute('allowFullScreen', '');
			    iframe.src = info;
			    iframeDiv.appendChild(iframe);
			    cards[m].appendChild(iframeDiv);
				          
			};

		};
	puntaje = generosQtyTotalNum * cardsQty + puntaje;
	score();
	//changeBGColorMemo()
};

//BG Color Memotes

let memoFondoColors = [];
function storeBGColorMemo(fondo){
	if(memoFondoColors.includes(fondo)){
		let colorIndex = memoFondoColors.indexOf(fondo);
		memoFondoColors.splice(colorIndex, 1);
	}else{
		memoFondoColors.push(fondo);
	}
	
}
function changeBGColorMemo(){
	//document.body.style.backgroundImage = `linear-gradient(180deg, grey, ${fondo})`;
	
	
	cardBackside = document.querySelectorAll('.memo-flip-card-back');
	for(tile of cardBackside){
		let color = memoFondoColors[random(memoFondoColors.length)];
		let randomLightness = Math.floor(Math.random() * 66) + 33;
		color = color.replace(50, randomLightness);
		tile.style.backgroundColor = `${color}`;
	
		
	}

function memoCardBgColor(){
	cardBackside = document.querySelectorAll('.memo-flip-card-back');
	for(tile of cardBackside){
		let color = memoFondoColors[random(memoFondoColors.length)];
		let randomLightness = Math.floor(Math.random() * 66) + 33;
		color = color.replace(50, randomLightness);
		tile.style.backgroundColor = `${color}`;
	
		
	}

}

	
/*
	let color = fondo;
	let randomLightness = Math.floor(Math.random() * 66) + 33;
	color = color.replace(50, randomLightness);

	document.getElementById('overlayInfo').style.backgroundColor = `${color}`;
	
	document.getElementById('l3Opcion').style.backgroundColor = `${fondo}`;
*/

}				





//Flip Cards


let firstCard = true;
let secondCard = false;
let cardsFliped = [];
let cardClassFirst;
let total = 0;

function checkMemotestCards(){
	
	let card = this.getAttribute('id');
	//console.log(card);
	if(secondCard){	document.getElementById('main').addEventListener('click', unflip());};	
	
	//card = card.id	
	card = card.replace('m', 'fci'); 
	cardsFliped.push(card)
	card = document.getElementById(card)
	card.style.transform = 'rotateY(180deg)';
	
	if (firstCard === true ){
		cardClassFirst = card.className;
		firstCard = false;
		secondCard = false;
		
		
	} else{

		let cardClassSecond = card.className;
		firstCard = true;
		secondCard = true;
		card = card.id	
		card = card.replace('m', 'fci'); 
		cardsFliped.push(card)
		card = document.getElementById(card)
		card.style.transform = 'rotateY(180deg)';


		if(cardClassFirst.includes('Tit') && cardClassSecond.includes('Info') ||
		   cardClassFirst.includes('Info') && cardClassSecond.includes('Tit')){
			let lastIndex =	cardClassFirst.lastIndexOf(' ');
			cardClassFirst = cardClassFirst.substring(0, lastIndex);
			lastIndex =	cardClassSecond.lastIndexOf(' ');
			cardClassSecond = cardClassSecond.substring(0, lastIndex);
			
			if(cardClassFirst === cardClassSecond){
				puntaje += 30;
				score();
				total++
				puntajeColor([0, 128, 0]);
			unflipable();
				if(total === cardsQty/2){findeJuego()};

			}else{
				puntaje -= 10;
				score();
				puntajeColor([255, 0, 0]);
											
			};	

		}else{
			puntaje -= 10;
			score();
			puntajeColor([255, 0, 0]);
							
		};
					
			
	};
};


function unflip(){
	for (i = 0; i < cardsFliped.length; i++){
		card = cardsFliped[i]
		card = document.getElementById(card)
		card.style.transform = 'rotateY(0deg)';
	};
cardsFliped = [];
};

function unflipable(){
	for (i = 0; i < cardsFliped.length; i++){
		card = cardsFliped[i]
		card = card.replace('fci', 'm'); 
		card = document.getElementById(card)
		card.onclick= '';
	};
cardsFliped = [];	

};
	
function findeJuego(){
	document.getElementById('reiniciar').style.display = 'none';

	let felicitaciones = document.createElement('div');
	felicitaciones.setAttribute('id', 'felicitaciones');
	
	let bravo = document.createElement('h1');
	bravo.textContent = 'FELICITACIONES';
	felicitaciones.appendChild(bravo)
	let puntajeTit = document.createElement('h2') 
	puntajeTit.textContent = `¡Lograste hacer ${puntaje} puntos!`;
	felicitaciones.appendChild(puntajeTit);

	document.getElementById('main').innerHTML = '';
	document.getElementById('memoSideBar').style.display = 'none';

	let playAgain = document.createElement('button');
	playAgain.textContent = 'Volver a jugar';
	playAgain.setAttribute('onclick',`newGame()`);
	playAgain.setAttribute('id','newGameBtn');
	felicitaciones.appendChild(playAgain);




	document.body.appendChild(felicitaciones);


	
	
};

function newGame(){
	if(document.getElementById('felicitaciones')){
		document.getElementById('felicitaciones').remove();
	}
	if(document.getElementById('reiniciar')){document.getElementById('reiniciar').style.display = 'none';}
	
	

	document.getElementById('first-page').style.display = 'grid';

	let selRegCartel = document.getElementsByClassName('selRegCartel');
	let regionMemotest = document.getElementsByClassName('regionMemotest');

	for (i = 0; i < selRegCartel.length; i++){
		selRegCartel[i].style.display = 'none';
		regionMemotest[i].style.filter = 'brightness(1)';
	}

	document.getElementById('noHayRegionesElegidas').style.display = 'block';
	isRegionSelected = false;
	document.getElementById('crearMemotest').disabled = true;
	total = 0;
	puntaje = 0;
	
	
	
}
/// Score

let puntaje = 0;

function score(){
	
	let scoreBoard = document.getElementById('puntaje');
	
	scoreBoard.textContent = `Puntaje: ${puntaje}`;

};

let endcolor = [27, 60, 154];
	
	let element = document.getElementById('memoSideBar');
	let steps = 100;


function puntajeColor(startcolor){
	
	var red_change = (startcolor[0] - endcolor[0]) / steps;
	var green_change = (startcolor[1] - endcolor[1]) / steps;
	var blue_change = (startcolor[2] - endcolor[2]) / steps;
	
	var currentcolor = startcolor;
	var stepcount = 0;
	//var timer = setInterval(function(){
    currentcolor[0] = parseInt(currentcolor[0] - red_change);
    currentcolor[1] = parseInt(currentcolor[1] - green_change);
    currentcolor[2] = parseInt(currentcolor[2] - blue_change);
    element.style.backgroundColor = 'rgb(' + currentcolor.toString() + ')';
    stepcount += 1;
    if (stepcount >= steps) {
        element.style.backgroundColor = 'rgb(' + endcolor.toString() + ')';
        clearInterval(timer);
    }
//}, 50);


}

/// Zoom memotest

function memoShowZoomInfoOverlay(){
	memoHideZoomInfoOverlay()
	let info = this.getAttribute('id')
	info = info.replace('zi', 'm'); 
		
	let memoOverlay = document.createElement('div');
	memoOverlay.setAttribute('class', 'memo-overlay');
	let main = document.getElementById('main');
	main.appendChild(memoOverlay);
	info = document.getElementById(info);
	memoOverlay.innerHTML = info.innerHTML;
	
	listenMemoInfoOverlay();
	//console.log(info)
	
}


function listenMemoInfoOverlay(){
	let memoOverlay = document.getElementsByClassName('memo-overlay');
	for(i = 0; i < memoOverlay.length; i++){
	memoOverlay[i].addEventListener('mouseout', memoHideZoomInfoOverlay,false);	
	}
	
}


function memoHideZoomInfoOverlay(){

	let memoOverlay = document.getElementsByClassName('memo-overlay');
	let main = document.getElementById('main');
	for(i = 0; i < memoOverlay.length; i++){
		main.removeChild(memoOverlay[i]);
	}
	
	
}