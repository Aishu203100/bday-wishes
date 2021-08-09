var canvas = new fabric.Canvas('myCanvas');
 var x = document.getElementById("myAudio");

function new_image()
{
	fabric.image.fromURL('https://firebasestorage.googleapis.com/v0/b/c77-project-7ea75.appspot.com/o/BirthdayImage.jpg?alt=media&token=1e7254f6-5734-401b-a115-d5bc223d0f15', function(Img){
block_image_object = Img;

block_image_object.scaleToWidth(700);
block_image_object.scaleToHeight(510);
block_image_object.set({
top:0,
left:0
});
canvas.add(block_image_object);
    });
	
}

function playSound(){
	x.play()
}
function startbday()
{
var inputvalue;
inputvalue = document.getElementById("bdayPersonInput").value;
document.getElementById("bdayName").innerHTML = inputvalue;
document.getElementById("soundbtn").innerHTML = inputvalue;
}
function hideshow()
{
	document.getElementById("whosBday").style.display = "none";
	document.getElementById("BdayName").style.display= "inline";
}
