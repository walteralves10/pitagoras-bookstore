import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main";
import Contact from "./contact";
import DetailsBooks from "./detailsBooks";

const RouteScreen = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/detailsBooks" element={<DetailsBooks/>} />
            </Routes>
        </BrowserRouter>
    )

}

export default RouteScreen;