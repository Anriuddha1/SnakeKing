let direction = {x:0, y:0};
let speed = 8;
let score=0;
let score1=document.querySelector('.score');
let board=document.getElementById('board');
let gameover=document.querySelector('.gameover');
let containetitem=document.querySelector('.container-item')
let start=document.querySelector('.start');
let head1=document.querySelector('.head');
let restart=document.querySelector('.restart');
let eat=new Audio('sound/1.mp3');
let turn=new Audio('sound/2.mp3');
let strt=new Audio('sound/3.mp3');
let gmover=new Audio('sound/4.mp3');
let lastpointtime=0;
let value=0;


let snakearr=[
    {x:13,y:15}
]
let food ={x:6,y:7}
let inputDir = {x: 0, y: 0};



function iscollide(sarr){
      for(let i=1; i<sarr.length; i++){
        if(sarr[i].x === sarr[0].x && sarr[i].y === sarr[0].y){
            return true;
        }
    }
    // Wall collision
    if(sarr[0].x >= 21 || sarr[0].x <= 0 || sarr[0].y >= 21 || sarr[0].y <= 0){
        return true;
    }

    return false;
}
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastpointtime)/1000<1/speed){
        return;
    }
    lastpointtime=ctime;
    gameengine();
}
function gameengine(){

    if(iscollide(snakearr)){
        inputDir={x:0,y:0};
        snakearr=[{x:13,y:15}];
        console.log(score);
        let hscore=score;
        if(hscore > value){
            saveValue(hscore);
        }
        
        score=0;
        gameover.style.visibility='visible';
        restart.style.visibility='visible';
        gmover.play();
        
        
        containetitem.style.opacity='0.5';
        window.addEventListener('keydown',e=>{
        inputDir={x:0,y:0}
        switch(e.key){
        case "ArrowUp":
            break;
        case "ArrowDown":
            break;
        case "ArrowLeft":
            break;
        case "ArrowRight":
            break;
        default:
            break;
    }
})
    }

    if(snakearr[0].y===food.y && snakearr[0].x===food.x){
        snakearr.unshift({x:snakearr[0].x+inputDir.x,y:snakearr[0].y+inputDir.y});
        let a=1;
        let b=20;
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())};
        score+=1;
        eat.play();
        score1.textContent="Score "+score;
        console.log(score);
    }

    for(let i = snakearr.length-2;i>=0;i--){
        snakearr[i+1]={...snakearr[i]};
    }

    snakearr[0].x += inputDir.x;
    snakearr[0].y += inputDir.y;


    board.innerHTML="";
    snakearr.forEach((e,index)=>{
        snakeelement=document.createElement('div');
        snakeelement.style.gridRowStart = e.y;
        snakeelement.style.gridColumnStart = e.x;
        
        if(index===0){
            snakeelement.classList.add('head');
        }else{
            snakeelement.classList.add('body');
        }

        board.appendChild(snakeelement);
    });
    foodelement=document.createElement('div');
    foodelement.style.gridRowStart = food.y;
    foodelement.style.gridColumnStart = food.x;
    foodelement.classList.add('food');
    board.appendChild(foodelement);
}




window.requestAnimationFrame(main);
// window.addEventListener('keydown',e=>{
//     inputDir={x:0,y:1}
//     switch(e.key){
//         case "ArrowUp":
//             console.log("ArrowUp");
//             inputDir.x=0;
//             inputDir.y=-1;
//             break;

//         case "ArrowDown":
//             console.log("ArrowDown");
//             inputDir.x=0;
//             inputDir.y=1;
//             break;

//         case "ArrowLeft":
//             console.log("ArrowLeft");
//             inputDir.x=-1;
//             inputDir.y=0;
//             break;

//         case "ArrowRight":
//             console.log("ArrowRight");
//             inputDir.x=1;
//             inputDir.y=0;
//             break;

//         default:
//             break;
//     }
// })

start.addEventListener('click',()=>{
    start.style.visibility='hidden';
    strt.play();
    containetitem.style.opacity='1';
    inputDir.x=0;
    inputDir.y=-1;
    window.addEventListener('keydown',e=>{
    inputDir={x:0,y:1}
    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x=0;
            inputDir.y=-1;
            turn.pause();
            turn.play();
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x=0;
            inputDir.y=1;
            turn.pause();
            turn.play();
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x=-1;
            inputDir.y=0;
            turn.pause();
            turn.play();
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x=1;
            inputDir.y=0;
            turn.pause();
            turn.play();
            break;

        default:
            break;
    }
})
})
restart.addEventListener('click',()=>{
    strt.play();
    restart.style.visibility='hidden';
    gameover.style.visibility='hidden';
    containetitem.style.opacity='1';
    inputDir.x=0;
    inputDir.y=-1;
    score=0;
    score1.textContent="Score "+score;
    window.addEventListener('keydown',e=>{
    inputDir={x:0,y:1}
    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x=0;
            inputDir.y=-1;
            turn.pause();
            turn.play();
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x=0;
            inputDir.y=1;
            turn.pause();
            turn.play();
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x=-1;
            inputDir.y=0;
            turn.pause();
            turn.play();
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x=1;
            inputDir.y=0;
            turn.pause();
            turn.play();
            break;

        default:
            break;
    }
})
})

let hvalue=value;

  // Load saved value on page load
  window.onload = function () {
    const savedValue = localStorage.getItem("hscore");
    if (savedValue) {
        value=parseInt(savedValue);
      document.getElementById("output").textContent = "High Score:" + savedValue;
    }
  };

  // Save value to localStorage on user action
  function saveValue(hscore) {
     value =hscore;
    localStorage.setItem("hscore", value);
    document.getElementById("output").textContent = " High Score: " + value;
  }



  let touchStartX = 0;
let touchStartY = 0;

window.addEventListener("touchstart", function (e) {
  const touch = e.touches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
});

window.addEventListener("touchend", function (e) {
  const touch = e.changedTouches[0];
  const deltaX = touch.clientX - touchStartX;
  const deltaY = touch.clientY - touchStartY;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    // Horizontal swipe
    if (deltaX > 30 && inputDir.x !== -1) {
      inputDir = { x: 1, y: 0 }; // Swipe right
      turn.pause();
      turn.play();
    } else if (deltaX < -30 && inputDir.x !== 1) {
      inputDir = { x: -1, y: 0 }; // Swipe left
      turn.pause();
      turn.play();
    }
  } else {
    // Vertical swipe
    if (deltaY > 30 && inputDir.y !== -1) {
      inputDir = { x: 0, y: 1 }; // Swipe down
      turn.pause();
      turn.play();
    } else if (deltaY < -30 && inputDir.y !== 1) {
      inputDir = { x: 0, y: -1 }; // Swipe up
      turn.pause();
      turn.play();
    }
  }
});
