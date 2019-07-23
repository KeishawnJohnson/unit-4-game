gamesWonTotal = 0;
gamesLostTotal = 0;


function setup() {
    currentUserNumber = 0;
    $("#gamesWon").text("Games Won: " + gamesWonTotal);
    $("#gamesLost").text("Games Lost: " + gamesLostTotal);
    $("#userNumber").text("Your Number: " + 0);
    currentGoalNumber = Math.floor(Math.random() * 100) + 1;
    $("#numberGoal").text("Number Goal: " + currentGoalNumber);
    image1 = Math.floor(Math.random() * 10) + 1;
    image2 = Math.floor(Math.random() * 10) + 1;
    if (image2 === image1){
        image2 = Math.floor(Math.random() * 10) + 1;
    }

    image3 = Math.floor(Math.random() * 10) + 1;
    if (image3 === image1 || image2){
        image3 = Math.floor(Math.random() * 10) + 1;
    }

    image4 = Math.floor(Math.random() * 10) + 1;
    if (image4 === image1 || image2 || image3){
        image3 = Math.floor(Math.random() * 10) + 1;
    }
    console.log(image1, image2, image3, image4);
    // Having trouble preventing numbers from repeating
}

function checker() {
    $("#userNumber").text("Your Number: " + currentUserNumber);
    if (currentUserNumber > currentGoalNumber){
        alert("Sorry, you lost. But never give up!");
        gamesLostTotal++;
        setup();
    }
    if (currentUserNumber === currentGoalNumber){
        alert("Wow! You actually won, good job!");
        gamesWonTotal++;
        setup();
    }
}

$("#test1").click(function () {
    var newUserNumber = parseInt(currentUserNumber) + parseInt(image1);
    currentUserNumber = newUserNumber;
    console.log(currentUserNumber);
    checker();
}

)
$("#test2").click(function () {
    var newUserNumber = parseInt(currentUserNumber) + parseInt(image2);
    currentUserNumber = newUserNumber;
    console.log(currentUserNumber);
    checker();
}

)
$("#test3").click(function () {
    var newUserNumber = parseInt(currentUserNumber) + parseInt(image3);
    currentUserNumber = newUserNumber;
    console.log(currentUserNumber);
    checker();
}

)
$("#test4").click(function () {
    var newUserNumber = parseInt(currentUserNumber) + parseInt(image4);
    currentUserNumber = newUserNumber;
    console.log(currentUserNumber);
    checker();
}
)

setup();