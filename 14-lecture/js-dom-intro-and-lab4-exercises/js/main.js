/*
 * Element selectors
 */

console.log('******************** getElementById ****************************');

let myTitle = document.getElementById('title')
console.log(myTitle);

console.log(myTitle.innerHTML);
myTitle.innerHTML = "Some dummy title";
console.log(myTitle.innerHTML);






console.log('******************** getElementsByClassName ****************************');
// getElementsByClassName
// returns HTMLCollection
// Similar to an array, having the elements indexed and even have propertis such as .length
// Read more here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection

let boxes = document.getElementsByClassName('box')
console.log(boxes);
console.log(boxes.length);

for (let i = 0; i < boxes.length; i++) {
    console.log(boxes[i]);
    boxes[i].style.margin = "5px"
    // use camelCase in JS, instead of kebab-case
    boxes[i].style.backgroundColor = "skyblue"
}






console.log('******************** getElementsByTagName ****************************');
// getElementsByTagName
// returns HTMLCollection
// Similar to an array, having the elements indexed and even have propertis such as .length
// Read more here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection


let dives = document.getElementsByTagName('div')
console.log(dives);
console.log(dives.length);

for (let i = 0; i < dives.length; i++) {
    console.log(dives[i]);
    // dives[i].innerHTML = "Hej"
    dives[i].style.borderRadius = "50%"
}


console.log('******************** querySelector ****************************');
let box = document.querySelector('main#content > section.box')
console.log(box);
box.style.border = "4px solid orange" 


console.log('******************** querySelectorAll ****************************');
// querySelectorAll
// returns NodeList
// Similar to an array, having the elements indexed and even have propertis such as .length
// Read more here: https://developer.mozilla.org/en-US/docs/Web/API/NodeList

boxes = document.querySelectorAll('main#content > section.box')
console.log(boxes);


// Either work with seperate elements using index
boxes[0].style.border = "4px solid orange" 
boxes[0].style.backgroundColor = "beige";

// OR loop through every element like such
for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.border = "4px solid orange";
    boxes[i].style.backgroundColor = "beige";
}






/*
 * Handle element attributes
 */
console.log('******************** HTML attributes ****************************');

let myLink = document.getElementById('link')
console.log(myLink);

console.log(myLink.href);
myLink.href = "###"
console.log(myLink.href);

// May change/add attributes by setAttribute(atrribute, vale)
myLink.setAttribute('target', '_blank')
// Same as
// myLink.target = '_blank'







/*
 * Handle events
 * Some events: click | mouseover | keypress
 */
console.log('******************** Handle events ****************************');

// Callback function, is when a function is sent into another function throguh parameters
// May declare events here or in HTML
// Example 1
myLink.addEventListener('click', handleClickLink)

function handleClickLink(event) {
    console.log(event); // A toolbox filled with built in functions related to the event/element

    // The default behavior of the chosen element,
	// in this case the chosen element is a link,
	// is reload/redirect the page
	// preventDefault() prevents the link from reloading/redirecting the page
    event.preventDefault()

    alert('You clicked the link')
}


// Example 2
boxes = document.getElementsByClassName('box');
console.log(boxes);
boxes[2].addEventListener('mouseover', function(e) {
    // Both "e.target" and "this" is the element associated with the event, meaning boxes[2]
    // Note "this" does NOT work with arrow functions

    // These 2 solution is better because its more selfcontained, not depending on external variables
    this.innerHTML = "Third circle"
    e.target.innerHTML = "Third circle"

    // May create a bug in certain situations, much better to NOT depended on externa variables outside of the callback function
    // boxes[2].innerHTML = "Third circle"; 
})


/*
 * Navigation
 */
console.log('******************** Navigation ****************************');
let main = document.getElementById('content')
console.log(main)
console.log(main.children)
console.log(main.children[5])
console.log(main.firstElementChild)
console.log(main.lastElementChild)
console.log(main.parentNode)
console.log(main.previousElementSibling)
console.log(main.nextElementSibling)

// target the first blue circle
main.firstElementChild.innerHTML = "First element child"
// target the link text, add :)
main.lastElementChild.firstElementChild.innerHTML += ' :)'
// target fifth blue circle, add some text
main.children[4].innerHTML = "Fifth circle";
// target the H1, add a :)
main.previousElementSibling.innerHTML += ' :)'


/*
 * Add/Create/Delete element
 */
console.log('******************** Add/Create/Delete element ****************************');

main = document.getElementById('content')

// Example 1
// for (let i = 1; i <= 5; i++) {
//     let newBox = document.createElement('section')
//     newBox.innerHTML = `Box ${i}`
//     newBox.className = "box";
//     newBox.style.margin = "5px";
//     console.log(newBox);

//     newBox.addEventListener('click', (e) => {
//         e.target.remove()
//     })
    
//     main.append(newBox)
// }


// Example 2 - More similar to how you would code in React
for (let i = 1; i <= 5; i++) {
    let newBox = `
        <section class="box" onclick="removeOnClick(event)" style="margin: 5px">
            Box ${i}
        </section>
    `    
    main.innerHTML += newBox
}

function removeOnClick(e) {
    e.target.remove()
}









console.log('******************** Lab 4: DOM and Events ****************************');


/*
 * Lab 4: DOM and Events
 */

/* 
/* 
 * Exercise 1
 */

// let myTitle = document.getElementById('title')       //Redan deklarerad
myTitle.innerHTML = 'Learning how to handle JS DOM and events';

console.log(myTitle);

ANSWER = myTitle

/* 
 * Exercise 2
 */

const elements = document.getElementsByTagName("div");

for( let i = 0; i < elements.length; i++ ){
    elements[i].classList.remove("box");
    elements[i].classList.add("green-box");
}

console.log(elements);

ANSWER = "All .box elements are now .green-box";


/* 
 * Exercise 3
 */

let boxes2 = document.getElementsByClassName("green-box");      

for (let i = 0; i < boxes2.length; i++) {
    boxes2[i].style.width = "120px";                 //När boxen är nummer-i så är bredd och höjd 120px
    boxes2[i].style.height = "120px";
}



/* 
* Exercise 4
*/

// Lösning 1
// const boxes3 = document.querySelectorAll(".box");
// const boxFem = boxes3[4]; // index 4 = femte elementet

// boxFem.style.border = "2px solid orange";

// Lösning 2
boxes3 = document.querySelectorAll('main#content > section.box')    // väljer section-boxar som är direkta barn till main#content.
boxes3[5].style.border = "4px solid orange"                         // Eftersom allt finns deklarererat där uppe sedan innan.

console.log(boxes3)

/* 
 * Exercise 5
 */


let beigeBox = document.getElementById('beige-box') // Retrieve the beige box
console.log(beigeBox);

const newLink = document.createElement("a"); // skapa ett nytt <a>-element

newLink.innerHTML = 'My second link :)';

beigeBox.appendChild(newLink);


/* 
* Exercise 6
*/

// May change/add attributes by setAttribute(atrribute, vale)
newLink.setAttribute('href', '#####');          // skapar en länk
newLink.setAttribute('target', '_blank');       //öppnas i ny flik

console.log(newLink);

/* 
 * Exercise 7
 */
const mainContent = document.getElementById("content");         // hämta element där bilden ska ligga

const img = document.createElement("img");                      // skapa img-element

img.src = "img/logo.png";                                       // sätt bildens källa (sökväg till bilden)
img.alt = "A flower";                                           // Sätt alt-text, viktigt!

img.style.width = 100;                                          // styling
img.style.height = 100;

mainContent.appendChild(img);                                   // Lägg in bild in bilden i DOM
  
/* 
 * Exercise 8
 */

img.addEventListener("mouseover", () => {                        // mouseover = namn på event
    alert("Du hovrar över bilden!");                             // => betyder 'gör detta'. Arrowfunktion = kör koden när eventet inträffar
});                                                              // {...} koden som ska köras



/* 
 * Exercise 9
 */



newLink.addEventListener("click", (event) => {                  //eventListener lyssnar efter klicks
    event.preventDefault();                                     // Stoppar länkens beteende
    const beigeBox = newLink.parentNode;                        //parentNode går upp ett steg i DOM
    beigeBox.innerHTML = "";                                    //innerHTML raderar allt innehåll
});

console.log(beigeBox);





/* 
 * Exercise 10
 */

const main3 = document.getElementById("content");        // allt läggs i main

const newSection = document.createElement("section");   // skapa section

newSection.style.border = "2px solid black";            //styling
newSection.style.height = "100px";
newSection.style.width = "200px";

const greenButton = document.createElement("button");   //skapa knappar
greenButton.innerText = "Green";

const blueButton = document.createElement("button");
blueButton.innerText = "Blue";

greenButton.addEventListener("click", () => {           //eventListener
    newSection.style.backgroundColor = "green";
});

blueButton.addEventListener("click", () => {
    newSection.style.backgroundColor = "blue";
});

newSection.appendChild(greenButton);                    //Lägg knappar i section
newSection.appendChild(blueButton);

main3.appendChild(newSection);                           //Lägg section i main
