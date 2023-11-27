var hitrn =0;
function makeBubble() {
    

var clutter ="";

for(var i= 1;i<=168; i++){
    var rn= Math.floor(Math.random()*10)
    clutter += `<div id="bubble1">${rn}</div>`;

}
document.querySelector("#pbtm").innerHTML = clutter;
}
var timer =20;
function runTimer() {
   var timerint= setInterval(function(){
        if (timer>0){
            timer--;
       document.querySelector("#Timervalue").textContent = timer; 
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game over`;
        }
     
       
    },1000);
}

function getNewHit() {
   hitrn = Math.floor(Math.random()*10);
    document.querySelector("#Hitval").textContent = hitrn; 
}


var score =0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;

    }

    document.querySelector("#pbtm").addEventListener("click",function(details){
  var clickednum = Number(details.target.textContent);
    if (clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
 
    });



runTimer();
makeBubble();
getNewHit();


