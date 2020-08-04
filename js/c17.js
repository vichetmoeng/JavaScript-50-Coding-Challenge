// positive integer nubmer

function digitSum(n) 
{
    var tmp = n.toString();
    var total = 0;

    for( var char of tmp) 
    {
        var cnum = parseInt(char);
        total += cnum;
    }
    
    return total;
}

var num = 100203;
document.write(digitSum(num));