var doggy, dogImg
var  happyDog, database, foodS, foodStock;
function preload()
{
  dogImg = loadImage("images/dogImg1.png");
  happyDog = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  foodstock = database.ref("Food");
  foodstock.on("value", readStock);
  doggy = createSprite(250,250)
  doggy.addImage(dogImg);
  doggy.scale =0.6
}


function draw() {  
background(46,139,87);

if(keyWentDown("up")){

  writeStock(foodS);
  doggy.addImage(happyDog);
}

  drawSprites();
  //add styles here
  strokeWeight(5)
  stroke("Yellow");
  fill("Orange")
  textSize(20);
  text("Remaining Milk:", 250, 60)
}
function readStock(data){
foodS = data.val();

}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1;
  }

  database.ref("/").update({
    Food:x
  })
}

