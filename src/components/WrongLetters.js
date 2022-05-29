import {Section} from "./Section";
import {Letter} from "./Letter";


export function WrongLetters(props) {

    const {wrongLetters,title} = props;
    let wrongLettersForLetter = [];

    wrongLettersForLetter = wrongLetters.map((str,index) => ({id: index + 1, description: str}));
    if (wrongLetters.length < 1) return;
    return (

        <Section title={title}>
            {wrongLettersForLetter.map(l => <Letter
                key={l.id}
                letter={l}
                onClick={() => console.log(l)}
            />)}
        </Section>
    );
}