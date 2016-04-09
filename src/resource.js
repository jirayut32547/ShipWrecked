var scoreNumber = []
for ( var i = 0 ; i < 10 ; i++){
	scoreNumber.push("res/images/score/score"+i+".png");
}


var res = {
    startGame_png : "res/images/startGame.png",
    BgPlay1_png : "res/images/BgPlay1.png",
    BgPlay2_png : "res/images/BgPlay2.png",
    BgPlay3_png : "res/images/BgPlay3.png",
    startButton_png : "res/images/startButton.png",
    boat_1_png : "res/images/boat_1.png",
    rock_png : "res/images/rock.png",
    seaweed_png : "res/images/seaweed.png",
    treasure_png : "res/images/treasure.png",
    fishing_net_png : "res/images/net.png",
    bg_effect_seaweed : "res/images/bgEffectSeaweed.png",
    bg_effect_fishingNet : "res/images/bgEffectFishingNet.png",
    bg_effect_rock : "res/images/bgEffectRock.png",
    statusbar : "res/images/statusBar.png",
    life : "res/images/life.png",
    pressToStart_1 : "res/images/pressToStart_1.png",
    pressToStart_2 : "res/images/pressToStart_2.png",
    bg_GameOver : "res/images/gameOverScene.png",
    button_restart : "res/images/gameOverRestart.png",
    button_restart_click : "res/images/gameOverRestartClick.png",
    button_home : "res/images/gameOverHome.png",
    button_home_click : "res/images/gameOverHomeClick.png",
    
    sound_water_mp3 : "res/effects/waterSound.mp3",
    sound_hit_rock_wav : "res/effects/hitRock.wav",
    sound_click_wav : "res/effects/click.wav"
    
    
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}

for (var i in scoreNumber){
	g_resources.push(scoreNumber[i]);
}
