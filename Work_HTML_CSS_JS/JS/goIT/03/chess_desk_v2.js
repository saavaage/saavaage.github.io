/**
 * Created by boss on 10 июля.
 */
function makeChessBoard(size) {
    for (var i = 1; i < size; i++) {
        var line = '';
        var char1 = (i%2 ===0)?'#':' ';
        var char2 = (i%2 ===0)?' ':'#';

      for(var j = 0; j < size; j++){

        if (j % 2 == 0) {
            line += char2;
        } else {
            line += char1;
        }
        }
        console.log(line);
    }

}
makeChessBoard(8);