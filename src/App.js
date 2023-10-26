import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='container wrapper'>
        <Header className="header"/>
        <Main className="main"/>
        <Footer className="footer"/>
     </div>
  );
}

export default App;
