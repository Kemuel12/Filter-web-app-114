function preload() {}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300)
    video.hide();
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialised");
}

function gotPoses(result)
{  if(result.length>0) 
   {
       console.log(result);
       NoseX=result[0].pose.nose.x
       NoseY=result[0].pose.nose.y
   }    

function draw(){
}

function take_snapshot({
save="myfilteredimage.png"
})
}