import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/HomeAbout.jsx/Home"
import About from "./components/HomeAbout.jsx/About"

function App(){

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;