import './App.css';
import Navbar from './components/Root/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
