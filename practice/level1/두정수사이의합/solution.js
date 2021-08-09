function solution(a, b) {
    let sum = 0
    if(a<b) {
        for(let i=a; i<=b; i++)
            sum += i
    } else if(a>b) {
        for(let i=a; i>=b; i--)
            sum += i
    } else sum=a
    return sum
}

let a = 3
let b = 5
console.log(solution(a, b))