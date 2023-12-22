import logo from './logo.svg';
import './App.css';
import {Navbar, ProjectionTable, DataTable, Chart} from './components'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg"> <Navbar/> </div>
      <div className="body"> <Chart/><ProjectionTable/></div>
    </div>
  );
}

export default App;
