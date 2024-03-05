let images=["images/dice-01.svg", 
"images/dice-02.svg",
"images/dice-03.svg",
"images/dice-04.svg",
"images/dice-05.svg",
"images/dice-06.svg"];
let button=document.getElementById("Btn_roll");
let dice=document.querySelectorAll("img");

function roll()
{
    dice.forEach(function(die)
    {
        die.classList.add("shake");
    });

    setTimeout(() => {
        dice.forEach(function(die)
    {
        die.classList.remove("shake");
    });
    }, 1000);

    let diceOneValue=Math.floor(Math.random()*6);
    let diceSecondValue=Math.floor(Math.random()*6);
    let total=diceOneValue+1+diceSecondValue+1 ;
    console.log(diceOneValue+1, diceSecondValue+1);

    document.querySelector("#dice-1").setAttribute("src",images[diceOneValue]);
    document.querySelector("#dice-2").setAttribute("src",images[diceSecondValue]);
    document.getElementById("content").innerHTML=`Your roll is:  ${total}`;
}

roll();

button.addEventListener("click", roll);