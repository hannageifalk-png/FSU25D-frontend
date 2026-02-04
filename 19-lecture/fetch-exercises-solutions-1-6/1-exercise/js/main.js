const fetchBtn = document.getElementById('fetch-btn');

async function fetchData() {
    try {
        const response = await fetch("https://codexplained.se/api/lorem_text.php");
        const data = await response.text()
        
        document.getElementById('text').innerHTML = data
    } catch(error) {
        console.log(error)
    }
}