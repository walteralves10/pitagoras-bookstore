import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main";
import Contact from "./contact";

const RouteScreen = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )

}

export default RouteScreen;