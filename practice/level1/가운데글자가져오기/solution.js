function solution(s) {
    var result = Math.round(s.length/2)
    if (s.length%2===0)
        return s[result-1]+s[result]
    return s[result-1]
}

let s = "abcde"
console.log(solution(s))