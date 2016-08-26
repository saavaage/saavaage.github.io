/**
 * Created by boss on 25 августа.
 */
// Создайте объект calculator с тремя методами:
//
//1. read() запрашивает prompt два значения и сохраняет их как свойства объекта
//2.  sum() возвращает сумму этих двух значений
//3.  mul() возвращает произведение этих двух значений

var calculator = {
    read: function(){
        var value1 = + prompt("Введите значение1");
        var value2 = + prompt("Введите значение2");
        this.value1 = value1;
        this.value2 = value2;
    },
    sum: function(){
        return this.value1 + this.value2;
    },
    mul: function(){
        return this.value1 * this.value2;
    }
}

calculator.read();