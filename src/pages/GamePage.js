import {Words} from "../components/Words";
import {Letters} from "../components/Letters";
import {useState} from "react";

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
        </div>
    );
}