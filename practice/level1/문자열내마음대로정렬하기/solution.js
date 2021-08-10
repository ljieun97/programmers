function solution(strings, n) {
    return strings.sort((a,b)=>a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]))    
}

let strings = ["sun", "bed", "car"]
let n = 1
console.log(solution(strings, n))