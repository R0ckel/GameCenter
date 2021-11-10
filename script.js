let 
    answers = ["Yes", "No", "Probably", "No way", "I dont think so",
     "Of course!", "Ask me later", "I dont know", "Hehe, fumny)", "U gonna get luck!",
    "It`s complicated", "Maybe", "I`m not sure", "Well... u just need to believe!"],
    answer, playername = "Player",
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
    animationStep = 500;

function prompter(){
   setTimeout(()=>{
      while(true){
            playername = prompt("Please, enter your nickname:", "Player");
            if (playername === null){
               playername = "Player";
               alert("Name was automatically changed to 'Player'!");
               break;
            }
            else if (playername.length < 3){
               alert("Your nickname is too short! Enter again!");
            }
            else if (playername.length > 20){
               alert("Your nickname is too long! Enter again!");
            }
            else{
               playerNameSizeChanger();
               break;
            }
      };
   }, 0.5 * animationStep);
}

function playerNameSizeChanger(){
      let playernameLabels = document.querySelectorAll(".playername-flexible");
      let fontSizeForLabels = 30/playername.length;
      playernameLabels.forEach(element=>{
         element.style.fontSize = ((fontSizeForLabels > 7)? 7 : fontSizeForLabels) + 'vw';
      })
}

function nameCheck(){
    pointplayername.innerHTML = playername;
    cardplayername.innerHTML = playername;
}

MagicBallButton.addEventListener('click', (event)=>{
    nameCheck();
    document.querySelector("#Main").animate(keyHideUp, {
    duration: 2 * animationStep
    })
    setTimeout(()=>{
        Main.style.display = 'none';
        MagicBall.style.display = 'flex';
        ballForm.style.display = 'none';
        MagicBall.animate(keyShowUp, {
        duration: 2 * animationStep
        })
        setTimeout(()=>{ballForm.style.display = 'block'}, 1000);
        backButton.style.display = 'flex';
        backButton.animate(keyShowUp, {
            duration: 2 * animationStep
        })
    }, 1.9 * animationStep);
    document.body.style.backgroundImage = "url('Gallery/gamingBackgroundYellow.jpg')";
})

PointBattleButton.addEventListener('click', (event)=>{
    nameCheck();
    document.querySelector("#Main").animate(keyHideUp, {
    duration: 2 * animationStep
    })
    setTimeout(()=>{
        Main.style.display = 'none';
        CardBattle.style.display = 'none';
        PointBattle.style.display = 'flex';
        pointrules.style.display = 'none';
        PointBattle.animate(keyShowUp, {
        duration: 2 * animationStep
        })
        setTimeout(()=>{pointrules.style.display = 'block'}, 2 * animationStep);
        backButton.style.display = 'flex';
        backButton.animate(keyShowUp, {
            duration: 2 * animationStep
        })
    }, 1.9 * animationStep);
    document.body.style.backgroundImage = "url('Gallery/gamingBackgroundDarkGreen.jpg')";
})

CardBattleButton.addEventListener('click', (event)=>{
    nameCheck();
    document.querySelector("#Main").animate(keyHideUp, {
    duration: 2 * animationStep
    })
    setTimeout(()=>{
        Main.style.display = 'none';
        PointBattle.style.display = 'none';
        CardBattle.style.display = 'flex';
        cardrules.style.display = 'none';
        CardBattle.animate(keyShowUp, {
        duration: 2 * animationStep
        })
        setTimeout(()=>{cardrules.style.display = 'block'}, 2 * animationStep);
        backButton.style.display = 'flex';
        backButton.animate(keyShowUp, {
            duration: 2 * animationStep
        })
    }, 1.9 * animationStep);
    document.body.style.backgroundImage = "url('Gallery/gamingBackgroundRed.jpg')";
})

backButton.addEventListener('click', (event)=>{
    MagicBall.animate(keyHideDown, {
        duration: 2 * animationStep
    })
    PointBattle.animate(keyHideDown, {
        duration: 2 * animationStep
    })
    CardBattle.animate(keyHideDown, {
        duration: 2 * animationStep
    })
    backButton.animate(keyHideDown, {
        duration: 2 * animationStep
    })
    setTimeout(()=>{
    MagicBall.style.display = 'none';
    PointBattle.style.display = 'none';
    backButton.style.display = 'none';
    CardBattle.style.display = 'none';
    Main.style.display = 'flex';
    Main.animate(keyShowDown, {
        duration: 2 * animationStep
    })
    }, 1.9 * animationStep)
    document.body.style.backgroundImage = "url('Gallery/gamingBackgroundBlue.jpg')"
})

///////////////////////MagicBall

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

///////////////////////PointBattle
///////////////////////Opponents
let
    opps = ["Alex", "Mike", "Daniel", "Roman", "Michael", "Angela",
            "Lisa", "Jessica", "Tanya", "Zhanna", "Marina", "Yevgen"],
    pscore = 0, oppscore = 0, pointcardsValues = new Array(), opp, flag
    min = Math.ceil(0),
    max = Math.floor(100.5),
    pointcards = [document.querySelector("#pointcard1"),
             document.querySelector("#pointcard2"),
             document.querySelector("#pointcard3")];
for (let i = 0; i < 3; i++){
    pointcardsValues.push(Math.floor(Math.random() * (max - min)) + min);
}
opp = opps.at(Math.floor(Math.random() * (opps.length - 0)) + 0);
pointopponentname.innerHTML = opp;
opp = opps.at(Math.floor(Math.random() * (opps.length - 0)) + 0);
cardopponentname.innerHTML = opp;

pointcard1.addEventListener('click', ()=>take(0));
pointcard2.addEventListener('click', ()=>take(1));
pointcard3.addEventListener('click', ()=>take(2));

function take(i){
    pointcards.forEach(element => {
        element.setAttribute('disabled', true);
    });
    pointcards.at(i).animate(keyFlip,{
        duration: 4 * animationStep
    });
    setTimeout(()=>{
        pointcards.at(i).value = pointcardsValues.at(i);
        pscore += 1*pointcards.at(i).value;
        var temp;
        do{
            temp = Math.floor(Math.random() * (pointcardsValues.length - 0)) + 0;
        }while(temp == i)
        oppscore += pointcardsValues.at(temp);
        if (1*pointcards.at(i).value >= 66){
            pointcards.at(i).classList.add('green');
        }
        else if (1*pointcards.at(i).value >= 33){
            pointcards.at(i).classList.add('yellow');
        }
        else {
            pointcards.at(i).classList.add('red');
        }
        setTimeout(()=>{
            pointcards.at(temp).classList.add('blue');
            setTimeout(()=>{
                for (let j = 0; j < pointcards.length; j++){
                    if (j != i){
                        pointcards.at(j).animate(keyFlip,{
                            duration: 4 * animationStep
                        });
                        setTimeout(()=>{
                            pointcards.at(j).value = pointcardsValues.at(j);
                        }, 2 * animationStep);
                    }
                }
            }, 4 * animationStep);
            setTimeout(()=>{
                pointpghost.innerHTML = '+' + pointcardsValues.at(i);
                pointpghost.style.display = 'flex';
                pointoppghost.innerHTML = '+' + pointcardsValues.at(temp);
                pointoppghost.style.display = 'flex';
                pointpghost.animate(keyGhost,{
                    duration: 6 * animationStep
                })
                pointoppghost.animate(keyGhost,{
                    duration: 6 * animationStep
                })
            }, 10 * animationStep)
            setTimeout(()=>{
                pointpghost.style.display = 'none';
                pointoppghost.style.display = 'none';
                pointplayerscorefield.innerHTML = pscore;
                pointopponentscorefield.innerHTML = oppscore;
                if (Math.max(pscore, oppscore) < 250){
                    pointchooser.innerHTML = "<a>CLICK for the next round!</a>";
                    flag = false;
                }
                else{
                    pointchooser.innerHTML = "<a>CLICK to try again!</a>";
                    pointwinnername.innerHTML = Winner(pscore, oppscore);
                    pointwinnerplace.classList.add("winner");
                    flag = true;
                }
                pointchooser.classList.add('pointed');
            }, 16 * animationStep);
        }, 6 * animationStep);
    }, 2 * animationStep);
}

function Winner(p, op){
    if (1 * p == 1 * op){
        return "DRAW";
    }
    else return(1 * p > 1 * op)? playername : opp;
}

pointchooser.addEventListener('click', ()=>{
    if (pointchooser.innerHTML == 'Choose the card') return;
    pointchooser.innerHTML = 'Choose the card';
    pointchooser.classList.remove('pointed');
    if (flag){
        pointwinnername.innerHTML = ". . .";
        pscore = 0;
        oppscore = 0;
        pointplayerscorefield.innerHTML = pscore;
        pointopponentscorefield.innerHTML = oppscore;
        pointwinnerplace.classList.remove("winner");
        opp = opps.at(Math.floor(Math.random() * (opps.length - 0)) + 0);
        pointopponentname.innerHTML = opp;
        flag = false;
    }
    pointcards.forEach(element => {
        element.animate(keyFlip,{
            duration: 4 * animationStep
        });
    });
    setTimeout(()=>{
        pointcards.forEach(element => {
            element.value = '?';
        });
        pointcardsValues.splice(0);
        for (let i = 0; i < 3; i++){
            pointcardsValues.push(Math.floor(Math.random() * (max - min)) + min);
        }
        pointcards.forEach(element => {
            element.classList.remove('green', 'yellow', 'red', 'blue');
        });
    }, 2 * animationStep);
    setTimeout(()=>{
        pointcards.forEach(element => {
            element.removeAttribute('disabled');
        });
    }, 4.5 * animationStep);
})

///////////////////////CardBattle
let 
    cardBack = "Gallery/Cards/cardback.png",
    cardPics = ["Gallery/Cards/6clubs.png", "Gallery/Cards/6diamonds.png", "Gallery/Cards/6hearts.png", "Gallery/Cards/6spades.png","Gallery/Cards/7clubs.png", "Gallery/Cards/7diamonds.png", "Gallery/Cards/7hearts.png", "Gallery/Cards/7spades.png","Gallery/Cards/8clubs.png", "Gallery/Cards/8diamonds.png", "Gallery/Cards/8hearts.png", "Gallery/Cards/8spades.png", "Gallery/Cards/9clubs.png", "Gallery/Cards/9diamonds.png", "Gallery/Cards/9hearts.png", "Gallery/Cards/9spades.png", "Gallery/Cards/10clubs.png", "Gallery/Cards/10diamonds.png", "Gallery/Cards/10hearts.png", "Gallery/Cards/10spades.png", "Gallery/Cards/Aclubs.png", "Gallery/Cards/Adiamonds.png", "Gallery/Cards/Ahearts.png", "Gallery/Cards/Aspades.png", "Gallery/Cards/Jclubs.png", "Gallery/Cards/Jdiamonds.png", "Gallery/Cards/Jhearts.png", "Gallery/Cards/Jspades.png", "Gallery/Cards/Qclubs.png", "Gallery/Cards/Qdiamonds.png", "Gallery/Cards/Qhearts.png", "Gallery/Cards/Qspades.png", "Gallery/Cards/Kclubs.png", "Gallery/Cards/Kdiamonds.png", "Gallery/Cards/Khearts.png", "Gallery/Cards/Kspades.png"],
    leftCard, rightCard, localCardPics, leftCardValue, rightCardValue, 
    taked = false, isFinished = false, cardRoundCount = 1, playerTotalValue = 0, oppTotalValue = 0;

TakeCardButton.addEventListener('click', ()=>{
    if (!taked){
        TakeCard();
    }
    else if (taked && !isFinished){
        CardReset();
    }
    else{
        CardReset();
    }
})

function TakeCard(){
    taked = true;
    TakeCardButton.setAttribute('disabled', true);
    localCardPics = cardPics;
    let temp = Math.floor(Math.random() * (localCardPics.length - 0)) + 0;
    leftCard = localCardPics.at(temp);
    localCardPics.splice(temp, 1);
    temp = Math.floor(Math.random() * (localCardPics.length - 0)) + 0;
    rightCard = localCardPics.at(temp);
    leftCardValue = CardValue(leftCard); //PValue
    rightCardValue = CardValue(rightCard); //OppValue
    card1.animate(keyFlip,{
        duration: 4 * animationStep
    });
    card2.animate(keyFlip,{
        duration: 4 * animationStep
    });
    setTimeout(()=>{
        cardpghost.innerHTML = '+' + leftCardValue;
        cardoppghost.innerHTML = '+' + rightCardValue;
        cardpghost.style.display = 'flex';
        cardoppghost.style.display = 'flex';
        cardpghost.animate(keyGhost, duration = 6 * animationStep);
        cardoppghost.animate(keyGhost, duration = 6 * animationStep);
    }, 6 * animationStep)

    setTimeout(()=>{
        card1.src = leftCard;
        card2.src = rightCard;
    }, 2 * animationStep)

    setTimeout(()=>{
        TakeCardButton.removeAttribute('disabled');
        cardpghost.style.display = 'none';
        cardoppghost.style.display = 'none';
        playerTotalValue += leftCardValue;
        oppTotalValue += rightCardValue;
        cardRoundCount++;
        cardplayerscorefield.innerHTML = playerTotalValue;
        cardopponentscorefield.innerHTML = oppTotalValue;
        if (cardRoundCount > 3){
            console.log(taked + ' --- ' + isFinished + ' --- ' + cardRoundCount);
            cardwinnername.innerHTML = Winner(playerTotalValue, oppTotalValue);
            cardwinnerplace.classList.add("winner");
            cardRoundCount = 1;
            TakeCardButton.innerHTML = "New game";
            playerTotalValue = 0;
            oppTotalValue = 0;
            isFinished = true;
        }
        else {
            TakeCardButton.innerHTML = "Next card";
        }
    }, 12 * animationStep)
}

function CardReset(){
    TakeCardButton.setAttribute('disabled', true);
    card1.animate(keyFlip,{
        duration: 4 * animationStep
    });
    card2.animate(keyFlip,{
        duration: 4 * animationStep
    });
    setTimeout(()=>{
        card1.src = cardBack;
        card2.src = cardBack;
    }, 2 * animationStep)
    
    setTimeout(()=>{
        TakeCardButton.innerHTML = "Take a card";
        if (isFinished){
            opp = opps.at(Math.floor(Math.random() * (opps.length - 0)) + 0);
            cardopponentname.innerHTML = opp;
            cardwinnername.innerHTML = ". . .";
            cardplayerscorefield.innerHTML = 0;
            cardopponentscorefield.innerHTML = 0;
            cardwinnerplace.classList.remove("winner");
            roundCount.innerHTML = "Round: 1";
            isFinished = false;
        }
        TakeCardButton.removeAttribute('disabled');
        roundCount.innerHTML = "Round: " + cardRoundCount;
        taked = false;
    }, 4 * animationStep)
}

function CardValue(card){
    let symb;
    for (let i = card.length-2; i >= 0; i--){
        if (card.at(i)=='/'){
            symb = card.at(i+1);
            break;
        }
    }
    switch(symb){
        case '6' : return 6;
        case '7' : return 7;
        case '8' : return 8;
        case '9' : return 9;
        case '1' : return 10;
        case 'J' : return 2;
        case 'Q' : return 3;
        case 'K' : return 4;
        case 'A' : return 11;
        default: return -1;
    }
}
