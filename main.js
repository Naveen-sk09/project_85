//Create a reference for canvas 
canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");


//Give specific height and width to the car image
gc_width =75;
gc_height=100;

bg_image = "parkingLot.jpg";
gc_image = "car2.png";

//Set initial position for a car image.
gc_x=5;
gc_y=225;

function add() {
	//upload car, and background images on the canvas.
	bg_imgtag = new Image();
	bg_imgtag.onload = uploadBackground;
	bg_imgtag.src = bg_image;


	gc_imgtag = new Image();
	gc_imgtag.onload = uploadgreencar;
	gc_imgtag.src = gc_image;

}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(bg_imgtag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(gc_imgtag,gc_x,gc_y,gc_width,gc_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
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

function up()
{
	//Define function to move the car upward
	if(gc_y>=0)
	{
		gc_y=gc_y - 10;
		console.log("When up arrow is pressed, x = "+gc_x+"| y = " +gc_y);
		uploadBackground();
	uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward.
	if(gc_y<=500)
	{
		gc_y = gc_y + 10;
		console.log("When down arrow is pressed, x = "+gc_x+"| y = " +gc_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(gc_x>=0)
	{
		gc_x = gc_x - 10;
		console.log("When left arrow is pressed, x = "+gc_x+"| y = " +gc_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(gc_x<=700)
	{
		gc_x= gc_x + 10;
		console.log("When right arrow is pressed, x = "+gc_x+"| y = " +gc_y);
		uploadBackground();
		uploadgreencar();
	}
}
