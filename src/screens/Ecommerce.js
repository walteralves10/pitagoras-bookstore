// import './../App.css';
import { Layout, Card, Row, Col } from "antd";

const { Header, Footer, Content } = Layout;
const { Meta } = Card;

const Ecommerce = () => {

    return (
        <Layout>
            <Header style={{ padding: 0, background: "green", color: "white" }}>
                
                    <h2 style={{margin:'auto'}}>Pitágoras</h2>
                
            </Header>

            <Content style={{ padding: '1%' }}>
                <Row>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ marginTop: '5%', padding: '10%', margin: '5%' }}
                            cover={<img alt="example" src="https://m.media-amazon.com/images/I/515Yp+joOcL._SY344_BO1,204,203,200_.jpg" />}
                        >
                            <Meta title="O Espirito do Guerreiro" description="Editora Pinsky Ltda,Black Irish Entertainment LLC" />
                            <h3> R$ 44,00 </h3>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ marginTop: '5%', padding: '10%', margin: '5%' }}
                            cover={<img alt="example" src="https://m.media-amazon.com/images/I/515Yp+joOcL._SY344_BO1,204,203,200_.jpg" />}
                        >
                            <Meta title="O Espirito do Guerreiro" description="Editora Pinsky Ltda,Black Irish Entertainment LLC" />
                            <h3> R$ 44,00 </h3>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ marginTop: '5%', padding: '10%', margin: '5%' }}
                            cover={<img alt="example" src="https://m.media-amazon.com/images/I/515Yp+joOcL._SY344_BO1,204,203,200_.jpg" />}
                        >
                            <Meta title="O Espirito do Guerreiro" description="Editora Pinsky Ltda,Black Irish Entertainment LLC" />
                            <h3> R$ 44,00 </h3>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ marginTop: '5%', padding: '10%', margin: '5%' }}
                            cover={<img alt="example" src="https://m.media-amazon.com/images/I/515Yp+joOcL._SY344_BO1,204,203,200_.jpg" />}
                        >
                            <Meta title="O Espirito do Guerreiro" description="Editora Pinsky Ltda,Black Irish Entertainment LLC" />
                            <h3> R$ 44,00 </h3>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ marginTop: '5%', padding: '10%', margin: '5%' }}
                            cover={<img alt="example" src="https://m.media-amazon.com/images/I/515Yp+joOcL._SY344_BO1,204,203,200_.jpg" />}
                        >
                            <Meta title="O Espirito do Guerreiro" description="Editora Pinsky Ltda,Black Irish Entertainment LLC" />
                            <h3> R$ 44,00 </h3>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ marginTop: '5%', padding: '10%', margin: '5%' }}
                            cover={<img alt="example" src="https://m.media-amazon.com/images/I/515Yp+joOcL._SY344_BO1,204,203,200_.jpg" />}
                        >
                            <Meta title="O Espirito do Guerreiro" description="Editora Pinsky Ltda,Black Irish Entertainment LLC" />
                            <h3> R$ 44,00 </h3>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ marginTop: '5%', padding: '10%', margin: '5%' }}
                            cover={<img alt="example" src="https://m.media-amazon.com/images/I/515Yp+joOcL._SY344_BO1,204,203,200_.jpg" />}
                        >
                            <Meta title="O Espirito do Guerreiro" description="Editora Pinsky Ltda,Black Irish Entertainment LLC" />
                            <h3> R$ 44,00 </h3>
                        </Card>
                    </Col>
                </Row>
            </Content>

            <Footer style={{ textAlign: 'center', background: 'green', color: "white" }}>Pitágoras ©2023</Footer>
        </Layout>
    );
}

export default Ecommerce;