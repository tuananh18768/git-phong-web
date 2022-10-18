import 'antd/dist/antd.css';
import AgentManagement from './components/Admin/AgentManagement';
import LocalityManagement from './components/Admin/Locality/LocalityManagement';
import Login from './components/Agent/Login';
import OrderManagemet from './components/Agent/OrderManagemet';


import ShipperManagement from './components/Agent/ShipperManagement'
import SimManagement from './components/Agent/SimManagement';
import DeliveryHistory from './components/Shipper/DeliveryHistory';
import DetailOfOrder from './components/Shipper/DetailOfOrder';


function App() {
  return (
    <div className="App">
      <DetailOfOrder/>
    </div>
  );
}

export default App;
