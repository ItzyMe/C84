//Chmanado o Canvas:
canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
marsImageArray=["img.jpg","img2.jpg","img3.jpg","img4.jpg"]
randomNumber=Math.floor(Math.random()*4)
//Tamanho do rover:
roverWidth = 100;
roverHeight = 90;

//Imagem de fundo e do rover:
backgroundImage = marsImageArray[randomNumber];
//Posição inicial do rover:
roverX = 10;
roverY = 10;
roverImage="rover.png"
//Função pra fazer o background aparecer:
function uploadBackground() {
ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height)	
}

//Função pra fazer o rover aparecer:
function uploadrover() {
	ctx.drawImage(roverImgTag,roverX,roverY,roverWidth,roverHeight)	
	
}

function add() {
	backgroundImgTag = new Image()       //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground        // ajustando uma função, ao carregar essa variável
	backgroundImgTag.src =backgroundImage// carregar a imagem

	roverImgTag = new Image()           //definindo uma variável com uma nova imagem
	roverImgTag.onload = uploadrover     // ajustando uma função, ao carregar essa variável
	roverImgTag.src = roverImage
	      // carregar a imagem
}

//Adicinar "escutador de eventos: addEventListener"
window.addEventListener("keydown",myKeyDown)


//FUNCTIONS:
function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}

		//COMPLETAR
}
 function up(){
if (roverY>=0) 
{
	roverY=roverY-10;
	console.log("Quando direcional cima for pressionada, x = " + roverX + " | y = " +roverY);
	uploadBackground();
	uploadrover()
}
}

function down(){
	if (roverY<=500) 
	{
		roverY=roverY+10;
		console.log("Quando direcional cima for pressionada, x = " + roverX + " | y = " +roverY);
		uploadBackground();
		uploadrover()
	}
	}
    function left(){
		if (roverX>=0) 
		{
			roverX=roverX-10;
			console.log("Quando direcional cima for pressionada, x = " + roverX + " | y = " +roverY);
			uploadBackground();
			uploadrover()
		}
		}    

		function right(){
			if (roverX<=700) 
			{
				roverX=roverX+10;
				console.log("Quando direcional cima for pressionada, x = " + roverX + " | y = " +roverY);
				uploadBackground();
				uploadrover()
			}
			}