const skater = document.getElementById('skater');
const stone = document.getElementById('stone');
const cloud = document.getElementById('cloud');
const bird = document.getElementById('bird');
const score = document.getElementById('score');
const startBtn = document.getElementById('start-button')

// startBtn.addEventListener('click',() => {})

function jump(){
    skater.classList.add('jump-animation');
    setTimeout(() => {
        skater.classList.remove('jump-animation')
},1000);
}

document.addEventListener('keydown',(e) => {
    if (e.code == "ArrowUp" && !skater.classList.contains('jump-animation')) {
        jump();
    }

})


function duck  () {
    skater.classList.add('skater-duck');
    
}

document.addEventListener('keydown', (e) => {
    if (e.code == "ArrowDown" && !skater.classList.contains('skater-duck')) {
        duck();
    }
    console.log (e.code)

})


document.addEventListener('keyup', (e) => {
    if (e.code == "ArrowDown" && skater.classList.contains('skater-duck')) {
        skater.classList.remove('skater-duck')
    }

})

// COLLISION: STONE



function stoneCollision(skaterTop, skaterRight, skaterLeft, skaterBottom, stoneLeft, stoneRight, stoneTop) {
    collidedHorizontal = skaterRight > stoneLeft && skaterLeft < stoneRight;
    collidedVertical = skaterBottom > stoneTop ;

    return collidedHorizontal && collidedVertical  
    
}

// COLLISION: BIRD OR CLOUD

function skyCollision(skaterTop, skaterRight, skaterLeft, obstacleLeft, obstacleRight, obstacleBottom) {
    collidedHorizontal = skaterRight > obstacleLeft && skaterLeft < obstacleRight;
    collidedVertical = skaterTop < obstacleBottom ;

    return collidedHorizontal && collidedVertical  
    
}



setInterval(() => { 

    score.innerText ++;
   

    const skaterTop = parseInt(window.getComputedStyle(skater).getPropertyValue('top'));
    const skaterBottom = skaterTop + parseInt(window.getComputedStyle(skater).getPropertyValue('height'));
    const skaterLeft = parseInt(window.getComputedStyle(skater).getPropertyValue('left'));
    const skaterRight =  skaterLeft + parseInt(window.getComputedStyle(skater).getPropertyValue('width'));


    const stoneLeft = parseInt(window.getComputedStyle(stone).getPropertyValue('left'));
    const stoneRight = stoneLeft + parseInt(window.getComputedStyle(stone).getPropertyValue('width'));
    const stoneTop = parseInt(window.getComputedStyle(stone).getPropertyValue('top'));

    const cloudLeft = parseInt(window.getComputedStyle(cloud).getPropertyValue('left'));
    const cloudRight = cloudLeft + parseInt(window.getComputedStyle(cloud).getPropertyValue('width'));
    const cloudBottom = parseInt(window.getComputedStyle(cloud).getPropertyValue('bottom'));

    const birdLeft = parseInt(window.getComputedStyle(bird).getPropertyValue('left'));
    const birdRight = birdLeft + parseInt(window.getComputedStyle(bird).getPropertyValue('width'));
    const birdBottom = parseInt(window.getComputedStyle(bird).getPropertyValue('bottom'));

    const stoneCollided = stoneCollision(skaterTop, skaterRight, skaterLeft, skaterBottom, stoneLeft, stoneRight, stoneTop);
    const cloudCollided = skyCollision(skaterTop, skaterRight, skaterLeft, cloudLeft, cloudRight, cloudBottom);
    const birdCollided = skyCollision(skaterTop, skaterRight, skaterLeft, birdLeft, birdRight, birdBottom)
    
    const anyCollided = stoneCollided || cloudCollided || birdCollided;

    if (anyCollided) alert(`Good job! Your score is ${score.innerText} but the party is over! T_T \n Try again?`)

    // devtext.innerText = "skaterTop:"+skaterTop+ 
    // "\nskaterBottom:"+skaterBottom+
    // "\nskaterLeft:"+skaterLeft+
    // "\nskaterRight:"+skaterRight+
    // "\nstoneLeft:"+stoneLeft+
    // "\nstoneRight:"+stoneRight+
    // "\nstoneTop:"+stoneTop+
    
    // "\nbirdLeft:"+birdLeft+
    // "\nbirdRight:"+birdRight+
    // "\nbirdBottom:"+birdBottom+

    // "\ncloudLeft:"+cloudLeft+
    // "\ncloudRight:"+cloudRight+
    // "\ncloudBottom:"+cloudBottom+
    // "\ncollided:"+anyCollided

    
    if (stoneLeft < 0) {
        stone.style.display = 'none'
    }

    if (stoneLeft < skaterLeft) {
        cloud.style.display = '' 
    }

    if (cloudLeft <0){
        cloud.style.display = 'none'
    }
    if (cloudLeft < skaterLeft) {
        bird.style.display = '' 
    }

    if (birdLeft < 0 ) {
    bird.style.display = 'none'
    }

    if (birdLeft < skaterLeft ) {
        stone.style.display = '' 
        }


}, 50);



cloud.style.display = 'none'
bird.style.display = 'none'
stone.style.display = 'none'

.onclick


