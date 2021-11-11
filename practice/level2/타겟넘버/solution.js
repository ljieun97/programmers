function solution(numbers, target) {
    let count = 0
    function dfs(idx, sum){
        if(idx==numbers.length){
            if(sum==target) count++
            return; //왜 리턴
        }
        dfs(idx+1, sum+numbers[idx])
        dfs(idx+1, sum-numbers[idx])
    }
    dfs(0,0)
    return count
}

console.log(solution([1, 1, 1, 1, 1], 3))
