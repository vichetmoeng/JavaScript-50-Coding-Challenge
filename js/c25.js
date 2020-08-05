function mergeNotDuplicate(arr1, arr2) 
{
    var tmp = [];

    for ( let test of arr1 )
    {
        if ( !arr2.includes(test) ){
            tmp.push(test);
        }
    }

    for ( let test of arr2 ) 
    {
        if ( !arr1.includes(test)){
            tmp.push(test);
        }
    }

    return tmp;
}


var a1 = [1,2,3,4,5,6];
var a2 = [2,1,7,8,9,0];

var rs = mergeNotDuplicate(a1, a2);

document.write(a1, "<br>");
document.write(a2, "<br>");
document.write(rs);