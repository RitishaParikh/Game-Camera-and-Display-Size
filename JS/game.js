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
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start", 120, 100);
        Player.getPlayerInfo(); //Calling the static function using the name of the class
        if(allPlayers!==undefined){
            var posY = 130;
            for(var i in allPlayers){
                if(i==="player" + player.index){
                    fill("red")
                 }
                 else{
                    fill("black");
                 }
                 posY = posY+20;
                 text(allPlayers[i].name + ": " + allPlayers[i].distance, 120, posY);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance = player.distance + 50;
            player.update();
        }
    }
}

/*
database.ref().update() - update the database reference
"/" - refers to main database inside which gamestate is created
*/
