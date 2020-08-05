function mergeTwoArray(arr1, arr2)
{
    var tmpArray = [];

    for (var i=0; i<arr1.length; i++)
    {
        tmpArray.push(arr1[i]);
    }
    for (var i=0; i<arr2.length; i++)
    {
        tmpArray.push(arr2[i]);
    }

    return tmpArray;
}

var a1 = [1,2,3,45];
var a2 = ["a", "b", "c", "d"];

var mergedArray = mergeTwoArray(a1, a2);

document.write(mergedArray);