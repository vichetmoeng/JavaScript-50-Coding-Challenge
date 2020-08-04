/// Array:
/// [2,3,-1,5,7,9,10,15,95]
/// expected result: 145;

function sumArray(arr) 
{
    var total=0;

    for ( var i=0; i<arr.length; i++)
    {
        total += arr[i];
    }

    return total;
}

var arrayNum = [2, 3, -1, 5, 7, 9, 10, 15, 95];
document.write(sumArray(arrayNum));