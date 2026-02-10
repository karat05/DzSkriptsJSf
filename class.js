let a = +prompt("Напишите сумму оценок за первый предмет")
let b = +prompt("Напишите сумму оценок за второй предмет")
let c = +prompt("Напишите сумму оценок за первый предмет")
let result
result = a + b + c
let sum = result / 3
if(result >= 90 && result <=100){
    alert("Оценка 5")
}
else if(result >=75 && result <=89){
    alert("Оценка 4")
}
else if(result >= 60 && result <= 74){
    alert("Оценка 3")
}
else{
    alert("Оценка 2")
}