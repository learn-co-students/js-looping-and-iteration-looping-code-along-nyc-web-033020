const friends = ['Lisa', 'Kaitlin', 'Jan']

function writeCards(friends, occassion){
    let thankYou = []
    for (let i=0; i<friends.length; i++){
        thankYou.push(`Thank you, ${friends[i]}, for the wonderful ${occassion} gift!`);
    }
    return thankYou;
}

function countDown(number){
    let i = number
    while (i>0){
        console.log(i);
        i-=1;
    }
    console.log(i);
}
