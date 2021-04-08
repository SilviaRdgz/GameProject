const skater = document.getElementById('skater');
const stone = document.getElementById('stone');
const cloud = document.getElementById('cloud');
const bird = document.getElementById('bird');
const score = document.getElementById('score');




function jump(){
    skater.classList.add('jump-animation');
    setTimeout(() => {
        skater.classList.remove('jump-animation')
},500);
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
// function stoneCollision(skaterTop, skaterRight, skaterLeft, skaterBottom, stoneLeft, stoneRight, stoneTop) {
//     collidedHorizontal = skaterRight > stoneLeft && skaterLeft > stoneRight;
//     collidedVertical = skaterBottom > stoneTop ;

//     return collidedHorizontal && collidedVertical  
// }

// COLLISION: BIRD OR CLOUD

function birdCloudCollision(skaterRight, birdLeft) {
    
    // collidedHorizontal = (skaterRight > birdLeft || skaterLeft > birdRight) || (skaterRight > cloudLeft || skaterLeft > cloudRight)
    // collidedVertical = (skaterTop < birdBottom) || (skaterTop < cloudBottom)

    console.log (skaterRight, birdLeft)

    let collidedHorizontal = skaterRight > birdLeft;
 console.log (collidedHorizontal)

    return collidedHorizontal;

}


setInterval(() => { //STONE

    score.innerText ++;
   

    const skaterTop = parseInt(window.getComputedStyle(skater).getPropertyValue('top'));
    const skaterBottom = skaterTop + parseInt(window.getComputedStyle(skater).getPropertyValue('height'));
    const skaterLeft = parseInt(window.getComputedStyle(skater).getPropertyValue('left'));
    const skaterRight =  skaterLeft + parseInt(window.getComputedStyle(skater).getPropertyValue('width'));

    const stoneLeft = parseInt(window.getComputedStyle(stone).getPropertyValue('left'));
    const stoneRight = stoneLeft + parseInt(window.getComputedStyle(stone).getPropertyValue('width'));
    const stoneTop = parseInt(window.getComputedStyle(stone).getPropertyValue('top'));


    if (stoneLeft < 0) {stone.style.display = 'none';
    } else {stone.style.display = ''}


    // if (stoneCollision(skaterTop, skaterRight, skaterLeft, skaterBottom, stoneLeft, stoneRight, stoneTop)) {
        

    //     // alert('Game Over ' + '\n\nplay again?');
    // }

    

}, 50);


setInterval(() => { // CLOUD
    const skaterRight = skater.getBoundingClientRect().right;
    const cloudLeft = cloud.getBoundingClientRect().left;


    if (cloudLeft < 0) {cloud.style.display = 'none';
    } else {cloud.style.display = ''} 

   if (skaterRight === 400 && Math.floor(cloudLeft) === 548 && checkKey) {
    console.log("game over")
   }
   
   document.onkeydown = checkKey;

   function checkKey(e) {
   
       e = e || window.event;
       
       if (e.code == 'ArrowDown') {
           return true;
        
           // down arrow
       } else {return false};
   }
   
   
   
//    (birdCloudCollision(skaterRight, cloudLeft)) 

    

}, 2000);


// set interval for cloud/bird collision

//start game with button

//add music

//fine tune overall design

