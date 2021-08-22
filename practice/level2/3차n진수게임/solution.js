function solution(n, t, m, p) {
    let s = ''
    let result = ''
    for(let i=0; i<=t*m; i++){
        s+=(i).toString(n)
    }
    for(let i=0; i<t; i++){
        result+=s[p-1+m*i]
    }
    return result.toUpperCase()
}

let n = 2
let t = 4
let m = 2
let p = 1
console.log(solution(n, t, m ,p))