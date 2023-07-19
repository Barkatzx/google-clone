import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import SearchResult from "./Components/SearchResultHeader";
import { AppContext } from "./Utilis/ContextApi";

function App() {
    return (
        <AppContext>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route
                        path="/:query/:startIndex"
                        exact
                        element={<SearchResult />}
                    />
                </Routes>
            </BrowserRouter>
        </AppContext>
    );
}

export default App;
