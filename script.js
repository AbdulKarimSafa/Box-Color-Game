window.onload = () => {
    cum();
};
let playerLeft = 0;
let playerTop = 0;
let cumLeft = 0;
let cumTop = 0;
let score = 0;
let count = 0;
function player(){
    let left = Math.floor(Math.random() * 600);
    let top = Math.floor(Math.random() * 500);
    $('.player').animate({
        top: `${top}px`,
        left: `${left}px`
    });
    playerLeft = left;
    playerTop = top;
};
function cum(){
    let left = Math.floor(Math.random() * 600);
    let top = Math.floor(Math.random() * 500);
    $('.randomDiv').animate({
        top: `${top}px`,
        left: `${left}px`
    });
    cumLeft = left;
    cumTop = top;
};
function checkResult(){
    let ScoreLeft = playerLeft - cumLeft;
    let ScoreTop = playerTop - cumTop;
    
    if (ScoreLeft < 100 && ScoreLeft > -100){
        if(ScoreTop < 100 && ScoreTop > -100){
            score += 1;
            document.querySelector('.result').innerHTML = score;
            setTimeout(function() {
                cum();
            }, 1000);
        }
    };
    count += 1;
    document.querySelector('.count').innerHTML = count;
    console.log(ScoreLeft +'px' , ScoreTop + 'px');
};
