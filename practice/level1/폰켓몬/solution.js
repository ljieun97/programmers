function solution(nums) {
    let arr = [...new Set(nums)]
    let max = nums.length/2
    return arr.length<=max ? arr.length : max
}

let nums = [3, 1, 2, 3]
console.log(solution(nums))