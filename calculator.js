var a = Number(prompt("Enter the 1st No: "));
var b = Number(prompt("Enter the 1st No: "));
var option = prompt("Press + for Addition\nPress - for Subtraction\nPress * for Multiplication\nPress / for Division\n")
switch (option) {
    case '+':
        document.write(`${a} + ${b} = ${a + b}`)
        break
    case '-':
        document.write(`${a} - ${b} = ${a - b}`)
        break
    case '*':
        document.write(`${a} * ${b} = ${a * b}`)
        break
    case '/':
        document.write(`${a} / ${b} = ${a / b}`)
        break
    default:
        document.write(`Invalid Choice`)
        break
}