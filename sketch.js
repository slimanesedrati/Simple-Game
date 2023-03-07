
let bullets = []
let enemies = []
let res = document.getElementById("res")
let count

let gun; // variable to hold the person image
let bullet_img;
let spider_img;

function preload() {
  gun = loadImage('assets/gun.png'); // load the person image
  bullet_img = loadImage('assets/bullet.png')
  spider_img = loadImage('assets/spider.png')
}

function setup() {
  createCanvas(380,380);

  for (let i = 0 ; i < 10; i++) {
    let enemy = {
      x: random(800,400),
      y: random(10,width-10),
    }
    enemies.push(enemy)
  }
}

function draw() {

  // Set The Background
  background(50,58,73);
  imageMode(CENTER)
  // 
  image(gun,30,mouseY, 40,40); // draw the gun at (x, y)

  // update and draw the bullets
  for (let bullet of bullets){
    bullet.x += 5
    image(bullet_img,bullet.x,bullet.y,16)
  }

  // 
  for (let enemy of enemies ){
    enemy.x -= 1
    image(spider_img,enemy.x,enemy.y, 24)

  }

  // 
  for (let enemy of enemies) {
    for (let bullet of bullets) {
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 20 ) {
        enemies.splice(enemies.indexOf(enemy),1)
        bullets.splice(bullets.indexOf(bullet),1)
      }
    }
  }
}


function mousePressed() {
  // spwan a bullet when the user clicks
  let bullet = {
    x: 60,
    y: mouseY -5 ,
  }
  // append the bullet to the list
  bullets.push(bullet)
}


