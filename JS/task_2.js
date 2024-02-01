export const task2 = 'Задача 2. Написать программу, которая должна найти и вывести повторяющийся символ в ' +
    'слове «Hello». UPD Поиск всех повторяющихся символов в слове'

export function findDuplicateChar(word) {
    const charCount = {};
    for (const char of word) {
        if (charCount.hasOwnProperty(char)) {
            charCount[char] += 1;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;
}