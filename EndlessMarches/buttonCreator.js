function buttomCreator(){
	//button to increase stone counter
  	game.stoneButton = game.add.button(25, 25, 'stone_button', function(){
    	stone++;
  	});
  	//button to increase wood counter
  	game.woodButton = game.add.button(50, 25, 'wood_button', function(){
    	wood++;
 	 });
  
  	//stone score
  	game.stoneText = game.add.bitmapText(800, 25, 'font', stone.toString() + ' stone');
  	//wood score
  	game.woodText = game.add.bitmapText(800, 50, 'font', wood.toString() + ' wood');

  //commented out for later use
  //stone button text
  //game.stoneButton.text = game.add.bitmapText(game.stoneButton.x+5, game.stoneButton.y-2, 'font', '+1');
  //wood button text 
  //game.woodButton.text = game.add.bitmapText(game.woodButton.x+5, game.woodButton.y-2, 'font', '+1');
}