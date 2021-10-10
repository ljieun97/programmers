function solution(a, b) {
    let day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]
    let last = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let sum = 0
    for(let i=0; i<a-1; i++){
        sum+=last[i]
    }
    return day[(sum+b)%7]
}

console.log(solution(5, 24))
console.log(solution(11, 12))