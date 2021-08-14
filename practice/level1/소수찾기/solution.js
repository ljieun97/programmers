function solution1(n) {
    let sosu = [0,0]
    let sosucount = 0
    for(let i=2; i<=n; i++) sosu.push(i)
    for(let i=2; i<=n; i++){
        if(sosu[i]){
            for(let j=i+i; j<=n; j+=i){
                sosu[j]=0
            }
        }
    }
    for(let i=0; i<sosu.length; i++){
        if(sosu[i]!==0) sosucount++
    }
    return sosucount
}

function solution2(n) {
    let sosu = [0,0]
    let sosucount = 0
    for(let i=2; i<=n; i++) sosu.push(i)
    for(let i=2; i<=n; i++){
        if(sosu[i]){
            for(let j=i+i; j<=n; j+=i){
                sosu[j]=0
            }
        }
    }
    return sosu.filter((i)=>i!==0).length
}

let n = 10
console.log(solution1(n))
console.log(solution2(n))