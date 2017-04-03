var f=2;												//change le nombre de carrés
	var L=window.innerWidth;
  var l=window.innerHeight;




var fibo = new Array(f);

fibo[0]=1;
fibo[1]=1;
var slider;
var zButton;
var dButton;
var sButton;
var pButton;
var checkBox;
var texte;



function square(x,y,c){ 
	
	stroke('white');
	line(x,y,x+c,y);
	line(x,y,x,y+c);
	line(x+c,y,x+c,y+c);
	line(x,y+c,x+c,y+c);
	
	
	
}

function zoom(){															//methode qui "zoom" en agrandissant les longueurs
	for(var k=0;k<fibo.length;k++){
		fibo[k]=fibo[k]*2;
	}
	
}
function dezoom(){															//methode qui "dezoom" en diminuant les longueurs
	for(var k=0;k<fibo.length;k++){
		fibo[k]=fibo[k]*0.5;
	}
	
}

function suivant(){
	f=f+1;
}


function precedent(){
	if(f>=3){
		f=f-1;
	}
			
	

}


function setup(){
	var L=window.innerWidth;
  var l=window.innerHeight;
  
	
	createCanvas(L,l);
	background(0);
	
	zoom();
    zoom();
    
    zoom();
	//slider = createSlider(2, 50, 1);
  //slider.position(20, 60);
 
  pButton = createButton('Generation Precedente');
  pButton.position(20, 20);
  pButton.mousePressed(precedent);
  
  sButton = createButton('Generation Suivante');
  sButton.position(170, 20);
  sButton.mousePressed(suivant);
  
  zButton = createButton('zoom');
  zButton.position(20, 40);
  zButton.mousePressed(zoom);
  
  dButton = createButton('dezoom');
  dButton.position(70, 40);
  dButton.mousePressed(dezoom);
  
  
 
  
  checkBox =  createInput(0,1,0);               
  checkBox.attribute("type","checkbox");     
  checkBox.position(270,40);
  checkBox.attribute('checked', null); 
  
}



function draw(){
	
	var L=window.innerWidth;
  var l=window.innerHeight;
  

	
	var X=L/2;
 	var Y=l/2;
 	var incr=1;
 	var sX=X;
 	var sY=Y;
 	fibo.length=f;
	//f = slider.value();
	
	
		for(var i = 0; i < fibo.length-2 ; i++){
			fibo[i+2]=fibo[i]+fibo[i+1];
		
		}  

	background(0);


  for(var j= 0 ;j<fibo.length;j++){
 	
 		if (checkBox.elt.checked) {
    arc(sX+fibo[1],sY+fibo[1],2*fibo[1],2*fibo[1],PI,-PI/2);
  } 
 		
 		fill(0);
 		
 		square(X,Y,fibo[j]);
 	
 	
 	
 		if(incr==1){
 			X+=fibo[j];
 			if (checkBox.elt.checked) {
    						arc(X,Y+fibo[j+1],2*fibo[j+1],2*fibo[j+1],-PI/2,0);
  					} 
 			
 			fill(0);

 			}else if(incr==2){
 								X-=fibo[j-1];
 								Y+=fibo[j];
 								if (checkBox.elt.checked) {
    									arc(X,Y,2*fibo[j+1],2*fibo[j+1],0,PI/2);
  									} 
 							
 								fill(0);
 	
 								}else if(incr==3){
 												X=X-fibo[j+1];
 												Y=Y-fibo[j-1];
 												if (checkBox.elt.checked) {
  														 arc(X+fibo[j+1],Y,2*fibo[j+1],2*fibo[j+1],PI/2,PI);
  													} 
 												
 												fill(0);	
 		
 												}else if(incr==4){
 																Y-=fibo[j+1];
 																incr=0;
 																if (checkBox.elt.checked) {
    																arc(X+fibo[j+1],Y+fibo[j+1],2*fibo[j+1],2*fibo[j+1],PI,-PI/2);
  																} 
 																
 																fill(0);
 
 																}	
 		incr+=1;
 
 }
	
noStroke();
fill(255);
textAlign(CENTER);
textFont("Georgia");
textSize(15);
text("Afficher la courbe",200,55);

 
}