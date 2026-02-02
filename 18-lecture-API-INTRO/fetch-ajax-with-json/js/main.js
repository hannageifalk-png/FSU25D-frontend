/**
 * JSON introduction
 * 
 * 
 * JSON stands for JavaScript Object Notation
 * JSON is a lightweight data-interchange format
 * JSON is "self-describing" and easy to understand
 * JSON is language independent 
 */

/**
 * JSON stringify
 * Turns a JS object to a JSON string
 */
console.log("############## JSON stringify: Turns a JS object to a JSON string #########");

// From object
let personObject = {name: 'John', age: 31}
console.log('From object:', personObject)



// To JSON string
let personJSONString = JSON.stringify(personObject)
console.log('To JSON string:', personJSONString)




/**
 * JSON parse
 * Turns a JSON string to a JS object
 */
console.log("############## Turns a JSON string to a JS object #########");


// From JSON string
personJSONString = '{"name":"John","age":31}'
console.log('From JSON string:', personJSONString)



// To Object
personObject = JSON.parse(personJSONString)
console.log('To object:', personObject)


/**
 * Similar to JS, following datatypes are supported
 *
 * Datatype                     Value examples
 * ------------------------------------------------
 * - string                |     "text"
 * - number                |     13
 * - object (JSON object)  |     {"name1":"value1",name2:"value2"}
 * - array                 |     ["value1","value2","value3"]
 * - boolean               |     true
 * - null                  |     null
 * 
 * 
 * Following datatypes are  NOT supported
 * - function
 * - date
 * - undefined
 */
console.log("############## JSON stringify: Turns a JS object to a JSON string #########");

// From object
personObject = {
    name: 'John Doe',
    age: 31,
    hobbies: [
        'coding',
        'cooking',
        'working out'
    ],
    isMarried: true,
    children: [
        {name: 'Josef', age: 13},
        {name: 'Sofie', age: 7},
    ],
    grandChildren: null
}
console.log('From object:', personObject)



// To JSON string
personJSONString = JSON.stringify(personObject)
console.log('To JSON string:', personJSONString)






/**
 * JSON parse
 * Turns a JSON string to a JS object
 */
console.log("############## Turns a JSON string to a JS object #########");


// From JSON string
personJSONString = '{"name":"John Doe","age":31,"hobbies":["coding","cooking","working out"],"isMarried":true,"children":[{"name":"Josef","age":13},{"name":"Sofie","age":7}],"grandChildren":null}'
console.log('From JSON string:', personJSONString)

// To Object
personObject = JSON.parse(personJSONString)
console.log('To object:', personObject)






/**
 * Example on Fetch with async/await, Try/catch
 */
// https://jsonplaceholder.typicode.com/albums/1/photos
console.log('############## Fetch makes an AJAX request, that returns a Promise ##########');




async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
       
        if (response.ok === false) {
            throw new Error(response.status)
        }

        const albums = await response.json() // respone.json() is parsing the JSON string. Meaning you dont need to specifically use JSON.parse()
        console.log(albums)
        console.log(albums[0].title)


        // /*
        // [
        //     {
        //         "albumId": 1,
        //         "id": 1,
        //         "title": "accusamus beatae ad facilis cum similique qui sunt",
        //         "url": "https://via.placeholder.com/600/92c952",
        //         "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        //     },
        //     ....
        // ]
        // */

        // Solution 1
        let albumListHTML = ""
        for (let album of albums) {
            albumListHTML += `
                <artcile id="album-id-${album.id}">
                    <h3>${album.title}</h3>
                    <img src="${album.url}" alt="${album.title}">
                </artcile>
            `
        }

        console.log(albumListHTML)
        document.getElementById('album-list').innerHTML = albumListHTML


         // Solution 2 with .map() - The React way for those who want to prepare for the coming course in react
        // document.getElementById('album-list').innerHTML = albums.map(album => {
        //     return `<article><h3>${album.title}</h3><img src="${album.thumbnailUrl}"</article>`
        // }).join("");


    } catch (error) {
        console.log(error)
    }
}


fetchData()