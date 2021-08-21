function solution(n) {
    let arr = [0, 1]
    for(let i=2; i<=n; i++){
        arr.push(arr[i-2]%1234567+arr[i-1]%1234567)
    }
    
    return arr[n]%1234567

}

let n = 3
console.log(solution(n))