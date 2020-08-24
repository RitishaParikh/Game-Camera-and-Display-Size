class Game{
    constructor(){
        
    }
// it wil read the gamestate from the database
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

//it will write the new state to the database
    update(state){
       database.ref("/").update({
         gameState: state  
       })  
    }
    
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef=await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val()
                player.getCount();
            }
            
            form=new Form();
            form.display();
        }

        car1= createSprite(100, 200);
        car2= createSprite(300, 200);
        car3= createSprite(500, 200);
        car4= createSprite(700, 200);

        cars =[car1, car2, car3, car4];
    }

    play(){
        form.hide();
        //textSize(30);
        //text("Game Start", 120, 100);
        Player.getPlayerInfo(); //Calling the static function using the name of the class
        if(allPlayers!==undefined){
            var index = 0;
            var x = 0;
            var y;
            //var posY = 130;
            for(var i in allPlayers){
                /*if(i==="player" + player.index){
                    fill("red")
                 }
                 else{
                    fill("black");
                 }
                 posY = posY+20;
                 text(allPlayers[i].name + ": " + allPlayers[i].distance, 120, posY);
                 */
                index = index+1;
                x = x+200;
                y = displayHeight-allPlayers[i].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index===player.index){
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }

            }

        }
        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance = player.distance + 50;
            player.update();
        }

        drawSprites();
    }
}

/*
database.ref().update() - update the database reference
"/" - refers to main database inside which gamestate is created
*/
