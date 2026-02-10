console.log('********** Variables *************')
// Variable declarations with predefined types
let bool: boolean // Accepts only values true/false

// Variable declarations with predefined types and values
const number: number = 42;                      // Accepts only numbers
const string: string = 'Hello, TypeScript!';    // Accepts only strings
let mixedVariable: any = "Any dataype"          // Accepts any type of value (not recommended)
let array1: number[] = [1, 2, 3, 4, 5];          // Accepts only arrays of numbers
let array2: (string|number|boolean)[] = [1, 2, 3, 4, "5", false ]; // Accepts only arrays of strings|numbers|booleans

 // Accepts only objects with specific properties and types   
let object: { 
    name: string, 
    age: number 
    hobbies: string[]
}

object = {  
    name: 'John Doe',
    age: 30,
    hobbies: ['reading', 'gaming', 'coding']
}

console.log(string, number, mixedVariable);
console.log(array1, array2);
console.log(object);



console.log('********** Functions *************')
const simpleFunction = () => {
    console.log('This is a simple function');
}

let explicitFunction: Function; // Accepts any function, but does not provide type safety for parameters and return type
explicitFunction = function() {
    console.log('This is an explicit function');
}

const functionWithParams = (height: number, width: number, optional?: string|boolean): void => {
    console.log(height * width);
    console.log(optional);
}
functionWithParams(5, 10, "Optional param with ?");


const functionWithParamsAndReturn = (height: number, width: number, optional: string|boolean = "Default value"): number => {
    console.log(optional);
    return height * width;
}
console.log(functionWithParamsAndReturn(5, 10, "Overriding the default value"));


console.log('********** Interface *************')
interface PersonInterface {
    firstName: string;
    lastName: string;
    age: number;

    getFullName: () => string;
    greet: () => string;
}


let johan: PersonInterface = {
    firstName: 'Johan',
    lastName: 'Smith',
    age: 25,
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    greet: function() {
        return `Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`;
    }
}

console.log(johan.greet());









/**
 * The following examples are not as important to know for your assignment Kunskapskontroll 3, 
 * but they are good to know for your future TypeScript projects. You can go through them if you have time, 
 * but they are not required for the assignment.
 */


console.log('********** Function signiture *************')
let greeting: (a: string, b: string) => string;
greeting = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
  return "23";
}
greeting('Joe', 'hello');




console.log('********** Type Alias *************')
type stringOrNumberType = string | number
type postType = {
    author: string, 
    title: string, 
    content: string, 
    categoryId: stringOrNumberType
}

const deletePost = (id: stringOrNumberType) => {
  console.log(id)
}

const createPost = (post: postType) => {
  console.log(post)
}

const updatePost = (post: postType) => {
  console.log(post)
}




console.log('********** DOM Types *************')
let headline = document.querySelector('h1')!;
console.log(headline.innerText);
let paragraph = document.querySelector('p') as HTMLParagraphElement
console.log(paragraph.innerHTML);



console.log('********** Generics *************')
function generic<T>(arg: T): T {
  return arg;
}

console.log(generic<string>('Jane'))
console.log(generic<boolean>(true))
console.log(generic<null>(null))
console.log(generic<(number)[]>([1, 2, 3]))
console.log(generic<{name:string}>({name: 'John'}))
