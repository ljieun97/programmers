function solution(numbers) {
    if(numbers.every((e)=>e===0)) return '0'
    numbers.sort((a,b)=>''+a+b > ''+b+a ? -1 : 1)
    
    return numbers.join("")
    }

    console.log(solution([6, 10, 2]))
    console.log(solution([3, 30, 34, 5, 9]))