import { Layout, Menu } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";
import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const { Header } = Layout;

const items = [
    {
        label:  (<Link to="/contact">Fale conosco</Link>),//"Fale conosco",
        key: "contact",
        icon: <WhatsAppOutlined />,
    }
];

const HeaderBooks = (props) => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <Header className="header" style={{ padding: 0, background: "white", display: "flex", justifyContent: "space-between", backgroundColor: "#004029" }}>

            <div className="logo" style={{ marginLeft: "3%", display: "flex" }}>
                <Link style={{ color: "#FFF", fontWeight: "bold" }} to="/">
                    <span>Livraria Pitágoras</span>
                </Link>
            </div>

            <Menu
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="menu-header"
                mode="horizontal"
                onClick={props.onclick}
                items={items}
                style={
                    {
                        display: "flex",
                        width: "150px",
                        background: "#004029",
                        color: "#FFF",
                        borderBottom: isHover ? "5px solid #FFF" : "none"
                    }
                }
            >
            </Menu>

        </Header>
    )
}

export default HeaderBooks;