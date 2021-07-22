function preload(){
}
function setup(){
canvas=createCanvas(640,480);
canvas.position(150,150);
video=createCapture(VIDEO);
video.hide();
tint_colour="";
}
function draw(){
image(video,230,150,220,200);
let c=color('red');
fill(c);
circle(90,90,90)
circle(550,90,90)
circle(90,400,90)
circle(550,400,90)
let b=color('green')
fill(b);
rect(135,390,370,20)
rect(135,80,370,20)
rect(80,135,20,220)
rect(540,135,20,220)
}
function take_snapshot(){
save('image.png');
}
