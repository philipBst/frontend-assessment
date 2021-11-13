import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Model from "./pages/Model";
import Purchase from "./pages/Purchase";
import Hire from "./pages/Hire";
import News from "./pages/News";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/model" element={<Model />}></Route>
          <Route path="/purchase" element={<Purchase />}></Route>
          <Route path="/hire" element={<Hire />}></Route>
          <Route path="/news" element={<News />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
