//creating game state
var city_gameState = {preload: city_preload, create: city_create, update: city_update};
var adventure_gameState;

//This first line creates our game object.
var game = new Phaser.Game(960, 640, Phaser.AUTO, 'game', city_gameState);
//define the score
var wood = 0;
var stone = 0;
var stone_mod = 0;
var wood_mod = 0;
var num_mines = 0;
var num_mills = 0;

//Load all of your textures and sounds
function city_preload() {
  //loads background image
  game.load.image('background', 'assets/background/testbackground.png');

  //Loads stone button image
  game.load.image('stone_button', 'assets/ui/buttons/stone_button.png');
  //Loads wood button image
  game.load.image('wood_button', 'assets/ui/buttons/wood_button.png');
  //loads mine image
  game.load.image('mine', 'assets/ui/buttons/mine.png');
  //loads mill image
  game.load.image('mill', 'assets/ui/buttons/mill.png');

  //loads font
  game.load.bitmapFont('font', 'assets/ui/fonts/font3.png', 'assets/ui/fonts/font3.fnt');

}//end preload

//Do all of your initial setup
function city_create() {
  
  //creation of game scale/making game not over
  game.scale.setUserScale(window.innerWidth/960, window.innerHeight/640);
  game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
  game.isGameOver = false;

//buttonCreator();
  //creates a background
  game.background = game.add.tileSprite(0, 0, 960, 640, 'background');
    //button to increase stone counter
    game.stoneButton = game.add.button(25, 25, 'stone_button', function(){
      stone++;
    });
    //button to increase wood counter
    game.woodButton = game.add.button(50, 25, 'wood_button', function(){
      wood++;
   });
  
    //stone score
    game.stoneText = game.add.bitmapText(800, 25, 'font', stone.toFixed(1) + '  stone');
    //wood score
    game.woodText = game.add.bitmapText(800, 50, 'font', wood.toFixed(1) + '  wood');

    //button for buying a mine
  game.Mine = game.add.button(25, 600, 'mine', function(){
    if(stone > 50){
      if(wood > 100){
            stone = stone-50;
            wood = wood-100;
            stone_mod = stone_mod+1;
      }
    }
  });
    //button for buying a mill
  game.Mill = game.add.button(50, 600, 'mill', function(){
    if(stone >= 100){
      if(wood >= 50){
            stone = stone-100;
            wood = wood-50;
            wood_mod = wood_mod+1;
      }
    }
  });
















}//end create

//Write all of your continuous game logic here
function city_update() {
	
	//updates these as stone/wood modifiers increase
	stone = stone_mod+stone;
	wood = wood_mod+wood;
	
  //stone score updater
  game.stoneText.text = stone.toString() + ' stone';
  //wood score updater
  game.woodText.text = wood.toString() + ' wood';



	
}//end update

function gameOver(){

}//end gameOver

function restart(){

}//end restart

