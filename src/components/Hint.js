import {Button} from "react-bootstrap";
import {useState} from "react";

function OpenCloseButton(props) {
    const {isOpen, onChangeIsOpen,selectedWord} = props;

    return(
        <div className="d-grid gap-2">
            <Button variant="outline-light" size="lg" onClick={() => onChangeIsOpen(!isOpen)}>
                {isOpen ? `Hint: ${selectedWord.hint}` : "Ik wil een hint"}
            </Button>
        </div>
        )
}

export function Hint(props) {
    const {selectedWord} = props;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="my-3 p-1 rounded shadow-sm" style={{backgroundColor: "#5c4cc0"}}>
                <OpenCloseButton
                    isOpen={isOpen}
                    onChangeIsOpen={() => setIsOpen(!isOpen)}
                    selectedWord={selectedWord}/>
        </div>
    );
}
