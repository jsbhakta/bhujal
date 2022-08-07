
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import BasePage from "./components/BasePage/BasePage";
//import Footer from "./Footer/Footer";

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<BasePage />}>
           <Route index element={<Home />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/about" element={<About />} />
           <Route path="*" element={<NotFound />} />
        </Route>
       </Routes>
      </BrowserRouter>
  );
}

export default App;
