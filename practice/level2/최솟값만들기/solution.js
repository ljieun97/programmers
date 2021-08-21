function solution(A,B){
    A=A.sort((a,b)=>a-b)
    B=B.sort((a,b)=>b-a)
    let sum = 0
    for(let i=0; i<A.length; i++){
        sum+=A[i]*B[i]
    }
    return sum
}

let A = [1, 4, 2]
let B = [5, 4, 4]
console.log(solution(A, B))