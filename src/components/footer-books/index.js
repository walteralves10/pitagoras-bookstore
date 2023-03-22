import { Layout } from "antd";

const { Footer } = Layout;

const FooterBooks = () => {

    return (
        <Footer
            style={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "flex-end", 
                background: "#004029", 
                color: "white", 
                height: "300px" 
            }}
        >
            <span>Pitágoras ©2023</span>
        </Footer>
    )
};

export default FooterBooks;