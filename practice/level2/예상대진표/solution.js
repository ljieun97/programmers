function solution(n,a,b)
{
    let count = 0
    let tmp = 0
    if(a>b){
        tmp=a
        a=b
        b=tmp
    }
    while(a>0){
        if(a%2===1 && b-a===1){
            return count+=1
        } else {
            a=Math.ceil(a/2)
            b=Math.ceil(b/2)
            count++
        } 
    }
    return count
}

console.log(solution(8, 4, 7))