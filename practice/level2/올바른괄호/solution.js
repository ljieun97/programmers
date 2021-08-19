function solution(s){
    let left = 0
    let arr = [...s]
    for(let i=0; i<s.length; i++){
        arr[i]==='(' ? left++ : left--
        if(left<0) return false
    }
        
    return left===0? true : false
}

let s = "()()"
console.log(solution(s))