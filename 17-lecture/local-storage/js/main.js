/**
 * Example 1 - Save a string in local Storage
 */

const textInput1 = document.getElementById('textIput-1')
const form1 = document.getElementById('form-1')


form1.addEventListener('submit', function(e) {
    e.preventDefault();

    localStorage.setItem('catName',textInput1.value)

    // This makes sure that localstorage value is displayed after a form submission
    displayCatName()
})

// console.log(localStorage.getItem('catName'))
// This makes sure that localstorage value is displayed after a page refersh
displayCatName()


function displayCatName() {
    let catContainer = document.getElementById('catContainer')
    // Uses ternary operater - same as if/else -statement
    catContainer.innerHTML = localStorage.getItem('catName') 
        ?  `My cats name is ${localStorage.getItem('catName')}` 
        : ``;
}








/**
 * Example 2 - Save a list in local Storage
 */
const textInput2 = document.getElementById('textIput-2')
const form2 = document.getElementById('form-2')

// Uses ternary operater - same as if/else -statement
let catListArray = localStorage.getItem('catList') 
    ? JSON.parse(localStorage.getItem('catList')) 
    : []

// The above ternary opertar is the same as the following if/else - statement
// if (localStorage.getItem('catList')) {
//     catListArray = JSON.parse(localStorage.getItem('catList')) 
// } else {
//     catListArray = []
// }

form2.addEventListener('submit', function(e) {
    e.preventDefault();

    
    catListArray.push(textInput2.value)
    // JSONDemo() // Console logs how an array can go from array, to JSON string, back to array


    // Save it in local storage as JSON string
    localStorage.setItem('catList', JSON.stringify(catListArray))
    
    // retrive from local storage as array
    console.log(JSON.parse(localStorage.getItem('catList')))

    
    
    // This makes sure that localstorage value is displayed after a form submission
    displayCatList()
})



// This makes sure that localstorage value is displayed after a page refersh
displayCatList()


function displayCatList() {
    if (localStorage.getItem('catList')) {
        catListArray = JSON.parse(localStorage.getItem('catList'));

        const catListContainer = document.getElementById('catListContainer')
        catListContainer.innerHTML = ""
        
        for (let catName of catListArray) {
            catListContainer.innerHTML += `
                <li>${catName}</li>
            `
        }
    }
}








/**
 * Demonstration on how JSON.stringify and JSON.parse works on arrays
 */
function JSONDemo() {
    console.log("############ Demo how the following array goes from JSON string back to array ############")
    console.log(catListArray)
    
    console.log("* From array too -> JSON string *")
    let catListArrayJSONString  = JSON.stringify(catListArray)
    console.log(catListArrayJSONString)
    
    console.log("* FROM JSON string ->  Back to an array *")
    catListArrayParsed  = JSON.parse(catListArrayJSONString)
    console.log(catListArrayParsed)
}



// crypto.randomUUID() generates a unique key/id
console.log(crypto.randomUUID());

// When a need for multiple values to be saved for every item, lets say cat, turn every cat to an object like so:
// catListExampleArray.push({id: crypto.randomUUID(), catName: textInput2.value})
