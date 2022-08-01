canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

background_imgTag = "concrete-road.jpg"; //o backgroundImg é a outra imagem "parkingLot.jpg" //a var não tem tag, seria backgroundImg
greencarImage = "car2.png";

greencar_width = 75;
greencar_height = 100;

greencar_x = 5;
greencar_y = 225;

function add() {
    background_imgTag = new Image;
    background_imgTag.onload = uploadBackground;
    backgroundImageTag.src = background_imageTag;

    greencarImageTag.src = greencarImage;
    // cadê as outras informações para add uma nova imagem e o onload? (para o carro, faz o mesmo do background, as 3 linhas)
}

function uploadBackground(){
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadGreenCar(){
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);

}

function up() {
        
    if (greencar_y >= 0) {
        
        greencar_y = greencar_y - 10; 
        console.log("Quando a seta para cima for pressionada, X = " + greencar_x + "Y = " + greencar_x);
        uploadBackground();
        uploadgreencar();

    }
}

function down() {
    
    if (greencar_y <= 500) {
        
        greencar_y = greencar_y + 10; 
        console.log("Quando a seta para baixo for pressionada, X = " + greencar_x + "Y = " + greencar_x);
        uploadBackground();
        uploadgreencar();
        
    }
}

function left() {
    
    if (greencar_x >= 0) {
        
        greencar_x = greencar_x - 10; 
        console.log("Quando a seta para esquerda for pressionada, X = " + greencar_x + "Y = " + greencar_x);
        uploadBackground();
        uploadgreencar();
        
    }
}

function right() {
    
    if (greencar_x >= 700) {
        
        greencar_x = greencar_x + 10; 
        console.log("Quando a seta para esquerda for pressionada, X = " + greencar_x + "Y = " + greencar_x);
        uploadBackground();
        uploadgreencar();
    }
}


// essa parte fica antes de criar as funções das setas, as funções sempre vem depois
// clocar abaixo da "function uploadGreenCar"
window.addEventListener("keydown", myKeyDown);
console.log(myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}
