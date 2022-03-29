//import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line no-unused-vars
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Adminscreen from './screens/Adminscreen';

function App() {
  return (
    <div className="App">
      <Navbar/>

      {/* <BrowserRouter>
        <Route path='/admin' component={Adminscreen}/>
      </BrowserRouter> */}
      
      <Homescreen/>
    </div>
  );
}

export default App;