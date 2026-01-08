/* 

Skapa ett program som frågar efter namn och ålder samt sparar ner dessa i separata variabler.
Börja med att göra en flowchart och sedan skriva pseudokod, detta för att arbeta in förberedelsemetoder inför programmeringsproblem.

Beroende på vilken åldern användaren skriver in ska olika popups komma upp. Dessa ska ni styra med if/else statements.

följande regler ska gälla:

* programmet ska svara med namnet innan den skriver ut reglerna

* om personen är under 15, visa texten "Du måste ha hjälm när du cyklar"

* om personen är under 18, visa texten "Du får inte rösta"

* om personen är under 23, visa texten "Det blir ingen finlandsfärga"

* om personen är över 23, visa texten "Du är gammal nog att göra vad du vill"

Programmet ska bete sig enligt följande när du är klar:

Hej, vad heter du? :Micke
Ok Micke, hur gammal är du? :17

Du får inte rösta, Micke!
Det blir ingen finlandsfärga, Micke!

*/

/*
Pseudo kod

Vad heter du?
Hur gammal är du?

är du under 15 år
	Skriv ut "Du måste ha hjälm när du cyklar, namn!"
är du under 18 år
	Skriv ut "Du får inte röst, namn!"
är du under 23 år
	Skriv ut "Det blir ingen finlandsfärga, namn!"
är du över 23 år
	Skriv ut "Du är gammal nog att göra vad du vill, namn!"
*/




// Solution 1
let firstname = prompt("Enter your first name: ");
console.log(firstname)
 
let age = prompt("Ok " + firstname + ", hur gammal är du?");
console.log(age)
 
if (age < 15) {
    alert('Du måste ha hjälm när du cyklar, Du får inte rösta, Det blir ingen finlandsfärga, ' + firstname)
} else if (age >=15 && age < 18) {
	alert('Du får inte rösta, Det blir ingen finlandsfärga, ' + firstname)
} else if (age >=18 && age < 23){
    alert('Det blir ingen finlandsfärga, ' + firstname)
} else {
	alert('Du är gammal nog att göra vad du vill, ' + firstname)
}




// Solution 2
let username = prompt("Vad heter du?");
age = Number(prompt(`Hur gammal är du, ${username}?`));
 
let message = "";
if (age < 15) {
  message += `Du måste ha hjälm när du cyklar ${username}.\n`;
}
if (age < 18) {
  message += `Du får inte rösta ${username}.\n`;
}
if (age < 23) {
  message += `Det blir ingen finlandsfärja ${username}.\n`;
}
if (age >= 23) {
  message += `Du är gammal nog att göra vad du vill ${username}.\n`;
}
alert(message);

