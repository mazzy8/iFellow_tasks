export const task1 = 'Задача 1. Сформировать и заполнить массив случайным числами и вывести максимальное, ' +
    'минимальное и среднее значение. Для генерации случайного числа использовать метод Math.random(), ' +
    'который возвращает значение в промежутке [0, 1].'

export class RandomArray {
    constructor(arrayLength) {
        if (typeof arrayLength === 'number' && Number.isInteger(arrayLength)) {
            this.arrayLength = arrayLength;
            this._genNewArray();
        } else {
            throw new Error('arrayLength is not an integer');
        }
    }

    _genNewArray() {
        this.array = Array.from({ length: this.arrayLength }, () => Math.random());
    }

    getNewArray() {
        this._genNewArray();
        return this.array;
    }

    getArray() {
        return this.array;
    }

    getMin() {
        return Math.min(...this.array);
    }

    getAvg() {
        return this.array.reduce((sum, current) => sum + current, 0)/this.array.length;
    }

    getMax() {
        return Math.max(...this.array);
    }
}

// Пример использования
// const randomArray = new RandomArray(10); // Создать случайный массив длиной 10
// console.log(randomArray.getArray()); // Вывести массив
// console.log(randomArray.getMin()); // Вывести минимальное значение
// console.log(randomArray.getMax()); // Вывести максимальное значение