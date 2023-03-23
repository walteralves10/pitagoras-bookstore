import { ConfigProvider } from 'antd';
import pt_BR from 'antd/locale/pt_BR';
import RouteScreen from './screens/RouteScreen';


function App() {
  return (
    <ConfigProvider locale={pt_BR}>
      <RouteScreen />
    </ConfigProvider>
  );
}

export default App;
