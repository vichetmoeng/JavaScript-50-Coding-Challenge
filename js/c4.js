
function printTable(n) {
    for ( var i=1; i<=10; i++ )
    {
        var row = n + " x " + i + " = " + n * i + "<br>";
        document.write(row);
    }
}

for ( var i=1; i<=10; i++ )
{
    document.write("Time Table of #" + i+"<br>");
    printTable(i);
}