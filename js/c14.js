// reminder:
// F(0) = 0; F(1)=1; F(n) = F(n-1) + F(n-2);

var fibo0 = 0;
document.write(fibo0 + ", ");

var fibo1 = 1;
document.write(fibo1 + ", ");

for ( var i=2; i<10; i++)
{
    var fiboi = fibo1 + fibo0;
    document.write(fiboi + ", ");

    fibo0 = fibo1;
    fibo1 = fiboi;

}