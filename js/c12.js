
function returnPositiveNumber(arr) 
{
    var arr2 = [];

    for ( var i=0; i<arr.length; i++)
    {
        var tmp = arr[i];
        if(tmp>=0)
        {
            arr2.push(tmp);
        }
    }

    return arr2;
}

var arrayNum = [-5,1,2,3,4,-9,-12];
document.write(returnPositiveNumber(arrayNum));

document.write("<br> Using (for...of) loop <br>");

function returnPositiveNumberForOf(arr) 
{
    var arr2 = [];

    for (var tmp of arr)
    {
        if (tmp >=0 )
        {
            arr2.push(tmp);
        }
    }

    return arr2;
}

var arrayNum = [5,7,8,-5,1,2,3,4,-9,-12];
document.write(returnPositiveNumberForOf(arrayNum));

////
document.write("<br> Using .filter() array method <br>");

function returnPositiveuseFilter(arr) 
{
    return arr.filter(tmp => tmp >= 0);
}

var arrayNum = [5,7,8,-5,1,2,3,4,-9,-12];
document.write(returnPositiveuseFilter(arrayNum));