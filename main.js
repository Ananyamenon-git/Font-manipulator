difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video  = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);
    
    posenet = ml5.posenet(video,modelLoaded);
    posenet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log("Posenet is initialized");
    
}

function gotPoses(){
    if(result.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX)
    }
   
}

function draw(){
    background('#6C91C2');
    textSize(difference);
    fill('FFE787')
    Text('Ananya',50,400);
}