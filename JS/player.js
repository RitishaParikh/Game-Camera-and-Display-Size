class Player{
    constructor(){
      this.name = null;
      this.index = null; 
      this.distance = 0;
    }  
    
//to read the count from the database
    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", (data)=>{
            playerCount = data.val(); 
        })
    }
//to write count in the database
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        });
    }
// to write name in the database
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name:this.name, distance:this.distance
        })
    }

    static getPlayerInfo(){
        var PlayerInfo = database.ref("players");
        PlayerInfo.on("value", (data)=>{
            allPlayers = data.val();

        })
    }
}