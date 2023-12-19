import './App.css';
import { BrowserRouter} from 'react-router-dom'
import Router from './Routes/Router';
import PieChart from './Charts/Pie';


function App() {
  return (
    <>

    <BrowserRouter >
    <Router />
    </BrowserRouter>
    {/* <PieChart /> */}
    </>
  );
}

export default App;
