/* I den här uppgiften ska ni arbeta med nummer/integers och strings. 
Se till att den andra <script> raden i index.html inte är utkommenterad när ni testar koden.
Datorn kan läsa numeriska värden som de är men inte tecken. 
Använd citattecken för att lägga in tecken som data.
*/


let name = 'Sibar';
let age = 35;
let height = 179;
let weight = 71;
let eyes = 'bruna';
let hair = 'mörkbrunt';

  
console.log("Det här är " + name + ".");
console.log(name + " är " + age + " år");
console.log(name + " är " + height + "cm lång." );
console.log(name + " väger " + weight + "kg." );
console.log(name + " har " + eyes+ " ögon och " + hair + " hår" );


// Solution 1
console.log("Om vi lägger ihop " + name + "s ålder vikt och längd får vi " + (age + weight + height) + "." );

// Solution 2
let addition = age + height + weight;
console.log("Om vi lägger ihop " + name + "s ålder vikt och längd får vi " + addition + "." );
