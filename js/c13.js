
function findMax(arr) 
{
    var max = arr[0];

    for ( var i=0; i<arr.length; i++){
        if ( arr[i]>max)
        {
            max = arr[i];
        }
    }

    return max;
}

var arrayTest = [1,2,9,8,5,4,11];
document.write(findMax(arrayTest));