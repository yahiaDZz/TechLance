import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Agenda from "./Components/Agenda";
import FAQ from "./Components/FAQ";
import Jumobtron from "./Components/Jumobtron";
import Nav from "./Components/Nav";
import Speakers from "./Components/Speakers";
import Us from "./Components/Us";
function App() {
  return (
    <Router>
      <div>
        <Nav/>
      <Routes>
      <Route path="/" element={<Jumobtron/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="us" element={<Us/>}/>
      <Route path="speakers" element={<Speakers/>}/>
      <Route path="faq" element={<FAQ/>}/>
      <Route path="agenda" element={<Agenda/>}/>
      </Routes>
      </div>
     </Router>
  );
}
export default App;
