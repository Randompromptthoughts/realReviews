import './App.css';
import routes from './routes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import axios from 'axios';
// import Auth from './Components/Auth/Auth';
// import Reviews from './Components/Reviews/Reviews';
// import Profile from './Components/Profile/Profile';
// import About from './Components/About/About';

// create an interceptor for adding auth to the requests.
axios.interceptors.request.use(
  config => {
      // only attempt to add token header if one is set
      let token = localStorage.getItem("token")
      if (token) {
          return {
              ...config,
              headers: {
                  Authorization: token
              }
          };
      }

      return {...config}
  },
  error => Promise.reject(error)
);

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
