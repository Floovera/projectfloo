import {checkWin} from "../helpers/helper";

export function Popup(props) {

    const{correctLetters,wrongLetters,selectedWord} = props;
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let selectedWordDescription = selectedWord.description;

    if(checkWin(correctLetters,wrongLetters,selectedWordDescription) === 'win'){
        finalMessage = 'Jippie gewonnen > goed gedaan!';
    } else if (checkWin(correctLetters,wrongLetters,selectedWordDescription) === 'lose'){
        finalMessage = 'Verloren ...';
        finalMessageRevealWord = `Het woord was: ${selectedWordDescription}`;
    }

    function refreshPage(){
        window.location.reload();
    }

    return (
        <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}}>
            <div className="popup">
                <h2 >{finalMessage}</h2>
                <h3 >{finalMessageRevealWord}</h3>
                <button onClick={refreshPage}>Speel opnieuw</button>
            </div>
        </div>
    )
}