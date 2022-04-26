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
}
}