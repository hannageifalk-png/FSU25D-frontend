const rollDiceInput = document.getElementById('roll-dice-input');
const fetchBtn = document.getElementById('fetch-btn');
const list = document.getElementById('list');


async function fetchData() {
    try {
        const response = await fetch("https://codexplained.se/api/dice_json_array.php?numberOfDice=" + rollDiceInput.value);
        const dices = await response.json()
        console.log(dices)

        list.innerHTML = ""
        let listHTML = ""
        for(let dice of dices) {
            listHTML += `<li>${dice}</li>`
        }

        list.innerHTML += listHTML;
    } catch(error) {
        console.log(error)
    }
}