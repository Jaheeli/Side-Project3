// JavaScript Document
function draw()
{
var canvas = document.getElementById("flag");
if(canvas.getContext)
{
var ctx = canvas.getContext("2d");

//Declaring the width and height of the flag.
var hoist_width = 300;
var fly_length = 570;

//Drawing a rectangle and filling it with red. View Image
ctx.fillStyle = "rgb(200, 0, 0)";
ctx.fillRect(0, 0, fly_length, hoist_width);

//Drawing the white stripes View Image
var stripe_width = 0.0769 * hoist_width;
ctx.fillStyle = "rgb(250,250,250)";
for(var s = 1; s < 13; s++)
{
ctx.fillRect(0, stripe_width*s, fly_length, stripe_width);
s =s +1;
}

//Drawing the blue rectangle View Image
var union_width = 0.5385 * hoist_width;
var union_length = 0.76 * hoist_width;

ctx.fillStyle = "rgb(0, 0, 150)";
ctx.fillRect(0, 0, union_length, union_width);

//Drawing the stars View Image
ctx.fillStyle = "rgb(250, 250, 250)";
ctx.strokeStyle = "rgb(250, 250, 250)";
ctx.stroke = "rgb(200, 0, 0)";
ctx.moveTo(10, 40);
ctx.lineTo(100, 40);
//ctx.stroke();

var e = 0.054 * hoist_width;
var f = e;

var g = 0.063 * hoist_width;
var h = g;

var xpos = 0;
var ypos = 0;
var numstars = 0;

for(var row = 1; row <= 9; row++)
{
if(row%2 == 1)
{
numstars = 6;
xpos = g/2;
}
else
{
numstars = 5;
xpos = g/2+h;
}
ypos = row*e-e/4;

for(var star = 1; star <= numstars; star++)
{
drawStar(ctx, xpos, ypos, 0.1);
xpos = xpos + 2*h;
}
}

}
}

function drawStar(ctx, tx, ty, scale)
{
ctx.save();

//Values below will be translated and scaled as set here
ctx.translate(tx, ty);
ctx.scale(scale, scale);

//Draw five pointed star
ctx.beginPath();
ctx.moveTo(30, 30);
ctx.lineTo(150, 30);
ctx.lineTo(50, 90);
ctx.lineTo(90, -5);
ctx.lineTo(130, 90);
ctx.lineTo(30, 30);
ctx.closePath();
ctx.fill();

ctx.restore();
}