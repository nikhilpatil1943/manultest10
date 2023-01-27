import { BrowserRouter,Route, Routes} from "react-router-dom"

import './App.css';
import Footer from "./Components/Common/Footer";
import Home from "./Pages/Home";
import NavBar from './Components/Common/Nav';
import Services from "./Pages/Services";
import Blog1 from "./Pages/Blogs/Blog";
import Blog2 from "./Pages/Blogs/Blog2";

import Pricing from "./Pages/Pricing";
import Error from "./Pages/Error";


const App = ()=>{
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
        
            {/* Routes */}
        <Routes>
            <Route index path = "/" element={<Home/>}/>
            <Route path = "/services" element={<Services/>}/>
            <Route path = "/blog1" element={<Blog1/>}/>
            <Route path = "/blog2" element={<Blog2/>}/>
            
            <Route path = "/pricing" element={<Pricing/>}/>
            <Route path = "*" element={<Error/>}/>
        </Routes>

          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
