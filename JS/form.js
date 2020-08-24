class Form{
    constructor() {
         this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h3");

    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();


    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(displayWidth/2-50, 0);

        this.input.position(displayWidth/2-40, displayHeight/2-80);
        this.button.position(displayWidth/2+30, displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount++;
            player.index = playerCount;
            player.update();
            
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2-70, displayHeight/4);
        });

    }
}

/*
HTML
1. Head - Scripts & the sources
2. Body - the content of the page to be displayed


BODY
several elements:

1. h1, h2, h3: display the heading of different sizes
2. input: to collect data from user
3. button

Document Object Model (DOM)
-Library: p5 Dom library


Title : "Car Racing Game"
-h2 element
-change the html content inside the element
-position the title on the canvas
*/