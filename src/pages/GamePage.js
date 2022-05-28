import {Letters} from "../components/Letters";
import {WrongLetters} from "../components/WrongLetters";
import {useState} from "react";
import {SecretWord} from "../components/SecretWord";
import {Figure} from "../components/Figure";
import {Popup} from "../components/Popup";
import {Notification} from "../components/Notification";
import {show} from "../helpers/helper";

export function GamePage(props) {
    const {letters,selectedWord} = props;
    const[correctLetters,setCorrectLetters] = useState([]);
    const[wrongLetters,setWrongLetters] = useState([]);
    const[showNotification,setShowNotification] = useState(false);


    function checkLetter(letterdescription) {
        const letter = letterdescription;

        if (selectedWord.description.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                setCorrectLetters(currentLetters => [...currentLetters,letter]);
            }else{
                show(setShowNotification); //de setShowNotification wordt op true en false gezet in show
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                setWrongLetters(wrongLetters => [...wrongLetters,letter]);
            }else{
                show(setShowNotification);
            }
        }
        console.log(selectedWord.description)
        console.log(correctLetters);
        console.log(wrongLetters);
    }

    return (
        <div className="mx-3">
            <Notification
                showNotification={showNotification}
            />
            <div>
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
                <Figure
                    wrongLetters={wrongLetters}
                    title="Opgepast!"
                />
                <Popup
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}
                    selectedWord={selectedWord}
                />
            </div>


        </div>

    );
}