/*
Med den kunskap ni fått från föregående 9 uppgifter, skapa spelet sten/sax/påse som kan spelas mot datorn. 
Spela det verkliga spelet med en vän för att se hur processen går till. 
Översätt sedan detta till pseudokod eller en flowchart innan ni börjar programmera. 
Kom ihåg att bryta ner problemet i flera moduler och få dessa att funka separat.

Parprogrammering uppmuntras. Använd er av tekniker från tidigare uppgifter för att lösa denna uppgift.
*/



// Solution 1
// 0 = Sten
// 1 = Sax
// 2 = Påse
 
// var pcWeapon = Math.random();   // slumovärt nummer mellan 0 och 1 (exkluderat 1): ex 0.90000
// pcWeapon = pcWeapon * 3;        // skala upp till mellan 0 och 3: ex 2.7000
// pcWeapon = Math.floor(pcWeapon);// avrunda nedåt till närmsta heltal: ex 2

// if (pcWeapon == 0){
//     console.log("Datorn valde Sten!")
// }
// else if (pcWeapon == 1){
//     console.log("Datorn valde Sax!")
// }
// else if (pcWeapon == 2){
//     console.log("Datorn valde Påse!")
// }

// /**
// Pseudokod:

// När vinner användaren?
// Användare      |      Dator
// -----------------------------------
// Välj Sten    |   Sax
// Välj Sax     |   Påse
// Välj Påse    |   Sten
// */



// var weapon = prompt("Ange Sten, Sax eller Påse!") 
// if (weapon == "Sten" && pcWeapon == 0) {
//     console.log("It's a draw!")
// } else if (weapon == "Sten" && pcWeapon == 1) {
//     console.log("You won!")
// } else if (weapon == "Sten" && pcWeapon == 2) {
//     console.log("You Lost!")
// } else if (weapon == "Sax" && pcWeapon == 1) {
//     console.log("It's a draw!")
// } else if (weapon == "Sax" && pcWeapon == 2) {
//     console.log("You won!")
// } else if (weapon == "Sax" && pcWeapon == 0) {
//     console.log("You Lost!")
// } else if (weapon == "Påse" && pcWeapon == 2) {
//     console.log("It's a draw!")
// } else if (weapon == "Påse" && pcWeapon == 0) {
//     console.log("You won!")
// } else if (weapon == "Påse" && pcWeapon == 1) {
//     console.log("You Lost!")
// }




// Solution 2 - Överkurs
// START
//     Presentera reglerna för spelaren.
//     Låt spelaren göra ett val.
//     Om valet är ogiltigt, kör en continue och loopa från början.
//     Om valet är giltigt, presentera resultatet och fråga om spelaren vill spela igen.
//     Om spelaren vill spela igen, starta från början.
 
//     Datorn får tre val, som vi översätter till ett av tre tal 0, 1 eller 2 genom att 
//     köra mathrandom (tal mellan 0.0 och 0.9999) som vi sedan multiplicerar med antalet val, 
//     alltså 3, sedan kör vi mathfloor för att avrunda nedåt, 
//     så 0,99 blir 0, 1,99 blir 1 och 2,99 blir 2 vilket motsvarar en av de tre valen i choices arrayn.

// END
// let choices = ["kackerlacka", "atombomb", "fot"];
// let rules = {
//   "kackerlacka": "atombomb",
//   "atombomb": "fot",
//   "fot": "kackerlacka"
// };
 
// let spelaigen = true;
 

// while (spelaigen) {
//   let computer = choices[Math.floor(Math.random() * 3)];
//   let gissning = prompt(
//     "Låt oss spela 🪳 Kackerlacka, ☢️ Atombomb, 🦶 Fot!\n\n" +
//     "Regler:\n" +
//     "Kackerlacka vinner över atombomb\n" +
//     "Atombomb vinner över fot\n" +
//     "Fot vinner över kackerlacka\n\n" +
//     "Välj: Kackerlacka, Atombomb eller Fot"
//   ).toLowerCase();
 
//   if (!rules[gissning]) {
//     alert("❌ Ogiltigt val!");
//     continue;
//   }
 
//   if (gissning === computer) {
//     alert("😕 Oavgjort! Ni valde samma.");
//   }
//   else if (rules['gissning'] === computer) {
//     alert(`⭐ Du vann! Datorn valde ${computer}.`);
//   }
//   else {
//     alert(`💀 Datorn vann! Den valde ${computer}.`);
//   }
 
//   spelaigen = confirm("Vill du spela igen?");
// }





// Solution 3
// 0 = Sten
// 1 = Sax
// 2 = Påse
 
let randomNumber = Math.random();   // slumovärt nummer mellan 0 och 1 (exkluderat 1): ex 0.90000
randomNumber = randomNumber * 3;        // skala upp till mellan 0 och 3: ex 2.7000
randomNumber = Math.floor(randomNumber);// avrunda nedåt till närmsta heltal: ex 2


let computerChoice = ""
if (randomNumber == 0){
  console.log("Datorn valde Sten!")
  computerChoice = "Sten"
}
else if (randomNumber == 1){
  console.log("Datorn valde Sax!")
  computerChoice = "Sax"
}
else if (randomNumber == 2){
  console.log("Datorn valde Påse!")
  computerChoice = "Påse"
}

/**
Pseudokod:

När vinner användaren?
Användare      |      Dator
-----------------------------------
Välj Sten    |   Sax
Välj Sax     |   Påse
Välj Påse    |   Sten
*/

var userChoice = prompt("Ange Sten, Sax eller Påse!") 
if (userChoice == computerChoice) {
    console.log("It's a draw!")
} else if (
  (userChoice == "Sten" && computerChoice == "Sax")
  || (userChoice == "Sax" && computerChoice == "Påse")
  || (userChoice == "Påse" && computerChoice == "Sten")
) {
    console.log("You won!")
} else {
    console.log("You Lost!")
}

