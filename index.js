function writeCards(namesArray, event) {
    let thankYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

function countDown(numbah) {
    while (numbah > 0) {
        console.log(numbah)
        numbah -=1;
    }
    console.log(numbah);
}