mar = document.getElementById('mar');
let moveRight, moveLeft;
let isMovingRight = false;
let isMovingLeft = false;

function right(){

    let currentLeft = parseInt(mar.style.left) || 0;
    const viewWidth = window.innerWidth;
    const marioWidth = mar.offsetWidth;

    let upRight = currentLeft+marioWidth+10;
    
    if((currentLeft+marioWidth+10)<=viewWidth)
    {
    mar.style.left =currentLeft + 10 + "px";
    }
    else{
        mar.style.left = (viewWidth- marioWidth) + 'px';
    }
}

function autoRight(){
    if(!isMovingRight){
        isMovingRight = true;
        moveRight = setInterval(right,30);
    }
    }
   
function stopRight(){
    clearInterval(moveRight);
    isMovingRight = false;
}

// left

function left(){
    let currentLeft = parseInt(mar.style.left) || 0;

    let upLeft =currentLeft - 10;

    if(upLeft>0){
        mar.style.left =upLeft +'px';
    }
    else{
        mar.style.left = '0px';
    }
    
}


function autoLeft(){
    if(!isMovingLeft){
        isMovingLeft =true;
        moveLeft = setInterval(left,30);
    }
    
}
function stopLeft(){
    clearInterval(moveLeft);
    isMovingLeft = false;
}


// button

document.addEventListener('keydown',function(event){
    if(event.key === 'ArrowRight' && !isMovingRight){
        autoRight();
    }
    if(event.key === 'ArrowLeft' && !isMovingRight){
        autoLeft();
    }
    
});

document.addEventListener('keyup',function(event){
    if(event.key === 'ArrowRight'){
        stopRight();
    }
    if(event.key === 'ArrowLeft'){
        stopLeft();
    }
});