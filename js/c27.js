document.write("<h1>Challenge27a - Create a function that will receive an array of numbers as argument and will return a new array with distinct elements</h1>");
document.write("<hr>");

function isInArray(n, arr)
{
    for ( let i=0; i<arr.length; i++)
    {
        if ( arr[i] === n)
        {
            return true;
        }
    }

    return false;
}

function makeArrayNoDuplicate(arr)
{
    var tmp = [];

    for ( let i=0; i<arr.length; i++)
    {
        if( !isInArray(arr[i], tmp))
        {
            tmp.push(arr[i]);
        }
    }

    return tmp;
}

var a1 = [1,2,3,3,5,4,6,6,77,7,6,7,8,-1,1,0,9];
var rs = makeArrayNoDuplicate(a1);

document.write(a1, "<br>");
document.write(rs);
