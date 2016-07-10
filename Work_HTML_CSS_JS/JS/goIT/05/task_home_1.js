/**
 * Created by boss on 10 июля.
 */
// ## Задание 1 (Кто первым решил больше всех задач)
//
// Напишите код который выведет сотрудника который выполнил больше всех задач.
//
//     Например:
// ```js
// var tasksCompleted = {
//   'Anna': 29,
//   'Serg': 35,
//   'Elena': 1,
//   'Anton': 99
// };
// ```

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

// версия1
function getBestEmp(obj) {
    var bestEmpl, differ = 0;
    for (var item in obj) {
        if (obj[item] > differ) {
            differ = obj[item];
            bestEmpl = item;
        }
    }
    return bestEmpl + ' - ' + obj[bestEmpl];
}

console.log(getBestEmp(tasksCompleted));

// версия 2
function getBestEmp1(obj) {
    var bestEmpl = {'MisterX': 0};
    for (var item in obj) {
        for (var iB in bestEmpl) {
            if (obj[item] > bestEmpl[iB]) {
                delete  bestEmpl[iB];
                bestEmpl[item] = obj[item];
            }
        }
    }
    for(iB in bestEmpl){
     return iB;
    }
}
console.log(getBestEmp1(tasksCompleted));