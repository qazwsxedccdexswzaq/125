difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(120,190);

    canvas = createCanvas(550,550);
    canvas.position(750,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background('#FDFD96');
    textSize(difference);
    fill('#aec6cf');
    text('Hello',200,200);
}



function modelLoaded()
{
    console.log('model intialized');
}

function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+leftWristX+"rightWristX = "+rightWristX+ "difference = "+difference);
    }
}