import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/HomeAbout.jsx/Home"
import About from "./components/HomeAbout.jsx/About"
import Dashboard from "./components/NestedRoutes/Dashboard"
import Settings from "./components/NestedRoutes/Settings"
import Login from "./components/RedirectPage/Login"
import Protected from "./components/RedirectPage/Protected"
import User from "./components/DynamicRouteParameter/User"

function App(){

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<Protected />} />
         <Route path="/user/:id" element={<User />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;