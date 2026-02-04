const rollDiceInput = document.getElementById('roll-dice-input');
const fetchBtn = document.getElementById('fetch-btn');
const list = document.getElementById('list');
const diceLoader = document.getElementById('dice-loading');

async function fetchData() {
    try {
        // Solution 1
        // list.innerHTML = '<img src=img/loading.gif>'

        // Solution 2
        // diceLoader.hidden = false;

        // Solution 3
        diceLoader.classList.toggle('hide')

        const response = await fetch("https://codexplained.se/api/dice_json_array_slow.php?numberOfDice=" + rollDiceInput.value);
        const dices = await response.json()
        console.log(dices)

       

        list.innerHTML = ""
        let listHTML = ""
        for(let dice of dices) {
            listHTML += `<li>${dice}</li>`
        }

        list.innerHTML += listHTML;

        // Solution 2
        // diceLoader.hidden = true;


        
    } catch(error) {
        console.log(error)
        list.innerHTML = "Opps something went wrong"
    } finally {
        // Solution 3
        diceLoader.classList.toggle('hide')
    }
}