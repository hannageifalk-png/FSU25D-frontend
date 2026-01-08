/*
Skapa ett program som låter användaren välja en form genom att skriva in circle/rectangle/triangle. 
Programmet ska baserat på användarens val be om input för att beräkna den valda formens area. 
När användaren fått svara med den data som behövs ska en uträkning på arean ska och programmet skriver ut resultatet 

Gör en flowchart och sedan skriva pseudokod innan ni börjar koda.

*/


// Solution 1
/** Pseudokod:
start
    välj form genom att skriva circle/rectangle/triangle
    skriv in radius/Height, Width/side
    calculate area
    show area
end
*/

// console.log(Math.PI);

// let shape = prompt("Välj en form genom att skriva circle, rectangle eller triangle")
// shape = shape.toLowerCase()
 
// if (shape == "circle"){
//     let radius = prompt("Skriv in radien på cirkeln")
 
//     let area = radius * radius * 3.14
//     alert(area)
 
// }
 
// if (shape == "rectangle"){
//     let height = prompt("Skriv in höjden på rektangeln")
 
//     let width = prompt("Skriv in bredden på rektangeln")
 
//     let area = height * width
//     alert(area)
// }
 
// if (shape == "triangle"){
//     let base = prompt("Skriv in basen på triangeln")
//     let height = prompt("Skriv in höjden på triangeln")
 
//     let area = 0.5 * base * height
//     alert(area)
// }
 



// Solution 2
/**  PSEUDOKOD:
Vilken form vill du använda? Circle /Rectangle /Triangle
 
Circle - Vilken radie har cirkeln?
(r*r)*pi = area
popup - resultat
 
Rectangle - Vilken bredd? höjd?
b*h = area
popup - resultat
 
Triangle - Vilken bas? höjd?
(b*h)/2 = area
popup - resultat 
*/
let form = prompt("Vilken form vill du räkna ut area på? Circle / Rectangle / Triangle")
console.log(form)
 
if (form == "circle") {
    let radie = Number(prompt("Vilken radie har cirkeln i cm?"))
    console.log(radie)
    let area = Math.pow(radie, 2) * Math.PI;
    console.log (area)
    alert("Cirkelns area är" + " " + area + " " + "cm^2")
}
 
else if (form == "rectangle") {
    let bredd = Number(prompt("Vilken bredd har rektangeln i cm?"))
    console.log(bredd)
    let höjd = Number(prompt("Vilken höjd har rektangeln i cm?"))
    console.log(höjd)
    let area = bredd * höjd;
    console.log (area)
    alert("Rektangelns area är" + " " + area + " " + "cm^2")
}
 
else if (form == "triangle") {
    let bas = Number(prompt("Vilken bas har triangeln i cm?"))
    console.log(bas)
    let höjd = Number(prompt("Vilken höjd har rektangeln i cm?"))
    console.log(höjd)
    let area = bas * höjd / 2;
    console.log (area)
    alert("Rektangelns area är" + " " + area + " " + "cm^2")
}
else {
    alert("Var vänlig välj en av de tre uppgivna formerna")
}
 



