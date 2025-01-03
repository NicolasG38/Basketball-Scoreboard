let scoreHome=document.getElementById("score-home")
let scoreAway=document.getElementById("score-away")
let scoreHomeStyle=document.getElementsByTagName("h4")
let countHome = 0
let countAway = 0

function homeAddOne(){
    let homePlusOne=document.getElementById("home-plus-one")
    countHome+=1
    scoreHome.textContent=countHome
}
function homeAddTwo(){
    let homePlusTwo=document.getElementById("home-plus-two")
    countHome+=2
    scoreHome.textContent=countHome
}
function homeAddThree(){
    let homePlusThree=document.getElementById("home-plus-three")
    countHome+=3
    scoreHome.textContent=countHome
}


function awayAddOne(){
    let awayPlusOne=document.getElementById("away-plus-one")
    countAway+=1
    scoreAway.textContent=countAway
}
function awayAddTwo(){
    let awayPlusTwo=document.getElementById("away-plus-two")
    countAway+=2
    scoreAway.textContent=countAway
}
function awayAddThree(){
    let awayPlusThree=document.getElementById("away-plus-three")
    countAway+=3
    scoreAway.textContent=countAway
}
