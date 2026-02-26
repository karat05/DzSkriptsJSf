
// filter(element, index) возращает новый массив, удовлетворяет условию( все четные числа)
//функция филтр дробит каждый элемент на свое значение
//previous.concat(next) слияние массивов
//array.slice //срез массив
const arrayFirst = [-3, -2, -1]
const arraySecond = [0, 1, 2]
const arrayThird = [10, 20, 30]
const newArray = arrayFirst.concat(arraySecond).concat(arrayThird)

console.log(newArray)
console.log(newArray.slice(1))
