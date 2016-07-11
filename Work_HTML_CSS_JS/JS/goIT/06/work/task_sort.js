/**
 * Created by boss on 11 июля.
 */
// отсортироавать массив, вынеся все строки в начало

var myArr = [2, 'fuck',  34, 1, 5, 'shit', 'good' ,'колбаса' , 56, 70, 13]

myArr.sort(function(a,b){
    if(+a && +b){
        return 0;
    }else
    if(+b){
       return -1;
    }else{
        return 1;
    }
}
)
console.log(myArr);