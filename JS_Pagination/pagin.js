/**
 * Created by boss on 27 июля.
 */
function showPage(id) {
    var pageCounter = document.querySelectorAll('.page').length;
        
        for (var i = 1; i <= pageCounter; i++) {
            document.querySelector('.item'+ i).classList.remove('active-item'); 
            if (document.querySelector('.page' + i)) {
                document.querySelector('.page' + i).classList.remove('active-page');
            }
        }

        if (document.querySelector('.page' + id)) {
            document.querySelector('.page' + id).classList.add('active-page');
            document.querySelector('.item' + id).classList.add('active-item');
        }
}

function togglePage(dir) {
    
    var numberItems = document.querySelectorAll('.pagination li').length;
    console.log(numberItems);
    var activeItem = document.querySelector('.active-item').classList.item(0);
    var activeNumber = + activeItem.slice(4);
    
    if(dir == -1 && activeNumber > 1) {
        showPage(activeNumber -1);
    }else if (dir == 1 && activeNumber < (numberItems -2) ){
        showPage(activeNumber + 1);
    }
}