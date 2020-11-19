import './App.css';
import routes from './routes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
// import Auth from './Components/Auth/Auth';
// import Reviews from './Components/Reviews/Reviews';
// import Profile from './Components/Profile/Profile';
// import About from './Components/About/About';

function App() {
  return (
    <section className="App">
        <Header />
        {routes}
        <Footer />
    </section>
  );
}

export default App;
