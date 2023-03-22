import { Layout, Menu } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";

const { Header } = Layout;

const items = [
    {
        label: "Fale conosco",
        key: "contact",
        icon: <WhatsAppOutlined />
    }
];

const HeaderBooks = () => {

    return (
        <Header className="header" style={{ padding: 0, background: "white", display: "flex", justifyContent: "space-between" }}>

            <div className="logo" style={{ marginLeft: "3%", display: "flex" }}>
                <a href="/" style={{ color: "#004029", fontWeight: "bold" }}>
                    <span>Livraria Pitágoras</span>
                </a>
            </div>

            <Menu style={{ display: "flex", width: "150px" }} mode="horizontal" items={items}></Menu>

        </Header>
    )
}

export default HeaderBooks;