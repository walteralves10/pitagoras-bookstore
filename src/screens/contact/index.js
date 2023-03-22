import { Layout } from "antd";

import FooterBooks from "../../components/footer-books";
import HeaderBooks from "../../components/header-books";

const { Content } = Layout;

const Contact = () => {

    return (
        <Layout>
        {/* Header */}
        <HeaderBooks />

        <Content style={{ padding: "1%" }}>

            {/* Entrar em contato/ redes socias e etc */}
            <p>Contact</p>

        </Content>

        {/* Footer */}
        <FooterBooks />
    </Layout>
    )
}

export default Contact;