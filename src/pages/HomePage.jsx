import { Link } from "react-router"

const HomePage = () => {
  return (
    <div>
        <Link to="/logout" className="nav-link active" > <span style={{ fontSize: "17px"}}>Logout</span></Link>
    </div>
  )
}

export default HomePage
