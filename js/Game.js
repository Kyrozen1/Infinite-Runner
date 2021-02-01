class Game{
  constructor(){
    
  }

  getState(){
    var getState = database.ref('gameState');
    getState.on("value",function(data){
       gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    person = createSprite(300, 430);
    person.addAnimation("running", person_running);
    person.scale=0.28;
    //person.debug=true;
    person.setCollider("rectangle", 0, 0, 200, 450); 
    person2 = createSprite(300, 635);
    person2.addAnimation("running", person_running);
    person2.scale=0.28;
    //person2.debug=true;
    person2.setCollider("rectangle", 0, 0, 200, 450);   
    people = [person, person2];
    console.log("hhi")
  }

  play(){
    form.hide();
    Player.getPlayerInfo(); 
    obstacleGroup = createGroup();
    obstacle2Group = createGroup();
    scoreGroup = createGroup();
    stroke("black")
    text("Score: "+ score, 550,15);
    if(Players !== undefined){
      background(rgb("24,22,23"))
      image(backImage,x-665,-50,displayWidth+60,400);

      image(roadImage,-340,300,4000,440);
      image(roadImage,1660,300,4000,440);
      image(roadImage,3660,300,4000,440);
      image(roadImage,5660,300,4000,440);

      var index = 0;
      var x = 0;
      var y = 430;

      for(var plr in Players){
        index = index + 1 ;
        y = y + 205;
        x = 300;
        people[index-1].x = x;
        people[index-1].y = y;
       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = people[index-1].x;
          camera.position.y = displayHeight/2;
        }
      }
      bull = createSprite(300, 430, 10, 10);
      bull.addAnimation("bull", bull_running);
      bull.scale=0.35;
      //bull.debug=true;
      bull.setCollider("rectangle", 0, 0, 370, 300);
      bull2 = createSprite(300, 635, 10, 10);
      bull2.addAnimation("bull", bull_running);
      bull2.scale=0.35;
      //bull2.debug=true;
      bull2.setCollider("rectangle", 0, 0, 370, 300);
      bull.y=people[0].y;
      bull.x=people[0].x-200;
      bull2.y=people[1].y;
      bull2.x=people[1].x-200;
    }
    if(obstacleGroup.isTouching(bull)){
      obstacleGroup.destroyEach();
    }
    if(obstacle2Group.isTouching(bull)){
      obstacle2Group.destroyEach();
    }
    if(obstacle2Group.isTouching(person)){
      gameState = 2;
      die.play();
    }
    if(obstacleGroup.isTouching(person)){
      gameState = 2;
      die.play();
    }
    if(scoreGroup.isTouching(person)){
      score = score + 1;
      scoreGroup.destroyEach();
    }
    if(keyDown("up_arrow") && player.index !== null){
      people[index-1].y = people[index-1].y-15;
    }
    if(keyDown("down_arrow") && player.index !== null){
      people[index-1].y = people[index-1].y+15;
    }
    if(keyDown(RIGHT_ARROW) && player.index !== null){
      people[index-1].x = people[index-1].x+50;
    }
    if(people[index-1].x > 9620){
      gameState = 3;
    }
    obstacle();
    obstacle2();
    coins();
    drawSprites();
  }
  end(){
    console.log("Game Ended");
  }
  finish(){
      alert("You Survived!")
  }
}
