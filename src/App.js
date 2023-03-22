import { ConfigProvider } from 'antd';
import pt_BR from 'antd/locale/pt_BR';
import Main from './screens/main';

function App() {
  return (
    <ConfigProvider locale={pt_BR}>
      <Main />
    </ConfigProvider>
  );
}

export default App;
