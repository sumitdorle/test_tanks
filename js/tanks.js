







// EnemyTank = function (index, game, player, bullets) {
//     var x = game.world.randomX;
//     var y = game.world.randomY;

//     this.game = game;
//     this.health = 3;
//     this.player = player;
//     this.bullets = bullets;
//     this.fireRate = 1000;
//     this.nextFire = 0;
//     this.alive = true;

// //  this.shadow = game.add.sprite(x, y, 'enemy', 'shadow');
//     this.tank = game.add.sprite(x, y, 'enemy', 'tank1');
//     this.turret = game.add.sprite(x, y, 'enemy', 'turret');

// //  this.shadow.anchor.set(0.5);
//     this.tank.anchor.set(0.5);
//     this.turret.anchor.set(0.3, 0.5);

//     this.tank.name = index.toString();
//     game.physics.enable(this.tank, Phaser.Physics.ARCADE);
//     this.tank.body.immovable = false;
//     this.tank.body.collideWorldBounds = true;
//     this.tank.body.bounce.setTo(1, 1);

//     this.tank.angle = game.rnd.angle();

//     game.physics.arcade.velocityFromRotation(this.tank.rotation, 100, this.tank.body.velocity);

// };

// var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

// function preload () {
//     game.load.atlas('tank', 'assets/tanks.png', 'assets/tanks.json');
//     game.load.atlas('enemy', 'assets/enemy-tanks.png', 'assets/tanks.json');
// //  game.load.image('logo', 'assets/logo.png');
//     game.load.image('bullet', 'assets/bullet.png');
//     game.load.image('earth', 'assets/scorched_earth.png');
//     game.load.spritesheet('kaboom', 'assets/explosion.png', 64, 64, 23);
// }

// var land;
// var shadow;
// var tank;
// var turret;

// var enemies;
// var enemyBullets;
// var enemiesTotal = 0;
// var enemiesAlive = 0;
// var explosions;

// //var logo;

// var currentSpeed = 0;
// var cursors;

// var bullets;
// var fireRate = 100;
// var nextFire = 0;

// function create () {
//     //  Resize our game world to be a 2000 x 2000 square
//     game.world.setBounds(-1000, -1000, 2000, 2000);

//     //  Our tiled scrolling background
//     land = game.add.tileSprite(0, 0, 800, 600, 'earth');
//     land.fixedToCamera = true;

//     // //  The base of our tank
//     // tank = game.add.sprite(0, 0, 'tank', 'tank1');
//     // tank.anchor.setTo(0.5, 0.5);
//     // tank.animations.add('move', ['tank1', 'tank2', 'tank3', 'tank4', 'tank5', 'tank6'], 20, true);

//     // //  This will force it to decelerate and limit its speed
//     // game.physics.enable(tank, Phaser.Physics.ARCADE);
//     // tank.body.drag.set(0.2);
//     // tank.body.maxVelocity.setTo(400, 400);
//     // tank.body.collideWorldBounds = true;

//     // //  Finally the turret that we place on-top of the tank body
//     // turret = game.add.sprite(0, 0, 'tank', 'turret');
//     // turret.anchor.setTo(0.3, 0.5);

//     // //  The enemies bullet group
//     // enemyBullets = game.add.group();
//     // enemyBullets.enableBody = true;
//     // enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
//     // enemyBullets.createMultiple(100, 'bullet');
    
//     // enemyBullets.setAll('anchor.x', 0.5);
//     // enemyBullets.setAll('anchor.y', 0.5);
//     // enemyBullets.setAll('outOfBoundsKill', true);
//     // enemyBullets.setAll('checkWorldBounds', true);

//     // //  Create some baddies to waste :)
//     // enemies = [];

//     // enemiesTotal = 20;
//     // enemiesAlive = 20;

//     // for (var i = 0; i < enemiesTotal; i++)
//     // {
//     //     enemies.push(new EnemyTank(i, game, tank, enemyBullets));
//     // }

//     // //  A shadow below our tank
//     // shadow = game.add.sprite(0, 0, 'tank', 'shadow');
//     // shadow.anchor.setTo(0.5, 0.5);

//     // //  Our bullet group
//     // bullets = game.add.group();
//     // bullets.enableBody = true;
//     // bullets.physicsBodyType = Phaser.Physics.ARCADE;
//     // bullets.createMultiple(30, 'bullet', 0, false);
//     // bullets.setAll('anchor.x', 0.5);
//     // bullets.setAll('anchor.y', 0.5);
//     // bullets.setAll('outOfBoundsKill', true);
//     // bullets.setAll('checkWorldBounds', true);

//     // //  Explosion pool
//     // explosions = game.add.group();

//     // for (var i = 0; i < 10; i++)
//     // {
//     //     var explosionAnimation = explosions.create(0, 0, 'kaboom', [0], false);
//     //     explosionAnimation.anchor.setTo(0.5, 0.5);
//     //     explosionAnimation.animations.add('kaboom');
//     // }

//     // tank.bringToTop();
//     // turret.bringToTop();

//     // //logo = game.add.sprite(0, 200, 'logo');
//     // //logo.fixedToCamera = true;

//     //game.input.onDown.add(removeLogo, this);

//     game.camera.follow(tank);
//     game.camera.deadzone = new Phaser.Rectangle(150, 150, 500, 300);
//     game.camera.focusOnXY(0, 0);

//     //cursors = game.input.keyboard.createCursorKeys();

// }


































var myId=0;
var land;
var tank;
var turret;
var player;
var tanksList;
var enemyBullets;
var enemiesTotal = 0;
var enemiesAlive = 0;
var explosions;

var cursors;

var bullets;
var fireRate = 100;
var nextFire = 0;


Tank = function (index, game, player) {
	this.cursor = {
		left:false,
		right:false,
		up:false,
		fire:false		
	}

	this.input = {
		left:false,
		right:false,
		up:false,
		fire:false
	}

    var x = 0;
    var y = 0;

    this.game = game;
    this.health = 30;
    this.player = player;
    this.bullets = game.add.group();
    this.bullets.enableBody = true;
    this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
    this.bullets.createMultiple(20, 'bullet', 0, false);
    this.bullets.setAll('anchor.x', 0.5);
    this.bullets.setAll('anchor.y', 0.5);
    this.bullets.setAll('outOfBoundsKill', true);
    this.bullets.setAll('checkWorldBounds', true);	
	
	
	this.currentSpeed =0;
    this.fireRate = 500;
    this.nextFire = 0;
    this.alive = true;

    this.tank = game.add.sprite(x, y, 'enemy', 'tank1');
    this.turret = game.add.sprite(x, y, 'enemy', 'turret');

    this.tank.anchor.set(0.5);
    this.turret.anchor.set(0.3, 0.5);

    this.tank.id = index;
    game.physics.enable(this.tank, Phaser.Physics.ARCADE);
    this.tank.body.immovable = false;
    this.tank.body.collideWorldBounds = true;
    this.tank.body.bounce.setTo(0, 0);
    this.tank.angle = 0;

    game.physics.arcade.velocityFromRotation(this.tank.rotation, 0, this.tank.body.velocity);

};

Tank.prototype.update = function() {
    //to be updated using the code generated by blockly.
};


Tank.prototype.fire = function(target) {
		if (!this.alive) return;
        if (this.game.time.now > this.nextFire && this.bullets.countDead() > 0)
        {
            this.nextFire = this.game.time.now + this.fireRate;
            var bullet = this.bullets.getFirstDead();
            bullet.reset(this.turret.x, this.turret.y);

			bullet.rotation = this.game.physics.arcade.moveToObject(bullet, target, 500);
        }
}


Tank.prototype.kill = function() {
	this.alive = false;
	this.tank.kill();
	this.turret.kill();
}

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload () {

    game.load.atlas('tank', 'assets/tanks.png', 'assets/tanks.json');
    game.load.atlas('enemy', 'assets/enemy-tanks.png', 'assets/tanks.json');
    game.load.image('bullet', 'assets/bullet.png');
    game.load.image('earth', 'assets/scorched_earth.png');
    //game.load.spritesheet('kaboom', 'assets/explosion.png', 64, 64, 23);
    
}



function create () {

    //  Resize our game world to be a 2000 x 2000 square
    game.world.setBounds(-1000, -1000, 2000, 2000);
	game.stage.disableVisibilityChange  = true;
	
    //  Our tiled scrolling background
    land = game.add.tileSprite(0, 0, 800, 600, 'earth');
    land.fixedToCamera = true;
    
    tanksList = {};
	
	player = new Tank(myId, game, tank);
	tanksList[myId] = player;
	tank = player.tank;
	turret = player.turret;
	tank.x=0;
	tank.y=0;
	bullets = player.bullets;

    // //  Explosion pool
    // explosions = game.add.group();

    // for (var i = 0; i < 10; i++)
    // {
    //     var explosionAnimation = explosions.create(0, 0, 'kaboom', [0], false);
    //     explosionAnimation.anchor.setTo(0.5, 0.5);
    //     explosionAnimation.animations.add('kaboom');
    // }

    tank.bringToTop();
    turret.bringToTop();
		
    //logo = game.add.sprite(0, 200, 'logo');
    //logo.fixedToCamera = true;

    //game.input.onDown.add(removeLogo, this);

    game.camera.follow(tank);
    game.camera.deadzone = new Phaser.Rectangle(150, 150, 500, 300);
    game.camera.focusOnXY(0, 0);

    cursors = game.input.keyboard.createCursorKeys();
}

function update () {
	
// 	player.input.left = cursors.left.isDown;
// 	player.input.right = cursors.right.isDown;
// 	player.input.up = cursors.up.isDown;
// 	player.input.fire = game.input.activePointer.isDown;
// 	player.input.tx = game.input.x+ game.camera.x;
// 	player.input.ty = game.input.y+ game.camera.y;

	turret.rotation = game.physics.arcade.angleToPointer(turret);	
    land.tilePosition.x = -game.camera.x;
    land.tilePosition.y = -game.camera.y;
    	
	
//     for (var i in tanksList)
//     {
// 		if (!tanksList[i]) continue;
// 		var curBullets = tanksList[i].bullets;
// 		var curTank = tanksList[i].tank;
// 		for (var j in tanksList)
// 		{
// 			if (!tanksList[j]) continue;
// 			if (j!=i) 
// 			{
			
// 				var targetTank = tanksList[j].tank;
				
// 				game.physics.arcade.overlap(curBullets, targetTank, bulletHitPlayer, null, this);
			
// 			}
// 			if (tanksList[j].alive)
// 			{
// 				tanksList[j].update();
// 			}			
// 		}
//     }
}

function bulletHitPlayer (tank, bullet) {

    bullet.kill();
}

function render () {}

