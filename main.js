let apple, banana, hotdog, burger, xpos = 0, ypos = 0; directionX = 0, directionY = 0, food = []
let l = xpos - 17.5, r = xpos + 17.5 , u = ypos - 27.5, d = ypos + 27.5
let lives = 10

// let Game = {
    

    
//     preload : function() {

//         loadImage("./o.png");
//         loadImage("./x.png");
        
//     },


//     create : function() {
//         score = 0; 
    
//     }


    
// }

 
// /**
//  * Namespace
//  */
// let Keyboard  = {
//     Keymap: {
//         37: 'left',
//         38: 'up',
//         39: 'right',
//         40: 'down'
        
//       },

//       pressKey : null,
//       getKey : function() {
//         return this.keymap[this.pressKey];
//       },

//       handleKeyPress: function() {
//           if(keyIsDown(DOWN_ARROW)){
//               console.log("down")
//           }
//           if(keyIsDown(UP_ARROW)){
//               console.log("up")
//           }
//           if(keyIsDown(LEFT_ARROW)){
//               console.log("left")
//           }
//           if(keyIsDown(RIGHT_ARROW)){
//               console.log("right")
//           }
//       } 

//      // ControllerEvents:function() {
  
//         // Setts
//         // this.pressKey = null;
//         // this.keymap   = Keyboard.Keymap;
        
//         // // Keydown Event
//         // document.onkeydown = function(event) {
//         //   this.pressKey = event.which;
//         // };
        
//         // Get Key
        
//     //   };

// }; 

// let img;

// function preload() {
//     loadImage('image.png')
// }



// function setup() {
//     createCanvas(500, 500);
//     background(0);
// }

// function draw() {

//     Keyboard.handleKeyPress()

//     background(0)
//     fill(0, 0, 255);
//     xPos += 10 * direction;

//     if (xPos > 475 || xPos < 25) {
//         direction *= -1;a
//     }
    
// }

let sprite;

function preload(){
    sprite = loadImage("Images and Gifs/eatright_guy_walk_up (1).gif");
    hotdog = loadImage("Images and Gifs/hotDog.png");
    burger = loadImage("Images and Gifs/Cheeseburger.png");
    apple = loadImage("Images and Gifs/Apple.png");
    banana = loadImage("Images and Gifs/Banana.png");
}


function setup(){
    direction = 0;
    createCanvas(1000,550);
    background(0);
    imageMode(CENTER)
    addFood()

}

function draw(){
    for(let i = 0; i < food.length; i++) {
        if (xpos < food[i].xpos + 23 && xpos + 23 > food[i].xpos && ypos < food[i].ypos + 38 && ypos + 38 > food[i].ypos) {
           food.splice(i, 1)
           addFood()

        if (food[i].type == "burger" || food[i].type == "hotdog"){
    lives -= 1 
        } else {
            lives += 1
        }
        }
    }

background(0,100,155);
fill(255,0,0)
text(lives, 900, 500 )
 image(sprite,xpos,ypos, 23, 38)
if(keyIsDown(DOWN_ARROW)){
    directionY = 1
    directionX = 0
     console.log("down") }
if(keyIsDown(UP_ARROW)){
    directionY = -1
    directionX = 0
    console.log("up")
                  }
 if(keyIsDown(LEFT_ARROW)){
      console.log("left")
      directionX = -1
      directionY = 0
                  }
if(keyIsDown(RIGHT_ARROW)){
     directionX = 1
     directionY = 0
      console.log("right")
                  }
xpos = (directionX * 4) + xpos
ypos = (directionY * 4) + ypos

for(let i = 0; i < food.length; i++){
    if(food[i].type == "hotdog"){
image(hotdog, food[i].xpos,food[i].ypos, 23,38)
    }
    
    if(food[i].type == "burger"){
        image(burger, food[i].xpos,food[i].ypos, 23,38)
            }

    if(food[i].type == "apple"){
        image(apple, food[i].xpos,food[i].ypos, 23,38)
    }

    if(food[i].type == "banana"){
        image(banana, food[i].xpos,food[i].ypos, 23,38)
    }



}
}

function addFood() {
    if(Math.random()<.7){
food.push({
    type:[
        "hotdog", "burger"
    ][ 
Math.floor(Math.random() * 2) 
    ],
xpos: Math.random() * 550,
ypos: Math.random() * 550,
top: this.ypos - 17.5,
bottom: this.ypos + 17.5,
left: this.xpos - 17.5,
right: this.xpos + 17.5,

})

    }
    else {
    food.push({
        type:[
            "apple", "banana"
        ][ 
    Math.floor(Math.random() * 2) 
        ],
    xpos: Math.random() * 550,
    ypos: Math.random() * 550,
    top: this.ypos - 17.5,
    bottom: this.ypos + 17.5,
    left: this.xpos - 17.5,
    right: this.xpos + 17.5,
    
    })
}}

function eatFood() {

}

