var canvas;
var gameState;
var back, backImage,road, roadImage;
var bull,bull2, bull_running;
var coin, coin2, coinImage, coin2Image;
var obstacle, obstacle2, obstacleImage, obstacle2Image;
var person,person2,person_running;
var obstacleGroup, obstacle2Group;
var gameover, gameoverImage,restart, restartImage,die;
var score;
var database;
var Players, playerCount;
var form, player, game;
var people;

function preload(){
  person_running = loadAnimation("../images/person_1.PNG","../images/person_2.PNG","../images/person_3.PNG")
  
  bull_running = loadAnimation("../images/bull_1.PNG", "../images/bull_2.PNG", "../images/bull_3.PNG")
  
  backImage = loadImage("../images/Background.png");
  roadImage = loadImage("../images/straight-road-clipart-8.jpg");
  
  coinImage = loadImage("../images/coin.PNG");
  coin2Image = loadImage("../images/coin_2.PNG")

  obstacleImage = loadImage("../images/obstacle.PNG");
  obstacle2Image = loadImage("../images/obstacle2.png");
  
  gameoverImage = loadImage("../images/gameover.png");
  restartImage = loadImage("../images/restart.png");

  die = loadSound("../images/die.mp3");
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight)  
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  if(gameState === 3){
    game.finish();
  }
  
}