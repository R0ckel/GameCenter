let 
    answers = ["Yes", "No", "Probably", "No way", "I dont think so",
     "Of course!", "Ask me later", "I dont know", "Hehe, fumny)", "U gonna get luck!",
    "It`s complicated", "Maybe", "I`m not sure", "Well... u just need to believe!"],
    answer,
    keyShowUp = [
        {transform: "translate(0px, 120vh)", easing: "ease-in-out", opacity: "0%"},
        {transform: "translate(0px, 0vh)", opacity: "100%"}
    ],
    keyShowDown = [
        {transform: "translate(0px, -120vh)", easing: "ease-in-out", opacity: "0%"},
        {transform: "translate(0px, 0vh)", opacity: "100%"}
    ],
    keyHideUp = [
        {transform: "translate(0px, 0vh)", easing: "ease-in-out"},
        {transform: "translate(0px, -120vh)", opacity: "0%"}
    ],
    keyHideDown = [
        {transform: "translate(0px, 0vh)", easing: "ease-in-out"},
        {transform: "translate(0px, 120vh)", opacity: "0%"}
    ],
    keyFlip = [
        {transform: "rotate3d(0, 1, 0, 0deg)"},
        {transform: "rotate3d(0, 1, 0, 150deg)"},
        {transform: "rotate3d(0, 1, 0, 267deg)"},
        {transform: "rotate3d(0, 1, 0, 270deg)"},
        {transform: "rotate3d(0, 1, 0, 273deg)"},
        {transform: "rotate3d(0, 1, 0, 320deg)"},
        {transform: "rotate3d(0, 1, 0, 360deg)"}
    ],
    keyShake = [
        {transform: "translate(0%)"},
        {transform: "translate(3%)"},
        {transform: "translate(0%)"},
        {transform: "translate(-3%)"},
        {transform: "translate(0)"}
    ],
    keyGhost = [
        {transform: "translate(0, 20vw)", opacity: 0},
        {transform: "translate(0, 10vw)", opacity: 1},
        {transform: "translate(0, 0vw)", opacity: 0}
    ]
    backButton = document.querySelector("#backButton");

MagicBallButton.addEventListener('click', (event)=>{
    document.querySelector("#Main").animate(keyHideUp, {
    duration: 1000
    })
    setTimeout(()=>{
        Main.style.display = 'none';
        MagicBall.style.display = 'flex';
        ballForm.style.display = 'none';
        MagicBall.animate(keyShowUp, {
        duration: 1000
        })
        setTimeout(()=>{ballForm.style.display = 'block'}, 1000);
        backButton.style.display = 'flex';
        backButton.animate(keyShowUp, {
            duration: 1000
        })
    }, 980);
    document.body.style.backgroundImage = "url('Gallery/gamingBackgroundYellow.jpg')";
})

PointBattleButton.addEventListener('click', (event)=>{
    document.querySelector("#Main").animate(keyHideUp, {
    duration: 1000
    })
    setTimeout(()=>{
        Main.style.display = 'none';
        PointBattle.style.display = 'flex';
        rules.style.display = 'none';
        PointBattle.animate(keyShowUp, {
        duration: 1000
        })
        setTimeout(()=>{rules.style.display = 'block'}, 1000);
        backButton.style.display = 'flex';
        backButton.animate(keyShowUp, {
            duration: 1000
        })
    }, 980);
    document.body.style.backgroundImage = "url('Gallery/gamingBackgroundDarkGreen.jpg')";
})

backButton.addEventListener('click', (event)=>{
    MagicBall.animate(keyHideDown, {
        duration: 1000
    })
    PointBattle.animate(keyHideDown, {
        duration: 1000
    })
    backButton.animate(keyHideDown, {
        duration: 1000
    })
    setTimeout(()=>{
    MagicBall.style.display = 'none';
    PointBattle.style.display = 'none';
    backButton.style.display = 'none';
    Main.style.display = 'flex';
    Main.animate(keyShowDown, {
        duration: 1000
    })
    }, 980)
    document.body.style.backgroundImage = "url('Gallery/gamingBackgroundBlue.jpg')"
})

ballForm.addEventListener('keydown', (event)=> {
    if(event.keyCode == 13) {
       event.preventDefault();
    }
 });

function rand(){
    let str = forQuest.value;
    if (str.length<2 || str.at(str.length-1)!='?'){
        alert("Question wasn`t entered!");
    }
    else{
        if (document.querySelector("#deleteCheck").checked){
            document.querySelector('#forQuest').value="";
        }
        let animateDuration = 200;
        min = Math.ceil(0);
        max = Math.floor(answers.length);
        answer = answers.at(Math.floor(Math.random() * (max - min)) + min);
        asker.innerHTML = answer;
        block.animate(keyShake, {
            duration: animateDuration,
            iterations: 4
        })
        asker.animate([
            { opacity: 0 },
            { opacity: 0 }
        ], animateDuration*4);
    }
}

///////////////////////CardBattle
let
    opps = ["Alex", "Mike", "Daniel", "Roman", "Michael", "Angela",
            "Lisa", "Jessica", "Tanya", "Zhanna", "Marina", "Yevgen"],
    pscore = 0, oppscore = 0, cardsValues = new Array(), opp, flag
    min = Math.ceil(0),
    max = Math.floor(100.5),
    cards = [document.querySelector("#card1"),
             document.querySelector("#card2"),
             document.querySelector("#card3")];
for (let i = 0; i < 3; i++){
    cardsValues.push(Math.floor(Math.random() * (max - min)) + min);
}
opp = opps.at(Math.floor(Math.random() * (opps.length - 0)) + 0);
opponentname.innerHTML = opp;


card1.addEventListener('click', ()=>take(0));
card2.addEventListener('click', ()=>take(1));
card3.addEventListener('click', ()=>take(2));

function take(i){
    cards.forEach(element => {
        element.setAttribute('disabled', true);
    });
    cards.at(i).animate(keyFlip,{
        duration: 2000
    });
    setTimeout(()=>{
        cards.at(i).value = cardsValues.at(i);
        pscore += 1*cards.at(i).value;
        console.log(pscore);
        var temp;
        do{
            temp = Math.floor(Math.random() * (cardsValues.length - 0)) + 0;
        }while(temp == i)
        oppscore += cardsValues.at(temp);
        console.log(oppscore);
        if (1*cards.at(i).value >= 66){
            cards.at(i).classList.add('green');
        }
        else if (1*cards.at(i).value >= 33){
            cards.at(i).classList.add('yellow');
        }
        else {
            cards.at(i).classList.add('red');
        }
        console.log(3);
        setTimeout(()=>{
            cards.at(temp).classList.add('blue');
            setTimeout(()=>{
                console.log(4);
                for (let j = 0; j < cards.length; j++){
                    if (j != i){
                        cards.at(j).animate(keyFlip,{
                            duration: 2000
                        });
                        setTimeout(()=>{
                            cards.at(j).value = cardsValues.at(j);
                        }, 1000);
                    }
                }
            }, 2000);
            setTimeout(()=>{
                console.log(5);
                pghost.innerHTML = '+' + cardsValues.at(i);
                pghost.style.display = 'flex';
                oppghost.innerHTML = '+' + cardsValues.at(temp);
                oppghost.style.display = 'flex';
                pghost.animate(keyGhost,{
                    duration: 3000
                })
                oppghost.animate(keyGhost,{
                    duration: 3000
                })
            }, 5000)
            setTimeout(()=>{
                pghost.style.display = 'none';
                oppghost.style.display = 'none';
                playerscorefield.innerHTML = pscore;
                opponentscorefield.innerHTML = oppscore;
                if (Math.max(pscore, oppscore) < 250){
                    chooser.innerHTML = "<a>CLICK for the next round!</a>";
                    flag = false;
                }
                else{
                    chooser.innerHTML = "<a>CLICK to try again!</a>";
                    winnername.innerHTML = Winner(pscore, oppscore);
                    winnerplace.style.border = "0.3vw ridge gold";
                    flag = true;
                }
                chooser.classList.add('pointed');
            }, 8000);
        }, 3000);
    }, 1000);
}

function Winner(p, op){
    if (1*p >= 250 && 1*op >= 250){
        return "DRAW";
    }
    else return(1*p > 1*op)? "YOU" : opp;
}

chooser.addEventListener('click', ()=>{
    if (chooser.innerHTML == 'Choose the card') return;
    chooser.innerHTML = 'Choose the card';
    chooser.classList.remove('pointed');
    if (flag){
        winnername.innerHTML = ". . .";
        pscore = 0;
        oppscore = 0;
        playerscorefield.innerHTML = pscore;
        opponentscorefield.innerHTML = oppscore;
        winnerplace.style.border = "0.3vw ridge";
        opp = opps.at(Math.floor(Math.random() * (opps.length - 0)) + 0);
        opponentname.innerHTML = opp;
        flag = false;
    }
    cards.forEach(element => {
        element.animate(keyFlip,{
            duration: 2000
        });
    });
    setTimeout(()=>{
        cards.forEach(element => {
            element.value = '?';
        });
        cardsValues.splice(0);
        for (let i = 0; i < 3; i++){
            cardsValues.push(Math.floor(Math.random() * (max - min)) + min);
        }
        cards.forEach(element => {
            element.classList.remove('green', 'yellow', 'red', 'blue');
        });
    }, 1000);
    setTimeout(()=>{
        cards.forEach(element => {
            element.removeAttribute('disabled');
        });
    }, 2200);
})