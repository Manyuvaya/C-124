function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)
    canvas = createCanvas(550, 430)
    canvas.position(570, 80)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", got_results)
}

function modelLoaded() {
    console.log("poseNet Is Loaded")
}

function got_results(results) {
    if (results.length > 0) {
        console.log(results)
    }


}
function draw(){
    background("red")
circle(250,200,50)
}