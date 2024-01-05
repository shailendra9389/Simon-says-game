let gameseq=[];
let userseq=[];
let btns=["purple","yellow","green","red","pink","brown"];
let started=false;
let level=0;

let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started=true;
    
        levelup();
    }

});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);

}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);

}
function levelup(){
    userseq=[];
    level++;
    h3.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*5);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}
function checkAns(idx){
    //console.log("curr level:",level);
    
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
            
            
        }
       
    }
    else{
        h3.innerHTML=`Game over!your score is <b>${level} </b><br> Press again to start the game`;
        
        // h2.innerText=`Your Score is ${level}`;
        
            document.querySelector("body").style.backgroundColor="red";

        
        
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
        

    }

}
function btnPress(){
    let btn=this;
    userFlash(btn);
    
    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
    
}
let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);

}
function reset(){
   started=false;
   gameseq=[];
   userseq=[];

   level=0;
   
}
