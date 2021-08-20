function solution(lottos, win_nums) {
    let arr = [0,0]
    for(let j=0; j<lottos.length; j++){
        for(let i=0; i<lottos.length; i++){
            if(lottos[i]===win_nums[j]){
                arr[0]+=1
                arr[1]=arr[0]
            }
        }
    }

    arr[0]+=lottos.filter((n)=>n===0).length

    for(let i=0; i<arr.length; i++){
        if(arr[i]===6) {
            arr[i]=1
        }else if(arr[i]===5){
            arr[i]=2
        }else if(arr[i]===4){
            arr[i]=3
        }else if(arr[i]===3){
            arr[i]=4
        }else if(arr[i]===2){
            arr[i]=5
        }else arr[i]=6
    }
    return arr
}

let lottos = [44, 1, 0, 0, 31, 25]
let win_nums = [31, 10, 45, 1, 6, 19]
console.log(solution(lottos, win_nums))