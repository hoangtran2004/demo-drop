import {Route, Routes} from "react-router-dom";
import Item from "./component/Item";
import Trello from "./component/drag-drop";

function App() {
    return (
        <Routes>
            <Route path={''} element={<Item itemsPerPage={8}/>}></Route>
           <Route path={'trello'} element={<Trello/>}></Route>
        </Routes>
    );
}

export default App;
