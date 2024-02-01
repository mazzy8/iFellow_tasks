def calculate_clock_angle(hours, minutes):
    if (0 <= hours <= 12) and (0 <= minutes <= 59):
        angle = abs(30 * hours - (11 / 2) * minutes)

        if angle > 180:
            angle = 360 - angle

        return angle
    else:
        raise ValueError("Неправильный формат времени")


hours = int(input("Часы: "))
minutes = int(input("Минуты: "))
angle = calculate_clock_angle(hours, minutes)
print(f"Угол между стрелками в {hours}:{minutes} = {angle} градусов")