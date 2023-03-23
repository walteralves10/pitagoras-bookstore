import { Layout, Pagination } from "antd";
import { useEffect, useState } from "react";

import * as dbBooks from "../../infra/books";

import CardBooks from "../../components/card-books";
import FooterBooks from "../../components/footer-books";
import HeaderBooks from "../../components/header-books";

const { Content } = Layout;
const pageSize = 10;

const Main = () => {

    const [books, setBooks] = useState();
    const [pageElement, setPageElement] = useState({
        totalPage: 0, current:1, minIndex:0, maxIndex:0
    });

    useEffect(() => {
        dbBooks.get("./bookstore.json").then(res => { 
            setBooks(res);
            setPageElement({
                totalPage: res?.catalogo.length / pageSize,
                current:1,
                minIndex: 0,
                maxIndex: pageSize
            })
        });
    }, []);

    const handleChangePage = (page) => {
        //console.log(page)
        setPageElement({
            current: page,
            minIndex: (page - 1) * pageSize,
            maxIndex: page * pageSize,
        })
    }

    const onClick = (e) => {
        switch (e.key) {
            case 'contact':
                //<Link to='/contact'></Link>
                console.log(pageElement)
                console.log(books)
                break;
        
            default:
                break;
        }
    }

    return (
        <Layout >
            {/* style={{ background:"#F5DBAA" }} */}
            {/* Header */}
            <HeaderBooks onclick={onClick} />

            <Content style={{ padding: "1%" }}>

                {/* Card de Livros */}
                <CardBooks books={books} pageElement={pageElement} />
                <Pagination 
                    //pageSize={pageSize}
                    current={pageElement?.current}
                    total={books?.catalogo.length}
                    onChange={handleChangePage}

                />

            </Content>

            {/* Footer */}
            <FooterBooks />
        </Layout>
    );
}

export default Main;