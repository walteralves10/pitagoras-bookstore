import { Layout, Button, Form, Input, Row, Col } from "antd";
import { WhatsAppOutlined, HomeOutlined } from "@ant-design/icons";

import FooterBooks from "../../components/footer-books";
import HeaderBooks from "../../components/header-books";

const { Content } = Layout;

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: "${name} é obrigatório",
    types: {
        email: "${name} invalido!",
        number: "${name} invalido!",
    }
};
/* eslint-enable no-template-curly-in-string */

const Contact = () => {


    const onFinish = (values) => {
        console.log(values);
    };

    return (<>
        {/* Header */}
        <HeaderBooks />
        <Layout>

            <Content style={{ padding: "1%", marginTop:"5%", marginBottom:"10%" }}>

                {/* Entrar em contato/ redes socias e etc  labelCol={8} wrapperCol={16} */}
                <Row>
                    <Col style={{textAlign:"-webkit-center"}} span={12}>

                        <div style={{ display: "flex", justifyContent:"center" }}>
                            <WhatsAppOutlined style={{ color: "#004029" }} />
                            <h1 style={{ color: "#004029", marginLeft: "5px" }}>Ligue para nós</h1>
                        </div>
                        <h3 style={{ color: "gray" }} >(64) 9 9249-6444</h3>

                        <div style={{ display: "flex", justifyContent:"center" }}>
                            <HomeOutlined style={{ color: "#004029" }} />
                            <h1 style={{ color: "#004029", marginLeft: "5px" }}>Localização</h1>
                        </div>
                        <h3 style={{ color: "gray" }} >R. Ernesto Tito, N° 594 - Qd 03 Lt 16 - B. Vila Baylao</h3>

                        <div style={{ display: "flex", justifyContent:"center" }}>
                            <WhatsAppOutlined style={{ color: "#004029" }} />
                            <h1 style={{ color: "#004029", marginLeft: "5px" }}>Horário Comercial</h1>
                        </div>
                        <h3 style={{ color: "gray" }} >Seg, Qui ... 19h às 22h</h3>

                    </Col>
                    <Col style={{textAlign:"-webkit-center"}} span={12}>

                        <h1 style={{ color: "#004029" }}>Deixe sua Indicação/Sugestão!</h1>

                        <Form onFinish={onFinish} style={{ maxWidth: 600 }} validateMessages={validateMessages}>
                            <Form.Item name={["contact", "name"]} rules={[{ required: true }]}>
                                <Input placeholder="Digite seu Nome" />
                            </Form.Item>
                            <Form.Item name={["contact", "email"]} rules={[{ type: "email", required: true }]}>
                                <Input placeholder="Digite seu E-mail" />
                            </Form.Item>
                            <Form.Item name={["contact", "description"]} >
                                <Input.TextArea style={{ height: "100px" }} placeholder="Deixe sua indicação de livro ou sugestão" />
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit">Enviar</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>

            </Content>

        </Layout>
        {/* Footer */}
        <FooterBooks />
    </>)
}

export default Contact;