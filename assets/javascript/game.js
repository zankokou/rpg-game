
function reset(){
    location.reload();
}

var chosen = false;
var battleMode = null;
var myPokemon = null;
var myRival = null;
var exp = 0;
var set = false;

var gengarChosen = null;
var cyndaChosen = null;
var larviChosen = null;
var dratChosen = null;

var gengarFight = null;
var cyndaFight = null;
var larviFight = null;
var dratFight = null;


//audio 
var audG = document.getElementById("gengarAudio");
audG.volume = 0.2;

var audC = document.getElementById("cyndaAudio");
audC.volume = 0.2;

var audL = document.getElementById("larviAudio");
audL.volume = 0.2;


var audD = document.getElementById("dratAudio");
audD.volume = 0.2;

var audH = document.getElementById("healAudio");
audH.volume = 0.2;



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


//gengar object
var gengar = {
    name: "Gengar",
    HP: 100,
    Status: "Alive",
    Atk: 50,
    Increase: 3,
    Counter: 26,
    Heal: 16,
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
    audG.play();

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
        // checkOpponent();

    }

   
});


//cyndaquil object
var cynda = {
    name: "Cyndaquil",
    HP: 140,
    Status: "Alive",
    Atk: 14,
    Increase: 7,
    Counter: 14,
    Heal: 16,
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
    audC.play();
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
    }


});

//larvitar
var larvi = {
    name: "Larvitar",
    HP: 200,
    Status: "Alive",
    Atk: 12,
    Increase: 4,
    Counter: 12,
    Heal: 22,
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
    audL.play();

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
    }


});


//dratini object
var drat = {
    name: "Dratini",
    HP: 125,
    Status: "Alive",
    Atk: 3,
    Increase: 9,
    Counter: 23,
    Heal: 16,
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
    audD.play();

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
    if (myRival.Status === "Defeated") {
        $('.log1, .log2, .log3, .log4').empty();
        $('.log').text("There is no defender here!");
    }

    if (myPokemon.Status && myRival.Status == "Alive"){
        $('.log1').text(myPokemon.name + " attacks! " + myPokemon.name + " does " + myPokemon.Atk + " Damage to " + myRival.name + "!" );
        myRival.HP = myRival.HP - myPokemon.Atk;
        myPokemon.Atk = myPokemon.Atk + myPokemon.Increase;


        if(myRival.HP <= 0){
            $('.log').text("You knocked out " + myRival.name + "! Choose your next opponent!");
            if (battleMode === true){
                exp++
                winGame();
            }
            battleMode = false;
            myRival.defeat();
            console.log(exp);

            myRival.Status = "Defeated";


        }
    
        $('.log2').text(myRival.name + " Counter Attacks! " + myRival.name + " does " + myRival.Counter + " Damage to " + myPokemon.name + "!" );
        myPokemon.HP = myPokemon.HP - myRival.Counter;

        if (exp === 3){
            // $('.log1, .log2, .log3, .log4').empty();

        }

        if(myPokemon.HP <= 0){
            $('.log1, .log2, .log3, .log4').empty();
            $('.log').text("You got knocked out!");
            myPokemon.Status = "Defeated";
            // myPokemon.defeat();


            var $restart= $('<input/>').attr({ type: 'button', class: 'btn btn-primary', name:'btn1', value:'Play Again?'});
            $(".log4").html($restart);
            set = true;

            $restart.click(function(){
                location.reload();
            })
            
        }
       
    }

}

function winGame(){
        if (exp === 3){
        $(".log").text("You beat the game! You get the Coder Badge!");
            var $restart= $('<input/>').attr({ type: 'button', class: 'btn btn-primary', name:'btn1', value:'Play Again?'});
            $(".log4").html($restart);
            set = true;

            $restart.click(function(){
                location.reload();
            })
        

    }

}

var potions = 3;
var potUse = false;
// Attack Button
$('.attack').click(function(){
    if (set === false){
        potUse = false;
        myChoice();
        winGame();
        battleLog();
        updateHP();

    }      

});


$('.heal').click(function(){
    if (set === false && potUse === false){

        if (potions > 0 && myRival.Status === "Alive"){
            myPokemon.HP = myPokemon.HP + myPokemon.Heal
            potions --;
            $('.log').text("You healed "+myPokemon.name+" for " + myPokemon.Heal + " Hp!");
            $('.log1, .log2, .log3, .log4').empty();
            $('.pots').text(potions+ " Left");
            potUse = true;
            audH.play();
            updateHP();
        }     
        else if(potions === 0){
            $('.log').text("You are out of Potions!");
            $('.log1, .log2, .log3, .log4').empty();

        }

            
    
    }
    else if(potUse == true){
        $('.log').text("You can only use 1 potion per turn!");
        $('.log1, .log2, .log3, .log4').empty();
    } 
    


});
