import {Words} from "../components/Words";
import {Letters} from "../components/Letters";
import {useState} from "react";

export function GamePage(props) {
    const {letters} = props;
    const[correctLetters,setCorrectLetters] = useState([]);
    const[wrongLetters,setWrongLetters] = useState([]);

    return (
        <div className="mx-3">
            <Letters letters={letters} title="Alfabet"/>
        </div>
    );
}