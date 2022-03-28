leftEarX = "";
leftEarY ="";
rightEarX = "";
rightEarY = "";
noseX = "";
noseY = "";
tongueX = "";
tongueY = "";
function preload(){
dog_filter_left_ear = loadImage("dog-filter-left-ear.png");
dog_filter_right_ear = loadImage("dog-filter-right-ear.png");
dog_filter_nose = loadImage("dog-filter-nose.png");
dog_filter_tongue = loadImage("dog-filter-tongue.png");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 500);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotposes);
}
function draw(){
    image(video, 0, 0, 600, 500);
image(dog_filter_left_ear, leftEarX, leftEarY, 90, 90   );
image(dog_filter_right_ear, rightEarX, rightEarY, 75, 75);
image(dog_filter_nose, noseX, noseY, 75, 75);
image(dog_filter_tongue, tongueX, tongueY, 75, 75);

}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
         rightEarX= results[0].pose.rightEye.x+100;
        rightEarY = results[0].pose.rightEye.y-150;
        leftEarX= results[0].pose.leftEye.x-170;
        leftEarY = results[0].pose.leftEye.y-150;
        noseX= results[0].pose.nose.x-40;
        noseY = results[0].pose.nose.y-20;
        tongueX= results[0].pose.nose.x-35;
        tongueY = results[0].pose.nose.y+40;
        
        console.log("Left Ear x= " + leftEarX);
        console.log("Left Ear y=" + leftEarY);
        console.log("Right Ear x= " + rightEarX);
        console.log("Right Ear y=" + rightEarY);
        console.log("Nose x= " + noseX);
        console.log("Nose y=" + noseY);
        console.log("Tongue x= " + tongueX);
        console.log("Tongue y=" + tongueY);
    }
}
function modelLoaded(){
    console.log("Posenet is Initialized");
}
function upload(){
    save("Dog-Filter.png");
}