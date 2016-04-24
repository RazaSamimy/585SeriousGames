// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
//var dialog = document.getElementById("question");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

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

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function() {
    monsterReady = true;
};
monsterImage.src = "images/monster.png";

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
    speed: 256, // movement in pixels per second
    x: 100,
    y: 150
};
var monster = {
    speed: 230, // movement in pixels per second
    type: 1,
    edge: 0
};

var monster2 = {
    speed: 250, // movement in pixels per second
    type: 2
};
var monster3 = {
    speed: 270, // movement in pixels per second 
    type: 0,
    edge: 0
};
var monster4 = {
    speed: 290, // movement in pixels per second
    type: 0,
    edge: 0
};

var monster5 = {
    speed: 310, // movement in pixels per second
    type: 0,
    edge: 0
};

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

    //Tests collision
    if (mx1 < hx2 && mx2 > hx1 && my1 < hy2 && my2 > hy1) {
        return true;
    }
};


// Reset the game when the player catches a monster
var reset = function(m) {
    // Throw the monster somewhere on the screen randomly
    m.y = 32 + (Math.random() * (canvas.height - 64));
    m.x = canvas.width;
};

// S Movement Pattern
var sArray = [100];
var sArrayAvg = 0
var yOrigin = [7]

for (var i = 0; i < 100; i++) {
    sArray[i] = (canvas.height * .5 + canvas.height * (1 / 11) * Math.sin(2 * Math.PI * i / 100));
    sArrayAvg += sArray[i];
    
}

for (var i = 2; i <= 9; i++) {
   
    yOrigin[i] = canvas.height * i/11;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(yOrigin);
var sArrayIndex = 0;
var currentYOrigin=0;
// Movement Pattern Function

var movement = function(monsterSelected, modifier) {
    
    if (monsterSelected.type == 1) {

              if(monsterSelected.edge == 1){
        monsterSelected.y -= monsterSelected.speed * modifier;
            if(monsterSelected.y <= 0 + canvas.height*(1/11)){ 
                monsterSelected.edge = 0;  }
        }
        
         if(monsterSelected.edge == 0){
        monsterSelected.y += monsterSelected.speed * modifier;
            if(monsterSelected.y >= canvas.height-canvas.height*(2/11)){ 
                monsterSelected.edge = 1;  }
        }
        
        return monsterSelected;
    }
    
    if (monsterSelected.type == 2) {
        monsterSelected.y =  yOrigin[currentYOrigin] + sArray[sArrayIndex] - sArrayAvg/100 ;
        sArrayIndex++;
    //    console.log(sArray[sArrayIndex]);

        if(monsterSelected.x <= 0){
        currentYOrigin++; 
        if ( currentYOrigin == 7) {
         currentYOrigin = 0; }
        }
        
    if (sArrayIndex == 100) {
        sArrayIndex = 0; }
        
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
    monster= movement(monster, modifier);
    
    monster2.x -= monster2.speed * modifier;
    monster2 = movement(monster2, modifier);


    monster3.x -= monster3.speed * modifier;
    monster4.x -= monster4.speed * modifier;
    monster5.x -= monster5.speed * modifier;


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
        ctx.drawImage(monsterImage, monster.x, monster.y, window.innerHeight * (1 / 11), window.innerHeight * (1 / 11));
        ctx.drawImage(monsterImage, monster2.x, monster2.y, window.innerHeight * (1 / 11), window.innerHeight * (1 / 11));
        ctx.drawImage(monsterImage, monster3.x, monster3.y, window.innerHeight * (1 / 11), window.innerHeight * (1 / 11));
        ctx.drawImage(monsterImage, monster4.x, monster4.y, window.innerHeight * (1 / 11), window.innerHeight * (1 / 11));
        ctx.drawImage(monsterImage, monster5.x, monster5.y, window.innerHeight * (1 / 11), window.innerHeight * (1 / 11));
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
    if(document.getElementById("score")) {
        document.getElementById("score").innerHTML = "Score: " + monstersCaught;
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