export function checkWin(correct,wrong,word){
    let status = 'win';

    word.split('').forEach(letter => {
        if(!correct.includes(letter)){
            status = '';
        }
    });

    if(wrong.length === 6) status = 'lose';

    return status;
}

// zet setShowNotification eerst op true, om hem dan na zoveel seconde op false te zetten

export function show(setter){
    setter(true);
    setTimeout(() => {
        setter(false)
    },1000)
}