function playGame(){
    //this is a function to play craps in the game.html
    console.log("playGame()started");
    var die1 = Math.ceil(Math.random() * 6);
    console.log("die1 result = " + die1);
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1;

    var die2 = Math.ceil(Math.random() * 6);
    console.log("die2 result = " + die2);
    document.getElementById("die2Res").innerHTML = "die2 result = " + die2;

    var sum = die1 + die2;
    console.log("sum result = " + sum);
    document.getElementById("sumRes").innerHTML = "sum result = " + sum;

    //check for 3 or 10 meaning loss
    if (sum == 3){
        document.getElementById("gameRes").innerHTML = "You Lost to The Chicken! HAHA"
    } else if (sum == 10){
        document.getElementById("gameRes").innerHTML = "You Lost to The Chicken! HAHA"
    } else {
        document.getElementById("gameRes").innerHTML = "You Win!"
    }
 }