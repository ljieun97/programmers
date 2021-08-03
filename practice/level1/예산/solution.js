function solution(d, budget) {
    var sum = 0;
    var result = 0;
    d.sort((a,b)=>a-b)
 
    for(var i=0; i<d.length; i++){
        sum += d[i]
        if(sum>budget) break
        result ++
    }
    
    return result;
}

let d = [1, 3, 2, 5, 4];
let budget = 9;
console.log(solution(d, budget))