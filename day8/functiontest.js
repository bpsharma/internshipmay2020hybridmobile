function factorial(n)
{
    if(n==1)
        return 1;
    else
        return n*factorial(n-1);
}
console.log("Factorial of 6 is "+factorial(6));
