/*
Ni ska programmera ett spel som går ut på att användaren ska gissa ett slumpvalt nummer 
mellan 0 och 10 som programmet har slumpat fram i förväg. 
Om spelaren gissar fel så ska den få ett försök till (totalt 2 gissningar) 
tillsammans med en text som berättar om gissningen var för hög eller för låg. 
Om spelaren gissar rätt ska spelet meddela spelaren att den har vunnit. 

Gör leken i verkligheten tillsammans med en bordskamrat och tänk efter hur ni gör denna process, detta kommer att underlätta tänkandet.

När ni har fått en känsla för hur detta utspelar sig mellan två människor ska ni översätta det för datorn. 
Börja med att göra en flowchart som beskriver processen. 
Gå sedan vidare och skriv pseudokod. 
Nedan finner ni en startkod för hur man gör ett slumpvalt nummer.
*/ 

//Tar ett slumpvalt värde mellan 0 och 100
var nummer = Math.random(); // slumovärt nummer mellan 0 och 1 (exkluderat 1): ex 0.54321
console.log(nummer);
nummer = nummer * 10;       // skala upp till mellan 0 och 10: ex 5.4321
console.log(nummer);
nummer = Math.round(nummer);  // avrunda till närmsta heltal: ex 5
console.log(nummer);


// Solution 1
// let guess = prompt("Gissa en siffra mellan 0 och 10")
 
// if (guess == nummer){
//     alert("Grattis du har vunnit")
// } else if (guess > nummer){
//     alert("För HÖGT")
    
//     guess = prompt("Gissa en siffra mellan 0 och 10")
//     if (guess == nummer){
//         alert("Grattis du har vunnit")
//     } else if (guess != nummer){
//         alert("Du förlorade")
//     }
// } else if (guess < nummer){
//     alert("För LÅGT")
    
//     guess = prompt("Gissa en siffra mellan 0 och 10")
//     if (guess == nummer){
//         alert("Grattis du har vunnit")
//     } else if (guess != nummer){
//         alert("Du förlorade")
//     }
// }
 



// Solution 2
// let guess  = prompt("Ange ett nummer mellan 0-10");
// let message = "Det är tyvärr fel, numret var " + nummer;
 
// if (guess == nummer) {
//     message = "Bra jobbat, du listade ut att numret var " + nummer;
   
// } else if (guess > nummer) {
//     guess = prompt("Du får ett försök till, numret är lägre än din första gissning");
//     if (guess == nummer) {
//         message = "Bra jobbat, du listade ut att numret var " + nummer;
//     };
 
// } else if (guess < nummer) {
//     guess = prompt("Du får ett försök till, numret är högre än din första gissning")
//     if (guess == nummer) {
//         message = "Bra jobbat, du listade ut att numret var " + nummer;
//     }
// };
 
// console.log(message);
 

// Solution 3
let userNbr = prompt("Välj ett nummer");
 
if(userNbr == nummer){
    alert("Rätt!");
} else {
    let higherLower = "";
 
    if(userNbr < nummer){
        higherLower = "för lågt";
    } else {
        higherLower = "för högt";
    }
   
    userNbr = prompt("Fel, det var " + higherLower + ". Välj ett nytt nummer");
 
    if(userNbr == nummer) {
        alert("Nu var det rätt!");
    } else {
        alert("Tyvärr fel igen, spelet är slut!");
    }
}
 