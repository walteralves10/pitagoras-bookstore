import { ConfigProvider } from 'antd';
import pt_BR from 'antd/locale/pt_BR';
import Main from './screens/main';
import Contact from './screens/contact';

function App() {
  return (
    <ConfigProvider locale={pt_BR}>
      {/* <Contact /> */}
      <Main />
    </ConfigProvider>
  );
}

export default App;
