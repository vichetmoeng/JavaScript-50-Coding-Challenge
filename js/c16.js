function isPrime(n) {
    if ( n<2 )
    {
        return false;
    } 
    else if( n==2 ) 
    {
        return true;
    }
    else {
        var maxDiv = Math.sqrt(n);
        for ( var i=2; i<=maxDiv; i++)
        {
            if ( n%i==0 )
            {
                return false;
            }
        }
    }

    return true;
}

console.log(2, "is prime? ", isPrime(2));
document.write(7, "is prime? ", isPrime(7), "<br>");
document.write(10, "is prime? ", isPrime(10), "<br>");
document.write(71, "is prime? ", isPrime(71), "<br>");

