import {Section} from "./Section";

export function Figure(props) {

    const {wrongLetters,title} = props;
    const errors = wrongLetters.length;

    return (
        <Section title={title}>
            <svg height="500" width="400" className="figure-container">
                <line x1="120" y1="40" x2="280" y2="40"/>
                <line x1="280" y1="40" x2="280" y2="100"/>
                <line x1="120" y1="40" x2="120" y2="460"/>
                <line x1="40" y1="460" x2="200" y2="460"/>


                {errors > 0 && <circle cx="280" cy="140" r="40"/>}

                {errors > 1 && <line x1="280" y1="180" x2="280" y2="300"/>}

                {errors > 2 && <line x1="280" y1="240" x2="240" y2="200"/>}
                {errors > 3 && <line x1="280" y1="240" x2="320" y2="200"/>}

                {errors > 4 && <line x1="280" y1="300" x2="240" y2="360"/>}
                {errors > 5 &&  <line x1="280" y1="300" x2="320" y2="360"/>}
            </svg>
        </Section>
    )
}