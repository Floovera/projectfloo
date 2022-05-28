import {Section} from "./Section";
import {Letter} from "./Letter";
import * as PropTypes from "prop-types";




export function Letters(props) {
    const {letters, title,onClickLetter} = props;
    return (
        <Section title={title}>
            {letters.map(l => <Letter
                key={l.id}
                letter={l}
                onClick={() => onClickLetter(l)}

            />)}
        </Section>
    );
}

Letters.propTypes = {
    letters: PropTypes.array,
    title: PropTypes.string
}