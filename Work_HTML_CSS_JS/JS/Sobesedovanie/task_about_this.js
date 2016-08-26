/**
 * Created by boss on 25 августа.
 */
// что выведет вызов данной функции???

function func() {
    console.log(this);
}

func();


// Ответ: глобальный объект! т.е. выведет [object Window] или [object global]. Если 'use strict' - то undefined