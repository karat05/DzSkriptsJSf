function lx() {
    let number = parseInt(prompt("введи число от 0 до 3"));
    
    switch (number) {
        case 0:
            alert("0");
            break;
        case 1:
            alert("1");
            break;
        case 2:
        case 3:
            alert("Вы ввели число от 2 до 3");
            break;
        default:
            alert("вне диапозона от 0 до 3");
    }
}

lx();