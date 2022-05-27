import {Section} from "./Section";
import * as PropTypes from "prop-types";
import {Col} from "react-bootstrap";
import {MyCard} from "./MyCard";

function Word(props) {
    const {word} = props;
    return (
        <Col xs={6} sm={4} md={3} lg={2}>
            <MyCard title={word.description}>
                <div style={{fontSize: "10px"}}>Hint: {word.hint}</div>
            </MyCard>
        </Col>
    );
}

Word.propTypes = {
    word: PropTypes.shape({
        description: PropTypes.string.isRequired,
        level: PropTypes.number.isRequired,
        hint: PropTypes.string.isRequired,
    })
}

export function Words(props) {
    const {words, title} = props;
    return (
        <Section title={title}>
            {words.map(w => <Word key={w.id} word={w}/>)}
        </Section>
    );
}

Words.propTypes = {
    words: PropTypes.array,
    title: PropTypes.string
}