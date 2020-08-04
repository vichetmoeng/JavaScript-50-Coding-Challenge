function getPrimes(nP, starAt)
{
    var arr = [];
    var i = starAt;

    while(arr.length < nP)
    {
        if(isPrime(i))
        {
            arr.push(i);
        }
        i++;
    }
    return arr;
}

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

document.write(getPrimes(10, 20));
