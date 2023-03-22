//Анонимные функции
document.querySelector('button').addEventListener("click", function ()  {
    console.log('Вы нажали на кнопку');
})

//стрелочные функции - arrow function
function getMax(num1,num2) {
    console.log(num1 > num2 ? num1 : num2)
}
getMax(10,8)

const getMax2 = (num1, num2) => console.log(num1 > num2 ? num1 : num2)
getMax(30,60)

let sayHello = message => {
    let num = 0;
    return message + num;
}

console.log(sayHello('hello'))
const groups = ['21-3','22-3', '23-3', '24-3']
// const allGroup = groups.map(function (group) {
//     return `group ${group}`
// })

const allGroup = groups.map(group => `group ${group}`)
console.log(allGroup)

//callback
// const first =()=>{
//     console.log(1)
// }
//
// const second = ()=> {
//     console.log(2)
// }
//
// second()
// first()

const first =()=> {
    setTimeout(()=>{
        console.log(1)
    }, 3000)
}

const second = ()=> {
    console.log(2)
}
first()
second()


function getSquareNums(arr) {
    const newArray = []
    for (let i = 0; i< arr.length; i++){
        newArray.push(arr[i] ** 2)
    }
    return newArray
}

console.log(getSquareNums([3,4,5,6,7,8,9]))

function getDivideNums(arr){
    const newArray = []
    for(let i = 0; i< arr.length; i++){
        newArray.push(arr[i] / 2)
    }
    return newArray
}

console.log(getDivideNums([8,9,90,99,45,56,67]))

//через callback
function doSomeMath(array, todo) {
    const newArray = []
    for(let i = 0; i< array.length; i++){
        newArray.push(todo(array[i]))
    }
    return newArray
}

function getSquare(num){
    return num ** 2
}

function sum(num){
    return num + 10
}

console.log(doSomeMath([2,3,4,5],getSquare))
console.log(doSomeMath([2,3,4,5], sum))

function getFullName (firstName) {
    return function (lastName){
        return `Hello ${firstName} ${lastName}`
    }
}

const fullName = getFullName('Yiman')
console.log(fullName('Kadyrkulov'))


const div = document.createElement('div')
div .classList.add('wrapper')
const body = document.body
body.appendChild(div)
console.log(body)
const heder = document.createElement('h1')
heder.textContent = 'Frontend 24-03'
body.appendChild(heder)
console.log(body)
const ul = `
    <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
 </ul>
`
div.innerHTML = ul

const input = document.querySelector('input')
const minus = document.querySelector('minus')
const plus = document.querySelector('#pl')

minus
})