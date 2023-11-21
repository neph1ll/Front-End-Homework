const num1 = prompt('Введите первое число');
const num2 = prompt('Введите второе число');
const num3 = prompt('Введите третье число');
const num4 = prompt('Введите четвёртое число');
let summa = 0;

document.write(num1);
document.write(num2);
document.write(num3);
document.write(num4);

if (num1 % 2 === 0){
    summa += 1;
}
if (num2 % 2 === 0){
    summa += 1;
}
if (num3 % 2 === 0){
    summa += 1;
}
if (num4 % 2 === 0){
    summa += 1;
}

document.write('Количество чётных чисел: ' + summa);

const num5 = prompt('Введите первое число');
const num6 = prompt('Введите второе число');
const num7 = prompt('Введите третье число');

document.write(num5);
document.write(num6);
document.write(num7);

if(Number(num5) > Number(num6)){
    document.write('Самое большое число: ' + num5);
} else if(Number(num5) < Number(num7)){
    document.write('Самое большое число: ' + num7);
} else {
    document.write('Самое большое число: ' + num6);
}

