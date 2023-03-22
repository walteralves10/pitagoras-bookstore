import { Layout } from "antd";
import { useEffect, useState } from "react";
import * as dbBooks from "./../infra/books";

import CardBooks from "../components/card-books";
import FooterBooks from "../components/footer-books";
import HeaderBooks from "../components/header-books";

const { Content } = Layout;

const Ecommerce = () => {

    const [books, setBooks] = useState();

    useEffect(() => {
        dbBooks.get("./bookstore.json").then(res => {
            
            setBooks(res);

        });
    }, []);

    return (
        <Layout>
            {/* Header */}
            <HeaderBooks />

            <Content style={{ padding: "1%" }}>

                {/* Card de Livros */}
                <CardBooks books={books} />

            </Content>

            {/* Footer */}
            <FooterBooks />
        </Layout>
    );
}

export default Ecommerce;