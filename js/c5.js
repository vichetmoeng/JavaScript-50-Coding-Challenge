// task to sum from 1 to 100
var total=0;
document.write("Sum = ");
for ( var i=1; i<=99; i++ )
{
    total += i;
    document.write(i + " + ");
}
total += 100;
document.write(" 100 = "+total);