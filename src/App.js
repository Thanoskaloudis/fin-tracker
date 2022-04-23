import './App.scss'
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboad/Dashboard';

function App() {
  return (
    <div className="app">
      <div className="app-glass">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
