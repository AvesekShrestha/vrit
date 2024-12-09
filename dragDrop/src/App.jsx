import { Route, Routes, BrowserRouter } from "react-router";
import Dragdrop from "./pages/Dragdrop"
const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dragdrop />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
