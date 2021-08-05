function solution1(n) {
    
    n=String(n)
    return Number(n.split('').sort().reverse().join(''));
}

function solution2(n) {
    
    return (n+"").split('').sort().reverse().join('')/1;
}

let n = 118372
console.log(solution1(n))
console.log(solution2(n))