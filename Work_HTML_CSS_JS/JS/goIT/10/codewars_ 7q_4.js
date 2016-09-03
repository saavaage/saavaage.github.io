/**
 * Created by boss on 01 сентября.
 */
/*
 You have to write a function pattern which returns the following Pattern(See Examples) upto n rows, where n is parameter.

 Rules/Note:
 If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
 The length of each line = (2n-1).
 Range of n is (-∞,100]

 Examples:
 see picture codewars7q-4.jpg
 */


function pattern(n) {
    var output = "";
    for (var k = 1; k <= n; k++) {

        for (var i = 1; i <= n - k; i++) {
            output += ' ';
        }
        for (var j = 1; j <= n; j++) {
                output += j % 10;
        }
        for (var z = 1; z < k; z++) {
            output += ' ';
        }
        if (k !== n) {
            output = output + '\n';
        }
    }
    return output;
}

console.log(pattern(3));

// версия 2
function pattern1(n) {
    var i, line = '', lines = [];
    for (i=1;i<=n;i++) line += i%10;
    for (i=0;i<n;i++) lines.push(Array(n-i).join(' ')+line+Array(i+1).join(' '));
    return lines.join("\n");
}

console.log(pattern1(15));
