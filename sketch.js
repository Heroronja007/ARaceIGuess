var ball;
var database, positions;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var child = database.ref("Ball/position")
    child.on("value", redop, err)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("Ball/position").set({
        x: ball.x+x, 
        y: ball.y+y
    })
}

function redop(data){
    positions = data.val();
    ball.x = positions.x;
    ball.y = positions.y;
}

function err(){
    console.log("error")
}