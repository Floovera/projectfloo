import './App.css';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import {Tabs, TabList, Tab, TabPanel} from "react-tabs";

import {LETTER_DATA, WORD_DATA} from "./data/data";
import {WordsPage} from "./pages/WordsPage";
import {GamePage} from "./pages/GamePage";

function App() {
    return (
        <Tabs>
            <TabList>
                <Tab>Words</Tab>
                <Tab>Game</Tab>
            </TabList>
            <TabPanel>
                <WordsPage words={WORD_DATA}/>
            </TabPanel>
            <TabPanel>
                <GamePage words={WORD_DATA} letters={LETTER_DATA}/>
            </TabPanel>
        </Tabs>
    );
}

export default App;
