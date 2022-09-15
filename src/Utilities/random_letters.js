const alphabet = "abcdefghijklmnopqrstuvwxyz"

function randomLetters(isCapital){

    let randomCharacter = '';

    for(let i=0;i<8;i++){
        randomCharacter += alphabet[Math.floor(Math.random() * alphabet.length)]
    }

    return isCapital ? randomCharacter.toUpperCase() : randomCharacter;

}

export default randomLetters;