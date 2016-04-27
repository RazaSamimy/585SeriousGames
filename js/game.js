// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
//var dialog = document.getElementById("question");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

// Music Controls

window.onload = function() {
  document.getElementById("gameMusic"); 
  document.getElementById("hp"); 
};


var health = 105; 
var musicToggle = true;


// Controls question popup

function showQuestion() {
    isPaused = true;
    questionPause = true;
    document.getElementById("pause").style.display = "none";
    document.getElementById("question").style.display = 'inline';

    // A button click
    document.getElementById("abutton").onclick = function() {
        document.getElementById("question").style.display = 'none';
        isPaused = false;
        questionPause = false;
    };

    // B button click
    document.getElementById("bbutton").onclick = function() {
        document.getElementById("question").style.display = 'none';
        isPaused = false;
        questionPause = false;
    };

    // C button click
    document.getElementById("cbutton").onclick = function() {
        document.getElementById("question").style.display = 'none';
        isPaused = false;
        questionPause = false;
    };

    // D button click
    document.getElementById("dbutton").onclick = function() {
        document.getElementById("question").style.display = 'none';
        isPaused = false;
        questionPause = false;
    };
}

// Controls pause menu

function pauseMenu() {
    if (isPaused && !questionPause) {
        document.getElementById("pausemenu").style.display = 'inline';

        // Resume button click
        document.getElementById("resume").onclick = function() {
            document.getElementById("pausemenu").style.display = 'none';
            isPaused = false;
        };
        
         // Music button click
        document.getElementById("music").onclick = function() {
            if(musicToggle == true){    
                document.getElementById("gameMusic").pause();
                musicToggle = false;
                document.getElementById("music").value = "Music Off";
            }
            
            else{    
                document.getElementById("gameMusic").play();
                document.getElementById("music").value = "Music On";              
                musicToggle = true;
            }
            
        };

        // Exit button click
        document.getElementById("exit").onclick = function() {
            if (exitReady) {
                window.location.href = 'userhome.html'
            }
        };
    }
}

document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() {
    bgReady = true;
};
bgImage.src = "images/background.png";


// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function() {
    heroReady = true;
};
heroImage.src = "images/hero.png";

// Goblin Green image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function() {
    monsterReady = true;

};
monsterImage.src = "images/monster.png";

// Goblin Blue
var goblinBlueReady = false;
var goblinBlueImage = new Image();
goblinBlueImage.onload = function() {
    goblinBlueReady = true;

};
goblinBlueImage.src = "images/goblinBlue.png";

// Goblin Red
var goblinRedReady = false;
var goblinRedImage = new Image();
goblinRedImage.onload = function() {
    goblinRedReady = true;

};
goblinRedImage.src = "images/goblinRed.png";

// Snake Green
var snakeGreenReady = false;
var snakeGreenImage = new Image();
snakeGreenImage.onload = function() {
    snakeBlueReady = true;

};
snakeGreenImage.src = "images/snakeGreen.png";

// Snake Blue
var snakeBlueReady = false;
var snakeBlueImage = new Image();
snakeBlueImage.onload = function() {
    snakeBlueReady = true;

};
snakeBlueImage.src = "images/snakeBlue.png";

// Snake Red
var snakeRedReady = false;
var snakeRedImage = new Image();
snakeRedImage.onload = function() {
    snakeRedReady = true;

};
snakeRedImage.src = "images/snakeRed.png";

// Spider Green
var spiderBlackReady = false;
var spiderBlackImage = new Image();
spiderBlackImage.onload = function() {
    spiderBlueReady = true;

};
spiderBlackImage.src = "images/spiderBlack.png";

// Flame Red
var flameRedReady = false;
var flameRedImage = new Image();
flameRedImage.onload = function() {
    flameRedReady = true;

};
flameRedImage.src = "images/flameRed.png";



//Pause button
var isPaused = false;
var pauseReady = false;
var pauseImage = new Image();
pauseImage.onload = function() {
    pauseReady = true;
};
pauseImage.src = "images/pause.png";

//Exit variables
var exitReady = false;
var questionPause = false;

// Game objects
var hero = {
    speed: 500, // movement in pixels per second
    x: 100,
    y: 150
};
var monster = {
    speed: 230, // movement in pixels per second
    yOrigin: 0,
    type: 1,
    edge: 0,
    sCurve: [100],
    sCurveIndex: 0
};

var monster2 = {
    speed: 250, // movement in pixels per second
    yOrigin: 0,
    type: 2,
    edge: 0,
    sCurve: [100],
    sCurveIndex: 0
};
var monster3 = {
    speed: 270, // movement in pixels per second 
    yOrigin: 0,
    type: 1,
    edge: 0,
    sCurve: [100],
    sCurveIndex: 0
};
var monster4 = {
    speed: 290, // movement in pixels per second
    yOrigin: 0,
    type: 2,
    edge: 0,
    sCurve: [100],
    sCurveIndex: 0
};

var monster5 = {
    speed: 310, // movement in pixels per second
    yOrigin: 0,
    type: 0,
    edge: 0,
    sCurve: [100],
    sCurveIndex: 0
};


// Monster Type Number to Image
var monsterType2Image = function(monsterSelected) {
    if (monsterSelected.type == 0) {
        return monsterImage;
    }

    if (monsterSelected.type == 1) {
        return goblinBlueImage;
    }

    if (monsterSelected.type == 2) {
        return goblinRedImage;
    }
    
      if (monsterSelected.type == 3) {
        return snakeGreenImage;
    }

    if (monsterSelected.type == 4) {
        return snakeBlueImage;
    }

    if (monsterSelected.type == 5) {
        return snakeRedImage;
    }
    
      if (monsterSelected.type == 6) {
        return spiderBlackImage;
    }

    if (monsterSelected.type == 7) {
        return flameRedImage;
    }

}


var monsterType2ImageSizeH = function(monsterSelected) {
    if (monsterSelected.type == 0) {
        return window.innerHeight * ( 1 / 15);
    }

    if (monsterSelected.type == 1) {
        return window.innerHeight * (1 / 15);
    }

    if (monsterSelected.type == 2) {
        return window.innerHeight * (1 / 15);
    }
    
      if (monsterSelected.type == 3) {
        return 1.2*window.innerHeight * (1 / 11);
    }

    if (monsterSelected.type == 4) {
        return 1.2*window.innerHeight * (1 / 11);
    }

    if (monsterSelected.type == 5) {
        return 1.2*window.innerHeight * (1 / 11);
    }
    
      if (monsterSelected.type == 6) {
        return 1.4*window.innerHeight * (1 / 9);
    }

    if (monsterSelected.type == 7) {
        return 1.4*window.innerHeight * (1 / 15);
    }


}

var monsterType2ImageSizeW = function(monsterSelected) {
    if (monsterSelected.type == 0) {
        return window.innerHeight * ( 1 / 15);
    }

    if (monsterSelected.type == 1) {
        return window.innerHeight * (1 / 15);
    }

    if (monsterSelected.type == 2) {
        return window.innerHeight * (1 / 15);
    }
    
      if (monsterSelected.type == 3) {
        return 1.2*window.innerHeight * (1 / 11);
    }

    if (monsterSelected.type == 4) {
        return 1.2*window.innerHeight * (1 / 11);
    }

    if (monsterSelected.type == 5) {
        return 1.2*window.innerHeight * (1 / 11);
    }
    
      if (monsterSelected.type == 6) {
        return 1.4*window.innerHeight * (1 / 9);
    }

    if (monsterSelected.type == 7) {
        return 1.4*window.innerHeight * (2 / 15);
    }


}

var monsterType2Damage = function(monsterSelected) {
    if (monsterSelected.type == 0) {
        return .5;
    }

    if (monsterSelected.type == 1) {
        return 1;
    }

    if (monsterSelected.type == 2) {
        return 1.5;
    }
    
      if (monsterSelected.type == 3) {
        return .75;
    }

    if (monsterSelected.type == 4) {
        return 1.5;
    }

    if (monsterSelected.type == 5) {
        return 3*.75;
    }
    
      if (monsterSelected.type == 6) {
        return 3;
    }

    if (monsterSelected.type == 7) {
        return 5;
    }


}


var monstersCaught = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function(e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
}, false);

// Handles touch input
var targetY = 0;
var targetActive = false;

canvas.addEventListener("touchstart", function(evt) {
    evt.preventDefault();
    targetY = evt.changedTouches[0].clientY;
    targetActive = true;
}, false);

canvas.addEventListener("touchend", function(evt) {
    evt.preventDefault();
    targetActive = false;
}, false);

canvas.addEventListener("touchmove", function(evt) {
    evt.preventDefault();
    targetY = evt.changedTouches[0].clientY;
    targetActive = true;
}, false);

// Pause function

function pauseGame() {
    if (!questionPause && !isPaused) {
        isPaused = !isPaused;
        document.getElementById("pause").style.display = "none";
        pauseMenu();
    }
}

// Lose function

function loseScreen() {
    pauseGame();
    document.getElementById("pausemenu").style.display = 'none';
    document.getElementById("losemenu").style.display = 'inline';
    document.getElementById("tryagain").onclick = function() {
        window.location.href = 'userhome.html'
    };
}


// Calculates if monster and player are touching
var isTouching = function(a, b) {
    // Establishes coordinates of hero and monster
    var hx1 = a.x;
    var hx2 = a.x + 32;
    var hy1 = a.y;
    var hy2 = a.y + 32;
    var mx1 = b.x;
    var mx2 = b.x + 32;
    var my1 = b.y;
    var my2 = b.y + 32;

    if(b.type== 7 ){
           var hx1 = a.x;
    var hx2 = a.x + 64;
    var hy1 = a.y;
    var hy2 = a.y + 64;
    var mx1 = b.x;
    var mx2 = b.x + 64;
    var my1 = b.y;
    var my2 = b.y + 64;
        
    }
    //Tests collision
    if (mx1 < hx2 && mx2 > hx1 && my1 < hy2 && my2 > hy1) {
        return true;
    }
};

// Random Number Function
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Reset the game when the player catches a monster
var reset = function(m) {
    // Throw the monster somewhere on the screen randomly
    m.y = 32 + (Math.random() * (canvas.height - 64));
    m.x = canvas.width;
    m.yOrigin = m.y;
    health = health- monsterType2Damage(m);
    console.log(health);
    
    m.type = getRandomInt(0, 7);
};



// S Movement Pattern
var sArray = [100];
var sArrayAvg = 0

for (var i = 0; i < 100; i++) {
    sArray[i] = (canvas.height * .5 + canvas.height * (1 / 11) * Math.sin(2 * Math.PI * i / 100));
    sArrayAvg += sArray[i];

}

monster.sCurve = sArray;
monster2.sCurve = sArray;
monster3.sCurve = sArray;
monster4.sCurve = sArray;
monster5.sCurve = sArray;

// Movement Pattern Function

var movement = function(monsterSelected, modifier) {

    if (monsterSelected.type <= 2 || monsterSelected.type == 7) {
        return monsterSelected;
    }

    if (monsterSelected.type == 6) {

        if (monsterSelected.edge == 1) {
            monsterSelected.y -= monsterSelected.speed * modifier;
            if (monsterSelected.y <= 0 + canvas.height * (1 / 11)) {
                monsterSelected.edge = 0;
            }
        }

        if (monsterSelected.edge == 0) {
            monsterSelected.y += monsterSelected.speed * modifier;
            if (monsterSelected.y >= canvas.height - canvas.height * (2 / 11)) {
                monsterSelected.edge = 1;
            }
        }

        return monsterSelected;
    }

    if (monsterSelected.type == 3 || monsterSelected.type == 4 || monsterSelected.type == 5 ) {
        monsterSelected.y = monsterSelected.yOrigin + monsterSelected.sCurve[monsterSelected.sCurveIndex] - sArrayAvg / 100;
        monsterSelected.sCurveIndex++;

        if (monsterSelected.sCurveIndex == 100) {
            monsterSelected.sCurveIndex = 0;
        }

        return monsterSelected;
    }


}

//Update Function

var update = function(modifier) {
    if (38 in keysDown) { // Player holding up
        if (hero.y >= canvas.height - canvas.height + 32) {
            hero.y -= hero.speed * modifier;
        }
    }
    if (40 in keysDown) { // Player holding down
        if (hero.y < canvas.height - 64) {
            hero.y += hero.speed * modifier;
        }
    }

    if (targetActive == true) {
        if (hero.y > targetY && hero.y >= canvas.height - canvas.height + 32) {
            hero.y -= hero.speed * modifier;
        }
        if (hero.y < targetY && hero.y < canvas.height - 64) {
            hero.y += hero.speed * modifier;
        }
    }

    monster.x -= monster.speed * modifier;
    monster = movement(monster, modifier);

    monster2.x -= monster2.speed * modifier;
    monster2 = movement(monster2, modifier);


    monster3.x -= monster3.speed * modifier;
    monster3 = movement(monster3, modifier);

    monster4.x -= monster4.speed * modifier;
    monster4 = movement(monster4, modifier);

    monster5.x -= monster5.speed * modifier;
    monster5 = movement(monster5, modifier);


    // Are they touching?
    if (isTouching(hero, monster)) {
        ++monstersCaught;
        showQuestion();
        reset(monster);
    } else if (isTouching(hero, monster2)) {
        ++monstersCaught;
        showQuestion();
        reset(monster2);
    } else if (isTouching(hero, monster3)) {
        ++monstersCaught;
        showQuestion();
        reset(monster3);
    } else if (isTouching(hero, monster4)) {
        ++monstersCaught;
        showQuestion();
        reset(monster4);
    } else if (isTouching(hero, monster5)) {
        ++monstersCaught;
        showQuestion();
        reset(monster5);
    }


    if (monster.x <= 0) {
        reset(monster);

    }

    if (monster2.x <= 0) {
        reset(monster2);
    }

    if (monster3.x <= 0) {
        reset(monster3);
    }

    if (monster4.x <= 0) {
        reset(monster4);
    }

    if (monster5.x <= 0) {
        reset(monster5);
    }
};

// Draw everything
var render = function() {
    if (bgReady) {

        ctx.drawImage(bgImage, 0, 0, window.innerWidth, window.innerHeight);
    }

    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y, window.innerHeight * (1 / 11), window.innerHeight * (1 / 11));
    }

    if (monsterReady) {
        ctx.drawImage(monsterType2Image(monster), monster.x, monster.y,    monsterType2ImageSizeH(monster), monsterType2ImageSizeW(monster));
        ctx.drawImage(monsterType2Image(monster2), monster2.x, monster2.y, monsterType2ImageSizeH(monster2), monsterType2ImageSizeW(monster2));
        ctx.drawImage(monsterType2Image(monster3), monster3.x, monster3.y, monsterType2ImageSizeH(monster3), monsterType2ImageSizeW(monster3));
        ctx.drawImage(monsterType2Image(monster4), monster4.x, monster4.y, monsterType2ImageSizeH(monster4), monsterType2ImageSizeW(monster4));
        ctx.drawImage(monsterType2Image(monster5), monster5.x, monster5.y, monsterType2ImageSizeH(monster5), monsterType2ImageSizeW(monster5));
    }

    //Displays pause button
    if (pauseReady) {
        if (!questionPause && !isPaused) {
            document.getElementById("pause").style.display = "block";
        }
    }

    if (isPaused && !questionPause) {
        exitReady = true;
    }

    // Score
    if (document.getElementById("score")) {
        document.getElementById("score").innerHTML = "Score: " + monstersCaught;
    }
    // Health
    
     if(document.getElementById("hp")!= null){
        if(health <= 0) {
            loseScreen();
        }
        else {
            document.getElementById("hp").style.width = health + "%";
        }
    }
};

// The main game loop
var main = function() {
    var now = Date.now();
    var delta = now - then;

    if (!isPaused) {
        update(delta / 1000);
    }

    render();
    then = now;


    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset(monster);
reset(monster2);
reset(monster3);
reset(monster4);
reset(monster5);
main();