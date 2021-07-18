var canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car1_image="car1.png";
car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_x=10;
car2_y=100;
var background_image="Car Bg.PNG";
function add() {
    background_image_tag=new Image();
    background_image_tag.onload=uploadBackground;
    background_image_tag.src=background_image;
    car_1imgTag=new Image();
    car_1imgTag.onload=uploadcar1;
    car_1imgTag.src=car1_image;
    car_2imgTag=new Image();
    car_2imgTag.onload=uploadcar2;
    car_2imgTag.src=car2_image;
}
function uploadBackground() {
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car_1imgTag,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2() {
    ctx.drawImage(car_2imgTag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    var keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=='38') {
        up();
        console.log("Up");
    }
    if (keyPressed=='40') {
        down();
        console.log("Down");
    }
    if (keyPressed=='37') {
        left();
        console.log("Left");
    }
    if (keyPressed=='39') {
        right();
        console.log("Right");
    }
    if (keyPressed=='87') {
        car2_up();
        console.log("Car 2 Up")
    }
    if (keyPressed=='83') {
        car2_down();
        console.log("Car 2 Down")
    }
    if (keyPressed=='65') {
        car2_left();
        console.log("Car 2 Left")
    }
    if (keyPressed=='68') {
        car2_right();
        console.log("Car 2 Right")
    }
    if (car1_x>700) {
        document.getElementById("game_status").innerHTML="Car 1 Wins!";
    }
    else if (car2_x>700) {
        document.getElementById("game_status").innerHTML="Car 2 Wins!";
    }
}
function up() {
    if (car1_y>=0) {
        car1_y=car1_y-10;
        console.log("When Up Arrow Pressed, X ="+car1_x+", Y ="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function down() {
    if (car1_y<=500) {
        car1_y=car1_y+10;
        console.log("When Down Arrow Pressed, X ="+car1_x+", Y ="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function left() {
    if (car1_x>=0) {
        car1_x=car1_x-10;
        console.log("When Left Arrow Pressed, X ="+car1_x+", Y ="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function right() {
    if (car1_x<=700) {
        car1_x=car1_x+10;
        console.log("When Right Arrow Pressed, X ="+car1_x+", Y ="+car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_up() {
    if (car2_y>=0) {
        car2_y=car2_y-10;
        console.log("When Up Arrow Pressed, X ="+car2_x+", Y ="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_down() {
    if (car2_y<=500) {
        car2_y=car2_y+10;
        console.log("When Down Arrow Pressed, X ="+car2_x+", Y ="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_left() {
    if (car2_x>=0) {
        car2_x=car2_x-10;
        console.log("When Left Arrow Pressed, X ="+car2_x+", Y ="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_right() {
    if (car2_x<=700) {
        car2_x=car2_x+10;
        console.log("When Right Arrow Pressed, X ="+car2_x+", Y ="+car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}