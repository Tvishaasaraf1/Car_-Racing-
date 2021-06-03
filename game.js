class Game {
    constructor(){

    }

    //read the gameState value from database
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val()
        })
    }

    //write the gameState value to the database
    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }

     async start(){
         if(gameState===0){
             player = new Player()
           var playerCountref = await database.ref("playerCount").once("value")
             if(playerCountref.exists()){
                playerCount = playerCountref.val()
             player.getCount()
             }
             form  = new Form()
             form.display()
         }
         car1 = createSprite(100,200)
         car1.addImage(car1_Img)
         car2 = createSprite(300,200)
         car2.addImage(car2_Img)
         car3 = createSprite(500,200)
         car3.addImage(car3_Img)
         car4 = createSprite(700,200)
         car4.addImage(car4_Img)
         cars = [car1,car2,car3,car4]
     }
 //!== not equal to
     play(){
         form.hide()
         Player.getplayersinfo()
         if(players!==undefined){
             background("black")
             image(track_Img,0,-height*4,width,height*5)
             var index = 0
             var x = 175 
             var y 
             for(var i in players){
                 index = index+1
                 x = x+225
                 y = height-players[i].distance
                 cars[index-1].x = x 
                 cars[index-1].y = y
                 if(index===player.index){
                     fill("turquoise")
                     ellipse(x,y,60)
                     camera.position.x = width/2 
                     camera.position.y = cars[index-1].y
                 }
             }
             player.getcarsAtEnd()
             if(player.distance>4290){
                 gameState = 2
                 player.rank = player.rank+1
                 Player.updatecarsAtEnd(player.rank)
             }
         }
         if(keyDown("up")&&player.index!==null){
             player.distance = player.distance+10
             player.updateInfo()
         }
         drawSprites()
     }

     end(){
         console.log("End of Game")
         console.log(player.rank)
     }
}