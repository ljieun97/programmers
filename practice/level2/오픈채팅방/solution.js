function solution(record) {
    let arr = []
    for(let i=0; i<record.length; i++){record[i]=record[i].split(" ")}
    for(let i=record.length; i>0; i--){
        if(record[i][0]==="Leave") record[i].push("")
    }
    // for(let i=record.length; i>0; i--){
    //     if(record[i][0]==="Leave") record[i].push("")
    //     // for(let j=i-1; j>=0; j--){
    //     //     if(record[i][1]===record[j][1]) record[j][2]=record[i][2]
    //     // }
    // }
//     for(let i=0; i<record.length; i++){
//         if(record[i][0]==="Enter") {
//             arr.push("님이 들어왔습니다.") 
//         }else if(record[i][0]==="Leave") {
//             arr.push("님이 나갔습니다.")   
//         }
//     }
    return record
}