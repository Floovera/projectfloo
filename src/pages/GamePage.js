import {Words} from "../components/Words";
import {Letters} from "../components/Letters";

export function GamePage(props) {
    const {letters} = props;
    return (
        <div className="mx-3">
            <Letters letters={letters} title="Alfabet"/>
        </div>
    );
}