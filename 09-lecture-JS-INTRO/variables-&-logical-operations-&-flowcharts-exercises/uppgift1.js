/* 
I den här uppgiften ska ni arbeta med nummer/integers. 
För att lösa uppgiften, använd vanliga matematiska operatorer så som +,-,*,/. 
Se till att den första <script> raden i index.html inte är utkommenterad när ni testar koden.

För att se resultatet av er kod så måste ni öppna webbläsarens console.
Efter du är klar med uppgiften, manipulera värdena i variablerna nedanför och se vad som händer.
*/

let cars = 100;
let seats_in_car = 4;
let drivers = 30;
let passengers = 90;

//Använd variablerna ovan för att lösa koden nedan

let cars_without_drivers = cars - drivers //Räkna ut hur många bilar som inte har en förare;
    
let cars_with_drivers = 0 //Räkna ut hur många bilar som har en förare;
  
let carpool_capacity = 0 //Räkna ut det totala antalet platser alla bilar med förare har tillsammans;
  
let average_passengers_per_car_in_pool = 0 //Räkna ut snittet på antal passagerare per bil som ingår i carpoolen.
  
//När ni gjort klart variablerna ovan så bör koden nedanför visa resultatet i konsollen på er webbläsare
  
console.log("There are " + cars + " cars available.");
console.log("There are only " + drivers + " drivers available");
console.log("There will be " + cars_without_drivers + " cars without drivers");
console.log("We can transport " + carpool_capacity + " people today");
console.log("We have " + passengers + " to carpool today");
console.log("We need to put about " + average_passengers_per_car_in_pool + " in each car");