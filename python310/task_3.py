class BaseConverter:
    def __init__(self, celsius):
        if isinstance(celsius, (int, float)):
            self.celsius = celsius
        else:
            raise ValueError('celsius is not an integer or float')

    def to_kelvin(self):
        kelvin = self.celsius + 273.15
        return kelvin

    def to_fahrenheit(self):
        fahrenheit = (self.celsius * 9/5) + 32
        return fahrenheit

    def to_reaumur(self):
        reaumur = self.celsius * 4/5
        return reaumur

    def to_rankin(self):
        rankin = (self.celsius + 273.15) * 9/5
        return rankin

    def convert(self, choice):
        if choice == "K":
            return self.to_kelvin()
        elif choice == "F":
            return self.to_fahrenheit()
        elif choice == "R":
            return self.to_reaumur()
        elif choice == "RA":
            return self.to_rankin()
        else:
            return "Выберите корректный вариант конвертации (K - Кельвины, F - Фаренгейты)"


if __name__ == "__main__":
    celsius = float(input("Градусы Цельсия: "))
    choice = input("Единица измерения для конвертации (K - Кельвины, F - Фаренгейты, R - градусы Реомюра, "
                   "RA - градусы Ранкина): ")

    converter = BaseConverter(celsius)
    result = converter.convert(choice.upper())

    if isinstance(result, (float, int)):
        print(f"Результат: {result}")
    else:
        print(result)
