const numberOfWOrdsInput = document.getElementById('number-of-words-input');
const fetchBtn = document.getElementById('fetch-btn');
const tableBody = document.querySelector('#table-data tbody');

async function fetchData() {
    try {
        const response = await fetch("https://codexplained.se/api/lorem_json_array.php?numberOfWords=" + numberOfWOrdsInput.value);
        const words = await response.json()
        console.log(words)


        let tableBodyRowsHTML = ""
        for(let word of words) {
           tableBodyRowsHTML += `<li>${word}</li>`
        }

        tableBody.innerHTML += `
            <tr>
                <td>${numberOfWOrdsInput.value}</td>
                <td>
                    <ul>
                        ${tableBodyRowsHTML}
                    </ul>
                </td>
            </tr>`
        
    } catch(error) {
        console.log(error)
        list.innerHTML = "Opps something went wrong"
    } 
}