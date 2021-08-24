function solution(citations) {
    if(citations.every((n)=>n===0)) return 0
    for(let j=citations.length; j>0; j--){    
        let hcount = 0
        let lcount = 0
        for(let i=0; i<citations.length; i++){    
            if(citations[i]>=j){
                hcount++
            } else lcount++
            if(hcount>=j){
                if(lcount<j) return j
            }
        }
    }
}

let citations = [3, 0, 6, 1, 5]
console.log(solution(citations))