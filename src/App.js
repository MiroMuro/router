import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function Home() {
  return <h2>This is home page</h2>;
}

function About() {
  return <h2>This is about page</h2>;
}

function Contact() {
  return <h2>This is contact page</h2>;
}
function App() {
  return (
    <div className="App">
      <h1>Welcome to React router</h1>
      <BrowserRouter>
        <Link to="/">Home  </Link>{''}
        <Link to="/about">About  </Link>{''}
        <Link to="/contact">Contact</Link>{''}
      <Routes>
        <Route path="about/" element={<About />} />
        <Route path="/" element={<Home />}/>
        <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
