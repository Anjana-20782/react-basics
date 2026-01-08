import {Link} from "react-router-dom"

const Home = () => {
  return (
   <div>
     <h2>Home</h2>

     {/* Link between pages */}
     <Link to="/about">Go to About</Link>
   </div>
  )
}

export default Home