/**
 * Created by boss on 28 августа.
 */
/*
Добавить в конструктор Article:
1. Подсчёт общего количества созданных объектов.
2. Запоминание даты последнего созданного объекта.
Используйте для этого статические свойства.
Пусть вызов Article.showStats() выводит то и другое.
 */


Article.count = 0;

function Article() {
    Article.count++;

    this.created = new Date();
    Article.lastDate = this.created;

    Article.showStats = function(){
        console.log("Всего:" + this.count + " Последняя дата: " + this.lastDate);
    }
}

new Article();
new Article();
Article.showStats(); // Всего: 2, Последняя: (дата)
new Article();
Article.showStats(); // Всего: 2, Последняя: (дата)
for(var i =0; i < 1000000000; i++){}
new Article();
Article.showStats(); // Всего: 3, Последняя: (дата)
