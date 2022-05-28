import {Words} from "../components/Words";
import {Footer} from "../components/Footer";

export function WordsPage(props) {
    const {words} = props;
    return (
        <>
            <Words words={words} title="Woordenlijst"/>
            <Footer></Footer>
        </>

    );
}