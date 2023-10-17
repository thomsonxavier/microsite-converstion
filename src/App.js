import Nav from "./components/Nav";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Insights from "./pages/Insights";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Podcast from "./pages/Podcast";






function App() {
  return (

    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Insights" element={<Insights/>} />
      <Route path="/Events" element={<Events/>} />
      <Route path="/Podcast" element={<Podcast/>}/>
    </Routes>
    </BrowserRouter>



  );
}

export default App;
