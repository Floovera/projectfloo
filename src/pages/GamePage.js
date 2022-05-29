import {Letters} from "../components/Letters";
import {WrongLetters} from "../components/WrongLetters";
import {useState} from "react";
import {SecretWord} from "../components/SecretWord";
import {Figure} from "../components/Figure";
import {Popup} from "../components/Popup";
import {Notification} from "../components/Notification";
import {show} from "../helpers/helper";
import {Hint} from "../components/Hint";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

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
            <Header></Header>
            <SecretWord
                selectedWord={selectedWord}
                correctLetters={correctLetters}
                title="Raad je het woord?"
            />
            <div className="d-flex flex-row ">
                <div className="p-1 col-md-6">
                    <Figure
                        wrongLetters={wrongLetters}
                        title="Opgepast!"
                    />
                </div>

                <div className="p-1 col-md-6 d-flex flex-column">

                    <Notification
                        showNotification={showNotification}
                    />
                    <Letters
                        style={{backgroundColor: "yellow"}}
                        letters={letters}
                        title="Alfabet"
                        onClickLetter={l => checkLetter(l.description)}
                    />
                    <WrongLetters
                        wrongLetters={wrongLetters}
                        title="Foute gokjes"
                    />
                    <Hint
                        selectedWord={selectedWord}
                    />
                </div>
            </div>
                <Popup
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}
                    selectedWord={selectedWord}
                />

                <Footer></Footer>
        </div>

    );
}