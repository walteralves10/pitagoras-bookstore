import { ConfigProvider } from 'antd';
import pt_BR from 'antd/locale/pt_BR';
import Ecommerce from './screens/Ecommerce';

function App() {
  return (
    <ConfigProvider locale={pt_BR}>
      <Ecommerce />
    </ConfigProvider>
  );
}

export default App;
