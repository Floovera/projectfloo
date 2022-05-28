import {Section} from "./Section";
import {Col} from "react-bootstrap";

export function SecretWord(props) {

    const {selectedWord,correctLetters,title} = props;

    return (
        <Section title={title} className="word">
            {selectedWord.description.split('').map((letter,i) => {

                return(
                    <Col className="letter" key={i}>
                     {correctLetters.includes(letter) ? letter : ''}
                    </Col>
                )
            })}
        </Section>

    )
}