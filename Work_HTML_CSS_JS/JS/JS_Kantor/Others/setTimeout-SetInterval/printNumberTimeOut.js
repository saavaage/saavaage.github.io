/**
 * Created by boss on 08 сентября.
 */
function printTimeOut() {
    var i = 1;
    (function run() {
        console.log(i);
        i++;
        if(i <= 20) {
            setTimeout(run, 1000);
        }
    })();
}
printTimeOut();