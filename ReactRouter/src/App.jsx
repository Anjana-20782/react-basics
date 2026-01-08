import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/HomeAbout.jsx/Home"
import About from "./components/HomeAbout.jsx/About"
import Dashboard from "./components/NestedRoutes/Dashboard"
import Settings from "./components/NestedRoutes/Settings"

function App(){

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="settings" element={<Settings />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;