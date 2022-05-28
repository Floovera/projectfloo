import {Section} from "./Section";
import * as PropTypes from "prop-types";
import {Col} from "react-bootstrap";
import {MyCard} from "./MyCard";

function Letter(props) {
    const {letter,onClick} = props;
    return (
        <Col xs={6} sm={4} md={3} lg={2}>
            <MyCard onClick={() => onClick()} title={letter.description}>
            </MyCard>
        </Col>
    );
}

Letter.propTypes = {
    letter: PropTypes.shape({
        description: PropTypes.string.isRequired
    })
}

export function Letters(props) {
    const {letters, title} = props;
    return (
        <Section title={title}>
            {letters.map(l => <Letter
                key={l.id}
                letter={l}
                onClick={() => console.log(l.description)}

            />)}
        </Section>
    );
}

Letters.propTypes = {
    letters: PropTypes.array,
    title: PropTypes.string
}