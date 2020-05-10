// Code your solutions in this file
function writeCards(array, event) {
    var answer =[]
    for(let j = 0; j < array.length; j++){
        answer.push(`Thank you, ${array[j]}, for the wonderful ${event} gift!`);
    }
    return answer;
}

function countDown(num){
    while (num > 0) {
        console.log(num);
        num--;
    }
    console.log(num);
}