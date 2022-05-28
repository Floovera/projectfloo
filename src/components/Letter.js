import {Col} from "react-bootstrap";
import {MyCard} from "./MyCard";
import * as PropTypes from "prop-types";

export function Letter(props) {
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