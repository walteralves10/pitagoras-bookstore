import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main";
import Contact from "./contact";
import DetailsBooks from "./detailsBooks";
import Dashboard from "./admin/dashboard";
import Books from "./admin/books";
import PublishingCompany from "./admin/publishing-company";
import Authors from "./admin/authors";
import Stocks from "./admin/stocks";
import Sales from "./admin/sales";

const RouteScreen = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/detailsBooks" element={<DetailsBooks/>} />
                
                <Route path="/admin" element={<Dashboard />} />
                
                <Route path="/admin/livros" element={<Books />} />
                <Route path="/admin/editores" element={<PublishingCompany />} />
                <Route path="/admin/autores" element={<Authors />} />
                <Route path="/admin/estoques" element={<Stocks />} />
                <Route path="/admin/vendas" element={<Sales />} />
            </Routes>
        </BrowserRouter>
    )

}

export default RouteScreen;