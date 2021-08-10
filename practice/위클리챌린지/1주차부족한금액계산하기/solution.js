function solution(price, money, count) {
    var sum = 0;
    
    for(var i=1; i<=count; i++){
        sum += (price*i)
    }
    if (money<sum) {
        return sum-money;
    } 
    return 0;
}

let price = 3
let money = 20
let count = 4
console.log(solution(price, money, count))