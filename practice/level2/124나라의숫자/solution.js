function solution(n) {
    let result = ''
    while(n>0){
        if(n%3===1) {
            result=1+result 
        }else if(n%3===2){
            result=2+result 
        }else if(n%3===0){
            result=4+result 
            n--
        }   
        n=Math.floor(n/3)
    }
    return result
}

let n = 4
console.log(solution(n))