import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MovieGrid from './Components/MovieGrid';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <MovieGrid></MovieGrid>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
