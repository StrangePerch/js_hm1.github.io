function Compare()
{    
    let a = document.getElementsByClassName('compare_input_a')[0].value;
    let b = document.getElementsByClassName('compare_input_b')[0].value;
    if(a < b)
    {
        alert("-1");
    }
    else if(a > b)
    {
        alert("1");
    }
    else
    {
        alert("0");
    }
}

function Factorial()
{
    let a = parseInt(document.getElementsByClassName("factorial_input")[0].value);
    let b = 1;
    for (let i = 2; i <= a; i++) {
        b *= i; 
    }
    alert("Factorial of " + a + " equals " + b);
}

function Combine()
{
    let a = document.getElementsByClassName('combine_input_a')[0].value;
    let b = document.getElementsByClassName('combine_input_b')[0].value;
    let c = document.getElementsByClassName('combine_input_c')[0].value;
    alert(a+b+c);
}

function Area()
{
    let a = parseInt(document.getElementsByClassName('area_input_a')[0].value);
    let h = parseInt(document.getElementsByClassName('area_input_b')[0].value);
    if(isNaN(h))
    {
        alert(a * a);
    }
    else
    {
        alert(a * h / 2);
    }
}

function IsPerfect(number)
{
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if(number % i === 0)
        {
            sum += i;
        }
    }
    
    return sum === number;
}

function Perfect()
{
    let a = parseInt(document.getElementsByClassName('perfect_input')[0].value);
    if(IsPerfect(a))
    {
        alert(a + " is perfect");
    }
    else
    {
        alert(a + " is not perfect");
    }
}

function PerfectNumbersInRange()
{
    let from = parseInt(document.getElementsByClassName('perfect_input_from')[0].value);
    let to = parseInt(document.getElementsByClassName('perfect_input_to')[0].value);
    let string = '';

    for (let i = from; i < to; i++) {
        if(IsPerfect(i)) string += i + ", ";
    }
    
    if(string !== '')
        alert(string);
    else
        alert("Nothing found");
}