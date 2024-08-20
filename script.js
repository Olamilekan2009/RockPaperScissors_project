//PROJECT ON THE GAME OF ROCK PAPER SCISSORS
// for the determination of winner
function playgame() {
    // greeting on opening of the page
    alert("Welcome To The Rock Paper Scissors Game !!!!! \n Click The Button Below To Start The Round One Of The Game \n REMEMBER THIS PAGE IS CASE INSENITIBE SO IT DOESN'T MIND THE WAY YOU PUT DOWN YOUR OPTIONS HAVE FUN!!!");
    // name of the player for future references
    var names=prompt("enter the name you would like to use in the game").toUpperCase();
    // declares scores for future references
    var humanscore=0;
    var computerscore=0;
    var ties=0;
    //declares the variabel outputs for use to tell the winner of eache round
    var outputs;
    // looping
    for (let index = 1; index <6; index++) {
        // function to get human choice 
        function playround() {
            // declaration of a variable for the output for future references
            // gets human response from player
            var humanchoice=prompt("What do you want to play: \n ROCK or PAPER or SCISSORS").toUpperCase();
            // validating that the user has inputed one of the rock or paper or scissors
            if (humanchoice==="ROCK") {
                function maingaming() {
                    // generating random responses for COMPUTER
                    var comptrandom=Math.random();
                    var computerchoice;
                    if (comptrandom<=0.3) {
                        computerchoice="ROCK";
                    } else if (comptrandom>0.3 && comptrandom<=0.7) {
                        computerchoice="PAPER";
                    } else {
                        computerchoice="SCISSORS";
                    } 
                    // comparison of responses of COMPUTER and player to give the formerly declared output a value
                    if (humanchoice===computerchoice) {
                        outputs="it is a tie between " + names + " and " + "COMPUTER";
                        ties=ties+1;
                    } else if (humanchoice === "ROCK" && computerchoice === "SCISSORS"){
                        outputs=names + " wins this round COMPUTER";
                        humanscore=humanscore+1;
                    } else if (humanchoice === "PAPER" && computerchoice === "ROCK"){
                        outputs=names + " wins this round COMPUTER";
                        humanscore=humanscore+1;
                    }else if (humanchoice === "SCISSORS" && computerchoice === "PAPER"){
                        outputs=names + " wins this round COMPUTER";
                        humanscore=humanscore+1;
                    }
                    else {
                        outputs= "COMPUTER wins this round " + names;
                        computerscore=computerscore+1;
                    } 
                    // returns player's choice
                    console.log(names + " played " + humanchoice);
                    // returns computer's choice
                    console.log("COMPUTER played " + computerchoice);
                    // shows the result of the game
                    console.log(outputs);
                    // shows present scores of players
                    console.log(names+ " : " + humanscore);
                    console.log("COMPUTER : " + computerscore);
                    console.log("TIES : " + ties);
                }
                maingaming()
            }else if(humanchoice==="SCISSORS"){
                function maingaming() {
                    var comptrandom=Math.random();
                    var computerchoice;
                    if (comptrandom<=0.3) {
                        computerchoice="ROCK";
                    } else if (comptrandom>0.3 && comptrandom<=0.7) {
                        computerchoice="PAPER";
                    } else {
                        computerchoice="SCISSORS";
                    } 
                    if (humanchoice===computerchoice) {
                        outputs="it is a tie between " + names + " and " + "COMPUTER";
                        ties=ties+1;
                    } else if (humanchoice === "ROCK" && computerchoice === "SCISSORS"){
                        outputs=names + " wins this round COMPUTER";
                        humanscore=humanscore+1;
                    } else if (humanchoice === "PAPER" && computerchoice === "ROCK"){
                        outputs=names + " wins this round COMPUTER";
                        humanscore=humanscore+1;
                    }else if (humanchoice === "SCISSORS" && computerchoice === "PAPER"){
                        outputs=names + " wins this round COMPUTER";
                        humanscore=humanscore+1;
                    }
                    else {
                        outputs= "COMPUTER wins this round " + names;
                        computerscore=computerscore+1;
                    } 
                    // returns player's choice
                    console.log(names + " played " + humanchoice);
                    // returns computer's choice
                    console.log("COMPUTER played " + computerchoice);
                    // shows the result of the game
                    console.log(outputs);
                    // shows present scores of players
                    console.log(names+ " : " + humanscore);
                    console.log("COMPUTER : " + computerscore);
                    console.log("TIES : " + ties);
                }
                maingaming()
            } else if(humanchoice==="PAPER"){
                function maingaming() {
                    var comptrandom=Math.random();
                    var computerchoice;
                    if (comptrandom<=0.3) {
                        computerchoice="ROCK";
                    } else if (comptrandom>0.3 && comptrandom<=0.7) {
                        computerchoice="PAPER";
                    } else {
                        computerchoice="SCISSORS";
                    } 
                    if (humanchoice===computerchoice) {
                        outputs="it is a tie between " + names + " and " + "COMPUTER";
                        ties=ties+1;
                    } else if (humanchoice === "ROCK" && computerchoice === "SCISSORS"){
                        outputs=names + " wins this round COMPUTER";
                        humanscore=humanscore+1;
                    } else if (humanchoice === "PAPER" && computerchoice === "ROCK"){
                        outputs=names + " wins this round COMPUTER";
                        humanscore=humanscore+1;
                    }else if (humanchoice === "SCISSORS" && computerchoice === "PAPER"){
                        outputs=names + " wins this round COMPUTER";
                        humanscore=humanscore+1;
                    }
                    else {
                        outputs= "COMPUTER wins this round " + names;
                        computerscore=computerscore+1;
                    } 
                    // returns player's choice
                    console.log(names + " played " + humanchoice)
                    // returns computer's choice
                    console.log("COMPUTER played " + computerchoice)
                    // shows the result of the game
                    console.log(outputs)
                    // shows present scores of players
                    console.log(names+ " : " + humanscore);
                    console.log("COMPUTER : " + computerscore);
                    console.log("TIES : " + ties);
                }
                maingaming()
            }else {
                alert("please enter a valid option of Rock or Paper or Scissors");
            }
        }
        playround()
    }
    // to show the final mresults of the game
    // declares a variable to know if the ties is singular or plural
    var tie;
    if (ties<=1) {
        tie=" TIE"
    } else {
        tie=" TIES"
    }
    if(humanscore>computerscore){
        console.log(names + " wins the game with ratio " + names + " to COMPUTER of "+ humanscore +" to "+computerscore+" with "+ties+tie);
    }else if(humanscore==computerscore){
        console.log("the game ends up in a tie between " + names + " and COMPUTER with "+ties+tie);
    }else{
        console.log("COMPUTER wins the game with ratio of COMPUTER to " + names +" of " +computerscore +" to "+ humanscore+" with "+ties+ tie);
    }
}
playgame()