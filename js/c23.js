
function toReverseString(str)
{
    var strTmp = "";

    for( var i=str.length-1; i>=0; i--)
    {
        var char = str[i];
        strTmp += char;
    }

    return strTmp;
}

var strTest = "Hello World This is Vichet";
var strRevr = toReverseString(strTest);

document.write("Normal String: ", strTest, "<br>");
document.write("Reversed String: ",strRevr);
