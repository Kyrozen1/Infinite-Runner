function obstacles(){
    var x = people[0].x+1300;
    if(person.x%1500===0){
    obstacle = createSprite(x, 420, 10, 10);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale=0.4;
    obstacleGroup.add(obstacle);
    }
  }
  
  function obstacles2(){
    var x = people[0].x+600;
    if(person.x%1500===0){
    obstacle2 = createSprite(x, 625, 10, 10);
    obstacle2.addImage("obstacle2", obstacle2Image);
    obstacle2.scale=0.4;
    obstacle2Group.add(obstacle2);
    }
  }

  function coins(){
    var x = people[0].x+600;
    if(person.x%1000===0){
    coin = createSprite(x, 300, 20, 20);
    coin.y=Math.round(random(300, 430));
    coin.addImage("coin", coinImage);
    coin.scale=0.7
    coin.velocityX=-(6+score/2);
    scoreGroup.add(coin);
    }
  }