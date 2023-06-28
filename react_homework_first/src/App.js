import './App.css';
import Header from './componets/Header.jsx'
import LeftSidebar from './componets/LeftSidebar.jsx'
import MainContainer from './componets/MainContainer.jsx';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='content'>
        <LeftSidebar />
        <MainContainer />
        </div>
    </div>
  );
}

export default App;
