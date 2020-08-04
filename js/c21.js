var arr = [3,2,1,5];

function rotateRight(arra) 
{
    var last = arra.pop();
    arra.unshift(last);
}

rotateRight(arr);
document.write(arr);