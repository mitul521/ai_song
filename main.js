song="";
leftwristX="";
leftwristY="";
rightwristX="";
rightwristY="";
function preload(){
song = loadSound("baby.mp3")
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    pose=ml5.poseNet(video,modelloaded);
    pose.on('pose',gotpose);
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
song.play();
//baby.setVolume(0.5);
//baby.rate(1.5);
}
function modelloaded(){
    console.log('posenet is on');
}
function gotpose(result){
if(result.length>0){
    console.log(result);
   
    leftwristX=result[0].pose.leftWrist.x;
    leftwristY=result[0].pose.leftWrist.y;
    console.log("leftwrist X "+ leftwristX + "leftwrist Y "+ leftwristY);
     
    rightwristX=result[0].pose.rightWrist.x;
    rightwristY=result[0].pose.rightWrist.y;
    console.log("rightwrist x "+ rightwristX + "rightwrist Y "+rightwristY);
}
}