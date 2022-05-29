import {Card} from "react-bootstrap";

export function MyCard(props) {
    const {title, children,onClick} = props;
    return <Card className="m-2 p-2 shadow-sm text-center"
                 onClick={onClick}>
        <h7>{title}</h7>
        {children}
    </Card>;
}