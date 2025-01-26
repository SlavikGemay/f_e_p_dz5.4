'use strict';

const numberInput = prompt('Введіть ціле просте число:');
let result;

if (!numberInput?.trim() || isNaN(numberInput) || !Number.isInteger(+numberInput)) {
    alert('Помилка, спробуйте ще раз.');
}
else {
    const number = +numberInput;
    if (number <= 1) {
        alert(`Помилка, число ${number} не є простим. Введіть просте число.`);
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0){
                result = number;
                break;
            }
        }
        if (number % result === 0) {
            alert(`Число ${number} не є простим. Введіть просте число.`);
        }
        else {
            alert(`Число ${number} є простим.`);
        }
    }
}