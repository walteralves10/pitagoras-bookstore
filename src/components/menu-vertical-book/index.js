import { 
    LaptopOutlined, BookOutlined, EditOutlined, AppstoreOutlined,
    AreaChartOutlined
} from '@ant-design/icons'
import { Layout, theme, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Sider } = Layout;

const items = [
    {
      key: `dashboard`,
      label: (<Link to="/admin">Inicio</Link>),
      icon: <LaptopOutlined />
    },
    {
      key: `livro`,
      label: (<Link to="/admin/livros">Livros</Link>),
      icon: <BookOutlined />
    },
    {
      key: `editor`,
      label: (<Link to="/admin/editores">Editores</Link>),
      icon: <EditOutlined />
    },
    {
      key: `autor`,
      label: (<Link to="/admin/autores">Autores</Link>),
      icon: <LaptopOutlined />
    },
    {
      key: `estoque`,
      label: (<Link to="/admin/estoques">Estoque</Link>),
      icon: <AppstoreOutlined />
    },
    {
      key: `venda`,
      label: (<Link to="/admin/vendas">Controle Venda PIX</Link>),
      icon: <AreaChartOutlined />
    },
];

const MenuVerticalBook = (props) => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    
    return (<>
        {/* Side Menu */}
        <Sider
        width={200}
        style={{
            background: colorBgContainer,
        }}
        >
        <Menu
            mode="inline"
            defaultSelectedKeys={[props.defaultKeys]}
            defaultOpenKeys={[props.defaultKeys]}
            style={{
            height: '100%',
            borderRight: 0,
            }}
            items={items}
        />
        </Sider>
        </>)
}

export default MenuVerticalBook;