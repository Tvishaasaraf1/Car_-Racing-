var database,player,form,game,playerCount,gameState = 0,players;
var car1, car2, car3, car4, cars

function preload(){
    car1_Img = loadImage("car1.png")
    car2_Img = loadImage("car2.png")
    car3_Img = loadImage("car3.png")
    car4_Img = loadImage("car4.png")
    track_Img = loadImage("track.jpeg")
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
   if(playerCount===4){
       game.updateState(1)
   }
   if(gameState===1){
       clear()
       game.play()
   }
   if(gameState===2){
       game.end()
   }
}

