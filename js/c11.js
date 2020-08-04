
function averageArraySum(arr) 
{
    var total = 0;

    for ( var i=0; i<arr.length; i++)
    {
        total += arr[i];
    }
    return total/arr.length;
}

var arrayNum = [1, 3, 9, 15, 90];

document.write("Average: ", averageArraySum(arrayNum));
