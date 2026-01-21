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
    // boxes[i].style.backgroundColor = "skyblue"
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

myTitle = document.getElementById('title')
myTitle.innerHTML = 'Learning how to handle JS DOM and events';



/* 
 * Exercise 2
 */


let circles = document.getElementsByTagName('div')
console.log(circles);

for (let i = 0; i < circles.length; i++) {
    console.log("Before:", circles[i]);
    // Solution 1
    // circles[i].classList.remove('box');
    // circles[i].classList.add('green-box');

    // Solution 2
    // circles[i].className = 'green-box';
    
    // Solution 3
    circles[i].classList.replace('box', 'green-box');
    console.log("After:", circles[i]);
}



/* 
 * Exercise 3
 */

console.log(circles);

for (let i = 0; i < circles.length; i++) {
    // Solution 1
    // circles[i].style.height = "120px";
    // circles[i].style.width = "120px";

    // Solution 2
    // Uses kebab-case with style.cssText and backticks
    circles[i].style.cssText += `
        height: 120px;
        width: 120px; 
        background-color: lightcoral; 
    `
}




/* 
 * Exercise 4
 */
let box5 = document.querySelector('main#content > section.box:last-of-type');
box5.style.border = "4px solid red";
console.log(box5);



/* 
 * Exercise 5
 */

let beigeBox = document.getElementById('beige-box'); 

let newLink = document.createElement('a');
newLink.href = "#";
newLink.innerHTML = "My second link :)";
 
beigeBox.appendChild(newLink);


// Added som styling, nothing related to the exercise
newLink.style.display = "block"
newLink.style.marginTop = "10px"





/* 
 * Exercise 6
 */

newLink.setAttribute('href','#####')
newLink.setAttribute('target', '_blank')


/* 
 * Exercise 7
 */

const mainContainer = document.getElementById('content');
let newImage = document.createElement('img');
 

// May assign with Object.assign OR
// Object.assign(newImage, {
//     src: './img/logo.png',
//     width: 100,
//     height: 100
// });

// OR like this
newImage.src = './img/logo.png'
newImage.width = '100'
newImage.height = '100'

main.appendChild(newImage);


/* 
 * Exercise 8
 */

// solution 1
// newImage.onmouseover = function() {
//     alert("You hovered over the image");
// }

    
// solution 2
newImage.addEventListener("mouseover", () => 
    alert("You hovered over the image")
);


/* 
 * Exercise 9
 */


// Solution 1
newLink.addEventListener('click', function (e) {
    e.preventDefault(); // stoppar länken från att navigera
 
    let beigeBox = newLink.parentNode;
    beigeBox.innerHTML = '';
});


// Solution 2
// newLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     //currentTarget är att föredra över target; ser till att vi verkligen target elementet
//     // som eventListener är attached till och inte t.ex. en <span> i länken
//     let parent = e.currentTarget.parentNode;
//     console.log("parent: ", parent);
//     parent.replaceChildren(); // Ingen for loop needed!
// })


// Solution 3
// newLink.addEventListener('click', deleteBeigeBox)
// function deleteBeigeBox(e) { // e is the event object
//     e.preventDefault(); // Prevent the default link behavior
//     e.target.parentNode.remove();
// }


// Solution 4
// newLink.addEventListener('click', removeOnClick);
// function removeOnClick(e) {
//     e.preventDefault();
//     let parent = e.target.parentNode
//     let links = parent.children
//     console.log(parent.children)
//     console.log(links)
//     let arr = Array.from(links) // Convert HTMLCollection to an array
//     for (let i = 0; i < arr.length; i++) {
//         arr[i].remove() 
//     }
// }



/* 
 * Exercise 10
 */


// Solution 1
const myNewSection = document.createElement("section");
const myNewSectionHeight = 100;
const myNewSectionWidth = 200;
 
myNewSection.style.border = "groove rebeccapurple 5px";
myNewSection.style.height = myNewSectionHeight + "px";
myNewSection.style.width = myNewSectionWidth + "px";
myNewSection.style.display = "flex";
myNewSection.style.justifyContent = "space-around";
myNewSection.style.alignItems = "center";
 

console.log(myNewSection)
main.appendChild(myNewSection);
 
const greenLink = document.createElement("a");
const blueLink = document.createElement("a");
 
greenLink.innerHTML = "<b>green</b>";
blueLink.textContent = "<b>blue</b>";
greenLink.style.color = "green";
blueLink.style.color = "blue";
greenLink.href = "#";
blueLink.href = "#";
 
myNewSection.appendChild(greenLink);
myNewSection.appendChild(blueLink);
 
greenLink.addEventListener("click", (e) => {
    e.preventDefault();
    greenLink.parentNode.style.backgroundColor = "green"
});
 
blueLink.addEventListener("click", (e) => {
    e.preventDefault();
    blueLink.parentNode.style.backgroundColor = "blue"
});
 


// Solution 2

let newSection = document.createElement('section')
 
newSection.style.height = '100px'          
newSection.style.width = '200px'
newSection.style.border = '1px solid black'
 
let greenButton = document.createElement('button')
let blueButton = document.createElement('button')
greenButton.innerHTML = 'Green Button'
blueButton.innerHTML = 'Blue Button'
 
main.appendChild(newSection)
newSection.append(greenButton, blueButton)
 
greenButton.addEventListener('click', (event) =>  {
    event.preventDefault()
 
    if(newSection.style.backgroundColor === 'green') {
        newSection.style.backgroundColor = ''
    } else {
        newSection.style.backgroundColor = 'green'
    }
 
})
 
blueButton.addEventListener('click', (event) =>  {
    event.preventDefault()
 
    if(newSection.style.backgroundColor === 'blue') {
        newSection.style.backgroundColor = ''
    } else {
        newSection.style.backgroundColor = 'blue'
    }
 
})
 