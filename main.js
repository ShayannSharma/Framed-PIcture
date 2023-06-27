function setup(){
    canvas = createCanvas(1080,1080)
    canvas.position(400,180)
    video = createCapture(VIDEO)
    video.hide()
 
}
function draw(){
    image(video,65,45,920,700)
    fill("brown")
    fill("brown")
    rect(25,10,50,750)
    rect(975,10,50,750)
    rect(25,10,950,50)
    rect(25,700,950,50)
    fill("red")
    stroke("black")
    circle(50, 50, 100)
    circle(1000, 50, 100)
    circle(50, 720, 100)
    circle(1000, 720, 100)

}
function snap(){
    save("pic_p5.png")
}