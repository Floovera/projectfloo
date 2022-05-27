import {Words} from "../components/Words";

export function WordsPage(props) {
    const {words} = props;
    return (
        <div className="mx-3">
            <Words words={words} title="Woordenlijst"/>
        </div>
    );
}