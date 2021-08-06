function solution(phone_number) {
    var result = ''
    for (var i=0; i<phone_number.length; i++)
        result += i<phone_number.length-4 ? '*' : phone_number.charAt(i)
    return result

}

let phone_number = "01033334444"
console.log(solution(phone_number))