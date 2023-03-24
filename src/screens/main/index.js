import { Button, Layout, Pagination } from "antd";
import { useEffect, useState } from "react";

import * as dbBooks from "../../infra/books";

import CardBooks from "../../components/card-books";
import FooterBooks from "../../components/footer-books";
import HeaderBooks from "../../components/header-books";

const { Content } = Layout;
const pageSizeInitial = 12;

const Main = () => {

    const [books, setBooks] = useState();
    const [pageElement, setPageElement] = useState({
        totalPage: 0, current: 1, minIndex: 0, maxIndex: 0
    });

    useEffect(() => {
        dbBooks.get("./bookstore.json").then(res => {
            setBooks(res);
            setPageElement({
                //totalPage: res?.catalogo.length / pageSizeInitial,
                current: 1,
                minIndex: 0,
                maxIndex: pageSizeInitial
            })
        });
    }, []);

    const handleChangePage = (page, pageSize) => {
        
        setPageElement({
            current: page,
            minIndex: (page - 1) * pageSize,
            maxIndex: page * pageSize,
        })
    }

    const sumPageSize = (page) => {
        return pageElement.maxIndex + page;
    };

    const onClick = () => {
        setPageElement({
            minIndex:0,
            maxIndex: sumPageSize(12)
        });
    };

    return (<>
        {/* style={{ background:"#F5DBAA" }} */}
        {/* Header */}
        <HeaderBooks />
        <Layout >

            <Content style={{ padding: "1%" }}>

                {/* Card de Livros */}
                <CardBooks books={books} pageElement={pageElement} />

            </Content>

            <Button onClick={onClick}>
                Carregar mais...
            </Button>

            <Pagination 
                style={{ alignSelf:"end", marginRight:"2%", marginBottom:"2%" }}
                current={pageElement?.current}
                total={books?.catalogo.length}
                onChange={handleChangePage}
            />

        </Layout>
        {/* Footer */}
        <FooterBooks />
    </>);
}

export default Main;