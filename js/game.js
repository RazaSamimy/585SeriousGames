// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

resizeCanvas();

document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";


// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/monster.png";

//Pause button
var isPaused = false;
var pauseReady = false;
var pauseImage = new Image();
pauseImage.onload = function () {
	pauseReady = true;
};
pauseImage.src = "images/pause.png";

//Exit button
var exitReady = false;
var exitImage = new Image();
exitImage.src = "images/close-button.png";

// Game objects
var hero = {
    speed: 256, // movement in pixels per second
    x : 100,
    y : 150
};
var monster = {
        speed: 230 // movement in pixels per second
};

var monster2 = {
     speed: 250 // movement in pixels per second
};
var monster3 = { 
    speed: 270 // movement in pixels per second 
};
var monster4 = { 
    speed: 290 // movement in pixels per second
};

var monster5 = {
     speed: 310 // movement in pixels per second
};

var monstersCaught = 0;

// Question Variable
var popUpList = '<div id="dialog">Question:<br><input type="radio">A<br><input type="radio">B<br><input type="radio">C</div>';

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Handle pause button click
canvas.addEventListener("click", canvasClick, false);
canvas.addEventListener("touchstart", canvasClick, false);

function canvasClick(e) {
	var clickX = e.clientX;
	var clickY = e.clientY;
	clickX -= canvas.offsetLeft;
	clickY -= canvas.offsetTop;

	if (clickX >= canvas.width-50 && clickY <= 50) {
		isPaused = !isPaused;
    }
    if (clickX >= canvas.width-100 && clickY <= 50) {
        if(exitReady){
		window.location.href='userhome.html'
	   }
    }
}





// Reset the game when the player catches a monster
var reset = function (m) {
	// Throw the monster somewhere on the screen randomly
	m.y = 32 + (Math.random() * (canvas.height - 64));
	m.x = canvas.width;
};

// Update game objects
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
        if (hero.y >= canvas.height - canvas.height + 32) {
		  hero.y -= hero.speed * modifier;
        }
	}
	if (40 in keysDown) { // Player holding down
        if (hero.y < canvas.height - 64){
		  hero.y += hero.speed * modifier;
        }
	}
//	if (37 in keysDown) { // Player holding left
//		hero.x -= hero.speed * modifier;
//	}
//	if (39 in keysDown) { // Player holding right
//		hero.x += hero.speed * modifier;
//	}

    monster.x -= monster.speed * modifier;
    monster2.x -= monster2.speed * modifier;
    monster3.x -= monster3.speed * modifier;
    monster4.x -= monster4.speed * modifier;
    monster5.x -= monster5.speed * modifier;
    
    
	// Are they touching?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		++monstersCaught;
		window.alert("Question:");
		reset(monster);
	}
	else if (
		hero.x <= (monster2.x + 32)
		&& monster2.x <= (hero.x + 32)
		&& hero.y <= (monster2.y + 32)
		&& monster2.y <= (hero.y + 32)
	) {
		++monstersCaught;
		window.alert("Question:");
		reset(monster2);
	}
	else if (
		hero.x <= (monster3.x + 32)
		&& monster3.x <= (hero.x + 32)
		&& hero.y <= (monster3.y + 32)
		&& monster3.y <= (hero.y + 32)
	) {
		++monstersCaught;
		window.alert("Question:");
		reset(monster3);
	}
	else if (
		hero.x <= (monster4.x + 32)
		&& monster4.x <= (hero.x + 32)
		&& hero.y <= (monster4.y + 32)
		&& monster4.y <= (hero.y + 32)
	) {
		++monstersCaught;
		window.alert("Question:");
		reset(monster4);
	}
	else if (
		hero.x <= (monster5.x + 32)
		&& monster5.x <= (hero.x + 32)
		&& hero.y <= (monster5.y + 32)
		&& monster5.y <= (hero.y + 32)
	) {
		++monstersCaught;
		window.alert("Question:");
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
var render = function () {
	if (bgReady) {
        
		ctx.drawImage(bgImage, 0, 0, window.innerWidth, window.innerHeight);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y,  window.innerHeight *(1/11) , window.innerHeight *(1/11) );
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y, window.innerHeight *(1/11) , window.innerHeight *(1/11));
		ctx.drawImage(monsterImage, monster2.x, monster2.y, window.innerHeight *(1/11) , window.innerHeight *(1/11));
		ctx.drawImage(monsterImage, monster3.x, monster3.y, window.innerHeight *(1/11) , window.innerHeight *(1/11));
		ctx.drawImage(monsterImage, monster4.x, monster4.y, window.innerHeight *(1/11) , window.innerHeight *(1/11));
		ctx.drawImage(monsterImage, monster5.x, monster5.y, window.innerHeight *(1/11) , window.innerHeight *(1/11));
	}

    //Renders Pause Button Image
	if (pauseReady) {
		ctx.drawImage(pauseImage, canvas.width-50, 5);
	}
    
    if (isPaused) {
        ctx.drawImage(exitImage, canvas.width-100, 5);
        exitReady = true;
    }

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Streak: " + monstersCaught, 32, 32);
};

// The main game loop
var main = function () {
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
