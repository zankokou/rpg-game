
function reset(){
    location.reload();
}

// function rivalReset(){
//     myRival = null;
// }

var chosen = false;
var battleMode = null;
var myPokemon = null;
var myRival = null;

var gengarChosen = null;
var cyndaChosen = null;
var larviChosen = null;
var dratChosen = null;

var gengarFight = null;
var cyndaFight = null;
var larviFight = null;
var dratFight = null;




function myChoice(){
    if(gengarChosen == true){
        myPokemon = gengar;
        // console.log("my poke " + myPokemon.name);
    }

    if(cyndaChosen == true){
        myPokemon = cynda;
        // console.log("my poke " + myPokemon.name);
    }

    if(larviChosen == true){
        myPokemon = larvi;
        // console.log("my poke " + myPokemon.name);
    }

    if(dratChosen == true){
        myPokemon = drat;
        // console.log("my poke " + myPokemon.name);
    }
}

function checkOpponent(){
    if(gengarFight == true){
        myRival = gengar;
        // console.log("my opponent " + myRival.name);
    }
    if(cyndaFight == true){
        myRival = cynda;
        // console.log("my opponent " + myRival.name);
    }
    if(larviFight == true){
        myRival = larvi;
        // console.log("my opponent " + myRival.name);
    }
    if(dratFight == true){
        myRival = drat;
        // console.log("my opponent " + myRival.name);
    }

}

//gengar object
var gengar = {
    name: "Gengar",
    HP: 200,
    Status: "Alive",
    Atk: 10,
    Increase: 10,
    Counter: 20,
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

    }
    else if(battleMode == false && gengarChosen === false){
        gengar.ready();
        myRival = gengar;
        gengarFight = true;
        battleMode = true;
        myRival.Status = "Alive";
        console.log(myRival.Status);
        checkOpponent();

    }

   
});


//cyndaquil object
var cynda = {
    name: "Cyndaquil",
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
        battleMode = false;
        cyndaChosen = true;

        gengarChosen = false;
        larviChosen = false;
        dratChosen = false;
    }
    else if(battleMode == false && cyndaChosen === false){
        cynda.ready();
        myRival = cynda;
        cyndaFight = true;
        battleMode = true;
        myRival.Status = "Alive";
        console.log(myRival.Status);
    }


});

//larvitar
var larvi = {
    name: "Larvitar",
    HP: 100,
    Status: "Alive",
    Atk: 10,
    Increase: 10,
    Counter: 20,
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

$(".char3").click(function(){
    if(chosen === false){
        larvi.pick();
        chosen = true;
        battleMode = false;
        larviChosen = true;

        cyndaChosen = false;
        gengarChosen = false;
        dratChosen = false;
    }
    else if(battleMode == false && larviChosen === false){
        larvi.ready();
        myRival = larvi;
        larviFight = true;
        battleMode = true;
        myRival.Status = "Alive";
        console.log(myRival.Status);
    }


});


//dratini object
var drat = {
    name: "Dratini",
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
        $('.log').text("You have chosen to fight Larvitar!");
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
        battleMode = false;
        dratChosen = true;

        larviChosen = false;
        cyndaChosen = false;
        gengarChosen = false;
    }
    else if(battleMode == false && dratChosen === false){
        drat.ready();
        myRival = drat;
        dratFight = true;
        battleMode = true;
        myRival.Status = "Alive";
        console.log(myRival.Status);
    }


});





function updateHP(){
    if (gengarChosen && cyndaFight || cyndaChosen && gengarFight == true){    
        $('.gengarHP').text("HP: " + gengar.HP);
        $('.cyndaHP').text("HP: " + cynda.HP);
    }

    if (gengarChosen && larviFight  || larviChosen && gengarFight == true){    
        $('.gengarHP').text("HP: " + gengar.HP);
        $('.larviHP').text("HP: " + larvi.HP);
    }


    if (gengarChosen && dratFight || dratChosen && gengarFight == true){    
        $('.gengarHP').text("HP: " + gengar.HP);
        $('.dratHP').text("HP: " + drat.HP);
    }


    //cynda Chosen Log Updates
    if (cyndaChosen && larviFight || larviChosen && cyndaFight == true){    
        $('.larviHP').text("HP: " + larvi.HP);
        $('.cyndaHP').text("HP: " + cynda.HP);
    }

    if (cyndaChosen && dratFight || dratChosen && cyndaFight == true){    
        $('.dratHP').text("HP: " + drat.HP);
        $('.cyndaHP').text("HP: " + cynda.HP);
    }

    //larvi Chosen log updates
    if (larviChosen && dratFight || dratChosen && larviFight == true){    
        $('.dratHP').text("HP: " + drat.HP);
        $('.larviHP').text("HP: " + larvi.HP);
    }
}

function battleLog(){
    if (myPokemon.Status && myRival.Status == "Alive"){
        myPokemon.HP = myPokemon.HP - myRival.Counter;
        myRival.HP = myRival.HP - myPokemon.Atk;
        $('.log1').text(myPokemon.name + " attacks! " + myPokemon.name + " does " + myPokemon.Atk + " Damage to " + myRival.name + "!" );
        $('.log2').text(myRival.name + " Counter Attacks! " + myRival.name + " does " + myRival.Counter + " Damage to " + myPokemon.name + "!" );
    
        myPokemon.Atk = myPokemon.Atk + myPokemon.Increase;

    }

}

// Attack Button
$('.attack').click(function(){
    myChoice();
    console.log("me " + myPokemon.name);
    console.log("rival " + myRival.name)


    if(myPokemon.HP <= 0){
        alert("You got knocked out!");
        reset();
    }

    if(myRival.HP <= 0){
        $('.log').text("You knocked out " + myRival.name + "! Choose your next opponent!")
        myRival.Status = "Defeated";
        battleMode = false;
        myRival.defeat();
 
    }
    battleLog();
    updateHP();


    // if (gengar.Status && cynda.Status && drat.Status && larvi.Status === "Defeated"){
    //     alert("You beat the game! You get the Coder Badge!")

    // }

    // else {
    //     $('.log').text("There is no defender here!");
    //     $('.log1, .log2, .log3, .log4').empty();
    // }

});


