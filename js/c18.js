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

function outputPrime(num)
{
    var n=2;
    

    for( var i=0; i<num; i++)
    {
        if(isPrime(n))
        {
            document.write(i, " --> ", n, "<br>");
        }
        n++;
    }
}

outputPrime(100);