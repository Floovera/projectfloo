import {Card} from "react-bootstrap";

export function MyCard(props) {
    const {title, children,onClick} = props;
    return <Card className="m-2 p-2 shadow-sm text-center"
                 onClick={onClick}>
        <h6>{title}</h6>
        {children}
    </Card>;
}