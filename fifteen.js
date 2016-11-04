window.onload=function(){
var emptyA= 0; //empty space
var emptyB= 0;
var left_pos = 0; // left position control
var top_pos = 0; // top position control
var upTop = 0;  //  background image top control
var left_back = 0; // background image left control
var randum= Math.floor(Math.random()*4);// continously changing numbers for shuffle
//var memes= ["CryingJordan.jpg","harambememe.jpg","baby.jpg","loser.jpg"];
//var randum_meme = Math.floor(Math.random()*memes.length);
//window.onload= function(){
var shufflebutt = document.getElementById('shufflebutton');	
//var puzzle_area = document.getElementById('puzzlearea');
//var puzzlepieces= puzzle_area.getElementsByTagName("div");
var puzzlepieces= $('#puzzlearea').children();	
	//orderpuzzle(memes[randum_meme]);
	//shufflepieces();
//}	

function shufflepieces(){
	var check= 0
	var temp= 0;
	var temp2= 0;	
	var randumpiece= puzzlepieces[randum];//randomly selects pieces
	var tpos= $(obj).position().top;
	var lpos= $(obj).position().left;
	if(moveable($(obj))){
		temp= emptyA;
		temp2= emptyB;
		emptyA=tpos;
		emptyB=lpos;
		tpos=temp;
		lpos=temp2;

		$(obj).css({left: lpos,top: tpos});
		check++;
		if(check!==99){ // ensures that peces are randomized
			shufflepieces();//call back function to repeat process
		}
		else{
			check= 0
		}
	}
	else{
		alert("Pieces not moveable");
		shufflepieces();
	}
}

function orderpuzzle(){
		
	var place= 0;
	puzzlepieces.addClass('puzzlepieces');
	puzzlepieces.each(function(){
		$(this).css({left: left_pos, top: top_pos, backgroundPosition: back_pic(left_back,upTop)});
		if(place< 4){
			left_pos=left_pos+100;
			place++;
			left_back=left_back-100;
		}
		else if(place== 4){
			top_pos=top_pos+100;
			place++;
			upTop= 300;
			left_pos=0;
			left_back=0;
		}
		else if((place>= 5)&&(place< 9)){
			left_pos=left_pos+ 100;
			place++;
			left_back=left_back-100;

		}
		else if(place== 9){
			top_pos=top_pos+100;
			place++;
			upTop=200;
			left_pos=0;
			top_pos=0;
		}
		else if((place>= 10)&& (place < 14)){
			left_pos= left_pos+100;
			place++;
			left_back=left_back-100;
		}
		else if(place==14){
			top_pos=top_pos+100;
			place++;
			upTop=100;
			left_pos=0;
			left_back=0;
		}
		else if((place>=13)&&(place< 18)){
			left_pos= left_pos+100;
			place++;
			left_back=left_back-100;
		}
		else if(place== 18){
			emptyB=top_pos;
			emptyA=left_pos;
		}
	});

}


function move(){
	var left_move= $(this).position().left;
	var top_move= $(this).position().top;
	var temp=0;
	var temp2=0;
	if(moveable($(this))){
		temp= emptyA;
		temp2= emptyB;
		emptyB=top_move;
		emptyA=left_move;
		left_move=temp;
		top_move=temp2;

	}
}		
		
			
function moveable(piece){// tests if piece is valid for movement
	if(piece.position().left== (emptyB + 100) || piece.position().left== (emptyB - 100)){
		if(piece.position().top== emptyA){
			return true;
		}
	}
	if(piece.position().top== (emptyA + 100) || piece.position().top== (emptyA- 100)){
		if(piece.position().left== emptyB){
			return true;
		}
	}
}	
	

function meme(){
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
	/*for(var x=0; x< puzzlepieces.length; x++){
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