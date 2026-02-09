const previous = document.getElementById('previous');
const next = document.getElementById('next');
const animalSection = document.querySelector('section');
let slide = 0;
 
previous.addEventListener('click', () => {
  fetchAnimal('-');
});
 
next.addEventListener('click', () => {
  fetchAnimal('+');
});


async function fetchAnimal(direction) {
  const change = direction === '+' 
    ? 1 
    : direction === '-' 
        ? -1 
        : 0;

  slide = (slide + change + 5) % 5; // makes sure slide is always 0-4. (would be even better to use a dynamic "stop" number, based on number of available items/length)


  console.log(slide)
 
  try {
    const response = await fetch(
      `https://codexplained.se/api/animals_json.php?animal=${slide}`,
    );
    const animal = await response.json();
    console.log(animal);
 
    animalSection.innerHTML = `
        <h1>${animal.title}</h1>
        <i>${animal.summery}</i>
        <p>${animal.content}</p>
        <img referrerpolicy="no-referrer" src="${animal.img}" alt="picture of a ${animal.title}">
    `;
  } catch (error) {
    console.log(error);
  }
}
 
fetchAnimal();
 
















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