function mergeTwoGetOne(arr1, arr2)
{
    var tmp = [];

    for ( let test of arr1)
    {
        if ( !arr2.includes(test))
        {
            tmp.push(test);
        }
    }

    return tmp;
}

var a1 = [1,2,3,4,5,6,9];
var a2 = [4,5,3];

var rs = mergeTwoGetOne(a1, a2);

document.write(a1, "<br>");
document.write(a2, "<br>");
document.write(rs);