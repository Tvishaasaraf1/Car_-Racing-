class Form {

    constructor() {
        this.title = createElement('h2')
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.reset = createButton('Restart');
    }
    hide(){
        this.title.hide()  
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      
        this.title.html("Car Racing Game");
        this.title.position(width/2-120, 0);
      this.reset.position(width-250,50);
      this.input.position(width/2-90, height/2-150);
      this.button.position(width/2+30, height/2-50);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.updateInfo();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(width/2-100, height/4);
      });
      this.reset.mousePressed(()=>{
        game.updateState(0)
        player.updateCount(0)
      })
    }
  }