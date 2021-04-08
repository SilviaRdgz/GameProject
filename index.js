const skater = document.getElementById('skater');
const stone = document.getElementById('stone');
const cloud = document.getElementById('cloud');
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


// function hasCollided(skaterTop, skaterRight, skaterLeft, skaterBottom, stoneLeft, stoneRight, stoneTop) {
//     collidedHorizontal = skaterRight > stoneLeft && skaterLeft > stoneRight;
//     collidedVertical = skaterBottom > stoneTop ;

//     return collidedHorizontal && collidedVertical

    
// }


// setInterval(() => { //STONE
//     const skaterTop = parseInt(window.getComputedStyle(skater).getPropertyValue('top'));
//     const skaterBottom = skaterTop + parseInt(window.getComputedStyle(skater).getPropertyValue('height'));
//     const skaterLeft = parseInt(window.getComputedStyle(skater).getPropertyValue('left'));
//     const skaterRight =  skaterLeft + parseInt(window.getComputedStyle(skater).getPropertyValue('width'));

//     const stoneLeft = parseInt(window.getComputedStyle(stone).getPropertyValue('left'));
//     const stoneRight = stoneLeft + parseInt(window.getComputedStyle(stone).getPropertyValue('width'));
//     const stoneTop = parseInt(window.getComputedStyle(stone).getPropertyValue('top'));


//     if (stoneLeft < 0) {stone.style.display = 'none';
//     } else {stone.style.display = ''}


//     if (hasCollided(skaterTop, skaterRight, skaterLeft, skaterBottom, stoneLeft, stoneRight, stoneTop)) {
        

//         alert('Game Over ' + '\n\nplay again?');
//     }

    

// }, 50);


setInterval(() => { // CLOUD
    const skaterTop = parseInt(window.getComputedStyle(skater).getPropertyValue('top'));
    const cloudLeft = parseInt(window.getComputedStyle(cloud).getPropertyValue('left'));

    if (cloudLeft < 0) {cloud.style.display = 'none';
    } else {cloud.style.display = ''}

    // if (cloudLeft < 50 && cloudLeft > 0 && skaterTop > 150) {
    //     alert('Game Over' + '\n\nplay again?');
    // }

    // location.reload();
    

}, 2000);


// set interval for cloud collision



// Fine tune obstacles and skater

//fine tune overall design