var arr = [1,2,3,45,9];

function rotateLeft(arr)
{
    var first = arr.shift();
    arr.push(first);
}
rotateLeft(arr);
document.write(arr);
