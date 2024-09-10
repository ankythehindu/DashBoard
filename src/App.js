import './App.css'
import Sidebar from './Component/Sidebar/Sidebar.jsx';
import MainDash from './Component/MainDash/MainDash.jsx'
import RightSide from './Component/RightSide/RightSide.jsx';
function App() {
  return (
    <div className="App">
       <div className='AppGlass'>
       <Sidebar/>
        <MainDash/>
        <RightSide/>
      
       </div>
    </div>
  );
}

export default App;
