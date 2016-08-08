/**
 * Created by boss on 22 июля.
 */
var allNews = document.querySelector('.main-aside');
var btnNews = document.querySelector('.btn-news');
var panelNews = document.querySelector('.main-aside-news');


// открытие/закрытие панели по клику на .main-aside
btnNews.addEventListener('click', function (event) {
    event.preventDefault();
    panelNews.classList.toggle('main-aside-news-show');
    allNews.classList.toggle('main-aside-show');
});
