const numberOfWOrdsInput = document.getElementById('number-of-words-input');
const fetchBtn = document.getElementById('fetch-btn');
const tableBody = document.querySelector('#table-data tbody');

const buttons = document.querySelectorAll('button')
console.log(buttons)

buttons.forEach(button => {
    button.addEventListener('click', fetchData)
})

async function fetchData(e) {
    try {
        const button = e.target
        console.log(button)
        console.log(button.textContent)
    
        const response = await fetch("https://codexplained.se/api/lorem_json_array.php?numberOfWords=" + button.textContent);
        const words = await response.json()
        console.log(words)

        let listId = "list"+button.textContent
        let list = document.getElementById(listId)
        console.log(list)


        let tableBodyRowsHTML = ""
        for(let word of words) {
           tableBodyRowsHTML += `<li>${word}</li>`
        }

        list.innerHTML += tableBodyRowsHTML
        
    } catch(error) {
        console.log(error)
        list.innerHTML = "Opps something went wrong"
    } 
}