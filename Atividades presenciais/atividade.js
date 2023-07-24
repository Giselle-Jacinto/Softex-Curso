// Questão 1
let frase = prompt("Entre a primeira frase");
console.log(frase)

// Questão 2
let string = "123"
console.log(typeof Number(string))

let number = 321
console.log(typeof String(number))

// Questão 3

let numero1 = prompt("Digite o primeiro número");
let numero2 = prompt("Digite o segundo número");

let resultado = Number(numero1) + Number(numero2);
console.log(resultado)

// Questão 4

let String1 = "Estudar"
let String2 = "É bom !"
console.log(String1 + String2)

let numero3 = 48
console.log(String1 + String2 + " "+ numero3)

// Questão 5

let nome = prompt("Digite seu nome")
alert('Bem vindo ' + nome)

// Questão 6

const idade = prompt("Digite a sua idade")
console.log(parseInt(idade)) 

// Questão 7

const valor = prompt("me passe um valor inteiro")
console.log(parseFloat(valor))

// Questão 8
const inteiro1 = prompt("Digite o primeiro valor inteiro")
const inteiro2 = prompt("Digite o segundo valor inteiro")
alert(`${inteiro1} + ${inteiro2} = ${(parseInt(inteiro1) + parseInt(inteiro2))}`)

// Questão 9

const decimal = prompt("Digite um numero decimal")
alert (`O quadrado de ${decimal} é ${(Math.pow(parseFloat(decimal),2).toFixed(2))}`)

// Questão 10

const anoNascimento = prompt("Digite o ano que você nasceu")
alert(`Você tem ${2023 - parseInt(anoNascimento)} anos`)

// Questão 11

const primeiroNome = prompt("Digite o seu primeiro nome")
const sobrenome = prompt("Digite o seu sobrenome")
alert(``)


