function solution(n)
{
    var sum = 0;
    n=String(n)
    for(var i=0; i<n.length; i++){
        sum += n[i]/1
    }
    return sum
}

let n = 123
console.log(solution(n))