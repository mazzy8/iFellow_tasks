import random


class RandomArray:
    def __init__(self, array_length):
        if isinstance(array_length, int):
            self.array_length = array_length
            self._gen_new_array()
        else:
            raise ValueError('array_length is not an integer')

    def _gen_new_array(self):
        self.array = [random.random() for _ in range(self.array_length)]

    def get_new_array(self):
        self._gen_new_array()
        return self.array

    def get_array(self):
        return self.array

    def get_min(self):
        return min(self.array)

    def get_max(self):
        return max(self.array)


if __name__ == "__main__":
    flag = True
    while flag:
        array_length = input("Длинна массива: ")
        if isinstance(int(array_length), int):
            flag = False
            array_length = int(array_length)
        else:
            print('length is not an integer')
    new_array = RandomArray(array_length)
    print(f'Массив: {new_array.get_array()}')
    print(f'Минимальный элемент: {new_array.get_min()}')
    print(f'Максимальный элемент: {new_array.get_max()}')
