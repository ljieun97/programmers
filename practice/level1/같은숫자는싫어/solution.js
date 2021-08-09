function solution(arr)
{
    for(var i=0; i<arr.length-1; i++){
        if(arr[i]===arr[i+1])
            arr[i]='x'
    }
    return arr.filter((n)=>n!=='x')
}

arr = [1, 1, 3, 3, 0, 1, 1]
console.log(solution(arr))