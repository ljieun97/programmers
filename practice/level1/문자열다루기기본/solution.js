function solution(s) {

    return s.length===4||s.length===6 ? s.split("").every((c)=>!isNaN(c)) : false

}

let s = "a234"
console.log(solution(s))