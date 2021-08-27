function solution(record) {
    let answer = []
    let nickName = {}
    record=record.map(i=>i.split(" "))
    for(let i=0; i<record.length; i++){
        if(record[i].length===3) nickName[record[i][1]]=record[i][2]
    }

    for(let i=0; i<record.length; i++){
        if(record[i][0]==="Enter") {
            answer.push(nickName[record[i][1]]+"님이 들어왔습니다.") 
        }else if(record[i][0]==="Leave") {
            answer.push(nickName[record[i][1]]+"님이 나갔습니다.")   
        }
    }
    return answer
}

let record = [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]
console.log(solution(record))
