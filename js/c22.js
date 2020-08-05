
var arr1 = [1,2,3,4,5,6,7];

function reverseArray(arr) 
{
    var tmp = [];
    
    for( var i=arr.length-1; i>=0; i--)
    {
        tmp.push(arr[i]);
    }
    
    return tmp;
}

var arr2 = reverseArray(arr1);

document.write(arr1, "<br>");
document.write(arr2);