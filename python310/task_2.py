def find_duplicate_char(word):
    char_count = {}

    for char in word:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1

    return char_count


word = input("Введите слово: ")
result = find_duplicate_char(word)
if result:
    print(f"В слове '{word}': ")
    for char, count in result.items():
        if count > 1:
            print(f"символ {char}: повторы {count}")
else:
    print(f"В слове '{word}' нет повторяющихся символов")