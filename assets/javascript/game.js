
function reset(){
    location.reload();
}


var chosen = false;
var battleMode = null;

var gengarChosen = null;
var cyndaChosen = null;
var larviChosen = null;
var dratChosen = null;

var gengarFight = null;
var cyndaFight = null;
var larviFight = null;
var dratFight = null;



function checkChosen(){
    console.log("chosen " +(chosen));
    console.log("g chosen " +(gengarChosen));
    console.log("c chosen "+(cyndaChosen));
}

function checkFight(){
    console.log("g fight " +(gengarFight));
    console.log("c fight "+(cyndaFight));
}


//gengar object
var gengar = {
    name: "gengar",
    HP: 200,
    Status: "Active",
    Atk: 5,
    Increase: 5,
    Counter: 30,
    pick: function(){
        $('.char1').appendTo('#mcBox');
        $('.char2, .char3, .char4').appendTo('.choiceBox');
    },
    ready: function(){
        $('.char1').appendTo('.defenderBox');
        $('.log').text("You have chosen to fight Gengar!");
        $('.log1, .log2, .log3, .log4').empty();

    },
    defeat: function(){
        $('.char1').remove();
    }
}

//gengar click function
$(".char1").click(function(){
    if(chosen === false){
        gengar.pick();
        chosen = true;
        battleMode = false;
        gengarChosen = true;
        cyndaChosen = false;
        larviChosen = false;
        dratChosen = false;

        console.log(battleMode);
        checkChosen();
    }
    else if(battleMode == false && gengarChosen === false){
        gengar.ready();
        gengarFight = true;
        battleMode = true;

        checkFight();

    }

   
});


//cyndaquil object
var cynda = {
    name: "cyndaquil",
    HP: 100,
    Status: "Alive",
    Atk: 10,
    Increase: 10,
    Counter: 20,
    pick: function(){
        $('.char2').appendTo('#mcBox');
        $('.char1, .char3, .char4').appendTo('.choiceBox');

    },
    ready: function(){
        $('.char2').appendTo('.defenderBox');
        $('.log').text("You have chosen to fight Cyndaquil!");
        $('.log1, .log2, .log3, .log4').empty();


    },
    defeat: function(){
        $('.char2').remove();
    }
}

$(".char2").click(function(){
    if(chosen === false){
        cynda.pick();
        chosen = true;
        gengarChosen = false;
        cyndaChosen = true;
        larviChosen = false;
        dratChosen = false;
        battleMode = false;
    }
    else if(battleMode == false && cyndaChosen === false){
        cynda.ready();
        cyndaFight = true;
        battleMode = true;
        checkFight();
    }


});


//larvitar object
var larvi = {
    name: "larvitar",
    HP: 300,
    Status: "Active",
    Atk: 10,
    Increase: 10,
    Counter: 30,
    pick: function(){
        $('.char3').appendTo('#mcBox');
        $('.char1, .char2, .char4').appendTo('.choiceBox');
    },
    ready: function(){
        $('.char3').appendTo('.defenderBox');
        $('.log').text("You have chosen to fight Larvitar!");
        $('.log1, .log2, .log3, .log4').empty();

    },
    defeat: function(){
        $('.char3').remove();
    }
}

//larvitar click function
$(".char3").click(function(){
    if(chosen === false){
        larvi.pick();
        chosen = true;
        larviChosen = true;
        gengarChosen = false;
        cyndaChosen = false;
        dratChosen = false
        checkChosen();
    }
    else if(battleMode == false && larviChosen === false){
        larvi.ready();
        larviFight = true;
        battleMode = true;
        checkFight();

    }
   
});

//dratini object
var drat = {
    name: "dratini",
    HP: 100,
    Status: "Alive",
    Atk: 10,
    Increase: 10,
    Counter: 20,
    pick: function(){
        $('.char4').appendTo('#mcBox');
        $('.char1, .char2, .char3').appendTo('.choiceBox');

    },
    ready: function(){
        $('.char4').appendTo('.defenderBox');
        $('.log').text("You have chosen to fight Dratini!");
        $('.log1, .log2, .log3, .log4').empty();

    },
    defeat: function(){
        $('.char4').remove();
    }
}

$(".char4").click(function(){
    if(chosen === false){
        drat.pick();
        chosen = true;
        gengarChosen = false;
        cyndaChosen = false;
        larviChosen = false;
        dratChosen = true;
    }
    else if(battleMode == false && dratChosen === false){
        drat.ready();
        dratFight = true;
        battleMode = true;
        checkFight();
    }


});



// Attack Button
$('.attack').click(function(){

    //gengar v cyndaquil
    if (gengarChosen && cyndaFight == true){
        //HP updates
        gengar.HP = gengar.HP - cynda.Counter;
        cynda.HP = cynda.HP - gengar.Atk;
        $('.log').text("Gengar attacks! Gengar does " + gengar.Atk + " Damage to Cyndaquil!" );
        $('.log1').text("Cyndaquil Counter Attacks! Cyndaquil does " + cynda.Counter + " Damage to Gengar!" );
        
        $('.gengarHP').text("HP: " + gengar.HP);
        $('.cyndaHP').text("HP: " + cynda.HP);

        gengar.Atk = gengar.Atk + gengar.Increase;

        if(gengar.HP <= 0){
            alert("You got knocked out!");
            reset();
        }

        if(cynda.HP <= 0){
            $('.log').text("You knocked out Cyndaquil! Choose your next opponent!")
            cynda.Status = "Defeated";
            gengar.Status = "Defeated";
            battleMode = false;
            cyndaFight = false;
            cynda.defeat();
        }
    }

    //gengar v larvitar
    if (gengarChosen && larviFight == true){
        //HP updates
        gengar.HP = gengar.HP - larvi.Counter;
        larvi.HP = larvi.HP - gengar.Atk;
        $('.log').text("Gengar attacks! Gengar does " + gengar.Atk + " Damage to Larvitar!" );
        $('.log1').text("Larvitar Counter Attacks! Larvitar does " + larvi.Counter + " Damage to Gengar!" );
        
        $('.gengarHP').text("HP: " + gengar.HP);
        $('.larviHP').text("HP: " + larvi.HP);

        gengar.Atk = gengar.Atk + gengar.Increase;

        if(gengar.HP <= 0){
            alert("You got knocked out!");
            reset();
        }

        if(larvi.HP <= 0){
            $('.log').text("You knocked out Larvitar! Choose your next opponent!")
            larvi.Status = "Defeated";
            gengar.Status = "Defeated";
            battleMode = false;
            cyndaFight = false;
            larvi.defeat();
        }
    }

    else if (gengar.Status && cynda.Status && larvi.Status && drat.Status === "Defeated"){
        alert("You beat the game! You get the Coder Badge!")

    }

    else {
        // $('.log').text("There is no defender here!");
        // $('.log1, .log2, .log3, .log4').empty();
    }
});