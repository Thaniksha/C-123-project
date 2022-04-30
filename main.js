leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,450);
    canvas=createCanvas(500,450);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modeloaded);
    poseNet.on('pose',gotPose);
}

function modeloaded(){
    console.log("model loaded successfully")
}

function gotPose(result){
if(result.length>0){
    console.log("result")

    leftWristX=result[0].pose.leftWrist.x;
    rightWristX=result[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
}
}

function draw(){
    background('grey');
    textSize(difference);
    text('Thaniksha',50,400);
    fill('black')

}