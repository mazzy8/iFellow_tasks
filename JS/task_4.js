export const task4 = 'Задача 4.  Напишите метод, который будет вычислять угол между часовой и минутной стрелками ' +
    'часов. На вход функции подаётся время в виде двух переменных: "hours" и "minutes".' +
    'Расчет угла производить относительно реального поведения стрелок часов.'

export function calculateClockAngle(hours, minutes) {
    if ((hours >= 0 && hours <= 12) && (minutes >= 0 && minutes <= 59)) {
        let angle = Math.abs(30 * hours - (11 / 2) * minutes);
        if (angle > 180) {
            angle = 360 - angle;
        }
        return angle;
    } else {
        throw new Error("Неправильный формат времени");
    }
}