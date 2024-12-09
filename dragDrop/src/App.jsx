import { Route, Routes, BrowserRouter } from "react-router";
import Home from "./pages/home";
import Dragdrop from "./pages/Dragdrop"
const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dragdrop" element={<Dragdrop />} />

                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
