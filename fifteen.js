//window.onload=function(){
var emptyA; //empty space
var emptyB;
//var time;
var puzzlepieces;
var temp;
//var left_pos = 0; // left position control
//var top_pos = 0; // top position control
//var upTop = 0;  //  background image top control
//var left_back = 0; // background image left control
var mix= Math.floor((Math.random()*100)%4);// continously changing numbers for shuffle
//var memes= ["CryingJordan.jpg","harambememe.jpg","baby.jpg","loser.jpg"];
//var randum_meme = Math.floor(Math.random()*memes.length);
window.onload= function(){
	var shufflebutt = document.getElementById('shufflebutton');	
	var puzzle_area = document.getElementById('puzzlearea');
	puzzlepieces= puzzle_area.getElementsByTagName('div');
	//var puzzlepieces= $('#puzzlearea').children();	
	//orderpuzzle(memes[randum_meme]);
	//shufflepieces();
//}	
	orderpuzzle();
	shufflebutt.onclick= shufflepieces;
}


function orderpuzzle(){
	for(var i=0;i<puzzlepieces.length; i++){
		puzzlepieces[i].className = 'puzzlepiece';
		puzzlepieces[i].style.left= (i%4*100) + 'px';
		puzzlepieces[i].style.top = (parseInt(i/4)*100) + 'px';
		puzzlepieces[i].style.backgroundPosition= '-' + puzzlepieces[i].style.left  + ' ' + '-' + puzzlepieces[i].style.top;
		puzzlepieces[i].onmouseover=function(){
			if(moveable(parseInt(this.innerHTML))){
				this.style.backroundImage= "url(https://github.com/alexwillchill/info2180-project2/blob/master/seanbeans.jpg)";
				this.style.border= '3px solid red';
				this.style.border= '#006600';
			}
		}
		puzzlepieces[i].onclick=function(){
			if(moveable(parseInt(this.innerHTML))){
				move(this.innerHTML-1);
				if(done()){
					timer();
				}
				return;
			}
		}
		puzzlepieces[i].onmouseout=function(){
			this.style.color="#000000";
			this.style.border= "5px solid black";
		}
	}
	emptyA= '300px';
	emptyB= '300px';	
}	


function shufflepieces(){
	for(var i=0;i<250;i++){
		if(mix==0){
			var slide= slideup(emptyA,emptyB);
			if(slide!= -1){
				move(slide);
			}
		}
		if(mix==1){
			var slide=slidedown(emptyA,emptyB);
			if(slide!=-1){
					move(slide);
				
			}
		}
		if(mix==2){
			var slide= slideleft(emptyA,emptyB);
			if(slide!=-1){
				move(slide);
			}
		}
		if(mix==3){
			var slide=slideright(emptyA,emptyB);
			if(slide!=-1){
				move(slide);
			}
		} 
	}
}


function move(piec){
	temp=puzzlepieces[piec].style.top;
	puzzlepieces[piec].style.top= emptyB;
	emptyB= temp;
	temp=puzzlepieces[piec].style.left;
	puzzlepieces[piec].style.left= emptyA;
	emptyA= temp;
}		
		
			
function moveable(piece){// tests if piece is valid for movement
	if(slideup(emptyA,emptyB)==(piece-1)){
		return true;
	}
	if(slideright(emptyA,emptyB)==(piece-1)){
		return true;
	}
	if(slideleft(emptyA,emptyB)==(piece-1)){
		return true;
	}
	if(slidedown(emptyA,emptyB)==(piece-1)){
		return true;
	}
}


function slideleft(pieceA, pieceB){
	var pA = parseInt(pieceA);
	var pB = parseInt(pieceB);
	if (pA >= 1){
		for (var i = 0; i < puzzlepieces.length; i++){ 		
			if(parseInt(puzzlepieces[i].style.left) + 100== pA && parseInt(puzzlepieces[i].style.top)== pB){			
				return i;
			} 
		}
	}
	else{ 	
		return -1;
	}
}

function slideright(pieceA, pieceB) {
	var pA = parseInt(pieceA);
	var pB = parseInt(pieceB);
	if (pA < 300){	
		for (var i =0; i<puzzlepieces.length; i++){
			if(parseInt(puzzlepieces[i].style.left) - 100== pA && parseInt(puzzlepieces[i].style.top)== pB){ 			
				return i;
			}
		}
	}
	else{	
		return -1;
	} 
}

function slideup(pieceA, pieceB) {
	var pA = parseInt(pieceA);
	var pB = parseInt(pieceB);
	if (pB >= 1){	
		for (var i=0; i<puzzlepieces.length; i++){		
			if(parseInt(puzzlepieces[i].style.top) + 100== pB && parseInt(puzzlepieces[i].style.left)== pA){ 			
				return i;
			}
		} 
	}
	else{ 	
		return -1;
	}
}

function slidedown(pieceA, pieceB)
{
	var pA = parseInt(pieceA);
	var pB = parseInt(pieceB);
	if (pB < 300){	
		for (var i=0; i<puzzlepieces.length; i++){		
			if(parseInt(puzzlepieces[i].style.top) - 100== pB && parseInt(puzzlepieces[i].style.left)== pA){ 			
				return i;
			}
		}
	}
	else{	
		return -1;
	} 
}



function timer(){
	var time = Date.now();
	var running = setInterval(run, 10); // Save this so we can clear/cancel it later

	setTimeout(function(){        // Set a timer
  		clearInterval(running);      // Stop the running loop
  		alert('Game over!');         // Let the user know, do other stuff here
	}, 30000);                     // time in miliseconds before the game ends
}

	

/*function meme(){
	//var memecount= Math.floor(Math.random()*4);
	switch(randum){
		case 0:
			puzzlepieces.css({"background-image":"https://github.com/alexwillchill/info2180-project2/blob/master/cryingjordan1.jpg)"});
		break;
		case 1:
			puzzlepieces.css({"background-image": "url(https://github.com/alexwillchill/info2180-project2/blob/master/seanbeans.jpg)"});
		break;
		case 2:
			puzzlepieces.css({"background-image":"url(https://github.com/alexwillchill/info2180-project2/blob/master/grumpycat.jpg)"});
		break;
		case 3:
			puzzlepieces.css({"background-image":"url(https://github.com/alexwillchill/info2180-project2/blob/master/fry.jpg)"});
		break;
		default:
			puzzlepieces.css({"background-image":"url(https://github.com/alexwillchill/info2180-project2/blob/master/baby.jpg)"});	

	}
}


function back_pic(leftpos,toppos){
	return (leftpos + "px" + " " + toppos + "px")
}

orderpuzzle();

meme();

shufflebutt.click(shufflepieces);

puzzlepieces.click(move);


}




   //line up puzzle	
	for(var x=0; x< puzzlepieces.length; x++){
		var left_calc=
		puzzlepieces[x].className = "Tile";
		puzzlepieces[x].style.left = left_pos + "px";
		puzzlepieces[x].style.top = top_pos + "px"; 
		puzzlepieces[x].style.backroundImage = "url('./img/"+memez+"')";
		left_pos=left_pos + 100;
	    if(left_pos > 300){
			top_pos= top_pos + 100;
			left_back= left_back - 100;
			left_pos=0;
		} 
		
		puzzlepieces[x].style.backgroundPosition= "-" + puzzlepieces[x].style.left + " " + "-" + puzzlepieces[x].style.top;
		puzzlepieces[x].onmouseover = function(){
			if(moveable(this.style.left,this.style.top)){
				this.classList.add("piece_is_mobile");
				this.style.cursor = "pointer";
			}		
		}

		puzzlepieces[x].onmousedown = function(){
			if(moveable(this.style.left, this.style.top)){
				var piecehold= move(this.style.left,this.style.top);
				this.style.left= piecehold[0];

			}
		}

		puzzlepieces[x].onmouseout= function(){
			this.style.cursor= "menu";
			this.classList.remove("piece_is_mobile");
		}
	}
	left_pos= 300;
	top_pos=300;
}*/
