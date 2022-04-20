import './App.scss'
import Sidebar from './components/Sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators  } from 'redux';
import { actionCreators } from './state/index';

function App() {
  const  state = useSelector(state => state)
  const dispatch = useDispatch();

  const ac = bindActionCreators(actionCreators, dispatch);

  console.log(ac);

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
