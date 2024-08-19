alert("Welcome To The Rock Paper Scissors Game !!!!! \n Click The Button Below To Start The Round One Of The Game");
function ropasc() {
    var firsthuman=prompt("What do you want to play: \n Rock or Paper or Scissors");
    var comptrandom=Math.random()
    var comptfirstchoice
    if (comptrandom<=0.3) {
        comptfirstchoice="Rock"
    } else if (comptrandom>0.3 && comptrandom<=0.7) {
        comptfirstchoice="Paper"
    } else {
        comptfirstchoice="Scissors"
    } {
    }
    alert("Computer's choice for this round is " + comptfirstchoice)
}
ropasc()
