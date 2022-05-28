import {Letters} from "../components/Letters";
import {WrongLetters} from "../components/WrongLetters";
import {useState} from "react";
import {SecretWord} from "../components/SecretWord";

export function GamePage(props) {
    const {letters,selectedWord} = props;
    const[correctLetters,setCorrectLetters] = useState([]);
    const[wrongLetters,setWrongLetters] = useState([]);


    function checkLetter(letterdescription) {
        const letter = letterdescription;

        if (selectedWord.description.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                setCorrectLetters(currentLetters => [...currentLetters,letter]);
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                setWrongLetters(wrongLetters => [...wrongLetters,letter]);

            }
        }
        console.log(selectedWord.description)
        console.log(correctLetters);
        console.log(wrongLetters);
    }

    return (
        <div className="mx-3">
            <Letters
                letters={letters}
                title="Alfabet"
                onClickLetter={l => checkLetter(l.description)}
            />
            <WrongLetters
                wrongLetters={wrongLetters}
                title="Foute gokjes"
            />
            <SecretWord
                selectedWord={selectedWord}
                correctLetters={correctLetters}
                title="Raad je het woord?"
            />

        </div>
    );
}