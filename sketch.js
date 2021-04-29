var ball;
var db, position

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    db = firebase.database()
    var ballRef = db.ref("ball/position")
    ballRef.on("value", readPosition, showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   db.ref("ball/position").update({
    y: ball.y + y,
    x: ball.x + x
   })
       
   
    
}

function showError(){
    console.log("there is no error.")
}

function readPosition(data){
 var position = data.val()
   ball.x = position.x
   ball.y = position.y
}