export const task3 = 'Задача 3. Напишите класс BaseConverter для конвертации из градусов по Цельсию в Кельвины, ' +
    'Фаренгейты, и так далее. У метода должен быть метод convert, который и делает конвертацию.' +
    'При запуске кода должна быть возможность ввести градусы Цельсия и выбора конвертации в Кельвины или Фаренгейты.'

export class BaseConverter {
    constructor(celsius) {
        if (typeof celsius === 'number') {
            this.celsius = celsius;
        } else {
            throw new Error('celsius is not a number');
        }
    }

    _rounding(degree) {
        return parseFloat((degree).toFixed(2));
    }

    toKelvin() {
        return this._rounding(this.celsius + 273.15);
    }

    toFahrenheit() {
        return this._rounding((this.celsius * 9 / 5) + 32);
    }

    toReaumur() {
        return this._rounding(this.celsius * 4 / 5);
    }

    toRankin() {
        return this._rounding((this.celsius + 273.15) * 9 / 5);
    }

    convert(choice) {
        switch (choice) {
            case "K":
                return this.toKelvin();
            case "F":
                return this.toFahrenheit();
            case "R":
                return this.toReaumur();
            case "RA":
                return this.toRankin();
            default:
                return "Выберите корректный вариант конвертации (K - Кельвины, F - Фаренгейты)";
        }
    }
}
