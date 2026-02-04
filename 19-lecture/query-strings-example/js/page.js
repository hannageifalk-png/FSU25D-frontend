console.log(location.search)    // retrives the query string
const urlParams = new URLSearchParams(location.search);

console.log(urlParams);
console.log(urlParams.get('firstname'));
console.log(urlParams.get('lastname'));
console.log(urlParams.get('id'));


document.getElementById('text').innerHTML = `
    <p>
        The following data was retrieved from intex.html page<br>
        firstname: ${urlParams.get('firstname')}<br>
        lastname: ${urlParams.get('lastname')}<br>
        id: ${urlParams.get('id')}
    </p>
`