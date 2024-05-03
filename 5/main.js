let strPrompt = prompt('Напишите что-то')
let numPrompt = prompt('Напишите цифру')
let name = (param, par2) => {
    return param.repeat(par2)
}


console.log(name(strPrompt, numPrompt));