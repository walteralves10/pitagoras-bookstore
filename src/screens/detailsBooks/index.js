import { useEffect, useState } from "react";
import { Layout, Row, Col } from "antd";
import { useLocation } from "react-router-dom";

import FooterBooks from "../../components/footer-books";
import HeaderBooks from "../../components/header-books";

const { Content } = Layout;

const DetailsBooks = () => {

    const location = useLocation();
    const [book, setBook] = useState();

    useEffect(() => {
        getLocation();
    })

    const getLocation = () => {
        let data = location.state.book;
        setBook(data);
    }

    return (
        <>
        
        {/* Header */}
        <HeaderBooks />

        <Layout >

            <Content style={{ marginTop:"5%", marginBottom:"5%", maxWidth: "80%" }}>
                <Row>
                    <Col style={{textAlign:"center", alignSelf:"center"}} span={10}>
                        {/* IMG */}
                        <img style={{ height: "auto", maxWidth: "80%" }} alt="livro" src={book?.img} />
                        
                    </Col>

                    <Col span={14}>
                        {/* Texto */}
                        <div style={{marginLeft:"5%"}}>
                            <h1>{book?.title.split(',')[0]}</h1>
                            <h2>{book?.title.split(',')[1]}</h2>
                            <h3>{book?.category}</h3>
                            <h4>{` Qtd.: ${book?.quantity} - R$${book?.price},00 `}</h4>
                            <h3>Resumo</h3>
                            <p>Os ensinamentos de Confúcio (551-479 a.C.) – tão lidos na China ao 
                                longo do tempo como a Bíblia foi no Ocidente – estão
                                reunidos nos vinte livros que compõem o "Lun yü", 
                                comumente conhecido como "Os analectos". Compilados
                                pelos discípulos de Confúcio, eles consistem num 
                                conjunto de elevados valores éticos que conduzem o
                                homem na busca da excelência moral, a partir do 
                                cultivo de princípios como benevolência, sabedoria 
                                e coragem. Esta edição se baseia na tradução do 
                                chinês para o inglês por D. C. Lau que, juntamente 
                                com um grupo de especialistas, reuniu e analisou os 
                                ensinamentos de Confúncio.
                            </p>
                        </div>
                    </Col>
                </Row>                
            </Content>

        </Layout>

        {/* Footer */}
        <FooterBooks />
    </>
    )
}

export default DetailsBooks;

/*
    <>
        <h1>
        {` 
            ${book?.title} - 
            ${book?.quantity} - ${book?.price} 
            - ${book?.category} - ${book?.img}`
        }
        </h1>
    </>
*/